import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMaster, two, fmt, SEED_COUNT } from '../../masterStore.jsx';
import { PageHead, Stat, FilterCard, StatusPill, RowActions, Empty, exportCsv } from './Bits.jsx';
import Cbx from '../../components/Cbx.jsx';
import { CircleCheckIcon, IdCardIcon, ScalesIcon, OrgChartIcon, ShieldCheckIcon, PauseCircleIcon, DatabaseIcon, DocIcon, ReportIcon } from '../../components/Icons.jsx';
import { CubeIcon, AppsIcon, RulerIcon, ChevronUpIcon, ClipboardListIcon, BoxesIcon } from '../../components/MIcons.jsx';
import { ChevronDownIcon, SettingsIcon } from '../../components/Icons.jsx';

const T = {
  blue: { bg: '#e8f6ff', fg: '#0b2a4a' }, mint: { bg: '#eefff8', fg: '#0a5c36' },
  red: { bg: '#fff0f0', fg: '#e84a4a' }, grey: { bg: '#f1f1f1', fg: '#222' }, amber: { bg: '#fff9e8', fg: '#e84a4a' },
};
const ok = (t) => <>{t} <CircleCheckIcon size={14} /></>;
const ALL = 'كافة الإدارات';
const PH = 'ابحث باسم القسم أو الرمز (مثل: المشتريات ,DEPT-HQ-01)...';

