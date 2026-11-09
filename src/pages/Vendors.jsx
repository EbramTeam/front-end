import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSuppliersList, useSupplierStats } from '../hooks/use-suppliers.js';
import { Pagination } from '../components/UsersTable.jsx';
import {
  IdCardIcon, VerifiedIcon, PauseCircleIcon, SearchIcon, RefreshIcon, ChevronDownIcon, DotsVerticalIcon,
  TrendUpIcon, CircleXIcon, CircleCheckIcon, WarnIcon, PinIcon, MailIcon, PhoneIcon, ShieldCheckIcon,
} from '../components/Icons.jsx';

const STATUS_OPTIONS = ['الكل', 'نشط', 'غير نشط / معلق'];
const DEFAULTS = { q: '', status: 'الكل' };
const count = (value) => (value === undefined ? '—' : value.toLocaleString('en-US'));

function Stat({ icon, tint, value, label, pill, pillClass }) {
  return (
    <div className="vstat">
      <div className="vstat__text">
        <strong>{value}</strong>
        <span>{label}</span>
        <small className={pillClass}>{pill}</small>
      </div>
      <span className="vstat__icon" style={{ background: tint.bg, color: tint.fg }}>{icon}</span>
    </div>
  );
}

function Sel({ label, value, options, onChange, prefix, disabled }) {
  const opts = options.includes(value) ? options : [value, ...options];
  return (
    <label className="vsel">
      <select value={value} disabled={disabled} onChange={(e) => onChange(e.target.value)} aria-label={label}>
        {opts.map((o) => (
          <option key={o} value={o}>{prefix ? prefix + o : o}</option>
        ))}
      </select>
      <span className="vsel__txt">{prefix ? prefix + value : value}</span>
      <ChevronDownIcon size={20} className="vsel__chev" />
    </label>
  );
}

function RowMenu({ onOpen, onEdit }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const off = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    document.addEventListener('mousedown', off);
    return () => document.removeEventListener('mousedown', off);
  }, [open]);
  return (
    <div className="vkebab" ref={ref}>
      <button type="button" aria-label="الإجراءات" onClick={(e) => { e.stopPropagation(); setOpen((o) => !o); }}>
        <DotsVerticalIcon size={24} />
      </button>
      {open && (
        <div className="vkebab__menu" onClick={(e) => e.stopPropagation()}>
          <button type="button" onClick={onOpen}>عرض تفاصيل المورد</button>
          <button type="button" onClick={onEdit}>تعديل المورد</button>
        </div>
      )}
    </div>
  );
}

