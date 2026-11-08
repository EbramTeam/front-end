import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthed } from '../auth.js';
import AuthLayout, { AuthHero, Field } from '../components/AuthLayout.jsx';
import { RulesBox, MatchBar, evaluate } from '../components/PasswordRules.jsx';
import { ShieldLockIcon } from '../components/Icons.jsx';
import { FullScreenLoader, Spinner } from '../components/Spinner.jsx';
import { useChangePassword, useCurrentUser, useLogout } from '../hooks/use-auth.js';

// "إنشاء كلمة مرور جديدة" for the first session (temporary password)
export default function FirstLoginPassword() {
  const { user, isLoading } = useCurrentUser();
  const { changePassword, isSaving } = useChangePassword();
  const { logout, isLoggingOut } = useLogout();
  const [temp, setTemp] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const rules = evaluate(password, confirm);
  const valid = temp.trim() && rules.length && rules.upper && rules.digit && rules.special && rules.match;

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (valid) changePassword({ current_password: temp, password, password_confirmation: confirm });
  }

  if (!isAuthed()) return <Navigate to="/login" replace />;
  if (isLoading) return <FullScreenLoader />;
  if (user && !user.must_change_password) return <Navigate to="/" replace />;

  return (
    <AuthLayout>
      <div className="auth-content">
        <AuthHero
          pill="نظام إدارة المشتريات والعقود الذكي"
          title="إنشاء كلمة مرور جديدة"
          subtitle="لأمان حسابك، يجب تغيير كلمة المرور المؤقتة قبل المتابعة إلى بوابة العمليات."
          wide
        />
        <form className="auth-card auth-card--tight" onSubmit={onSubmit} noValidate>
          <div className="mandatory-notice">
            <ShieldLockIcon size={20} className="mandatory-notice__icon" />
            <div>
              <h2>إجراء أمني إلزامي للجلسة الأولى</h2>
              <p>تنتهي صلاحية كلمة المرور المؤقتة بعد التسجيل الأول. يجب تعيين كلمة مرور قوية تلبي الضوابط المؤسسية المعتمدة.</p>
            </div>
          </div>
          <Field
            name="temp-password"
            label="أدخل كلمة المرور المؤقتة"
            required
            type="password"
            placeholder="ادخل كلمة المرور"
            value={temp}
            onChange={setTemp}
            invalid={submitted && !temp.trim()}
          />
          <Field
            name="new-password"
            label="كلمة المرور الجديدة"
            required
            tight
            type="password"
            placeholder="ادخل كلمة المرور"
            value={password}
            onChange={setPassword}
            invalid={submitted && !password}
          />
          <RulesBox rules={rules} />
          <Field
            name="confirm-password"
            label="تأكيد كلمة المرور"
            required
            type="password"
            placeholder="ادخل كلمة المرور"
            value={confirm}
            onChange={setConfirm}
            invalid={submitted && !rules.match}
          />
          <MatchBar matched={rules.match} />
          <button type="submit" className="btn-primary btn-primary--lg btn-gap-top" disabled={isSaving}>
            {isSaving && <Spinner size="sm" tone="onPrimary" />}
            حفظ والمتابعة إلى المنظومة
          </button>
          <button type="button" className="btn-outline btn-outline--lg" disabled={isLoggingOut} onClick={logout}>
            تسجيل الخروج والعودة لاحقا
          </button>
        </form>
      </div>
    </AuthLayout>
  );
}
