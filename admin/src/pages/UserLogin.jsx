import { signIn } from '../auth.js';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout, { AuthHero, Field, Check, SecureFooterNote } from '../components/AuthLayout.jsx';

// Employee login ("تسجيل الدخول" — procurement & smart contracts system)
export default function UserLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (username.trim() && password.trim()) { signIn(); navigate('/'); }
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
              name="username"
              label="إسم المستخدم"
              required
              placeholder="ادخل إسم المستخدم"
              value={username}
              onChange={setUsername}
              invalid={submitted && !username.trim()}
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
          <button type="submit" className="btn-primary btn-primary--lg">
            تسجيل الدخول
          </button>
        </form>
        <SecureFooterNote />
      </div>
    </AuthLayout>
  );
}
