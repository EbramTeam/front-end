import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { STATUS } from '../data.js';
import { useResetUserPassword, useToggleUser, useUserFilterOptions } from '../hooks/use-users.js';
import { LoadingBlock } from './Spinner.jsx';
import TemporaryPasswordDialog from './TemporaryPasswordDialog.jsx';
import {
  SearchIcon,
  RefreshIcon,
  ChevronDownIcon,
  LockIcon,
  PencilIcon,
  DotsVerticalIcon,
  VerifiedIcon,
  HourglassIcon,
  BanIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  BarArrowLeftIcon,
  BarArrowRightIcon,
  RolesIcon,
  KeyLockIcon,
} from './Icons.jsx';

const RESET_CONFIRM = 'هل تريد إعادة تعيين كلمة مرور هذا المستخدم؟ ستنتهي جلساته الحالية.';

/* ---------- dropdown menu used by every ⋮ button ---------- */
export function KebabMenu({ id, placement = 'below', onResetPassword }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) return undefined;
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="kebab" ref={ref}>
      <button type="button" className="kebab__btn" aria-label="المزيد" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        <DotsVerticalIcon size={22} />
      </button>
      {open && (
        <div className={'kebab__menu kebab__menu--' + placement} role="menu">
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setOpen(false);
              navigate(`/users/${id}/permissions`);
            }}
          >
            <span>إدارة الصلاحيات</span>
            <RolesIcon size={22} />
          </button>
          <hr />
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setOpen(false);
              if (window.confirm(RESET_CONFIRM)) onResetPassword();
            }}
          >
            <span>إعادة تعيين كلمة المرور</span>
            <KeyLockIcon size={22} />
          </button>
        </div>
      )}
    </div>
  );
}

/* ---------- select ---------- */
function Select({ value, onChange, placeholder, options }) {
  return (
    <label className="sel">
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDownIcon size={18} className="sel__chev" />
    </label>
  );
}

/* ---------- filters ---------- */
const STATUS_OPTIONS = ['active', 'inactive'].map((key) => ({ value: key, label: STATUS[key].label }));

export function UsersFilters({ f, layout = 'stacked' }) {
  const { roleOpts, deptOpts } = useUserFilterOptions();

  const search = (
    <label className="search-field">
      <SearchIcon size={22} />
      <input
        value={f.q}
        onChange={(e) => f.setQ(e.target.value)}
        placeholder="بحث بالاسم الكامل أو البريد الإلكتروني..."
      />
    </label>
  );
  const refresh = (
    <button type="button" className={'refresh-btn' + (layout === 'stacked' ? ' refresh-btn--text' : '')} onClick={f.reset} aria-label="تحديث">
      {layout === 'stacked' ? (
        <>
          <RefreshIcon size={20} />
          تحديث
        </>
      ) : (
        <RefreshIcon size={20} />
      )}
    </button>
  );
  const selects = (
    <>
      <Select value={f.role} onChange={f.setRole} placeholder="جميع الادوار والصلاحيات" options={roleOpts} />
      <Select value={f.dept} onChange={f.setDept} placeholder="كافة الإدارات والأقسام" options={deptOpts} />
      <Select value={f.status} onChange={f.setStatus} placeholder="كافة الحالات" options={STATUS_OPTIONS} />
    </>
  );

  return (
    <section className={'filters filters--' + layout}>
      {layout === 'stacked' ? (
        <>
          <div className="filters__row">
            {search}
            {refresh}
          </div>
          <div className="filters__row filters__row--selects">{selects}</div>
        </>
      ) : (
        <div className="filters__row">
          {search}
          {selects}
          {refresh}
        </div>
      )}
    </section>
  );
}

/* ---------- status pill ---------- */
function StatusPill({ status }) {
  const s = STATUS[status];
  return (
    <span className={'status ' + s.cls}>
      {status === 'pending' && <HourglassIcon size={14} />}
      {status === 'disabled' && <BanIcon size={14} />}
      {(status === 'active' || status === 'inactive') && <i className="status__dot" />}
      {s.label}
    </span>
  );
}

