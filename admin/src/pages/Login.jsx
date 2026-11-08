import { signIn } from '../auth.js';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout, { AuthHero, Field, Check } from '../components/AuthLayout.jsx';
import { ShieldLockIcon } from '../components/Icons.jsx';

// Admin portal login (design: "Login", Figma node 713:307)
export default function Login() {
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
          pill="بوابة مدير النظام (System Administrator)"
          title="تسجيل الدخول إلى لوحة تحكم المنظومة"
          subtitle="نظام إبرام الموحد لإدارة المشتريات والمنافسات الحكومية. يرجى إدخال بيانات الاعتماد المخصصة للرقابة والتشغيل."
          wide
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