export default function Vendors() {
  const navigate = useNavigate();
  const [f, setF] = useState(DEFAULTS);
  const list = useSuppliersList(f);
  const stats = useSupplierStats();
  const rows = list.rows;
  const set = (k, v) => setF((p) => ({ ...p, [k]: v }));
  const clear = (k) => set(k, k === 'q' ? '' : 'الكل');
  const reset = () => setF(DEFAULTS);

  const chips = [f.status !== 'الكل' && { k: 'status', t: 'الحالة: ' + f.status }].filter(Boolean);

  return (
    <div className="vendors-page">
      <div className="page-head">
        <div>
          <h1 className="page-title">الموردون</h1>
          <p className="page-subtitle">إدارة وتنظيم البيانات الأساسية والاعتمادات المؤسسية للموردين المعتمدين لدى المنظومة</p>
        </div>
        <div className="page-head__actions">
          <button type="button" className="btn-primary" onClick={() => navigate('/vendors/new')}>إضافة مورد جديد</button>
        </div>
      </div>

      <div className="vstats">
        <Stat icon={<IdCardIcon size={26} />} tint={{ bg: '#e8f6ff', fg: '#0b2a4a' }} value={count(stats.total)} label="إجمالي الموردين المعتمدين" />
        <Stat icon={<VerifiedIcon size={26} />} tint={{ bg: '#eefff8', fg: '#0a5c36' }} value={count(stats.active)} label="موردون بحالة نشطة" />
        <Stat icon={<PauseCircleIcon size={26} />} tint={{ bg: '#fff9e8', fg: '#e84a4a' }} value={count(stats.inactive)} label="موردون معلقون / غير نشطين" />
        <Stat icon={<ShieldCheckIcon size={26} />} tint={{ bg: '#eefff8', fg: '#0a5c36' }} value="—" label="موثوقية الربط الحكومي (MC)" />
      </div>

      <section className="vfilters">
        <div className="vfilters__row">
          <label className="vsearch">
            <SearchIcon size={22} />
            <input value={f.q} onChange={(e) => set('q', e.target.value)} placeholder="شركة التقنية" aria-label="بحث عن مورد" />
          </label>
          <Sel label="الحالة" prefix="الحالة: " value={f.status} options={STATUS_OPTIONS} onChange={(v) => set('status', v)} />
          <Sel label="نوع النشاط" value="الكل" options={['الكل']} disabled />
          <Sel label="التصنيف" prefix="التصنيف: " value="الكل" options={['الكل']} disabled />
          <button type="button" className="vrefresh" aria-label="تحديث" onClick={reset}>
            <RefreshIcon size={20} />
          </button>
        </div>
        <div className="vchips">
          <span className="vchips__label">الفلاتر المطبقة:</span>
          {chips.map((c) => (
            <button key={c.k} type="button" className="vchip" onClick={() => clear(c.k)}>
              <CircleXIcon size={16} />
              {c.t}
            </button>
          ))}
          {f.q && (
            <button type="button" className="vchip" onClick={() => clear('q')}>
              <CircleXIcon size={16} />
              بحث: {f.q}
            </button>
          )}
          <button type="button" className="vchips__clear" onClick={reset}>مسح الكل</button>
        </div>
      </section>

      <div className="vtable">
        <table>
          <thead>
            <tr>
              <th>اسم المورد والسجل</th>
              <th>أرقام التوثيق والتسجيل</th>
              <th>نوع النشاط الرئيسي</th>
              <th>التصنيف المرجعي</th>
              <th>بيانات التواصل المعتمدة</th>
              <th>حالة الاعتماد</th>
              <th>آخر تحديث و تدقيق</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((v) => (
              <tr key={v.id} onClick={() => navigate('/vendors/' + v.id)}>
                <td>
                  <div className="vname">
                    <div className="vname__top">
                      <strong>{v.listName}</strong>
                      {v.verified === null ? null : v.verified ? (
                        <em className="vbadge vbadge--ok"><CircleCheckIcon size={13} />موثق</em>
                      ) : (
                        <em className="vbadge vbadge--warn"><WarnIcon size={13} />تنبيه</em>
                      )}
                    </div>
                    {v.legal && <small>{v.legal}</small>}
                  </div>
                </td>
                <td>
                  <div className="vnums">
                    <b>س.ت: {v.cr}</b>
                    <span>الضريبي: {v.vat}</span>
                  </div>
                </td>
                <td><span className="vtype">{v.activity}</span></td>
                <td><strong className="vgrade">{v.grade}</strong></td>
                <td>
                  <div className="vcontact">
                    <span><PinIcon size={15} />{v.city}</span>
                    <span><MailIcon size={15} />{v.email}</span>
                    <span><PhoneIcon size={15} /><bdi dir="ltr">{v.phone}</bdi></span>
                  </div>
                </td>
                <td>
                  <span className={'vstatus' + (v.status === 'active' ? '' : ' is-off')}>
                    <i />
                    {v.status === 'active' ? 'نشط ومطابق' : 'غير نشط / معلق'}
                  </span>
                </td>
                <td>
                  <div className="vupd">
                    <b>{v.updated}</b>
                    <span>{v.by}</span>
                  </div>
                </td>
                <td onClick={(e) => e.stopPropagation()}>
                  <RowMenu onOpen={() => navigate('/vendors/' + v.id)} onEdit={() => navigate('/vendors/' + v.id + '/edit')} />
                </td>
              </tr>
            ))}
            {!list.isLoading && rows.length === 0 && (
              <tr className="vtable__empty"><td colSpan={8}>لا توجد نتائج مطابقة</td></tr>
            )}
            {list.isLoading && (
              <tr className="vtable__empty"><td colSpan={8}>جارٍ التحميل…</td></tr>
            )}
          </tbody>
        </table>
      </div>
      <Pagination total={list.total} pageSize={list.pageSize} lastPage={list.lastPage} page={list.page} onPageChange={list.setPage} unit="مورد" />
    </div>
  );
}
