import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout, { AuthHero, Field } from '../components/AuthLayout.jsx';
import { RulesBox, MatchBar, evaluate } from '../components/PasswordRules.jsx';

// "إنشاء كلمة مرور جديدة" (opened from the reset link)
export default function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const rules = evaluate(password, confirm);
  const valid = rules.length && rules.upper && rules.digit && rules.special && rules.match;

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (valid) navigate('/login');
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
          <button type="submit" className="btn-primary btn-primary--lg btn-gap-top">
            تحديث و حفظ كلمة المرور
          </button>
          <button type="button" className="btn-outline btn-outline--lg" onClick={() => navigate('/login')}>
            العودة إلى تسجيل الدخول
          </button>
        </form>
      </div>
    </AuthLayout>
  );
}
