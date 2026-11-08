import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRoles } from '../rolesStore.jsx';
import { countAll, countChecked } from '../rolesData.js';
import Cbx from '../components/Cbx.jsx';
import RoleIcon from '../components/RoleIcon.jsx';
import {
  SearchIcon,
  RefreshIcon,
  ChevronDownIcon,
  DotsVerticalIcon,
  ShieldCheckIcon,
  ShieldIcon,
  UsersIcon,
  FingerprintIcon,
  DocIcon,
  CheckBoxIcon,
  RolesIcon,
} from '../components/Icons.jsx';

/* ---------- stat card ---------- */
function Stat({ icon, tint, value, unit, label, sub, subClass }) {
  return (
    <div className="ustat rstat">
      <div className="ustat__text">
        <div className="rstat__top">
          <strong>{value}</strong>
          <span>{unit}</span>
        </div>
        <b className="rstat__label">{label}</b>
        <small className={subClass}>{sub}</small>
      </div>
      <span className="ustat__icon" style={{ background: tint.bg, color: tint.fg }}>
        {icon}
      </span>
    </div>
  );
}

/* ---------- ⋮ menu on a role card (no design: reuses the card's own two actions) ---------- */
function RoleMenu({ onUsers, onEdit }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return undefined;
    const onDoc = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);
  return (
    <div className="kebab" ref={ref} onClick={(e) => e.stopPropagation()}>
      <button type="button" className="kebab__btn" aria-label="المزيد" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        <DotsVerticalIcon size={22} />
      </button>
      {open && (
        <div className="kebab__menu kebab__menu--below rkebab" role="menu">
          <button type="button" role="menuitem" onClick={onUsers}>
            <span>عرض المستخدمين</span>
            <UsersIcon size={20} />
          </button>
          <hr />
          <button type="button" role="menuitem" onClick={onEdit}>
            <span>تعديل الدور</span>
            <RolesIcon size={20} />
          </button>
        </div>
      )}
    </div>
  );
}

/* ---------- role card ---------- */
function RoleCard({ role, selected, onSelect }) {
  const navigate = useNavigate();
  const toUsers = () => navigate('/users');
  const toEdit = () => navigate(`/roles/${role.id}/edit`);
  return (
    <article
      className={'rcard' + (selected ? ' is-selected' : '')}
      onClick={onSelect}
      tabIndex={0}
      role="button"
      aria-pressed={selected}
      onKeyDown={(e) => {
        if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onSelect();
        }
      }}
    >
      <div className="rcard__top">
        <span className="rcard__icon">
          <RoleIcon name={role.icon || 'shield'} size={20} />
        </span>
        <h3>{role.title}</h3>
        <div className="rcard__tags">
          <span className={'rtag' + (role.tag === 'قياسي رئيسي' ? ' rtag--main' : '')}>{role.tag}</span>
          <span className={'rstatus' + (role.status === 'active' ? '' : ' is-off')}>
            <i />
            {role.status === 'active' ? 'نشط' : 'غير نشط'}
          </span>
          <RoleMenu onUsers={toUsers} onEdit={toEdit} />
        </div>
      </div>
      <p className="rcard__desc">{role.desc}</p>
      <div className="rcard__bottom">
        <span className="rcard__count">
          <b>{role.users}</b> مستخدم
        </span>
        <span className="rcard__count">
          <b>{role.perms}</b> صلاحيات معتمدة
        </span>
        <div className="rcard__btns">
          <button
            type="button"
            className="rbtn rbtn--fill"
            onClick={(e) => {
              e.stopPropagation();
              toUsers();
            }}
          >
            عرض المستخدمين
          </button>
          <button
            type="button"
            className="rbtn rbtn--line"
            onClick={(e) => {
              e.stopPropagation();
              toEdit();
            }}
          >
            تعديل الدور
          </button>
        </div>
      </div>
    </article>
  );
}

/* ---------- side panel ---------- */
function EmptyPanel() {
  return (
    <aside className="rpanel rpanel--empty">
      <span className="rpanel__bigicon">
        <RolesIcon size={44} />
      </span>
      <h2>إدارة الأدوار والصلاحيات</h2>
      <p>اختر دورًا من القائمة لعرض تفاصيله ومراجعة صلاحياته وإدارتها.</p>
      <p>اختر أحد الأدوار من القائمة المجاورة</p>
    </aside>
  );
}

