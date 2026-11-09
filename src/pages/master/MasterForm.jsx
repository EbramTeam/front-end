import { useState } from 'react';
import { Navigate, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useMaster } from '../../masterStore.jsx';
import { useDepartment, useSaveDepartment } from '../../hooks/use-departments.js';
import { LoadingBlock } from '../../components/Spinner.jsx';
import { COST_CENTERS, GRADE_OPTION, UNIT_GROUPS } from '../../masterData.js';
import { PageHead } from './Bits.jsx';
import Cbx from '../../components/Cbx.jsx';
import { IdCardIcon, ChevronDownIcon, CertIcon, ShieldCheckIcon, InfoCircleIcon, WarnIcon } from '../../components/Icons.jsx';
import { TreeIcon, FolderIcon, FolderOpenIcon, WandIcon, CubeIcon, PlusCircleIcon } from '../../components/MIcons.jsx';

const Tag = () => <span className="mformtag">سجل البنود القياسي<i /></span>;

function Field({ label, req, bad, hint, link, children }) {
  return (
    <div className={'vf' + (bad ? ' is-bad' : '')}>
      <div className="mfl">
        <label className="vf__label">{req && <b>*</b>}{label}</label>
        {link}
      </div>
      {children}
      {hint && <small className="mhint">{hint}</small>}
    </div>
  );
}
const Input = ({ v, set, ph, ...r }) => <input className="vin" value={v} onChange={(e) => set(e.target.value)} placeholder={ph} {...r} />;
const Select = ({ v, set, ph, opts }) => (
  <div className="vselect">
    <select className={'vin' + (v ? '' : ' is-ghost')} value={v} onChange={(e) => set(e.target.value)}>
      <option value="" disabled>{ph}</option>
      {opts.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
    <ChevronDownIcon size={20} />
  </div>
);
const Area = ({ v, set, ph, rows = 7 }) => <textarea className="vin vta" rows={rows} value={v} onChange={(e) => set(e.target.value)} placeholder={ph} />;
const Choice = ({ on, set, title, sub }) => (
  <div className={'mchoice' + (on ? ' is-on' : '')} role="radio" aria-checked={on} tabIndex={0} onClick={set} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), set())}>
    <Cbx checked={on} onChange={set} radio size={24} label={title} />
    <div><strong>{title}</strong><span>{sub}</span></div>
  </div>
);
const Card = ({ icon, title, sub, children }) => (
  <section className="vcard vfcard mformcard">
    <header className="vfhead">
      <span className="vfhead__icon">{icon}</span>
      <div><h2>{title}</h2>{sub && <p>{sub}</p>}</div>
    </header>
    {children}
  </section>
);
const Foot = ({ onCancel, disabled }) => (
  <div className="mfoot">
    <button type="button" className="btn-outline" onClick={onCancel}>إلغاء</button>
    <button type="submit" className="btn-primary" disabled={disabled}>حفظ</button>
  </div>
);
function useForm(init) {
  const [f, setF] = useState(init);
  const [tried, setTried] = useState(false);
  const set = (k) => (v) => setF((p) => ({ ...p, [k]: v }));
  const bad = (k, on = true) => tried && on && !String(f[k] ?? '').trim();
  const check = (e, keys) => {
    e.preventDefault();
    setTried(true);
    const miss = keys.filter((k) => !String(f[k] ?? '').trim());
    if (miss.length) { setTimeout(() => document.querySelector('.vf.is-bad .vin')?.focus(), 0); return false; }
    return true;
  };
  return { f, set, bad, check };
}

// ---------- الأقسام ----------
export function DepartmentForm({ edit }) {
  const { id } = useParams();
  const { department, isLoading } = useDepartment(id);
  if (!edit) return <DepartmentFormBody />;
  if (isLoading) return <LoadingBlock />;
  if (!department) return <Navigate to="/master-data/departments" replace />;
  return <DepartmentFormBody key={id} cur={department} />;
}

