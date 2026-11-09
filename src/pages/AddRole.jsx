import { useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRoles } from '../rolesStore.jsx';
import { ADD_CATALOG, TAG_LABEL, cloneGroups } from '../rolesData.js';
import Cbx from '../components/Cbx.jsx';
import RoleIcon from '../components/RoleIcon.jsx';
import AddPermissionModal from '../components/AddPermissionModal.jsx';
import { IdCardIcon, ClipboardUserIcon, SearchIcon, SelectAllIcon, ChevronDownIcon, ShieldIcon } from '../components/Icons.jsx';

const TYPES = [
  { key: 'custom', title: 'مخصص', sub: 'مرن وقابل للتعديل' },
  { key: 'system', title: 'نظامي', sub: 'مقيد بالمعايير' },
];
const STATUSES = [
  { key: 'active', title: 'نشط' },
  { key: 'inactive', title: 'غير نشط' },
];

function Choice({ checked, onClick, title, sub }) {
  return (
    <div
      className={'rchoice' + (checked ? ' is-on' : '')}
      role="radio"
      aria-checked={checked}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), onClick())}
    >
      <Cbx checked={checked} onChange={onClick} radio size={24} label={title} />
      <div>
        <strong>{title}</strong>
        {sub && <span>{sub}</span>}
      </div>
    </div>
  );
}

function PermCard({ item, onToggle }) {
  const hot = item.tag;
  return (
    <div
      className={'acard' + (item.tag ? ' acard--' + item.tag : '') + (item.full ? ' acard--full' : '') + (item.checked ? ' is-checked' : '')}
      onClick={onToggle}
    >
      <Cbx checked={item.checked} onChange={onToggle} size={24} label={item.name} />
      <div className="acard__text">
        <div className="acard__title">
          <strong>{item.name}</strong>
          {hot && <span className={'atag atag--' + item.tag}>{TAG_LABEL[item.tag]}</span>}
        </div>
        <span className="acard__desc">{item.desc}</span>
      </div>
    </div>
  );
}