/* ---------- table ---------- */
export function UsersTable({ rows, isLoading }) {
  const [selected, setSelected] = useState(() => new Set());
  const navigate = useNavigate();
  const { toggleUser, isToggling } = useToggleUser();
  const { resetPassword, temporaryPassword, clearPassword } = useResetUserPassword();

  const allSelected = rows.length > 0 && rows.every((r) => selected.has(r.rowKey));

  function toggleAll() {
    setSelected(allSelected ? new Set() : new Set(rows.map((r) => r.rowKey)));
  }
  function toggleOne(key) {
    const next = new Set(selected);
    next.has(key) ? next.delete(key) : next.add(key);
    setSelected(next);
  }

  return (
    <div className="utable" role="table">
      <div className="utable__head" role="row">
        <span className="utable__cb">
          <input type="checkbox" className="cb" checked={allSelected} onChange={toggleAll} aria-label="تحديد الكل" />
        </span>
        <span>المستخدم والهوية</span>
        <span>اسم المستخدم (المعرف)</span>
        <span>الإدارة/ القسم</span>
        <span>الدور والصلاحية</span>
        <span>الحالة التشغيلية</span>
        <span>آخر نشاط بالنظام</span>
        <span>الإجراءات</span>
      </div>
      {isLoading && <LoadingBlock />}
      {!isLoading && rows.length === 0 && <div className="rlist__none">لا توجد نتائج مطابقة</div>}
      {rows.map((r) => (
        <div className="utable__row" role="row" key={r.rowKey}>
          <span className="utable__cb">
            <input type="checkbox" className="cb" checked={selected.has(r.rowKey)} onChange={() => toggleOne(r.rowKey)} aria-label="تحديد" />
          </span>
          <Link to={`/users/${r.id}`} className="uid">
            <span className={'avatar avatar--' + r.avatar}>{r.initials}</span>
            <span className="uid__text">
              <strong>
                {r.verified && <VerifiedIcon size={16} className="uid__verified" />}
                {r.name}
              </strong>
              <small>{r.email}</small>
            </span>
          </Link>
          <span>
            <span className="pill">{r.handle}</span>
          </span>
          <span className="dept">
            <strong>{r.dept}</strong>
            <small>{r.unit}</small>
          </span>
          <span>
            <span className="pill pill--role">{r.role}</span>
          </span>
          <span>
            <StatusPill status={r.status} />
          </span>
          <span className="last">
            <strong>{r.last}</strong>
            <small><bdi dir="ltr">{r.lastSub}</bdi></small>
          </span>
          <span className="acts">
            <button type="button" className="act act--edit" aria-label="تعديل" onClick={() => navigate(`/users/${r.id}/edit`)}>
              <PencilIcon size={20} />
            </button>
            <button type="button" className="act act--lock" aria-label="قفل" disabled={isToggling} onClick={() => toggleUser(r)}>
              <LockIcon size={20} />
            </button>
            <KebabMenu id={r.id} onResetPassword={() => resetPassword(r.id)} />
          </span>
        </div>
      ))}
      {temporaryPassword && <TemporaryPasswordDialog password={temporaryPassword} onClose={clearPassword} />}
    </div>
  );
}

/* ---------- pagination ---------- */
export function Pagination({ total, pageSize, lastPage, page, onPageChange, unit = 'مستخدم' }) {
  const from = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const to = Math.min(page * pageSize, total);
  const go = (p) => onPageChange(Math.max(1, Math.min(lastPage, p)));
  const pages = [...new Set([1, 2, 3, page, lastPage])].filter((p) => p <= lastPage).sort((a, b) => b - a);

  return (
    <div className="pager">
      <span className="pager__info">
        عرض {from} إلى {to} من أصل {total} {unit}
      </span>
      <div className="pager__ctrl">
        <button type="button" onClick={() => go(lastPage)} aria-label="الأخيرة">
          <BarArrowRightIcon size={18} style={{ color: '#888' }} />
        </button>
        <button type="button" onClick={() => go(page + 1)} aria-label="التالي">
          <ChevronLeftIcon size={16} />
        </button>
        {pages.flatMap((p, i) => [
          i > 0 && pages[i - 1] - p > 1 ? <span key={'gap' + p}>…</span> : null,
          <button key={p} type="button" className={page === p ? 'is-on' : ''} onClick={() => go(p)}>
            {p}
          </button>,
        ])}
        <button type="button" onClick={() => go(page - 1)} aria-label="السابق">
          <ChevronRightIcon size={16} />
        </button>
        <button type="button" onClick={() => go(1)} aria-label="الأولى">
          <BarArrowLeftIcon size={18} style={{ color: '#888' }} />
        </button>
      </div>
    </div>
  );
}