// ---------- هيكل الصفحة المشترك ----------
function ListPage({ cfg, rows, all, selected, setSelected, onAdd, filter, setFilter, defaults, kind, children }) {
  const empty = all.length === 0;
  const allSel = rows.length > 0 && rows.every((r) => selected.includes(r.id));
  return (
    <div className="vendors-page mlist">
      <PageHead title={cfg.title} sub={cfg.sub}>
        <button type="button" className="btn-outline" onClick={cfg.onExport}>{cfg.exportLabel}</button>
        <button type="button" className="btn-primary" onClick={onAdd}>{cfg.addLabel}</button>
      </PageHead>
      <div className="vstats">
        {cfg.stats.map((s, i) => <Stat key={i} {...s} value={empty ? '00' : s.value} />)}
      </div>
      {empty ? (
        <Empty {...cfg.empty} onClick={onAdd} />
      ) : (
        <>
          <FilterCard placeholder={PH} f={filter} setF={setFilter} defaults={defaults} statusOpts={['الكل', 'نشط', 'غير نشط']} secondLabel="القسم الرئيسي" secondOpts={cfg.secondOpts} />
          <div className="vtable mtable">
            <table>
              <colgroup>{cfg.widths.map((w, i) => <col key={i} style={{ width: w + '%' }} />)}</colgroup>
              <thead>
                <tr>
                  <th className="mcb"><Cbx checked={allSel} onChange={(v) => setSelected(v ? rows.map((r) => r.id) : [])} label="تحديد الكل" size={22} /></th>
                  {cfg.cols.map((c) => <th key={c.h} className={c.cls}>{c.h}</th>)}
                  <th>الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                {children}
                {rows.length === 0 && <tr className="vtable__empty"><td colSpan={cfg.cols.length + 2}>لا توجد نتائج مطابقة</td></tr>}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

function useListState(first) {
  const defaults = { q: '', status: 'الكل', second: ALL };
  const [filter, setFilter] = useState(defaults);
  const [selected, setSelected] = useState([]);
  const pass = (r, hay, secondHit) => {
    if (filter.q && !hay.some((h) => String(h).toLowerCase().includes(filter.q.toLowerCase()))) return false;
    if (filter.status === 'نشط' && r.status !== 'active') return false;
    if (filter.status === 'غير نشط' && r.status === 'active') return false;
    if (filter.second !== ALL && !secondHit) return false;
    return true;
  };
  return { filter, setFilter, defaults, selected, setSelected, pass };
}
const toggleSel = (sel, setSel, id) => setSel(sel.includes(id) ? sel.filter((x) => x !== id) : [...sel, id]);
const dateCell = (r) => <div className="vupd"><b>{r.date}</b><span>{r.by}</span></div>;

// ---------- الأقسام والإدارات ----------
export function DepartmentsList() {
  const nav = useNavigate();
  const { departments: all, remove, toggle } = useMaster();
  const L = useListState('d1');
  const rows = all.filter((r) => L.pass(r, [r.name, r.code], r.parent === L.filter.second || r.name === L.filter.second));
  const mains = all.filter((d) => d.level === 'main').map((d) => d.name);
  const kids = (r) => { const n = all.filter((d) => d.parent === r.name).length; return n ? (r.id === 'd1' ? n + 2 : n) + ' أقسام فرعية' : '-'; };
  const cfg = {
    title: 'الأقسام والإدارات', sub: 'تنظيم الهيكل الإداري والمراكز التكليفية والجهات الطالبة لاعتمادات الشراء والميزانيات.',
    exportLabel: 'تصدير الهيكل التنظيمي', addLabel: 'إضافة قسم',
    onExport: () => exportCsv('الهيكل-التنظيمي', ['اسم القسم / الإدارة', 'الرمز التنظيمي', 'القسم الأعلى', 'الحالة'], all.map((r) => [r.name, r.code, r.parent, r.status === 'active' ? 'نشط الآن' : 'غير نشط'])),
    stats: [
      { value: fmt(34 + all.length - SEED_COUNT.departments), label: 'إجمالي الأقسام والإدارات', pill: ok('شامل كافة القطاعات'), pillClass: 'is-text', icon: <OrgChartIcon size={24} />, tint: T.blue },
      { value: '26', label: 'أقسام فرعية تشغيلية', icon: <OrgChartIcon size={24} />, tint: T.blue },
      { value: '8', label: 'إدارات رئيسية مستقلة', pill: '(HQ) مستوى قيادي أول', pillClass: 'is-green', icon: <IdCardIcon size={24} />, tint: T.blue },
      { value: '32', label: 'مراكز التكلفة المربوطة', pill: 'متطابق وآني', pillClass: 'is-blue', icon: <ShieldCheckIcon size={24} />, tint: T.mint },
    ].map((s, i) => (all.length === 0 ? { ...s, value: '00' } : s)),
    empty: { icon: <OrgChartIcon size={64} />, title: 'لا توجد أقسام أو إدارات حتى الآن', text: 'ابدأ بإضافة القسم أو الإدارة الأولى لبناء الهيكل التنظيمي للجهة. يمكنك لاحقًا تفريع الإدارات المساندة وربط مراكز التكلفة لاعتماد مسارات المنافسات والمشتريات آليًا وفق الحوكمة المعتمدة.', btn: 'إضافة أول قسم' },
    secondOpts: [ALL, ...mains], widths: [4, 22, 12, 17, 11, 10, 11, 13],
    cols: [{ h: 'اسم القسم / الإدارة' }, { h: 'الرمز التنظيمي' }, { h: 'القسم الأعلى' }, { h: 'الأقسام التابعة' }, { h: 'الحالة' }, { h: 'آخر تحديث' }],
  };
  return (
    <ListPage cfg={cfg} rows={rows} all={all} {...L} onAdd={() => nav('/master-data/departments/new')}>
      {rows.map((r) => (
        <tr key={r.id} className={L.selected.includes(r.id) ? 'is-sel' : ''} onClick={() => nav('/master-data/departments/' + r.id)}>
          <td className="mcb"><Cbx checked={L.selected.includes(r.id)} onChange={() => toggleSel(L.selected, L.setSelected, r.id)} label="تحديد" size={22} /></td>
          <td><div className="vname"><strong className="mname">{r.name}</strong><small>{r.sub}</small></div></td>
          <td>{r.code.startsWith('DEPT') ? <span className="mcode mcode--plain">{r.code}</span> : <span className="mcode">{r.code}</span>}</td>
          <td className="mtxt">{r.parent}</td>
          <td className={'mtxt' + (kids(r) !== '-' ? ' mblue' : '')}>{kids(r)}</td>
          <td><StatusPill s={r.status} now /></td>
          <td>{dateCell(r)}</td>
          <td><RowActions onEdit={() => nav(`/master-data/departments/${r.id}/edit`)} onLock={() => toggle('departments', r.id)} onView={() => nav('/master-data/departments/' + r.id)} onDelete={() => remove('departments', r.id)} /></td>
        </tr>
      ))}
    </ListPage>
  );
}

// ---------- الأصناف ----------
export function ItemsList() {
  const nav = useNavigate();
  const { items: all, categories, remove, toggle } = useMaster();
  const L = useListState();
  const rows = all.filter((r) => L.pass(r, [r.name, r.code, r.desc], r.category === L.filter.second));
  const cats = [...new Set([...categories.filter((c) => c.level === 1).map((c) => c.name), ...all.map((i) => i.category)])];
  const cfg = {
    title: 'الأصناف', sub: 'الدليل المرجعي الموحد للمواد والخدمات وبنود التوريد المعتمدة لمطابقة كراسات الشروط ومواصفات الشراء الحكومي.',
    exportLabel: 'تصدير الفهرس إكسل', addLabel: 'إضافة صنف',
    onExport: () => exportCsv('فهرس-الأصناف', ['رمز الصنف', 'اسم الصنف', 'التصنيف المعتمد', 'وحدة القياس', 'الحالة'], all.map((r) => [r.code, r.name, r.category, r.unit, r.status === 'active' ? 'نشط' : 'غير نشط'])),
    stats: [
      { value: fmt(1488 + all.length - SEED_COUNT.items), unit: 'صنف مقيد', label: 'إجمالي الأصناف المعتمدة', pill: ok('مطابق للترميز الوطني'), pillClass: 'is-text', icon: <DocIcon size={22} />, tint: T.blue },
      { value: '1,792', unit: 'صنف متاح', label: 'أصناف نشطة للمنافسات', icon: <AppsIcon size={20} />, tint: T.blue },
      { value: '84', unit: 'صنف منتهي', label: 'أصناف موقوفة او منتهية', icon: <AppsIcon size={20} />, tint: T.red },
      { value: '16', unit: 'مجال قطاعي', label: 'تصنيفات الإنفاق المرتبطة', pill: 'مربوطة بشجرة الحسابات العامة', pillClass: 'is-blue', icon: <ShieldCheckIcon size={24} />, tint: T.mint },
    ],
    empty: { icon: <CubeIcon size={64} />, title: 'لا توجد أقسام أو إدارات حتى الآن', text: 'ابدأ بإضافة القسم أو الإدارة الأولى لبناء الهيكل التنظيمي للجهة. يمكنك لاحقًا تفريع الإدارات المساندة وربط مراكز التكلفة لاعتماد مسارات المنافسات والمشتريات آليًا وفق الحوكمة المعتمدة.', btn: 'إضافة أول قسم' },
    secondOpts: [ALL, ...cats], widths: [4, 11, 27, 18, 12, 8, 10, 10],
    cols: [{ h: 'رمز الصنف' }, { h: 'اسم الصنف والمواصفة الفنية' }, { h: 'التصنيف المعتمد' }, { h: 'وحدة القياس' }, { h: 'الحالة' }, { h: 'آخر تحديث' }],
  };
  return (
    <ListPage cfg={cfg} rows={rows} all={all} {...L} onAdd={() => nav('/master-data/items/new')}>
      {rows.map((r) => (
        <tr key={r.id} className={L.selected.includes(r.id) ? 'is-sel' : ''} onClick={() => nav('/master-data/items/' + r.id)}>
          <td className="mcb"><Cbx checked={L.selected.includes(r.id)} onChange={() => toggleSel(L.selected, L.setSelected, r.id)} label="تحديد" size={22} /></td>
          <td><span className="mcode">{r.code}</span></td>
          <td><div className="vname"><strong className="mname">{r.name}</strong><small>{r.desc}</small></div></td>
          <td className="mtxt">{r.category}</td>
          <td><span className="mcode mcode--unit">{r.unit}</span></td>
          <td><StatusPill s={r.status} /></td>
          <td>{dateCell(r)}</td>
          <td><RowActions onEdit={() => nav(`/master-data/items/${r.id}/edit`)} onLock={() => toggle('items', r.id)} onView={() => nav('/master-data/items/' + r.id)} onDelete={() => remove('items', r.id)} /></td>
        </tr>
      ))}
    </ListPage>
  );
}

// ---------- وحدات القياس ----------
export function UnitsList() {
  const nav = useNavigate();
  const { units: all, remove, toggle } = useMaster();
  const L = useListState();
  const rows = all.filter((r) => L.pass(r, [r.name, r.symbol, r.desc], true));
  const cfg = {
    title: 'وحدات القياس', sub: 'إدارة وحدات القياس المستخدمة عند تعريف وتوصيف الأصناف في كراسات الشروط ومنافسات الشراء الحكومية والتعميدات المؤسسية.',
    exportLabel: 'تصدير الدليل (Excel/CSV)', addLabel: 'إضافة وحدة قياس',
    onExport: () => exportCsv('وحدات-القياس', ['الوحدة', 'الرمز المختصر', 'الأصناف المرتبطة', 'الحالة'], all.map((r) => [r.name, r.symbol, r.linked + ' صنف مقيد', r.status === 'active' ? 'نشط' : 'غير نشط'])),
    stats: [
      { value: fmt(14 + all.length - SEED_COUNT.units), unit: 'وحدة معتمدة', label: 'إجمالي وحدات القياس', pill: ok('100% مطابقة للمواصفات'), pillClass: 'is-text', icon: <RulerIcon size={22} />, tint: T.blue },
      { value: '12', unit: 'وحدة مفعلة', label: 'الوحدات النشطة للمنافسات', pill: 'جاهزة للاقتباس في العقود 85.7% النسبة', pillClass: 'is-blue', icon: <CircleCheckIcon size={22} />, tint: T.mint },
      { value: '150', unit: 'صنف معتمد', label: 'الأصناف المقيدة بالوحدات', pill: '+12% هذا الربع عبر كافة القطاعات', pillClass: 'is-blue', icon: <AppsIcon size={20} />, tint: T.mint },
      { value: '2', unit: 'وحدة مؤرشفة', label: 'وحدات موقوفة / معطلة', pill: 'محظورة من الطرح الجديد', pillClass: 'is-blue', icon: <PauseCircleIcon size={24} />, tint: T.amber },
    ],
    empty: { icon: <ScalesIcon size={64} />, title: 'لا توجد وحدات قياس حتى الآن', text: 'ابدأ بإضافة وحدات القياس المستخدمة في الأصناف، مثل قطعة وكيلوغرام ومتر، لضمان توحيد بيانات المشتريات وتنظيمها بشكل دقيق.', btn: 'إضافة وحدة قياس' },
    secondOpts: [ALL], widths: [4, 25, 14, 17, 14, 13, 13],
    cols: [{ h: 'الوحدة' }, { h: 'الرمز المختصر (Symbol)' }, { h: 'الأصناف المرتبطة' }, { h: 'الحالة التشغيلية' }, { h: 'آخر تحديث' }],
  };
  return (
    <ListPage cfg={cfg} rows={rows} all={all} {...L} onAdd={() => nav('/master-data/units/new')}>
      {rows.map((r) => (
        <tr key={r.id} className={L.selected.includes(r.id) ? 'is-sel' : ''} onClick={() => nav('/master-data/units/' + r.id)}>
          <td className="mcb"><Cbx checked={L.selected.includes(r.id)} onChange={() => toggleSel(L.selected, L.setSelected, r.id)} label="تحديد" size={22} /></td>
          <td><div className="vname"><strong className="mname">{r.name}</strong><small>{r.desc}</small></div></td>
          <td><span className="mcode mcode--plain">{r.symbol}</span></td>
          <td className="mtxt">{r.linked} صنف مقيد</td>
          <td><StatusPill s={r.status} /></td>
          <td>{dateCell(r)}</td>
          <td><RowActions onEdit={() => nav(`/master-data/units/${r.id}/edit`)} onLock={() => toggle('units', r.id)} onView={() => nav('/master-data/units/' + r.id)} onDelete={() => remove('units', r.id)} /></td>
        </tr>
      ))}
    </ListPage>
  );
}

// ---------- التصنيفات ----------
export function CategoriesList() {
  const nav = useNavigate();
  const { categories, remove, toggle } = useMaster();
  const all = categories.filter((c) => c.level === 1);
  const L = useListState();
  const [open, setOpen] = useState(['c1']);
  const rows = all.filter((r) => L.pass(r, [r.name, r.code], r.parent === L.filter.second || r.name === L.filter.second));
  const kidsOf = (r) => categories.filter((c) => c.level === 2 && c.parent === r.name && c.inList);
  const cfg = {
    title: 'التصنيفات', sub: 'تنظيم الأصناف ضمن تصنيفات واضحة لتسهيل إدارتها واستخدامها عبر منظومة المشتريات.',
    exportLabel: 'تصدير الدليل (Excel/CSV)', addLabel: 'إضافة وحدة قياس',
    onExport: () => exportCsv('التصنيفات', ['اسم التصنيف', 'الرمز', 'التصنيف الأعلى', 'الأصناف المرتبطة', 'الحالة'], categories.map((r) => [r.name, r.code, r.parent, r.count + ' صنف', r.status === 'active' ? 'نشط الآن' : 'غير نشط'])),
    stats: [
      { value: fmt(14 + all.length - SEED_COUNT.categories), unit: 'تصنيف معتمد', label: 'إجمالي التصنيفات', pill: '+2 تصنيف هذا الربع', pillClass: 'is-text', icon: <AppsIcon size={20} />, tint: T.blue },
      { value: '12', unit: 'قطاع أساسي', label: 'التصنيفات الرئيسية', pill: 'مستوى الحوكمة: L1', pillClass: 'is-blue', icon: <SettingsIcon size={20} />, tint: T.mint },
      { value: '16', unit: 'فرع تابع', label: 'التصنيفات الفرعية', pill: 'موزعة بنسبة تغطية 100%', pillClass: 'is-blue', icon: <OrgChartIcon size={22} />, tint: T.blue },
      { value: '1,450', unit: 'صنف مفهرس', label: 'إجمالي الأصناف المرتبطة', pill: ok('جميعها معتمدة ونشطة في الكتالوج'), pillClass: 'is-text', icon: <ClipboardListIcon size={20} />, tint: T.grey },
    ],
    empty: { icon: <AppsIcon size={64} />, title: 'لا توجد تصنيفات حتى الآن', text: 'ابدأ بإضافة التصنيفات لتنظيم الأصناف ضمن مجموعات واضحة، ويمكنك لاحقًا إنشاء تصنيفات فرعية لبناء هيكل منظم يسهل إدارة الأصناف والوصول إليها.', btn: 'إضافة وحدة قياس' },
    secondOpts: [ALL, ...new Set(all.map((c) => c.name))], widths: [4, 24, 12, 17, 14, 11, 13, 13],
    cols: [{ h: 'اسم التصنيف' }, { h: 'الرمز' }, { h: 'التصنيف الأعلى' }, { h: 'الأصناف المرتبطة' }, { h: 'الحالة' }, { h: 'آخر تحديث' }],
  };
  const tog = (id) => setOpen((o) => (o.includes(id) ? o.filter((x) => x !== id) : [...o, id]));
  const Row = (r, child) => (
    <tr key={r.id + (child ? 'k' : '')} className={child ? 'is-child' : ''} onClick={() => nav('/master-data/categories/' + r.id)}>
      <td className="mcb">
        {!child && (
          <button type="button" className="mchev" aria-label="توسيع" onClick={(e) => { e.stopPropagation(); tog(r.id); }}>
            {open.includes(r.id) ? <ChevronUpIcon size={18} /> : <ChevronDownIcon size={18} />}
          </button>
        )}
      </td>
      <td><div className="vname"><strong className="mname">{r.name}</strong><small>{r.sub}</small></div></td>
      <td>{child ? <span className="mcode">{r.code}</span> : <span className="mcode mcode--plain">{r.code}</span>}</td>
      <td className="mtxt">{child ? r.parent : r.parent}</td>
      <td className="mtxt">{r.count} صنف</td>
      <td><StatusPill s={r.status} now /></td>
      <td>{dateCell(r)}</td>
      <td><RowActions onEdit={() => nav(`/master-data/categories/${r.id}/edit`)} onLock={() => toggle('categories', r.id)} onView={() => nav('/master-data/categories/' + r.id)} onDelete={() => remove('categories', r.id)} /></td>
    </tr>
  );
  return (
    <ListPage cfg={cfg} rows={rows} all={all} {...L} onAdd={() => nav('/master-data/categories/new')}>
      {rows.flatMap((r) => [Row(r, false), ...(open.includes(r.id) ? kidsOf(r).map((k) => Row({ ...k, sub: k.sub }, true)) : [])])}
    </ListPage>
  );
}