function PermItem({ item, onToggle }) {
  return (
    <div className={'pitem' + (item.tag ? ' is-hot' : '')}>
      <Cbx checked={item.checked} onChange={onToggle} size={24} label={item.name} />
      <div className="pitem__text">
        <strong>{item.name}</strong>
        <span>{item.desc}</span>
      </div>
      <em className="pitem__state">{item.checked ? 'مسموح' : ''}</em>
    </div>
  );
}

function RolePanel({ role, onSave }) {
  const [draft, setDraft] = useState(role.groups);
  useEffect(() => setDraft(role.groups), [role.id, role.groups]);

  const total = countAll(draft);
  const on = countChecked(draft);
  const toggle = (gi, ii) =>
    setDraft((d) =>
      d.map((g, i) => (i !== gi ? g : { ...g, items: g.items.map((it, j) => (j === ii ? { ...it, checked: !it.checked } : it)) }))
    );
  const setAll = () => {
    const to = on !== total;
    setDraft((d) => d.map((g) => ({ ...g, items: g.items.map((it) => ({ ...it, checked: to })) })));
  };

  return (
    <aside className="rpanel">
      <header className="rpanel__head">
        <span className="rcard__icon rcard__icon--solid">
          <RoleIcon name={role.icon || 'shield'} size={22} />
        </span>
        <div className="rpanel__title">
          <div className="rpanel__titlerow">
            <h2>{role.title}</h2>
            {role.panelTag && <span className="rtag">{role.panelTag}</span>}
          </div>
          <p>{role.panelSub || 'معاينة وتعديل مصفوفة الصلاحيات الممنوحة'}</p>
        </div>
        <div className="rpanel__tools">
          <button type="button" className="rpanel__link" onClick={setAll}>
            تحديد الكل
          </button>
          <button type="button" className="rpanel__reset" aria-label="تحديث" onClick={() => setDraft(role.groups)}>
            <RefreshIcon size={20} />
          </button>
        </div>
      </header>

      <div className="rpanel__total">
        <span>إجمالي الصلاحيات المفعلة:</span>
        <strong>
          {on} / {total} صلاحية
        </strong>
      </div>

      <div className="rpanel__scroll">
        {draft.map((g, gi) => (
          <section className="pgroup" key={g.id}>
            <header>
              <RoleIcon name={g.icon} size={22} />
              <h4>{g.title}</h4>
              <span className="pgroup__count">
                {g.items.filter((i) => i.checked).length} / {g.items.length} مفعلة
              </span>
            </header>
            {g.items.map((it, ii) => (
              <PermItem key={it.id} item={it} onToggle={() => toggle(gi, ii)} />
            ))}
          </section>
        ))}
      </div>

      <footer className="rpanel__foot">
        <button type="button" className="btn-outline" onClick={() => setDraft(role.groups)}>
          إلغاء التغييرات
        </button>
        <button type="button" className="btn-primary" onClick={() => onSave(role.id, draft)}>
          حفظ مصفوفة الصلاحيات
        </button>
      </footer>
    </aside>
  );
}

/* ---------- page ---------- */
const STATUS_OPTS = [
  { v: '', t: 'الحالة : الكل' },
  { v: 'active', t: 'الحالة : نشط' },
  { v: 'inactive', t: 'الحالة : غير نشط' },
];

