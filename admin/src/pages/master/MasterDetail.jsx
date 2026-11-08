import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useMaster, two } from '../../masterStore.jsx';
import { useDepartment, useToggleDepartment } from '../../hooks/use-departments.js';
import { LoadingBlock } from '../../components/Spinner.jsx';
import { ITEM_LONG } from '../../masterData.js';
import Cbx from '../../components/Cbx.jsx';
import { StatusPill, RowActions } from './Bits.jsx';
import { IdCardIcon, ClockHistoryIcon, ShieldCheckIcon, GavelIcon, CircleCheckIcon, PencilIcon, LockIcon, DotsVerticalIcon, CertIcon, PieIcon, ReportIcon } from '../../components/Icons.jsx';
import { TreeIcon, CubeIcon, ClipboardCheckIcon, CheckBadgeIcon, LinkIcon, ClipboardListIcon, FileTextIcon, AppsIcon, RulerIcon } from '../../components/MIcons.jsx';

const CREATED = '12 أكتوبر 2026';
const AUDITED = '26 أكتوبر 2026';
const UPD = '24 أكتوبر 2026 - 11:30 ص';

function Head({ title, sub, upd, chips, btns, center }) {
  return (
    <section className="vhead mhead">
      <div className="mhead__main">
        <h1>{title}</h1>
        {sub && <p className="mhead__sub">{sub}</p>}
        <div className="vhead__upd"><ClockHistoryIcon size={14} />آخر تحديث: {upd}</div>
        <div className={'mchips' + (center ? ' is-center' : '')}>
          {chips.map((c, i) => (c.ok ? <span key={i} className="mchip mchip--ok">{c.t}<i /></span> : <span key={i} className="mchip">{c.t}</span>))}
        </div>
      </div>
      <div className="mhead__btns">{btns}</div>
    </section>
  );
}
const Btns = ({ onAdd, addLabel, onEdit, editLabel, off, onToggle, offLabel, onLabel }) => (
  <>
    {onAdd && <button type="button" className="vbtn vbtn--blue" onClick={onAdd}>{addLabel}</button>}
    <button type="button" className="btn-primary vbtn" onClick={onEdit}>{editLabel}</button>
    <button type="button" className={'vbtn ' + (off ? 'vbtn--blue' : 'vbtn--danger')} onClick={onToggle}>{off ? onLabel : offLabel}</button>
  </>
);
const Tile = ({ label, children, wide, className = '' }) => (
  <div className={'mtile' + (wide ? ' is-wide' : '') + ' ' + className}>
    <span className="mtile__label">{label}</span>
    <b className="mtile__value">{children}</b>
  </div>
);
const CardHead = ({ icon, title, tag }) => (
  <header className="mcardhead">
    <span className="mcardhead__icon">{icon}</span>
    <h2>{title}</h2>
    {tag && <span className="vtag">{tag}</span>}
  </header>
);