function DepartmentFormBody({ cur }) {
  const edit = Boolean(cur);
  const nav = useNavigate();
  const { saveDepartment, isSaving } = useSaveDepartment(cur, (savedId) => nav('/master-data/departments/' + savedId));
  const { f, set, bad, check } = useForm({ name: cur?.name ?? '', code: cur?.code ?? '', cc: '', level: '', desc: '' });
  const submit = (e) => {
    if (check(e, ['name', 'code'])) saveDepartment(f);
  };
  return (
    <form className="vform mform" onSubmit={submit} noValidate>
      <PageHead title={edit ? 'تعديل قسم أو إدارة جديدة' : 'إضافة قسم أو إدارة جديدة'} sub={edit ? 'تعديل بيانات وحدة تنظيمية  ضمن الهيكل الإداري للمنظومة وربطها بالصلاحيات ومسارات الشراء.' : 'إنشاء وحدة تنظيمية جديدة ضمن الهيكل الإداري للمنظومة وربطها بالصلاحيات ومسارات الشراء.'} tag={<Tag />} />
      <Card icon={<IdCardIcon size={22} />} title="البيانات الأساسية للقسم" sub="البيانات الإلزامية لتسجيل وتتبع الكود في النظم الحكومية">
        <Field label="اسم القسم أو الإدارة" req bad={bad('name')}><Input v={f.name} set={set('name')} ph="مثال: الإدارة العامة للتحول الرقمي أو قسم الدعم الفني" /></Field>
        <div className="vf2">
          <Field label="رمز القسم المرجعي (Code)" req bad={bad('code')}><Input v={f.code} set={set('code')} ph="مثال: SEC-SUP-02 أو DEPT-DIG-05" /></Field>
          <Field label="مركز التكلفة المالي المرتبط"><Select v={f.cc} set={set('cc')} ph="اختر التصنيف الرئيسي للصنف..." opts={COST_CENTERS} /></Field>
        </div>
        <Field label="نوع الوحدة التنظيمية (Department Level)">
          <div className="mchoices">
            <Choice on={f.level === 'main'} set={() => set('level')('main')} title="إدارة رئيسية مستقلة" sub="مستوى أول ترتبط مباشرة بالرئيس التنفيذي أو وكيل الوزارة." />
            <Choice on={f.level === 'sub'} set={() => set('level')('sub')} title="قسم فرعي تابع لإدارة رئيسية" sub="مستوى ثان يتطلب تحديد الإدارة المشرفة لتدفق التواقيع." />
          </div>
        </Field>
      </Card>
      <Card icon={<CertIcon size={22} />} title="التوصيف والمسؤوليات" sub="نطاق عمل القسم ومسؤولياته في منظومة طلبات الشراء والمنافسات">
        <Field label="وصف القسم واختصاصاته"><Area v={f.desc} set={set('desc')} ph="اكتب نبذة موجزة عن مهام القسم ومسؤولياته في تدقيق واعتماد طلبات المشتريات وفحص العروض الفنية..." /></Field>
      </Card>
      <Foot disabled={isSaving} onCancel={() => nav(edit ? '/master-data/departments/' + cur.id : '/master-data/departments')} />
    </form>
  );
}

