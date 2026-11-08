import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { STATUS, ROLES_FILTER, DEPTS_FILTER, DETAIL_USER_ID } from '../data.js';
import {
  SearchIcon,
  RefreshIcon,
  ChevronDownIcon,
  CloseCircleIcon,
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

/* ---------- dropdown menu used by every ⋮ button ---------- */
export function KebabMenu({ id = DETAIL_USER_ID, placement = 'below' }) {
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
              navigate('/reset-password');
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
export function useUserFilters() {
  const [q, setQ] = useState('');
  const [role, setRole] = useState('');
  const [dept, setDept] = useState('');
  const [status, setStatus] = useState('');
  const [chips, setChips] = useState(['الجهة:الهيئة العامة للمنافسة', 'الحالة:الكل عدا المحذوفين']);
  const reset = () => {
    setQ('');
    setRole('');
    setDept('');
    setStatus('');
  };
  return { q, setQ, role, setRole, dept, setDept, status, setStatus, chips, setChips, reset };
}

export function UsersFilters({ f, layout = 'stacked' }) {
  const roleOpts = ROLES_FILTER.map((r) => ({ value: r, label: r }));
  const deptOpts = DEPTS_FILTER.map((r) => ({ value: r, label: r }));
  const statusOpts = Object.entries(STATUS).map(([k, v]) => ({ value: k, label: v.label }));

  const search = (
    <label className="search-field">
      <SearchIcon size={22} />
      <input
        value={f.q}
        onChange={(e) => f.setQ(e.target.value)}
        placeholder="بحث بالاسم الكامل، اسم المستخدم (@user)، أو البريد الإلكتروني..."
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
      <Select value={f.status} onChange={f.setStatus} placeholder="كافة الحالات" options={statusOpts} />
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
      <div className="filters__chips">
        <span className="filters__label">الفلاتر المطبقة:</span>
        {f.chips.map((c) => {
          const [k, ...rest] = c.split(':');
          return (
            <span key={c} className="chip">
              <button type="button" aria-label="إزالة" onClick={() => f.setChips(f.chips.filter((x) => x !== c))}>
                <CloseCircleIcon size={16} />
              </button>
              {k}:{rest.join(':')}
            </span>
          );
        })}
        <button type="button" className="chips-clear" onClick={() => f.setChips([])}>
          مسح الكل
        </button>
      </div>
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
export function UsersTable({ rows: initialRows, f }) {
  const [rows, setRows] = useState(initialRows);
  const [selected, setSelected] = useState(() => new Set());
  const navigate = useNavigate();

  const visible = useMemo(() => {
    const q = f.q.trim().toLowerCase();
    return rows.filter((r) => {
      if (q && !(r.name + r.handle + r.email).toLowerCase().includes(q)) return false;
      if (f.role && r.role !== f.role) return false;
      if (f.dept && r.dept !== f.dept) return false;
      if (f.status && r.status !== f.status) return false;
      return true;
    });
  }, [rows, f.q, f.role, f.dept, f.status]);

  const allSelected = visible.length > 0 && visible.every((r) => selected.has(r.rowKey));

  function toggleAll() {
    setSelected(allSelected ? new Set() : new Set(visible.map((r) => r.rowKey)));
  }
  function toggleOne(key) {
    const next = new Set(selected);
    next.has(key) ? next.delete(key) : next.add(key);
    setSelected(next);
  }
  function toggleLock(key) {
    setRows((rs) =>
      rs.map((r) =>
        r.rowKey === key
          ? r.status === 'disabled'
            ? { ...r, status: r.prevStatus || 'inactive' }
            : { ...r, prevStatus: r.status, status: 'disabled' }
          : r
      )
    );
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
      {visible.map((r) => (
        <div className="utable__row" role="row" key={r.rowKey}>
          <span className="utable__cb">
            <input type="checkbox" className="cb" checked={selected.has(r.rowKey)} onChange={() => toggleOne(r.rowKey)} aria-label="تحديد" />
          </span>
          <Link to={`/users/${DETAIL_USER_ID}`} className="uid">
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
            <small>{r.lastSub}</small>
          </span>
          <span className="acts">
            <button type="button" className="act act--edit" aria-label="تعديل" onClick={() => navigate(`/users/${DETAIL_USER_ID}/edit`)}>
              <PencilIcon size={20} />
            </button>
            <button type="button" className="act act--lock" aria-label="قفل" onClick={() => toggleLock(r.rowKey)}>
              <LockIcon size={20} />
            </button>
            <KebabMenu />
          </span>
        </div>
      ))}
    </div>
  );
}

/* ---------- pagination ---------- */
export function Pagination({ total = 55, pageSize = 5, lastPage = 31, shown }) {
  const [page, setPage] = useState(1);
  const from = (page - 1) * pageSize + 1;
  const to = Math.min(page * pageSize, total);
  const go = (p) => setPage(Math.max(1, Math.min(lastPage, p)));
  return (
    <div className="pager">
      <span className="pager__info">
        عرض {shown ? 1 : from} إلى {shown ? shown : to} من أصل {total} مستخدم
      </span>
      <div className="pager__ctrl">
        <button type="button" onClick={() => go(lastPage)} aria-label="الأخيرة">
          <BarArrowRightIcon size={18} style={{ color: '#888' }} />
        </button>
        <button type="button" onClick={() => go(page + 1)} aria-label="التالي">
          <ChevronLeftIcon size={16} />
        </button>
        <button type="button" className={page === lastPage ? 'is-on' : ''} onClick={() => go(lastPage)}>
          {lastPage}
        </button>
        <span>…</span>
        {[3, 2, 1].map((p) => (
          <button key={p} type="button" className={page === p ? 'is-on' : ''} onClick={() => go(p)}>
            {p}
          </button>
        ))}
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