// ---------- الأقسام ----------
export function DepartmentDetail() {
  const nav = useNavigate();
  const { id } = useParams();
  const { department: d, isLoading } = useDepartment(id);
  const { toggleDepartment } = useToggleDepartment();
  if (isLoading) return <LoadingBlock />;
  if (!d) return <Navigate to="/master-data/departments" replace />;
  const kids = [];
  const off = d.status !== 'active';
  const kidsText = (k) => k.scope || 'نطاق المهام: ' + (k.desc || '');
  return (
    <div className="mdetail">
      <Head
        title={d.name} upd="—" center
        chips={[{ t: '#' + d.code }, { t: off ? 'غير نشط' : 'نشط', ok: !off }, { t: 'مركز تكلفة رئيسي: ' + d.cc }]}
        btns={<Btns onEdit={() => nav(`/master-data/departments/${d.id}/edit`)} editLabel="تعديل بيانات القسم" off={off} onToggle={() => toggleDepartment(d)} offLabel="تعطيل الإدارة" onLabel="إعادة تفعيل الإدارة" />}
      />
      <div className="mcols">
        <div className="mcol">
          <section className="mcard">
            <CardHead icon={<IdCardIcon size={22} />} title="بطاقة المعلومات العامة" tag="بيانات موثوقة" />
            <div className="mgrid">
              <Tile label="اسم الوحدة التنظيمية" wide>{d.name}</Tile>
              <Tile label="الرقم المرجعي">{d.code}</Tile>
              <Tile label="مركز التكلفة">{d.cc}</Tile>
              <Tile label="تاريخ الإنشاء">—</Tile>
              <Tile label="أخر تحديث وتدقيق">—</Tile>
              <Tile label="الموظفون النشطون">{d.staff}</Tile>
            </div>
          </section>
          <section className="mcard">
            <CardHead icon={<CertIcon size={22} />} title="الوصف والمهام التنفيذية" />
            {d.desc && <p className="mdesc">{d.desc}</p>}
            <div className="mgrid3">
              <div className="mfeat"><LinkIcon size={26} /><b>مطابقة %100</b><span>نظام المنافسات</span></div>
              <div className="mfeat"><ShieldCheckIcon size={26} /><b>صلاحية كاملة</b><span>الترسية والى</span></div>
              <div className="mfeat"><PieIcon size={26} /><b>ربط فوري</b><span>المنظومة المالية</span></div>
            </div>
          </section>
        </div>
        <div className="mcol">
          <section className="mcard mside">
            <CardHead icon={<TreeIcon size={22} />} title={'الأقسام الفرعية التابعة' + (kids.length ? ` (${kids.length} أقسام)` : '')} />
            <p className="mside__sub">الوحدات الإدارية الفرعية المسجلة ضمن الهيكل الحالي</p>
            {kids.length === 0 ? (
              <div className="mempty mempty--small">
                <span className="mempty__icon"><span><TreeIcon size={44} /></span></span>
                <h3>لا توجد أقسام فرعية تابعة</h3>
                <p>ابدأ بإضافة القسم الفرعي الأول لبناء الهيكل التنظيمي للجهة. يمكنك لاحقاً تفريع الإدارات المساندة وربط مراكز التكلفة لاعتماد مسارات المنافسات والمشتريات آلياً وفق الحوكمة المعتمدة.</p>
                <button type="button" className="btn-primary" onClick={() => nav('/master-data/departments/new')}>إضافة أول قسم</button>
              </div>
            ) : (
              <>
                <div className="mkids">
                  {kids.map((k) => (
                    <div key={k.id} className="mkid" onClick={() => nav('/master-data/departments/' + k.id)}>
                      <div className="mkid__top">
                        <strong>{k.name}</strong>
                        <button type="button" className="mkid__edit" aria-label="تعديل" onClick={(e) => { e.stopPropagation(); nav(`/master-data/departments/${k.id}/edit`); }}><PencilIcon size={14} /></button>
                      </div>
                      <p>{kidsText(k)}</p>
                      <div className="mkid__bottom">
                        <div className="mkid__stats"><span>{k.tenders ?? 0} منافسات فعالة</span><span>{k.staff ?? 0} موظفين متخصصين</span></div>
                        <span className="mcode">{k.code}</span>
                        <span className={'mkid__st' + (k.status === 'active' ? '' : ' is-off')}>{k.status === 'active' ? 'نشط' : 'غير نشط'}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button type="button" className="btn-primary mkids__add" onClick={() => nav('/master-data/departments/new?parent=' + d.id)}>إضافة قسم فرعي جديد</button>
              </>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

// ---------- عمود الحوكمة (الأصناف + الوحدات) ----------
function Gov({ title = 'حالة وحدة القياس', logTitle = 'سجل العمليات والاعتمادات' }) {
  return (
    <>
      <section className="mcard mgov">
        <CardHead icon={<CheckBadgeIcon size={22} />} title="سلامة الحوكمة والامتثال" />
        <div className="mbox">
          <div className="mbox__row"><span>التشفير المرجعي للسجل</span><b className="is-g">SHA-256 Verified</b></div>
          <div className="mbar"><i style={{ width: '100%', background: '#0a5c36' }} /></div>
          <small>hash: 9f8a...c32d (موثق بسلسلة التدقيق)</small>
        </div>
        <div className="mbox">
          <div className="mbox__row"><span>مطابقة كود الإنفاق الحكومي</span><b className="is-b">متوافق 100%</b></div>
          <div className="mbar"><i style={{ width: '100%', background: '#0077ff' }} /></div>
          <small>متوافق مع دليل الحسابات الموحد للإنفاق التقني</small>
        </div>
        <div className="mbox mbox--ok">
          <div><strong>{title}</strong><small>نشطة وصالحة في دليل UOM</small></div>
          <CircleCheckIcon size={26} />
        </div>
        <div className="mbox mbox--dark">
          <span className="mbox__gavel"><GavelIcon size={22} /></span>
          <div><small>جهة الحوكمة المعتمدة</small><strong>لجنة توحيد مواصفات تقنية المعلومات</strong></div>
        </div>
      </section>
      <section className="mcard mlog">
        <header className="mcardhead">
          <span className="mcardhead__icon mcardhead__icon--sq"><ClockHistoryIcon size={20} /></span>
          <h2>{logTitle}</h2>
          <span className="mlog__tag">3 عمليات موثقة</span>
        </header>
        <ol className="mtl">
          <li className="is-blue">
            <div className="mtl__top"><small>22 أكتوبر 2024</small><small>11:30 ص</small></div>
            <b>تحديث الوصف الفني والمعايير</b>
            <p>تم تحديث المواصفات لتتوافق مع متطلبات ضوابط الأمن السيبراني للأنظمة السحابية (CCC).</p>
            <small className="mtl__by">بواسطة: د. عبدالله المنصور (مدير النظام)</small>
          </li>
          <li>
            <div className="mtl__top"><small>15 مارس 2024</small><small>09:15 ص</small></div>
            <b>ربط بالتصنيف الفرعي للخدمات</b>
            <p>إسناد الكود المرجعي (CLS-IT-04) لتسهيل الفرز الآلي في</p>
          </li>
        </ol>
      </section>
    </>
  );
}

// ---------- الأصناف ----------
export function ItemDetail() {
  const nav = useNavigate();
  const { id } = useParams();
  const { items, units, toggle } = useMaster();
  const it = items.find((x) => x.id === id);
  if (!it) return <Navigate to="/master-data/items" replace />;
  const off = it.status !== 'active';
  const seed = it.desc.startsWith('خوادم افتراضية');
  const unit = units.find((u) => u.name === it.unit);
  const uom = unit?.uom;
  const code = it.code.replace(/ /g, '');
  return (
    <div className="mdetail">
      <Head
        title={it.name} sub={seed ? 'بند مرجعي معتمد ضمن كود تقنية المعلومات الحكومية الموحدة والمتوافق مع الهيئة الوطنية للأمن السيبراني.' : it.desc} upd={it.audited || UPD}
        chips={[{ t: code }, { t: 'التصنيف: ' + it.category }, { t: off ? 'غير نشط' : 'نشط', ok: !off }, { t: 'وحدة القياس: ' + it.unit + (uom ? ` (${uom})` : '') }]}
        btns={<Btns onEdit={() => nav(`/master-data/items/${it.id}/edit`)} editLabel="تعديل الصنف" off={off} onToggle={() => toggle('items', it.id)} offLabel="تعطيل الصنف" onLabel="إعادة تفعيل الصنف" />}
      />
      <div className="mcols">
        <div className="mcol">
          <section className="mcard">
            <CardHead icon={<IdCardIcon size={22} />} title="البيانات التعريفية والتشغيلية للصنف" tag="بيانات موثوقة" />
            <div className="mgrid">
              <Tile label="رمز الصنف القياسي (Unique Item Code)">{code}</Tile>
              <Tile label="الاسم الرسمي في الدليل الوطني">{it.name}</Tile>
              <Tile label="التصنيف المرجعي والتسلسل الهيكلي">{seed ? 'CLS-IT- 04 : ' : ''}{it.category}</Tile>
              <Tile label="وحدة القياس المعتمدة للعقود (UOM)">{uom ? uom + ' : ' : ''}{it.unit}</Tile>
              <Tile label="الحالة التشغيلية في النظام العام" wide>{off ? 'غير نشط' : 'متاح بشكل مباشر لجميع طلبات الشراء، كراسات الشروط، والمنافسات التوريدية الجديدة.'}</Tile>
              <Tile label="تاريخ الإنشاء">{it.created || CREATED}</Tile>
              <Tile label="أخر تحديث وتدقيق">{it.audited || AUDITED}</Tile>
            </div>
          </section>
          <section className="mcard">
            <CardHead icon={<CertIcon size={22} />} title="الوصف والمواصفات المعيارية" />
            <p className="mdesc">{seed ? ITEM_LONG : it.desc}</p>
          </section>
        </div>
        <div className="mcol"><Gov /></div>
      </div>
    </div>
  );
}

// ---------- وحدات القياس ----------
export function UnitDetail() {
  const nav = useNavigate();
  const { id } = useParams();
  const { units, items, toggle } = useMaster();
  const u = units.find((x) => x.id === id);
  if (!u) return <Navigate to="/master-data/units" replace />;
  const off = u.status !== 'active';
  const linked = items.filter((i) => i.unit === u.name);
  return (
    <div className="mdetail">
      <Head
        title={u.title || u.name} sub={u.subtitle || u.desc} upd={u.audited || UPD}
        chips={[{ t: 'المعرف الموحد: ' + (u.uom || '—') }, { t: 'التصنيف: ' + (u.group || '—') }, { t: off ? 'غير نشط' : 'نشط', ok: !off }, { t: u.symbol }]}
        btns={<Btns onEdit={() => nav(`/master-data/units/${u.id}/edit`)} editLabel="تعديل الوحدة" off={off} onToggle={() => toggle('units', u.id)} offLabel="تعطيل الوحدة" onLabel="إعادة تفعيل الوحدة" />}
      />
      <div className="mcols">
        <div className="mcol">
          <section className="mcard">
            <CardHead icon={<IdCardIcon size={22} />} title="بيانات التعريف والحوكمة التشغيلية" tag="SEC-CLASS-A" />
            <div className="mgrid">
              <Tile label="اسم الوحدة باللغة الرسمية">{u.name}</Tile>
              <Tile label="الرمز المختصر (ISO / UN)">{u.symbol}</Tile>
              <Tile label="الحالة التشغيلية ومستوى الإتاحة">{off ? 'مسودة قيد المراجعة والتدقيق' : 'نشط ومتاح للأصناف والمنافسات'}</Tile>
              <Tile label="طبيعة الكميات والتجزئة">{u.nature || '—'}</Tile>
              <Tile label="الوصف المعتمد في كراسات الشروط والتعاقدات:" wide>{u.longDesc || u.desc || '—'}</Tile>
              <Tile label="تاريخ الإنشاء">{u.created || CREATED}</Tile>
              <Tile label="أخر تحديث وتدقيق">{u.audited || AUDITED}</Tile>
            </div>
          </section>
          <section className="mcard">
            <CardHead icon={<CubeIcon size={22} />} title="الأصناف المرتبطة بالوحدة" tag={u.linked + ' صنف مقيد'} />
            <div className="mmini">
              <table>
                <thead><tr><th>اسم الصنف والمواصفة</th><th>كود الصنف المؤسسي</th><th>التصنيف الرئيسي</th><th>مستوى الاستهلاك</th><th>الحالة</th></tr></thead>
                <tbody>
                  {linked.slice(0, 5).map((i) => (
                    <tr key={i.id} onClick={() => nav('/master-data/items/' + i.id)}>
                      <td>{i.name}</td><td>{i.code}</td><td>{i.category}</td><td>—</td><td><StatusPill s={i.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
        <div className="mcol"><Gov /></div>
      </div>
    </div>
  );
}

// ---------- التصنيفات ----------
export function CategoryDetail() {
  const nav = useNavigate();
  const { id } = useParams();
  const { categories, toggle, remove } = useMaster();
  const c = categories.find((x) => x.id === id);
  if (!c) return <Navigate to="/master-data/categories" replace />;
  const off = c.status !== 'active';
  const kids = categories.filter((k) => k.level === 2 && k.parent === c.name);
  const full = c.full || c.name;
  return (
    <div className="mdetail">
      <Head
        title={c.name} sub={c.level === 1 ? 'تصنيف رئيسي (المستوى الأول - L1)' : 'تصنيف فرعي (تابع)'} upd={c.audited || UPD}
        chips={[{ t: 'مركز التكلفة:' + (c.cc || '—') }, { t: 'المسؤول: ' + (c.owner || '—') }, { t: off ? 'غير نشط' : 'نشط', ok: !off }, { t: c.code }]}
        btns={<Btns onEdit={() => nav(`/master-data/categories/${c.id}/edit`)} editLabel="تعديل التصنيف" off={off} onToggle={() => toggle('categories', c.id)} offLabel="تعطيل التصنيف" onLabel="إعادة تفعيل التصنيف" />}
      />
      <div className="mstats3">
        <div className="vstat"><div className="vstat__text"><div className="vstat__row"><strong>{kids.length}</strong><em>فئات رئيسية</em></div><span>التصنيفات الفرعية التابعة</span><small className="is-text">اكتمال تغطية الهيكل 100%</small></div><span className="vstat__icon" style={{ background: '#e8f6ff', color: '#0b2a4a' }}><AppsIcon size={20} /></span></div>
        <div className="vstat"><div className="vstat__text"><div className="vstat__row"><strong>{c.count}</strong><em>صنف مفهرس</em></div><span>اجمالي الأصناف المرتبطة</span><small className="is-text">جميعها معتمدة ونشطة في الكتالوج <CircleCheckIcon size={14} /></small></div><span className="vstat__icon" style={{ background: '#f1f1f1', color: '#222' }}><ClipboardListIcon size={20} /></span></div>
        <div className="vstat"><div className="vstat__text"><div className="vstat__row"><strong>4,850,000</strong></div><span>إجمالي قيمة المخزون المرتبط</span><small className="is-blue">يمثل 18.4% من إجمالي الأصول</small></div><span className="vstat__icon" style={{ background: '#eefff8', color: '#0a5c36' }}><ReportIcon size={20} /></span></div>
      </div>
      <div className="mcols mcols--cat">
        <div className="mcol">
          <section className="mcard">
            <header className="mcardhead mcardhead--cat">
              <h2>قائمة التصنيفات الفرعية التابعة</h2>
              <button type="button" className="btn-primary vbtn" onClick={() => nav('/master-data/categories/new?parent=' + c.id)}>إضافة فئة</button>
            </header>
            <div className="mtable2">
              <table>
                <thead><tr><th className="mcb"><Cbx checked={false} onChange={() => {}} label="تحديد الكل" size={22} /></th><th>اسم التصنيف</th><th>الرمز</th><th>الأصناف المرتبطة</th><th>الحالة</th><th>آخر تحديث</th><th>الإجراءات</th></tr></thead>
                <tbody>
                  {kids.map((k) => (
                    <tr key={k.id} onClick={() => nav('/master-data/categories/' + k.id)}>
                      <td className="mcb"><Cbx checked={false} onChange={() => {}} label="تحديد" size={22} /></td>
                      <td><div className="vname"><strong className="mname">{k.name}</strong><small>{k.sub2 || k.sub}</small></div></td>
                      <td><span className="mcode mcode--plain">{k.detailCode || k.code}</span></td>
                      <td className="mtxt">{k.detailCount || k.count} صنف</td>
                      <td><StatusPill s={k.status} now /></td>
                      <td><div className="vupd"><b>{k.date}</b><span>{k.by}</span></div></td>
                      <td><RowActions onEdit={() => nav(`/master-data/categories/${k.id}/edit`)} onLock={() => toggle('categories', k.id)} onView={() => nav('/master-data/categories/' + k.id)} onDelete={() => remove('categories', k.id)} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
        <div className="mcol">
          <section className="mcard mgovc">
            <header className="mcardhead mcardhead--rev"><ShieldCheckIcon size={20} /><h2>تفاصيل الحوكمة والترميز</h2><span className="mref">REF #982-IT</span></header>
            <Tile label="الاسم الكامل للتصنيف" className="is-flat">{full}</Tile>
            <div className="mgrid mgrid--tight">
              <Tile label="الرمز المعتمد" className="is-flat">{c.code}</Tile>
              <Tile label="التصنيف الأعلى" className="is-flat">{c.level === 1 ? 'جذري (لا يوجد)' : c.parent}</Tile>
            </div>
            <Tile label="الوصف المؤسسي ونطاق الشمول" className="is-flat is-desc">{c.desc || '—'}</Tile>
            <Tile label="مركز التكلفة المرتبط" className="is-flat">{c.cc || '—'}</Tile>
            <Tile label="حالة الاعتماد المالي" className="is-flat">15 يناير 2023 بواسطة الإدارة المالية <CircleCheckIcon size={16} className="mgreen" /></Tile>
          </section>
        </div>
      </div>
    </div>
  );
}