// ---------- الأصناف ----------
export function ItemForm({ edit }) {
  const nav = useNavigate();
  const { id } = useParams();
  const { items, units, categories, add, update } = useMaster();
  const cur = edit ? items.find((d) => d.id === id) : null;
  const { f, set, bad, check } = useForm(cur ? { name: cur.name, code: cur.code, category: cur.category, grade: cur.grade || '', vat: cur.vat || '', unit: cur.unit, desc: cur.desc } : { name: '', code: '', category: '', grade: '', vat: '', unit: '', desc: '' });
  if (edit && !cur) return <Navigate to="/master-data/items" replace />;
  const cats = [...new Set([...categories.filter((c) => c.level === 1).map((c) => c.name), ...items.map((i) => i.category)])];
  const submit = (e) => {
    if (!check(e, ['name', 'code', 'category', 'grade', 'vat', 'unit', 'desc'])) return;
    const rec = { name: f.name.trim(), code: f.code.trim(), category: f.category, grade: f.grade, vat: f.vat.trim(), unit: f.unit, desc: f.desc.trim() };
    if (edit) { update('items', cur.id, rec); nav('/master-data/items/' + cur.id); }
    else { const nid = add('items', { ...rec, status: 'active' }); nav('/master-data/items/' + nid); }
  };
  return (
    <form className="vform mform" onSubmit={submit} noValidate>
      <PageHead title={edit ? 'تعديل بيانات عنصر' : 'إضافة صنف جديد'} sub={edit ? 'تعديل بيانات بند توريد أو خدمة  ضمن الدليل المرجعي الموحد لطلبات ومنافسات الشراء الحكومي.' : 'تسجيل بند توريد أو خدمة جديدة ضمن الدليل المرجعي الموحد لطلبات ومنافسات الشراء الحكومي.'} tag={<Tag />} />
      <Card icon={<IdCardIcon size={22} />} title="البيانات الأساسية والتعريفية للصنف" sub="البيانات الإلزامية لتسجيل وتتبع الكود في النظم الحكومية">
        <Field label="اسم الصنف الرسمي" bad={bad('name')}><Input v={f.name} set={set('name')} ph="أدخل الاسم الرسمي المعتمد للصنف (مثال: محطة عمل حاسوبية احترافية)..." /></Field>
        <div className="vf2">
          <Field label="رمز الصنف المرجعي (SKU / Code)" req bad={bad('code')}><Input v={f.code} set={set('code')} ph="مثال: SEC-SUP-02 أو DEPT-DIG-05" /></Field>
          <Field label="التصنيف المعتمد" req bad={bad('category')}><Select v={f.category} set={set('category')} ph="اختر التصنيف الرئيسي للصنف..." opts={cats} /></Field>
        </div>
        <div className="vf2">
          <Field label="رقم السجل التجاري / الرقم الموحد (10 أرقام)" req bad={bad('grade')}><Select v={f.grade} set={set('grade')} ph={GRADE_OPTION} opts={[GRADE_OPTION]} /></Field>
          <Field label="الرقم الضريبي (VAT ID)" req bad={bad('vat')}><Input v={f.vat} set={set('vat')} ph="300948291000003" inputMode="numeric" /></Field>
        </div>
        <Field label="وحدة القياس القياسية" req bad={bad('unit')}><Select v={f.unit} set={set('unit')} ph="اختر وحدة القياس المعيارية في جداول الكميات..." opts={units.map((u) => u.name)} /></Field>
      </Card>
      <Card icon={<CertIcon size={22} />} title="التوصيف والمواصفات الفنية القياسية" sub="بيان الخصائص والمعايير المطلوب الالتزام بها من الموردين">
        <Field label="وصف الصنف ومحدداته المعيارية" req bad={bad('desc')}><Area v={f.desc} set={set('desc')} rows={8} ph="اكتب التوصيف الدقيق للبند ومجال استخدامه والمواصفات الفنية المعيارية المطلوبة..." /></Field>
      </Card>
      <Foot onCancel={() => nav(edit ? '/master-data/items/' + cur.id : '/master-data/items')} />
    </form>
  );
}

