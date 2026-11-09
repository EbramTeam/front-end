import { useRef, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useSaveSupplier, useSupplier } from '../hooks/use-suppliers.js';
import { LoadingBlock, Spinner } from '../components/Spinner.jsx';
import Cbx from '../components/Cbx.jsx';
import { CertIcon, IdCardIcon, SendMailIcon, ShieldCheckIcon, UploadIcon, FileBadgeIcon, TrashIcon, ChevronDownIcon, CopyIcon, CircleCheckIcon, ClockHistoryIcon } from '../components/Icons.jsx';

const MAX = 10 * 1024 * 1024;
const OK_TYPES = ['application/pdf', 'image/png', 'image/jpeg'];

function sizeLabel(b) {
  return b >= 1048576 ? (b / 1048576).toFixed(1) + ' MB' : Math.max(1, Math.round(b / 1024)) + ' KB';
}

function Field({ label, req, children, bad }) {
  return (
    <div className={'vf' + (bad ? ' is-bad' : '')}>
      <label className="vf__label">{label}{req && <b>*</b>}</label>
      {children}
    </div>
  );
}

const RULES = [
  'مطابقة بيانات السجل التجاري مع وزارة التجارة الفلسطينية فورياً.',
  'فحص قائمة الحظر والاستبعاد من التعاقدات العامة وفق نظام المنافسات.',
  'إنشاء معرف فريد للمورد مشفر ومشفر في بلوك تشين سجل التدقيق الموحد.',
];

export default function VendorForm({ edit }) {
  return edit ? <EditVendorForm /> : <VendorFormBody />;
}

function EditVendorForm() {
  const { id } = useParams();
  const { vendor, isLoading } = useSupplier(id);
  if (isLoading) return <LoadingBlock />;
  if (!vendor) return <Navigate to="/vendors" replace />;
  return <VendorFormBody key={id} vendor={vendor} />;
}

const BLANK_FORM = { name: '', cr: '', activity: '', vat: '', grade: '', rep: '', title: '', phone: '', mail: '', city: '', addr: '' };

