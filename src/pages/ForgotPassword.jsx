import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout, { AuthHero, Field, SecureFooterNote } from '../components/AuthLayout.jsx';
import { ShieldCheckIcon } from '../components/Icons.jsx';
import { Spinner } from '../components/Spinner.jsx';
import { useForgotPassword } from '../hooks/use-auth.js';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ForgotPassword() {
  const navigate = useNavigate();
  const { sendLink, isSending, isSent } = useForgotPassword();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const emailValid = EMAIL_PATTERN.test(email.trim());

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (emailValid && !isSending) sendLink(email.trim().toLowerCase());
  }

  return (
    <AuthLayout>
      <div className="auth-content">
        <AuthHero
          pill="نظام إدارة المشتريات والعقود الذكي"
          title="استعادة كلمة المرور"
          subtitle="أدخل البريد الإلكتروني المسجل في المنظومة، وسنرسل لك رابطاً آمناً لإعادة تعيين كلمة المرور."
          wide
        />

        <form className="auth-card" onSubmit={onSubmit} noValidate>
          <div className="auth-fields">
            <Field
              name="email"
              type="email"
              label="البريد الإلكتروني"
              required
              placeholder="name@example.com"
              value={email}
              onChange={setEmail}
              invalid={submitted && !emailValid}
            />
          </div>

          {isSent && (
            <div className="info-bar">
              <ShieldCheckIcon size={16} className="info-bar__icon" />
              <p>
                <strong>تم الإرسال:</strong> إذا كان هذا البريد مسجلاً في المنظومة، سيصلك رابط لإعادة تعيين كلمة المرور.
                الرابط صالح لمدة 60 دقيقة ويُستعمل مرة واحدة. تحقق من صندوق الوارد والبريد المزعج.
              </p>
            </div>
          )}

          <button type="submit" className="btn-primary btn-primary--lg" disabled={isSending}>
            {isSending && <Spinner size="sm" tone="onPrimary" />}
            {isSent ? 'إعادة إرسال الرابط' : 'ارسال رابط الإستعادة'}
          </button>
          <button type="button" className="btn-outline btn-outline--lg" onClick={() => navigate('/user-login')}>
            العودة لتسجيل الدخول
          </button>
        </form>

        <SecureFooterNote />
      </div>
    </AuthLayout>
  );
}