// ---------- وحدات القياس ----------
export function UnitForm({ edit }) {
  const nav = useNavigate();
  const { id } = useParams();
  const { units, add, update } = useMaster();
  const cur = edit ? units.find((d) => d.id === id) : null;
  const { f, set, bad, check } = useForm(cur ? { name: cur.name, symbol: cur.symbol, group: cur.group || '', desc: cur.longDesc || cur.desc || '', st: cur.status === 'active' ? 'active' : 'draft' } : { name: '', symbol: '', group: '', desc: '', st: 'active' });
  if (edit && !cur) return <Navigate to="/master-data/units" replace />;
  const submit = (e) => {
    if (!check(e, ['name', 'symbol', 'group', 'desc'])) return;
    const rec = { name: f.name.trim(), title: f.name.trim(), symbol: f.symbol.trim(), group: f.group, desc: f.desc.trim(), longDesc: f.desc.trim(), status: f.st === 'active' ? 'active' : 'off' };
    if (edit) { update('units', cur.id, rec); nav('/master-data/units/' + cur.id); }
    else { const nid = add('units', { ...rec, linked: 0, uom: 'UOM-ID-' + String(Math.floor(1000 + Math.random() * 9000)) }); nav('/master-data/units/' + nid); }
  };
  return (
    <form className="vform mform" onSubmit={submit} noValidate>
      <PageHead title={edit ? 'تعديل وحدة قياس' : 'إضافة وحدة قياس جديدة'} sub={edit ? 'تعديل وحدة قياس معتمدة جديدة في الدليل المرجعي وتحديد رمزها المختصر لاستخدامها في توصيف الأصناف وكراسات الشروط.' : 'تعريف وحدة قياس معتمدة جديدة في الدليل المرجعي وتحديد رمزها المختصر لاستخدامها في توصيف الأصناف وكراسات الشروط.'} tag={<Tag />} />
      <div className="mcols mcols--form">
        <div className="mcol">
          <Card icon={<IdCardIcon size={22} />} title="بطاقة البيانات الأساسية والتعريفية" sub="البيانات الإلزامية لتسجيل وحدة القياس في النظم الحكومية">
            <Field label="اسم وحدة القياس" req bad={bad('name')}><Input v={f.name} set={set('name')} ph="كيلو غرام" /></Field>
            <div className="vf2">
              <Field label="الرمز المختصر (Symbol)" req bad={bad('symbol')}><Input v={f.symbol} set={set('symbol')} ph="KG" /></Field>
              <Field label="التصنيف القياسي الدولي" req bad={bad('group')}><Select v={f.group} set={set('group')} ph="الكتلة والوزن (Mass & Weight)" opts={UNIT_GROUPS} /></Field>
            </div>
            <Field label="وصف الوحدة ونطاق الاستخدام" req bad={bad('desc')}><Area v={f.desc} set={set('desc')} rows={8} ph="اكتب التوصيف الدقيق للبند ومجال استخدامه والمواصفات الفنية المعيارية المطلوبة..." /></Field>
          </Card>
          <Card icon={<CertIcon size={22} />} title="الحالة التشغيلية واعتماد البند" sub="التحكم في ظهور البند في بوابات طلبات الشراء ومشاريع الكراسات">
            <div className="mchoices">
              <Choice on={f.st === 'active'} set={() => set('st')('active')} title="نشط ومتاح للأصناف فوراً" sub="مفعل لطلبات الشراء، الفواتير، وتوصيف كراسات الشروط والمنافسات." />
              <Choice on={f.st === 'draft'} set={() => set('st')('draft')} title="مسودة قيد المراجعة والتدقيق" sub="محجوبة عن اختيار مدخلي البيانات والأصناف حتى اعتمادها النهائي." />
            </div>
          </Card>
          <Foot onCancel={() => nav(edit ? '/master-data/units/' + cur.id : '/master-data/units')} />
        </div>
        <div className="mcol">
          <section className="mcard mgovside">
            <header className="mcardhead mcardhead--rev"><ShieldCheckIcon size={20} /><div><h2>الحوكمة والضوابط الرقابية</h2><small>مرسوم إدارة المشتريات م-84</small></div></header>
            <div className="mnote mnote--blue"><b>قاعدة تفرد الرمز واسم الوحدة</b><p>تمنع اللائحة الفنية إدراج أي وحدة قياس تشترك في نفس الرمز المختصر أو الاسم اللغوي مع وحدة قائمة لمنع الازدواجية في المنافسات التوريدية وتضارب الفواتير الرقمية.</p></div>
            <div className="mnote mnote--green"><b>تجريد التسعير والكميات</b><p>تعتبر وحدات القياس كيانات معيارية مجردة تماماً؛ لا ترتبط بالأسعار التعاقدية أو الحدود الدنيا للطلب، حيث تحدد تلك المتغيرات حصراً داخل كراسة شروط كل منافسة.</p></div>
            <div className="mnote mnote--blue mnote--audit">
              <b>سجل التدقيق الآلي (Audit Trail)</b>
              <div><span>منشئ السجل:</span><em>د. عبدالله المنصور (SYS-ADM)</em></div>
              <div><span>الختم الزمني:</span><em>2025-05-18 10:42:09 AST</em></div>
              <div><span>مستوى الصلاحية:</span><em className="is-b">(Tier 1) اعتماد سيادي مباشر</em></div>
            </div>
          </section>
          <section className="mcard mactive">
            <span className="mactive__icon"><CubeIcon size={22} /></span>
            <div><strong>الوحدات النشطة حالياً</strong><small>{units.filter((u) => u.status === 'active').length} وحدة معتمدة</small></div>
          </section>
        </div>
      </div>
    </form>
  );
}

