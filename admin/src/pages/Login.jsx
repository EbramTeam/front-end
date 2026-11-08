import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout, { AuthHero, Field, Check } from '../components/AuthLayout.jsx';
import { ShieldLockIcon } from '../components/Icons.jsx';
import { Spinner } from '../components/Spinner.jsx';
import { useLogin } from '../hooks/use-auth.js';

// Admin portal login (design: "Login", Figma node 713:307)
export default function Login() {
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
          pill="بوابة مدير النظام (System Administrator)"
          title="تسجيل الدخول إلى لوحة تحكم المنظومة"
          subtitle="نظام إبرام الموحد لإدارة المشتريات والمنافسات الحكومية. يرجى إدخال بيانات الاعتماد المخصصة للرقابة والتشغيل."
          wide
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
          <div className="security-notice">
            <ShieldLockIcon size={14} className="security-notice__icon" />
            <div className="security-notice__body">
              <h2>إشعار أمني رقابي ملزم</h2>
              <p>
                هذه المنصة مخصصة حصرياً للمفوضين رسمياً بإدارة منظومة إبرام. كل عملية دخول أو محاولة مصادقة فاشلة يتم تدوينها ومطابقتها لحظياً مع السجل الجنائي الرقمي وضوابط الهيئة الوطنية للأمن السيبراني.
              </p>
            </div>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
