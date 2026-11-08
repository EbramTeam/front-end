import LangButton from './LangButton.jsx';
import { useMaster } from '../masterStore.jsx';
import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { NAV_ITEMS } from '../data.js';
import {
  GridIcon, UsersIcon, RolesIcon, VendorsIcon, DatabaseIcon, SettingsIcon,
  SearchIcon, BellIcon, GlobeIcon, ChevronLeftIcon, ShieldLockIcon, UserFilledIcon,
} from './Icons.jsx';
import * as N from './NavIcons.jsx';
import { signOut } from '../auth.js';

const ICONS = {
  grid: [GridIcon, N.NavGridFill],
  users: [N.NavUsersOut, N.NavUsersFill],
  roles: [N.NavRolesOut, N.NavRolesFill],
  vendors: [N.NavVendorsOut, N.NavVendorsFill],
  db: [N.NavDbOut, N.NavDbFill],
  settings: [N.NavSettingsOut, N.NavSettingsFill],
};

function crumbsFor(pathname, M) {
  const base = [
    { label: 'نظام إدارة المشتريات - الأزهر', to: '/' },
    { label: 'لوحة التحكم والمتابعة', to: '/', strong: true },
  ];
  if (pathname.startsWith('/master-data')) {
    const BD = { label: 'البيانات الأساسية', to: '/master-data' };
    const m = pathname.match(/^\/master-data\/(departments|items|units|categories)(?:\/(new|[^/]+))?(\/edit)?$/);
    if (!m) return [...base, BD];
    const [, kind, id, edit] = m;
    const isNew = id === 'new';
    const rec = id && !isNew ? M[kind].find((x) => x.id === id) : null;
    const nm = rec ? rec.name : '';
    const L = { departments: '/master-data/departments', items: '/master-data/items', units: '/master-data/units', categories: '/master-data/categories' }[kind];
    if (kind === 'departments') return [...base, BD, ...(!id ? [{ label: 'الأقسام والإدارات', to: L }] : [{ label: isNew ? 'إضافة قسم أو إدارة جديدة' : edit ? 'تعديل قسم أو إدارة جديدة' : nm, to: pathname }])];
    if (kind === 'items') return [...base, BD, ...(!id ? [{ label: 'الأصناف', to: L }] : [{ label: 'الأصناف', to: L }, { label: edit ? 'تعديل بيانات عنصر' : 'إضافة صنف جديد', to: pathname }])];
    if (kind === 'units') return [...base, BD, { label: 'الأصناف', to: '/master-data/items' }, { label: 'وحدات قياس', to: L }, ...(!id ? [] : [{ label: isNew || edit ? 'إضافة وحدة قياس جديدة' : nm, to: pathname }])];
    return [...base, BD, ...(!id ? [{ label: 'التصنيفات', to: L }] : isNew || edit ? [{ label: 'الأصناف', to: '/master-data/items' }, { label: 'إضافة صنف جديد', to: pathname }] : [{ label: 'التصنيفات', to: L }, { label: nm, to: pathname }])];
  }
  if (pathname.startsWith('/settings')) {
    const S = { label: 'الإعدادات', to: '/settings' };
    if (pathname === '/settings/procurement') return [...base, S, { label: 'المشتريات وسير العملية', to: pathname }];
    if (pathname === '/settings/notifications') return [...base, S, { label: 'إعدادات الإشعارات', to: pathname }];
    return [...base, S];
  }
  if (pathname === '/users/new') return [...base, { label: 'إضافة مستخدم', to: '/users/new' }];
  if (pathname === '/roles/new') return [...base, { label: 'اضافة دور جديد', to: '/roles/new' }];
  if (pathname === '/vendors/new') return [...base, { label: 'الموردين', to: '/vendors' }, { label: 'إضافة مورد جديد', to: pathname }];
  if (pathname.startsWith('/vendors/') && pathname.endsWith('/edit')) return [...base, { label: 'الموردين', to: '/vendors' }, { label: 'تعديل بيانات المورد', to: pathname }];
  if (pathname.startsWith('/vendors')) return [...base, { label: 'الموردين', to: '/vendors' }];
  if (pathname.startsWith('/roles')) return [...base, { label: 'الأدوار والصلاحيات', to: '/roles' }];
  if (pathname.startsWith('/users')) return [...base, { label: 'إدارة المستخدمين', to: '/users' }];
  return base;
}

function Sidebar({ open, onClose }) {
  const { pathname } = useLocation();
  return (
    <aside className={'sidebar' + (open ? ' is-open' : '')} onClick={(e) => e.target.closest('a') && onClose()}>
      <div className="sidebar__scroll">
        <Link to="/" className="sidebar__brand">
          <img src="/assets/ibram-logo-3x.png" width="172" height="52" alt="IBRAM" />
          <span>إبرام للمشتريات</span>
        </Link>
        <div className="sidebar__label">القوائم التشغيلية</div>
        <nav className="sidebar__nav">
          {NAV_ITEMS.map((item) => {
            const active = item.to === '/' ? pathname === '/' : pathname === item.to || pathname.startsWith(item.to + '/');
            const Icon = ICONS[item.icon][active ? 1 : 0];
            return (
              <NavLink key={item.key} to={item.to} className={'nav-item' + (active ? ' is-active' : '')}>
                <Icon size={22} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__status">
          <N.NavShieldLock size={22} />
          <div>
            <strong>
              النظام متصل وآمن
              <i />
            </strong>
            <small>Sovereign Core v4.2</small>
          </div>
        </div>
        <div className="sidebar__profile">
          <UserFilledIcon size={28} className="sidebar__avatar" />
          <div>
            <strong>د. محمد كسبة</strong>
            <small>مدير النظام العام</small>
          </div>
          <button type="button" className="sidebar__chev" aria-label="تسجيل الخروج" title="تسجيل الخروج" onClick={() => { signOut(); window.location.assign("/login"); }}>
            <ChevronLeftIcon size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
}

function Topbar({ onMenu }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [q, setQ] = useState('');
  const M = useMaster();
  const crumbs = crumbsFor(pathname, M);
  return (
    <header className="topbar">
      <button type="button" className="topbar__menu" aria-label="القائمة" onClick={onMenu}>
        <span /><span /><span />
      </button>
      <nav className="crumbs" aria-label="breadcrumb">
        {crumbs.map((c, i) => (
          <span key={c.label} className="crumbs__item">
            {i > 0 && <ChevronLeftIcon size={14} className="crumbs__sep" />}
            <Link to={c.to} className={c.strong ? 'is-strong' : ''}>
              {c.label}
            </Link>
          </span>
        ))}
      </nav>
      <form
        className="topbar__search"
        onSubmit={(e) => {
          e.preventDefault();
          if (q.trim()) navigate('/users');
        }}
      >
        <SearchIcon size={22} />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="بحث" aria-label="بحث" />
      </form>
      <div className="topbar__tools">
        <button type="button" className="topbar__bell" aria-label="الإشعارات">
          <BellIcon size={24} />
        </button>
        <span className="topbar__divider" />
        <LangButton size={13} />
      </div>
    </header>
  );
}

export default function AppLayout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  return (
    <div className="app">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      {open && <div className="sidebar-back" onClick={() => setOpen(false)} />}
      <div className="app__main">
        <Topbar onMenu={() => setOpen(true)} />
        <div className="app__content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
