import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout, { AuthHero, Field, Check, SecureFooterNote } from '../components/AuthLayout.jsx';
import { Spinner } from '../components/Spinner.jsx';
import { useLogin } from '../hooks/use-auth.js';

// Employee login ("تسجيل الدخول" — procurement & smart contracts system)
export default function UserLogin() {
  const { login, isSubmitting } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (email.trim() && password.trim()) login({ email: email.trim(), password, remember });
  }

  return (
    <AuthLayout>
      <div className="auth-content">
        <AuthHero
          pill="نظام إدارة المشتريات والعقود الذكي"
          title="تسجيل الدخول"
          subtitle="سجّل الدخول للوصول إلى نظام إدارة المشتريات"
        />
        <form className="auth-card" onSubmit={onSubmit} noValidate>
          <div className="auth-fields auth-fields--login">
            <Field
              name="email"
              label="البريد الإلكتروني"
              required
              type="email"
              placeholder="ادخل البريد الإلكتروني"
              value={email}
              onChange={setEmail}
              invalid={submitted && !email.trim()}
            />
            <Field
              name="password"
              label="كلمة المرور"
              required
              type="password"
              placeholder="ادخل كلمة المرور"
              value={password}
              onChange={setPassword}
              invalid={submitted && !password.trim()}
            />
          </div>
          <div className="auth-options">
            <Check checked={remember} onChange={setRemember}>
              تذكرني
            </Check>
            <Link to="/forgot-password" className="auth-link">
              هل نسيت كلمة المرور؟
            </Link>
          </div>
          <button type="submit" className="btn-primary btn-primary--lg" disabled={isSubmitting}>
            {isSubmitting && <Spinner size="sm" tone="onPrimary" />}
            تسجيل الدخول
          </button>
        </form>
        <SecureFooterNote />
      </div>
    </AuthLayout>
  );
}
