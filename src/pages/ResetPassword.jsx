import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import AuthLayout, { AuthHero, Field } from '../components/AuthLayout.jsx';
import { RulesBox, MatchBar, evaluate } from '../components/PasswordRules.jsx';
import { ShieldLockIcon } from '../components/Icons.jsx';
import { Spinner } from '../components/Spinner.jsx';
import { useResetPassword } from '../hooks/use-auth.js';

// الصفحة بتنفتح من رابط الإيميل: /reset-password?token=...&email=...
export default function ResetPassword() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const token = params.get('token') ?? '';
  const email = params.get('email') ?? '';
  const linkValid = Boolean(token && email);

  const { resetPassword, isSaving } = useResetPassword();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const rules = evaluate(password, confirm);
  const valid = rules.length && rules.upper && rules.digit && rules.special && rules.match;

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (valid && linkValid && !isSaving) {
      resetPassword({ token, email, password, password_confirmation: confirm });
    }
  }

  // فتح الصفحة بدون رابط الإيميل: ما في توكن، فبنوجّهه يطلب رابط
  if (!linkValid) {
    return (
      <AuthLayout>
        <div className="auth-content">
          <AuthHero
            pill="نظام إدارة المشتريات والعقود الذكي"
            title="رابط غير صالح"
            subtitle="افتح هذه الصفحة من الرابط الذي وصلك على البريد الإلكتروني، أو اطلب رابطاً جديداً."
            wide
          />
          <div className="auth-card">
            <button type="button" className="btn-primary btn-primary--lg" onClick={() => navigate('/forgot-password')}>
              طلب رابط جديد
            </button>
            <button type="button" className="btn-outline btn-outline--lg" onClick={() => navigate('/user-login')}>
              العودة إلى تسجيل الدخول
            </button>
          </div>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout>
      <div className="auth-content">
        <AuthHero
          pill="نظام إدارة المشتريات والعقود الذكي"
          title="إنشاء كلمة مرور جديدة"
          subtitle="يرجى تعيين كلمة مرور قوية ومطابقة للمعايير الأمنية للوصول إلى حسابك في المنظومة."
          wide
        />

        <form className="auth-card auth-card--tight" onSubmit={onSubmit} noValidate>
          <div className="mandatory-notice">
            <ShieldLockIcon size={20} className="mandatory-notice__icon" />
            <div>
              <h2>إعادة تعيين كلمة المرور</h2>
              <p dir="ltr" style={{ textAlign: 'right' }}>{email}</p>
            </div>
          </div>

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
            تحديث و حفظ كلمة المرور
          </button>
          <button type="button" className="btn-outline btn-outline--lg" onClick={() => navigate('/user-login')}>
            العودة إلى تسجيل الدخول
          </button>
        </form>
      </div>
    </AuthLayout>
  );
}
