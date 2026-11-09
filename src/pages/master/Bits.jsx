import { useEffect, useRef, useState } from 'react';
import { PencilIcon, LockIcon, DotsVerticalIcon, SearchIcon, RefreshIcon, ChevronDownIcon, CircleXIcon } from '../../components/Icons.jsx';

export function PageHead({ title, sub, tag, inline, children }) {
  return (
    <div className="page-head mhead0">
      <div>
        {inline ? <div className="mtitlerow"><h1 className="page-title">{title}</h1>{tag}</div> : <h1 className="page-title">{title}</h1>}
        <p className="page-subtitle">{sub}</p>
      </div>
      <div className="page-head__actions">
        {!inline && tag}
        {children}
      </div>
    </div>
  );
}

export function Stat({ value, unit, label, pill, pillClass, icon, tint }) {
  return (
    <div className="vstat">
      <div className="vstat__text">
        <div className="vstat__row"><strong>{value}</strong>{unit && <em>{unit}</em>}</div>
        <span>{label}</span>
        {pill && <small className={pillClass}>{pill}</small>}
      </div>
      <span className="vstat__icon" style={{ background: tint.bg, color: tint.fg }}>{icon}</span>
    </div>
  );
}

export function Sel({ label, prefix, value, options, onChange }) {
  return (
    <label className="vsel">
      <select value={value} onChange={(e) => onChange(e.target.value)} aria-label={label}>
        {options.map((o) => <option key={o} value={o}>{prefix + o}</option>)}
      </select>
      <span className="vsel__txt">{prefix + value}</span>
      <ChevronDownIcon size={20} className="vsel__chev" />
    </label>
  );
}

export function FilterCard({ placeholder, f, setF, defaults, statusOpts, secondLabel, secondOpts }) {
  const set = (k, v) => setF((p) => ({ ...p, [k]: v }));
  return (
    <section className="vfilters">
      <div className="vfilters__row">
        <label className="vsearch">
          <SearchIcon size={22} />
          <input value={f.q} onChange={(e) => set('q', e.target.value)} placeholder={placeholder} aria-label="بحث" />
        </label>
        <Sel label="الحالة" prefix="الحالة: " value={f.status} options={statusOpts} onChange={(v) => set('status', v)} />
        <Sel label={secondLabel} prefix={secondLabel + ': '} value={f.second} options={secondOpts} onChange={(v) => set('second', v)} />
        <button type="button" className="vrefresh" aria-label="تحديث" onClick={() => setF(defaults)}><RefreshIcon size={20} /></button>
      </div>
      <div className="vchips">
        <span className="vchips__label">الفلاتر المطبقة:</span>
        <button type="button" className="vchip" onClick={() => set('status', defaults.status)}><CircleXIcon size={16} />الحالة: {f.status}</button>
        <button type="button" className="vchip" onClick={() => set('second', defaults.second)}><CircleXIcon size={16} />{secondLabel}: {f.second}</button>
        {f.q && <button type="button" className="vchip" onClick={() => set('q', '')}><CircleXIcon size={16} />بحث: {f.q}</button>}
        <button type="button" className="vchips__clear" onClick={() => setF(defaults)}>مسح الكل</button>
      </div>
    </section>
  );
}

export const StatusPill = ({ s, now }) => (
  <span className={'mst' + (s === 'active' ? '' : ' is-off')}><i />{s === 'active' ? (now ? 'نشط الآن' : 'نشط') : 'غير نشط'}</span>
);

export function RowActions({ onEdit, onLock, onView, onDelete }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const off = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    document.addEventListener('mousedown', off);
    return () => document.removeEventListener('mousedown', off);
  }, [open]);
  return (
    <div className="mact" ref={ref} onClick={(e) => e.stopPropagation()}>
      <button type="button" className="mact__edit" aria-label="تعديل" onClick={onEdit}><PencilIcon size={18} /></button>
      <button type="button" className="mact__lock" aria-label="تعطيل" onClick={onLock}><LockIcon size={18} /></button>
      <span className="vkebab">
        <button type="button" aria-label="الإجراءات" onClick={() => setOpen((o) => !o)}><DotsVerticalIcon size={20} /></button>
        {open && (
          <div className="vkebab__menu">
            <button type="button" onClick={() => { setOpen(false); onView(); }}>عرض التفاصيل</button>
            <button type="button" onClick={() => { setOpen(false); onEdit(); }}>تعديل</button>
            {onDelete && <button type="button" onClick={() => { setOpen(false); onDelete(); }}>حذف</button>}
          </div>
        )}
      </span>
    </div>
  );
}

export function Empty({ icon, title, text, btn, onClick }) {
  return (
    <section className="mempty">
      <span className="mempty__icon"><span>{icon}</span></span>
      <h2>{title}</h2>
      <p>{text}</p>
      <button type="button" className="btn-primary" onClick={onClick}>{btn}</button>
    </section>
  );
}

// تصدير CSV حقيقي (يفتح في Excel)
export function exportCsv(name, headers, rows) {
  const q = (v) => '"' + String(v ?? '').replace(/"/g, '""') + '"';
  const csv = '﻿' + [headers, ...rows].map((r) => r.map(q).join(',')).join('\r\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
  a.download = name + '.csv';
  document.body.appendChild(a);
  a.click();
  a.remove();
}
