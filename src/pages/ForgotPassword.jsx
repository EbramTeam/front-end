import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout, { AuthHero, Field, SecureFooterNote } from '../components/AuthLayout.jsx';
import { ShieldCheckIcon } from '../components/Icons.jsx';

// "استعادة كلمة المرور" — two states in the design: without and with the security note.
export default function ForgotPassword() {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [sent, setSent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (value.trim()) setSent(true);
  }

  return (
    // the design shows "© 2025" in the state without the security note and "© 2026" with it
    <AuthLayout year={sent ? 2026 : 2025}>
      <div className="auth-content">
        <AuthHero
          pill="نظام إدارة المشتريات والعقود الذكي"
          title="استعادة كلمة المرور"
          subtitle="أدخل البريد الإلكتروني أو اسم المستخدم المسجل في المنظومة، وسنرسل لك رابطاً وتعليمات آمنة لإعادة تعيين كلمة المرور."
          wide
        />
        <form className="auth-card" onSubmit={onSubmit} noValidate>
          <div className="auth-fields">
            <Field
              name="identifier"
              label="البريد الإلكتروني أو اسم المستخدم"
              required
              placeholder="ادخل إسم المستخدم"
              value={value}
              onChange={setValue}
              invalid={submitted && !value.trim()}
            />
          </div>
          {sent && (
            <div className="info-bar">
              <ShieldCheckIcon size={16} className="info-bar__icon" />
              <p>
                <strong>ملاحظة أمنية:</strong> سيتم إرسال رابط التعيين فقط إلى العناوين المعتمدة مسبقاً في سجلات جهتك الحكومية أو المنشأة.
              </p>
            </div>
          )}
          <button type="submit" className="btn-primary btn-primary--lg">
            ارسال رابط الإستعادة
          </button>
          <button type="button" className="btn-outline btn-outline--lg" onClick={() => navigate('/login')}>
            العودة لتسجيل الدخول
          </button>
        </form>
        <SecureFooterNote />
      </div>
    </AuthLayout>
  );
}
