import { useState } from 'react';

// كلمة المرور المؤقتة تُعرض مرة واحدة ولا تُحفظ في أي مكان
export default function TemporaryPasswordDialog({ password, onClose }) {
  const [copied, setCopied] = useState(false);

  function copy() {
    try {
      navigator.clipboard?.writeText(password);
    } catch (e) {}
    setCopied(true);
  }

  return (
    <div className="pw-dialog" role="dialog" aria-modal="true" aria-label="كلمة المرور المؤقتة">
      <div className="pw-dialog__card">
        <h2>كلمة المرور المؤقتة</h2>
        <p>تظهر كلمة المرور هذه مرة واحدة فقط. انسخها وسلّمها للمستخدم قبل إغلاق النافذة.</p>
        <bdi className="pw-dialog__value" dir="ltr">{password}</bdi>
        <div className="pw-dialog__btns">
          <button type="button" className="btn-outline" onClick={copy}>{copied ? 'تم النسخ' : 'نسخ'}</button>
          <button type="button" className="btn-primary" onClick={onClose}>إغلاق</button>
        </div>
      </div>
    </div>
  );
}