export default function Roles() {
  const { roles, saveGroups } = useRoles();
  const navigate = useNavigate();
  const location = useLocation();
  const [q, setQ] = useState('');
  const [status, setStatus] = useState('active');
  const [type, setType] = useState('');
  const [selectedId, setSelectedId] = useState(location.state?.selectId || null);

  const types = useMemo(() => [...new Set(roles.map((r) => r.tag))], [roles]);
  const list = roles.filter(
    (r) =>
      (!q.trim() || (r.title + ' ' + r.desc + ' ' + r.tag).includes(q.trim())) &&
      (!status || r.status === status) &&
      (!type || r.tag === type)
  );
  const selected = roles.find((r) => r.id === selectedId);
  const reset = () => {
    setQ('');
    setStatus('active');
    setType('');
  };
  const created = roles.filter((r) => r.custom);
  const createdActive = created.filter((r) => r.status === 'active').length;
  // the design says "6 of 8": two roles are not part of the screens we were given
  const hiddenInDesign = 2;
  const totalDefined = roles.length + hiddenInDesign;

  return (
    <div className="roles-page">
      <div className="page-head roles-head">
        <div>
          <h1 className="page-title">الأدوار والصلاحيات</h1>
          <p className="page-subtitle">إدارة أدوار المستخدمين والتحكم في مصفوفة صلاحيات الوصول وفق معايير الحوكمة</p>
        </div>
        <div className="page-head__actions">
          <button type="button" className="btn-primary" onClick={() => navigate('/roles/new')}>
            إضافة دور جديد
          </button>
        </div>
      </div>

      <div className="ustats">
        <Stat
          icon={<FingerprintIcon size={26} />}
          tint={{ bg: '#e8f6ff', fg: '#0b2a4a' }}
          value={8 + createdActive}
          unit="أدوار مفعلة"
          label="إجمالي الادوار المعرفة"
          sub={`6 قياسية . ${2 + created.length} أدوار مخصصة للجان`}
          subClass="is-green"
        />
        <Stat
          icon={<UsersIcon size={24} />}
          tint={{ bg: '#eefff8', fg: '#0a5c36' }}
          value="148"
          unit="مستخدم موثوق"
          label="اجمالي المستخدمين المعينين"
          sub="(مربوطين بالهوية الوطنية الموحدة (نفاذ"
          subClass="is-green"
        />
        <Stat
          icon={<ShieldIcon size={24} />}
          tint={{ bg: '#e8f6ff', fg: '#0b2a4a' }}
          value="21"
          unit="صلاحية إجرائية"
          label="متوسط الصلاحيات لكل دور"
          sub="موزعة عبر 5 وحدات نظام مركزية"
        />
        <Stat
          icon={<CheckBoxIcon size={24} />}
          tint={{ bg: '#eefff8', fg: '#0a5c36' }}
          value="100%"
          unit="متوافق بالكامل"
          label="المقفلة وغير النشطة"
          sub="صفر تعارض صلاحيات"
          subClass="is-green"
        />
      </div>

      <div className="rcols">
        <section className="rlist">
          <div className="rfilters">
            <label className="search-field">
              <SearchIcon size={22} />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="البحث في مسميات الأدوار , الوصف أو الرموز" />
            </label>
            <label className="sel">
              <select value={status} onChange={(e) => setStatus(e.target.value)} aria-label="الحالة">
                {STATUS_OPTS.map((o) => (
                  <option key={o.v} value={o.v}>
                    {o.t}
                  </option>
                ))}
              </select>
              <ChevronDownIcon size={18} className="sel__chev" />
            </label>
            <label className="sel">
              <select value={type} onChange={(e) => setType(e.target.value)} aria-label="نوع الدور">
                <option value="">نوع الدور : الكل</option>
                {types.map((t) => (
                  <option key={t} value={t}>
                    نوع الدور : {t}
                  </option>
                ))}
              </select>
              <ChevronDownIcon size={18} className="sel__chev" />
            </label>
            <button type="button" className="refresh-btn refresh-btn--text" onClick={reset}>
              <RefreshIcon size={20} />
              تحديث
            </button>
          </div>

          <div className="rlist__meta">
            <span>عرض {list.length} من أصل {totalDefined} أدوار معرفة</span>
            <em>انقر على أي دور لمعاينة مصفوفة الصلاحيات</em>
          </div>

          <div className="rlist__items">
            {list.map((r) => (
              <RoleCard key={r.id} role={r} selected={r.id === selectedId} onSelect={() => setSelectedId(r.id)} />
            ))}
            {list.length === 0 && <div className="rlist__none">لا توجد نتائج</div>}
          </div>
        </section>

        {selected ? <RolePanel role={selected} onSave={saveGroups} /> : <EmptyPanel />}
      </div>
    </div>
  );
}
