import { useEffect, useRef, useState } from 'react';
import { CloseCircleIcon, ChevronDownIcon } from './Icons.jsx';
import { ACTION_TYPES, UNIT_OPTIONS } from '../rolesData.js';

export default function AddPermissionModal({ onClose, onCreate }) {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [unit, setUnit] = useState('');
  const [action, setAction] = useState('');
  const [tried, setTried] = useState(false);
  const first = useRef(null);

  useEffect(() => {
    first.current && first.current.focus();
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const bad = {
    name: !name.trim(),
    desc: !desc.trim(),
    action: !action,
  };
  const submit = (e) => {
    e.preventDefault();
    setTried(true);
    if (bad.name || bad.desc || bad.action) return;
    onCreate({ name: name.trim(), desc: desc.trim(), unit: unit || UNIT_OPTIONS[0], action });
  };

  return (
    <div className="modal-back" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <form className="pmodal" role="dialog" aria-modal="true" aria-labelledby="pm-title" onSubmit={submit} noValidate>
        <header className="pmodal__head">
          <div>
            <h2 id="pm-title">إضافة صلاحية جديدة</h2>
            <p>عرّف صلاحية جديدة وحدد الوحدة والإجراء المرتبطين بها</p>
          </div>
          <button type="button" className="pmodal__close" aria-label="إغلاق" onClick={onClose}>
            <CloseCircleIcon size={26} />
          </button>
        </header>

        <div className="pmodal__body">
          <label className="pm-label">
            اسم الصلاحية <b>*</b>
          </label>
          <input
            ref={first}
            className={'pm-input' + (tried && bad.name ? ' is-bad' : '')}
            placeholder="تصدير تقارير المشتريات"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="pm-help">أدخل اسماً وظيفياً دقيقاً يصف الإجراء في واجهة لوحة التحكم.</div>

          <label className="pm-label">
            وصف الصلاحية <b>*</b>
          </label>
          <textarea
            className={'pm-area' + (tried && bad.desc ? ' is-bad' : '')}
            placeholder="السماح للمستخدم بتصدير تقارير المشتريات والمنافسات."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          <label className="pm-label">الوحدة التابعة لها</label>
          <div className="pm-select">
            <select value={unit} onChange={(e) => setUnit(e.target.value)}>
              <option value="">{UNIT_OPTIONS[0]}</option>
              {UNIT_OPTIONS.slice(1).map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </select>
            <ChevronDownIcon size={20} className="pm-select__chev" />
          </div>

          <div className="pm-actions-head">
            <label className="pm-label">
              نوع الإجراء <b>*</b>
            </label>
            <span>طبيعة العملية البرمجية</span>
          </div>
          <div className={'pm-actions' + (tried && bad.action ? ' is-bad' : '')} role="radiogroup" aria-label="نوع الإجراء">
            {ACTION_TYPES.map((a) => (
              <button
                key={a.key}
                type="button"
                role="radio"
                aria-checked={action === a.key}
                className={'pm-chip' + (a.wide ? ' pm-chip--wide' : '') + (action === a.key ? ' is-on' : '')}
                onClick={() => setAction(a.key)}
              >
                {a.en ? (
                  <strong>
                    <span dir="ltr">{a.en}</span> {a.ar}
                  </strong>
                ) : (
                  <strong>{a.ar}</strong>
                )}
                {!a.en && <small>{a.key}</small>}
              </button>
            ))}
          </div>
        </div>

        <footer className="pmodal__foot">
          <button type="button" className="btn-outline pm-cancel" onClick={onClose}>
            إلغاء
          </button>
          <button type="submit" className="btn-primary pm-submit">
            إنشاء الصلاحيات
          </button>
        </footer>
      </form>
    </div>
  );
}