// ---------- التصنيفات ----------
export function CategoryForm({ edit }) {
  const nav = useNavigate();
  const { id } = useParams();
  const [sp] = useSearchParams();
  const { categories, add, update } = useMaster();
  const cur = edit ? categories.find((d) => d.id === id) : null;
  const par = !edit && sp.get('parent') ? categories.find((c) => c.id === sp.get('parent')) : null;
  const { f, set, bad, check } = useForm(cur ? { name: cur.name, code: cur.code, type: cur.level === 1 ? 'main' : 'sub', parent: cur.level === 1 ? '' : cur.parent, desc: cur.desc || '' } : { name: '', code: '', type: par ? 'sub' : 'main', parent: par ? par.name : '', desc: '' });
  if (edit && !cur) return <Navigate to="/master-data/categories" replace />;
  const parents = [...new Set(categories.filter((c) => !cur || c.id !== cur.id).map((c) => c.name))];
  const submit = (e) => {
    if (!check(e, ['name', 'code'].concat(f.type === 'sub' ? ['parent'] : []))) return;
    const rec = { name: f.name.trim(), full: f.name.trim(), code: f.code.trim(), level: f.type === 'main' ? 1 : 2, parent: f.type === 'main' ? 'تصنيف رئيسي مستقلة' : f.parent, desc: f.desc.trim() };
    if (edit) { update('categories', cur.id, rec); nav('/master-data/categories/' + cur.id); }
    else { const nid = add('categories', { ...rec, sub: '', count: 0, status: 'active', inList: true }); nav('/master-data/categories/' + nid); }
  };
  const gen = () => set('code')(`CAT-ICT-${new Date().getFullYear()}-${String(categories.length + 1).padStart(2, '0')}`);
  const nm = f.name.trim() || 'الخوادم والعتاد الشبكي المؤسسي...';
  return (
    <form className="vform mform" onSubmit={submit} noValidate>
      <PageHead title={edit ? 'تعديل تصنيف' : 'إضافة تصنيف جديد'} sub={edit ? 'قم بتعديل بيانات التصنيف الجديد وتحديد موقعه في الهيكل التنظيمي للمشتريات والأصناف السيادية.' : 'قم بإدخال بيانات التصنيف الجديد وتحديد موقعه في الهيكل التنظيمي للمشتريات والأصناف السيادية.'} tag={<Tag />} />
      <div className="mcols mcols--form">
        <div className="mcol">
          <section className="vcard vfcard mformcard">
            <header className="mcardhead mcardhead--cat"><h2>البيانات الأساسية لتصنيف</h2><span className="mreq">الحقول المطلوبة ملزمة للحوكمة</span></header>
            <Field label="اسم التصنيف المعتمد" req bad={bad('name')} hint="اسم واضح ومميز للتصنيف يظهر في شاشات المشتريات، كراسات الشروط، ومستودعات الجهة."><Input v={f.name} set={set('name')} ph="مثال: الخوادم والعتاد الشبكي المؤسسي" /></Field>
            <Field label="رمز التصنيف السيادي (Code)" req bad={bad('code')} hint="معرف فريد للتصنيف وفق الدليل الموحد لترميز الأصول والمشتريات الحكومية (مثال: CAT-MED-01)." link={<button type="button" className="mwand" onClick={gen}><WandIcon size={14} />توليد تلقائي وفق الدليل</button>}><Input v={f.code} set={set('code')} ph="CAT-ICT-2024-08" /></Field>
            <div className="mdivider" />
            <Field label="نوع ومستوى التصنيف الشجري">
              <div className="mchoices">
                <Choice on={f.type === 'main'} set={() => set('type')('main')} title="تصنيف رئيسي (مستوى أول)" sub="مستوى استراتيجي مستقل يمثل قطاعاً رئيسياً للمشتريات بدون تبعية لتصنيف أب." />
                <Choice on={f.type === 'sub'} set={() => set('type')('sub')} title="تصنيف فرعي (تابع)" sub="يندرج تحت قطاع أو تصنيف رئيسي معتمد، لربط السلع والأصناف الدقيقة." />
              </div>
            </Field>
            <Field label="التصنيف الأعلى (التصنيف الأب)" req bad={bad('parent', f.type === 'sub')} hint="اختر التصنيف الرئيسي التابع له. يتم منع اختيار التصنيف نفسه لمنع حدوث تكرار حلقي (Cyclic Redundancy).">
              <Select v={f.parent} set={set('parent')} ph="تقنية المعلومات > البنية التحتية والشبكات" opts={parents} />
            </Field>
            <Field label="وصف التصنيف ومجال التطبيق (إختياري)"><Area v={f.desc} set={set('desc')} rows={8} ph="اكتب التوصيف الدقيق للبند ومجال استخدامه والمواصفات الفنية المعيارية المطلوبة..." /></Field>
          </section>
          <Foot onCancel={() => nav(edit ? '/master-data/categories/' + cur.id : '/master-data/categories')} />
        </div>
        <div className="mcol">
          <section className="mcard mpreview">
            <header className="mcardhead mcardhead--rev"><span className="mcardhead__icon mcardhead__icon--sq"><TreeIcon size={20} /></span><div><h2>معاينة المسار الشجري</h2><p>هكذا سيظهر موقع هذا التصنيف ضمن المستودع الرقمي ومسار التوريد المؤسسي:</p></div></header>
            <div className="mtree">
              {f.type === 'sub' && f.parent && <div className="mtree__n"><FolderIcon size={14} />{f.parent}</div>}
              <div className="mtree__n is-cur"><PlusCircleIcon size={14} />{nm}</div>
            </div>
            <div className="mtax"><small>مسار الربط التسلسل (Taxonomy Path):</small><b dir="ltr">ICT / INFRA / {f.code.trim() || 'CAT-ICT-2024-08'}</b></div>
            <div className="mdens"><div><small>كثافة الفئات المرتبطة بالقطاع الأب:</small><span><b>28 تصنيف فرعي نشط</b><em>84% جاهزة</em></span></div><div className="mbar"><i style={{ width: '84%', background: '#0a3a4a' }} /></div></div>
          </section>
          <section className="mcard mguide">
            <header className="mcardhead mcardhead--rev"><span className="mcardhead__icon mcardhead__icon--sq"><TreeIcon size={20} /></span><h2>إرشادات هيكل التصنيفات</h2></header>
            <ul>
              <li><span className="mg mg--a"><CubeIcon size={14} /></span><p><b>التصنيفات الرئيسية:</b> تمثل القطاعات العامة للمشتريات (مثل: تقنية المعلومات، التجهيزات المكتبية، الخدمات الطبية).</p></li>
              <li><span className="mg mg--b"><FolderOpenIcon size={14} /></span><p><b>التصنيفات الفرعية:</b> تساعد مسؤولي المستودعات ومدراء العقود على تصفية وتجميع الأصناف بدقة ومنع الازدواجية.</p></li>
              <li><span className="mg mg--c"><WarnIcon size={14} /></span><p><b>قاعدة الحوكمة:</b> لا يمكن ربط تصنيف بنفسه كأب، وتغيير التصنيف الأب لاحقاً يؤثر فوراً على تقارير التصنيف التراكمية وسجلات التدقيق المالي.</p></li>
            </ul>
            <div className="mhelp"><small><InfoCircleIcon size={13} />هل تحتاج لمعيار ترميز مخصص؟</small><b>تواصل مع فريق حوكمة البيانات الموحدة</b></div>
          </section>
        </div>
      </div>
    </form>
  );
}
