import { useEffect, useRef, useState } from 'react';
import { CloseCircleIcon, PauseCircleIcon, UserRefreshIcon, ShieldIcon } from './Icons.jsx';

export function VendorStatusModal({ mode, vendor, onClose, onConfirm }) {
  const off = mode === 'deactivate';
  const [reason, setReason] = useState('');
  const [tried, setTried] = useState(false);
  const ta = useRef(null);
  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', esc);
    return () => document.removeEventListener('keydown', esc);
  }, [onClose]);
  const bad = tried && !reason.trim();
  const submit = (e) => {
    e.preventDefault();
    setTried(true);
    if (reason.trim()) onConfirm(reason.trim());
  };
  return (
    <div className="modal-back" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <form className="pmodal vmodal" role="dialog" aria-modal="true" onSubmit={submit} noValidate>
        <header className="pmodal__head vmodal__head">
          <div className="vmodal__titlebox">
            <span className={'vmodal__icon ' + (off ? 'is-red' : 'is-green')}>
              {off ? <PauseCircleIcon size={24} /> : <UserRefreshIcon size={24} />}
            </span>
            <div>
              <h2>{off ? 'تعطيل المورد؟' : 'إعادة تفعيل المورد؟'}</h2>
              <p>{off ? 'إجراء حوكمة رقابي - نقل إلى السجلات غير النشطة' : 'إجراء حوكمة رقابي - إعادة الكيان إلى سجل الموردين النشطين والمعتمدين'}</p>
            </div>
          </div>
          <button type="button" className="pmodal__close" aria-label="إغلاق" onClick={onClose}>
            <CloseCircleIcon size={26} />
          </button>
        </header>
        <div className="vmodal__body">
          <p className="vmodal__l1">
            سيتم تغيير حالة المورد إلى <b className={off ? 'is-red' : 'is-green'}>{off ? 'غير نشط' : 'نشط'}</b>
          </p>
          <p className="vmodal__l2">
            {off
              ? '. لن يتم حذفه من النظام نهائياً، وستبقى جميع بياناته وسجلاته التعاقدية محفوظة للأرشفة والتدقيق.'
              : 'وسيصبح متاحًا للاستخدام داخل النظام وتلقي دعوات المنافسات الرسمية وإصدار أوامر الشراء فوراً.'}
          </p>
          <div className={'vmodal__note ' + (off ? 'is-blue' : 'is-green')}>
            <ShieldIcon size={16} />
            {off ? (
              <p><b>أثر التعطيل الفوري:</b> يُمنع المورد من تلقي دعوات المنافسات والمشتريات الحكومية، ولا يمكن إضافة عروض أسعار جديدة باسمه حتى تتم إعادة التنشيط بقرار إداري.</p>
            ) : (
              <p><b>الأثر المباشر:</b> سيتم رفع الحظر التعاقدي واستعادة الصلاحيات الكاملة في المنظومة</p>
            )}
          </div>
          <div className="vmodal__vendor">
            <div className="vmodal__vtop">
              <strong>{vendor.name}</strong>
              <em className="vpill-ok"><i />نشط ومؤهل</em>
            </div>
            <span>رمز المورد المرجعي: <bdi dir="ltr">{vendor.id}</bdi></span>
            <span>س.ت: <bdi dir="ltr">{vendor.cr}</bdi></span>
          </div>
          <label className="pm-label">{off ? 'سبب التعطيل' : 'سبب إعادة التفعيل'} <b>*</b></label>
          <textarea
            ref={ta}
            className={'pm-area' + (bad ? ' is-bad' : '')}
            placeholder={off ? 'اكتب سبب تعطيل المورد بالتفصيل ليتم تضمينه في السجل الرقابي وقرار اللجنة...' : 'اكتب سبب إعادة تفعيل المورد بالتفصيل ليتم تضمينه في السجل الرقابي وقرار اللجنة...'}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </div>
        <footer className="pmodal__foot vmodal__foot">
          <button type="button" className="btn-outline vm-cancel" onClick={onClose}>إلغاء</button>
          <button type="submit" className={off ? 'vm-danger' : 'btn-primary vm-ok'}>{off ? 'تعطيل المورد' : 'إعادة تفعيل المورد'}</button>
        </footer>
      </form>
    </div>
  );
}