export default function AddRole() {
  const navigate = useNavigate();
  const { addRole } = useRoles();
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const [groups, setGroups] = useState(() => cloneGroups(ADD_CATALOG));
  const [collapsed, setCollapsed] = useState({});
  const [q, setQ] = useState('');
  const [modal, setModal] = useState(false);
  const [tried, setTried] = useState(false);
  const topRef = useRef(null);

  const bad = { name: !name.trim(), desc: !desc.trim(), type: !type, status: !status };
  const invalid = Object.values(bad).some(Boolean);

  const matches = (g, i) => {
    const t = q.trim();
    return !t || (i.name + ' ' + i.desc + ' ' + g.title).toLowerCase().includes(t.toLowerCase());
  };
  const visible = useMemo(
    () => groups.map((g) => ({ ...g, shown: g.items.filter((i) => matches(g, i)) })).filter((g) => g.shown.length),
    [groups, q] // eslint-disable-line
  );
  const visibleIds = new Set(visible.flatMap((g) => g.shown.map((i) => i.id)));
  const allVisibleOn = visibleIds.size > 0 && groups.every((g) => g.items.every((i) => !visibleIds.has(i.id) || i.checked));

  const setItem = (gid, iid) =>
    setGroups((gs) => gs.map((g) => (g.id !== gid ? g : { ...g, items: g.items.map((i) => (i.id === iid ? { ...i, checked: !i.checked } : i)) })));
  const setGroup = (gid, to) =>
    setGroups((gs) => gs.map((g) => (g.id !== gid ? g : { ...g, items: g.items.map((i) => (visibleIds.has(i.id) ? { ...i, checked: to } : i)) })));
  const selectAll = () =>
    setGroups((gs) => gs.map((g) => ({ ...g, items: g.items.map((i) => (visibleIds.has(i.id) ? { ...i, checked: !allVisibleOn } : i)) })));

  const onCreatePermission = ({ name: n, desc: d, unit, action }) => {
    setGroups((gs) => {
      const item = { id: 'c' + Date.now(), name: n, desc: d, tag: null, checked: true, action };
      const idx = gs.findIndex((g) => g.title === unit);
      if (idx >= 0) return gs.map((g, i) => (i === idx ? { ...g, items: [...g.items, item] } : g));
      return [...gs, { id: 'reports', icon: 'shield', title: unit, items: [item] }];
    });
    setModal(false);
  };

  const submit = () => {
    setTried(true);
    if (invalid) {
      topRef.current && topRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    const id = addRole({
      title: name.trim(),
      desc: desc.trim(),
      tag: TYPES.find((t) => t.key === type).title,
      status,
      icon: 'shield',
      groups,
    });
    navigate('/roles', { state: { selectId: id } });
  };

  return (
    <div className="addrole" ref={topRef}>
      <h1 className="page-title">إضافة دور جديد</h1>
      <p className="page-subtitle">أنشئ دورًا جديدًا وحدد الصلاحيات التي سيتمكن المستخدمون المسند إليهم هذا الدور من استخدامها.</p>

      <section className="acardbox">
        <h2 className="asec">
          <span className="asec__icon">
            <IdCardIcon size={20} />
          </span>
          القسم الأول: بيانات وتوصيف الدور
        </h2>
        <label className="alabel">
          ادخل اسم الدور <b>*</b>
        </label>
        <input
          className={'ainput' + (tried && bad.name ? ' is-bad' : '')}
          placeholder="ادخل اسما واضحا يعبر عن مسؤليات هذا الدور"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="alabel">
          وصف الدور <b>*</b>
        </label>
        <textarea
          className={'aarea' + (tried && bad.desc ? ' is-bad' : '')}
          placeholder="الإشراف المباشر على أرصدة المخزون، وتوثيق استلام المواد الموردة عبر منصة اعتماد، وإصدار أذونات الصرف والترخيص بالفحص المخزني."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <div className="atwo">
          <div>
            <label className="alabel">
              نوع الدور <b>*</b>
            </label>
            <div className={'achoices' + (tried && bad.type ? ' is-bad' : '')} role="radiogroup">
              {TYPES.map((t) => (
                <Choice key={t.key} checked={type === t.key} onClick={() => setType(t.key)} title={t.title} sub={t.sub} />
              ))}
            </div>
          </div>
          <div>
            <label className="alabel">
              حالة الدور <b>*</b>
            </label>
            <div className={'achoices' + (tried && bad.status ? ' is-bad' : '')} role="radiogroup">
              {STATUSES.map((t) => (
                <Choice key={t.key} checked={status === t.key} onClick={() => setStatus(t.key)} title={t.title} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="acardbox">
        <div className="asec-row">
          <h2 className="asec">
            <span className="asec__icon">
              <ClipboardUserIcon size={20} />
            </span>
            القسم الثاني: تحديد الصلاحيات
          </h2>
          <button type="button" className="btn-primary asec-add" onClick={() => setModal(true)}>
            اضافة صلاحيات
          </button>
        </div>

        <div className="atools">
          <label className="search-field">
            <SearchIcon size={22} />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="البحث في مسميات الأدوار , الوصف أو الرموز" />
          </label>
          <button type="button" className="refresh-btn refresh-btn--text" onClick={selectAll}>
            <SelectAllIcon size={20} />
            تحديد الكل
          </button>
        </div>

        <div className="agov">
          <ShieldIcon size={18} />
          <span>تنبيه الحوكمة: الصلاحيات الموسومة بـ (حساسة) تخضع للتوثيق الإلزامي والامتثال وفق ضوابط الأمن السيبراني.</span>
        </div>

        <div className="agroups">
          {visible.map((g) => {
            const total = g.items.length;
            const on = g.items.filter((i) => i.checked).length;
            const open = !collapsed[g.id];
            return (
              <div key={g.id} className={'agroup' + (g.wide ? ' agroup--wide' : '')}>
                <header className="agroup__head">
                  <Cbx
                    checked={on === total}
                    indeterminate={on > 0 && on < total}
                    onChange={() => setGroup(g.id, on !== total)}
                    size={26}
                    label={g.title}
                  />
                  <h3>{g.title}</h3>
                  <span className="agroup__count">
                    {on} من {total} محددة
                  </span>
                  <button
                    type="button"
                    className={'agroup__chev' + (open ? '' : ' is-closed')}
                    aria-label="طي/فتح"
                    aria-expanded={open}
                    onClick={() => setCollapsed((c) => ({ ...c, [g.id]: open }))}
                  >
                    <ChevronDownIcon size={18} />
                  </button>
                </header>
                {open && (
                  <div className="agroup__grid">
                    {g.shown.map((i) => (
                      <PermCard key={i.id} item={i} onToggle={() => setItem(g.id, i.id)} />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          {visible.length === 0 && <div className="rlist__none">لا توجد نتائج</div>}
        </div>
      </section>

      <div className="afoot">
        <button type="button" className="btn-outline" onClick={() => navigate('/roles')}>
          إلغاء
        </button>
        <button type="button" className="btn-primary" onClick={submit}>
          إنشاء الدور وحفظ الصلاحيات
        </button>
      </div>

      {modal && <AddPermissionModal onClose={() => setModal(false)} onCreate={onCreatePermission} />}
    </div>
  );
}