function VendorFormBody({ vendor: v }) {
  const edit = Boolean(v);
  const navigate = useNavigate();
  const { saveSupplier, isSaving } = useSaveSupplier(v?.id, (savedId) => {
    navigate(edit ? '/vendors/' + savedId : '/vendors');
    window.scrollTo({ top: 0 });
  });
  const d = v?.detail ?? {};
  const init = v?.form ?? BLANK_FORM;
  const [f, setF] = useState(init);
  const [dirty, setDirty] = useState({});
  const [active, setActive] = useState(null);
  const [files, setFiles] = useState([]);
  const [tried, setTried] = useState(false);
  const [drag, setDrag] = useState(false);
  const [uploadErr, setUploadErr] = useState('');
  const pick = useRef(null);

  const set = (k) => (e) => {
    setF((p) => ({ ...p, [k]: e.target.value }));
    setDirty((p) => ({ ...p, [k]: true }));
  };
  const ghost = (k) => (edit && !dirty[k] ? ' is-ghost' : '');

  function addFiles(list) {
    const next = [];
    let err = '';
    [...list].forEach((file) => {
      if (!OK_TYPES.includes(file.type)) err = 'نوع الملف غير مدعوم';
      else if (file.size > MAX) err = 'حجم الملف أكبر من 10 ميجابايت';
      else next.push({ id: file.name + file.size + Math.random(), name: file.name.replace(/\.[^.]+$/, ''), size: sizeLabel(file.size), type: file.type === 'application/pdf' ? 'PDF' : file.type === 'image/png' ? 'PNG' : 'JPG' });
    });
    setUploadErr(err);
    if (next.length) setFiles((p) => [...p, ...next]);
  }

  const required = ['name', 'vat', 'rep', 'phone', 'mail', 'addr'];
  const bad = (k) => tried && !String(f[k]).trim();

  function submit(e) {
    e.preventDefault();
    setTried(true);
    if (required.some((k) => !String(f[k]).trim())) {
      document.querySelector('.vf.is-bad input')?.focus();
      return;
    }
    saveSupplier({ form: f, active });
  }

  const input = (k, ph, extra = {}) => (
    <input className={'vin' + ghost(k)} value={f[k]} onChange={set(k)} placeholder={ph} {...extra} />
  );

  return (
    <form className="vform" onSubmit={submit} noValidate>
      {edit ? (
        <>
          <h1 className="page-title">تعديل بيانات المورد</h1>
          <p className="page-subtitle">حدّث البيانات الأساسية ومعلومات التواصل والوثائق الرسمية الخاصة بالكيان التجاري المعتمد لدى المنظومة.</p>
          <section className="vhead vhead--edit">
            <div className="vhead__main">
              <div className="vhead__title">
                <h1>{v.name}</h1>
                <div className="vhead__badges">
                  {v.status === 'active' ? <em className="vpill-ok"><i />نشط ومؤهل</em> : <em className="vpill-off"><i />غير نشط · معلق إداريا</em>}
                </div>
              </div>
              <div className="vhead__meta">
                <span>الرقم الضريبي: <bdi dir="ltr">{v.vat}</bdi><CopyIcon size={16} /></span>
                <span>س.ت: <bdi dir="ltr">{v.cr}</bdi><CopyIcon size={16} /></span>
                <span>رمز المورد المرجعي: <bdi dir="ltr">{v.id}</bdi><CopyIcon size={16} /></span>
              </div>
              <div className="vhead__upd"><ClockHistoryIcon size={14} />آخر تحديث: {d.updatedLong}</div>
            </div>
          </section>
        </>
      ) : (
        <>
          <h1 className="page-title">إضافة مورد جديد</h1>
          <p className="page-subtitle">أدخل البيانات الأساسية للمورد لإضافته إلى سجل الموردين الرسمي المعتمد لمنظومة المنافسات والعقود.</p>
        </>
      )}

      <div className="vfcols">
        <div className="vfmain">
          <section className="vcard vfcard">
            <header className="vfhead">
              <span className="vfhead__icon"><IdCardIcon size={22} /></span>
              <div><h2>بيانات المورد الأساسية</h2><p>البيانات القانونية والنشاط المصرح به لدى الجهات المنظمة</p></div>
            </header>
            <Field label="اسم المورد / الكيان التجاري" req bad={bad('name')}>{input('name', 'شركة التقنية المتقدمة للحلول الرقمية ذ.م.م')}</Field>
            <div className="vf2">
              <Field label="رقم السجل التجاري / الرقم الموحد (10 أرقام)">
                {input('cr', '1010482910', { inputMode: 'numeric', maxLength: 10 })}
              </Field>
              <Field label="نوع النشاط الرئيسي">{input('activity', 'توريد تقني وتكنولوجيا المعلومات')}</Field>
              <Field label="رقم السجل التجاري / الرقم الموحد (10 أرقام)">
                <div className="vselect">
                  <select className={'vin' + ghost('grade')} value={f.grade} onChange={set('grade')}>
                    <option value="" disabled>الدرجة الأولى (أ) - مشاريع كبرى واستراتيجية</option>
                    {[...new Set([f.grade, 'الدرجة الأولى (أ) - مشاريع كبرى واستراتيجية'].filter(Boolean))].map((o) => <option key={o}>{o}</option>)}
                    {['الدرجة الأولى - أ', 'الدرجة الأولى - ب', 'الدرجة الثانية', 'الدرجة الثالثة', 'تأهيل معتمد'].map((o) => <option key={o}>{o}</option>)}
                  </select>
                  <ChevronDownIcon size={20} />
                </div>
              </Field>
              <Field label="الرقم الضريبي (VAT ID)" req bad={bad('vat')}>{input('vat', '300948291000003', { inputMode: 'numeric' })}</Field>
            </div>
            <div className="vstatusbox">
              <div className="vstatusbox__text">
                <strong>حالة تفعيل حساب المورد في النظام</strong>
                <p>المورد النشط يكون متاحاً فوراً للترشيح وتلقي طلبات عروض الأسعار (RFQs) وتوقيع أوامر الشراء فور الحفظ والاعتماد.</p>
              </div>
              <div className="vstatusbox__opts" role="radiogroup">
                <button type="button" role="radio" aria-checked={active === 'active'} className="vopt" onClick={() => setActive('active')}>
                  <Cbx checked={active === 'active'} onChange={() => setActive('active')} radio size={24} label="نشط ومؤهل" />نشط ومؤهل
                </button>
                <button type="button" role="radio" aria-checked={active === 'off'} className="vopt" onClick={() => setActive('off')}>
                  <Cbx checked={active === 'off'} onChange={() => setActive('off')} radio size={24} label="غير نشط (معلق)" />غير نشط (معلق)
                </button>
              </div>
            </div>
          </section>

          <section className="vcard vfcard">
            <header className="vfhead">
              <span className="vfhead__icon"><SendMailIcon size={22} /></span>
              <div><h2>بيانات التواصل والتمثيل النظامي</h2><p>المسؤول المفوض لاستلام خطابات الترسية والاتصالات التعاقدية</p></div>
            </header>
            <div className="vf2">
              <Field label="اسم المفوض / جهة الاتصال الرسمية" req bad={bad('rep')}>{input('rep', 'أ. عبد العزيز فهد السالم')}</Field>
              <Field label="المسمى الوظيفي للمفوض">{input('title', 'مدير علاقات الموردين والتعاقدات الحكومية')}</Field>
              <Field label="رقم الجوال" req bad={bad('phone')}>
                <div className="vphone">
                  <input className={'vin' + ghost('phone')} value={f.phone} onChange={set('phone')} placeholder="059" inputMode="tel" />
                  <span className="vphone__cc"><i className="vflag" />+971</span>
                </div>
              </Field>
              <Field label="البريد الإلكتروني للتعاملات" req bad={bad('mail')}>{input('mail', 'procurement@advtech.sa', { type: 'email', dir: 'ltr' })}</Field>
              <Field label="المدينة / المنطقة الرئيسية">{input('city', 'غزة (المقر الرئيسي)')}</Field>
              <Field label="عنوان المقر" req bad={bad('addr')}>{input('addr', 'غزة - شارع الكلا')}</Field>
            </div>
          </section>
        </div>

        <aside className="vfside">
          <section className="vcard vfcard vfcard--files">
            <header className="vfhead vfhead--tinted">
              <span className="vfhead__icon"><CertIcon size={22} /></span>
              <div><h2>وثائق الاعتماد والتسجيل</h2><p>الملفات المطلوبة للتدقيق السيبراني والمالي</p></div>
            </header>
            <div
              className={'vdrop' + (files.length ? ' is-compact' : '') + (drag ? ' is-drag' : '')}
              role="button"
              tabIndex={0}
              onClick={() => pick.current?.click()}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), pick.current?.click())}
              onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
              onDragLeave={() => setDrag(false)}
              onDrop={(e) => { e.preventDefault(); setDrag(false); addFiles(e.dataTransfer.files); }}
            >
              <UploadIcon size={24} />
              <strong>اسحب الملفات هنا أو اضغط لإختيار ملف</strong>
              <span>الأنواع المدعومة: PDF, PNG, JPG بحد أقصى 10 ميجابايت للملف الواحد.</span>
              <input ref={pick} type="file" hidden multiple accept=".pdf,.png,.jpg,.jpeg" onChange={(e) => { addFiles(e.target.files); e.target.value = ''; }} />
            </div>
            {uploadErr && <div className="vdrop__err" role="alert">{uploadErr}</div>}
            {files.length > 0 && (
              <>
                <div className="vfiles__head">
                  <strong>الملفات المرفقة المعتمدة</strong>
                  <span>{files.length} وثائق مسجلة</span>
                </div>
                <ul className="vfiles">
                  {files.map((fl) => (
                    <li key={fl.id}>
                      <FileBadgeIcon size={30} />
                      <div><strong>{fl.name}</strong><small><bdi dir="ltr">{fl.size} · {fl.type}</bdi></small></div>
                      <button type="button" aria-label="حذف الملف" onClick={() => setFiles((p) => p.filter((x) => x.id !== fl.id))}><TrashIcon size={20} /></button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </section>

          <section className="vcard vfcard">
            <header className="vfhead vfhead--plain">
              <ShieldCheckIcon size={24} />
              <h2>معايير القبول والتأهيل الحكومي</h2>
            </header>
            <ul className="vrules">
              {RULES.map((r) => (
                <li key={r}><i><svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#0077ff" /><path d="m5.500 10.200 3 3 6-6.200" fill="none" stroke="#fff" strokeWidth="1.800" strokeLinecap="round" strokeLinejoin="round" /></svg></i><span>{r}</span></li>
              ))}
            </ul>
            <div className="vready"><span>مؤشر الجاهزية للتعاقدات</span><b>96% مؤهل للمنافسات</b></div>
          </section>
        </aside>
      </div>

      <div className="vfoot">
        <button type="submit" className="btn-primary" disabled={isSaving}>{isSaving && <Spinner size="sm" tone="onPrimary" />}{edit ? 'حفظ التعديلات' : 'إضافة مورد جديد'}</button>
        <button type="button" className="btn-outline" onClick={() => navigate(edit ? '/vendors/' + v.id : '/vendors')}>إلغاء</button>
      </div>
    </form>
  );
}
