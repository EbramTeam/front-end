import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { settings, NOTIF_DEFAULT } from '../settingsStore.js';
import { setLanguage } from '../i18n/translate.js';
import { useOrganization } from '../hooks/use-dashboard.js';
import { PageHead } from './master/Bits.jsx';
import Cbx from '../components/Cbx.jsx';
import { SettingsIcon, BellIcon, ShieldIcon, ShieldCheckIcon, UploadIcon, TrashIcon, BanIcon, CalendarIcon, ClockHistoryIcon, InfoCircleIcon, KeyLockIcon, LockIcon, FingerprintIcon, BuildingIcon, SmallUserIcon, DocIcon, GavelIcon, CertIcon, WarnIcon } from '../components/Icons.jsx';
import { WorkflowIcon, ArrowLeftLongIcon, CloudUploadIcon, TranslateIcon, ClockIcon, ClipboardCheckIcon, FolderOpenIcon, MegaphoneIcon, FileTextIcon, CheckBadgeIcon, GlobeIcon2, ClipboardListIcon, LockOpenIcon, BankIcon } from '../components/MIcons.jsx';
import { ChevronDownIcon } from '../components/Icons.jsx';

// ---------- الإعدادات (الرئيسية) ----------
function SCard({ off, tag, icon, title, text, rows, link, linkTo, side, cls = '' }) {
  const nav = useNavigate();
  return (
    <section className={'scard ' + cls + (off ? ' is-off' : '')}>
      <div className="scard__top"><span className="scard__icon">{icon}</span><span className="scard__tag">{tag}<i /></span></div>
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="scard__rows">
        {rows.map(([k, v, g]) => <div key={k}><span>{k}</span><b className={g ? 'is-g' : ''}>{v}</b></div>)}
      </div>
      <footer>
        {off ? <span className="scard__link is-off"><BanIcon size={16} />{link}</span> : <button type="button" className="scard__link" onClick={() => nav(linkTo)}>{link}<ArrowLeftLongIcon size={16} /></button>}
        <small>{side}</small>
      </footer>
    </section>
  );
}

export function SettingsHub() {
  const nav = useNavigate();
  const [prod, setProd] = useState(settings.prod);
  const organization = useOrganization();
  return (
    <div className="shub">
      <PageHead title="الإعدادات" sub="إدارة إعدادات النظام والخيارات التي تتحكم في طريقة عمل المنصة، مسارات الاعتمادات، وقنوات الاتصال السيادية." tag={<span className="stag">إصدار النظام السيادي 2.4<i /></span>} inline>
        <label className="sprod">
          <span className="sprod__icon"><ShieldCheckIcon size={20} /></span>
          <div><strong>بيئة الإنتاج السيادي</strong><small>صلاحيات مدير النظام الكاملة (SuperAdmin)</small></div>
          <Cbx checked={prod} onChange={(v) => { settings.prod = v; setProd(v); }} label="بيئة الإنتاج السيادي" size={24} />
        </label>
      </PageHead>
      <div className="shub__grid">
        <SCard tag="نشط ومعتمد" icon={<SettingsIcon size={26} />} title="الإعدادات العامة" text="إدارة المعلومات والتفضيلات العامة للجهة والنظام، وتثبيت المحددات الهيكلية للمنظمة." rows={[['هوية وسجل الجهة:', organization?.name ?? '—'], ['العملة المعيارية:', organization?.currency ?? '—'], ['التقويم والمنطقة:', 'أم القرى (UTC+03:00)']]} link="عرض الإعدادات العامة" linkTo="/settings/general" side="4 أقسام فرعية" />
        <SCard tag="مسارات مفعلة" icon={<WorkflowIcon size={26} />} title="المشتريات وسير العمل" text="مراجعة إعدادات المشتريات ومراحل الطلبات وسلاسل الاعتماد وتوزيع الصلاحيات المالية." rows={[['قواعد الشراء وسقوفها:', '3 مستويات تسعيرية'], ['سلاسل الموافقات:', 'مباشر / لجنة تدقيق'], ['اعتماد أوامر الصرف:', 'الزامي للمفوضين', true]]} link="إدارة سير المشتريات والعمل" linkTo="/settings/procurement" side="تبويبين رئيسيين" />
        <SCard tag="قنوات الاتصال جاهزة" icon={<BellIcon size={26} />} title="الإشعارات" text="إدارة تفضيلات الإشعارات المرتبطة بإجراءات النظام، تنبيهات الترسية وسجلات التدقيق الفوري." rows={[['الإشعارات البريدية:', 'خادم SMTP المؤسسي'], ['تنبيهات أوامر الشراء:', 'إشعار فوري عند التحديث'], ['تنبيهات التدقيق الرقابي:', 'مفعلة للمراقبة المالية']]} link="تخصيص قنوات وتنبيهات النظام" linkTo="/settings/notifications" side="3 قنوات نشطة" />
        <SCard off cls="scard--soon" tag="قريباً - غير متاح في الإصدار الحالي (MVP)" icon={<ShieldIcon size={26} />} title="النظام والأمان" text="إعدادات الأمان المتقدمة وسياسات الوصول الموحد والتكامل التقني والربط الشبكي الحكومي." rows={[['المصادقة الثنائية وسياسة IAM:', 'مجدول للتفعيل المستقبلي'], ['الربط مع واجهات (API) السيادي:', 'قيد التطوير والتكامل'], ['التوافق المؤسسي الوطني:', 'بانتظار الاعتماد التنظيمي']]} link="قيد التطوير والاعتماد التنظيمي" side="مرحلة قادمة" />
      </div>
      <section className="scard2">
        <span className="scard2__icon"><ShieldCheckIcon size={22} /></span>
        <div><strong>حوكمة التعديلات المؤسسية</strong><p>يتم تسجيل كافة التغييرات على معايير النظام تلقائياً ضمن سجل الرقابة الموحد (Audit Trail) لضمان الشفافية والأمان السيادي.</p></div>
        <button type="button" className="btn-primary" onClick={() => nav('/audit-log')}>عرض سجل التعديلات</button>
      </section>
    </div>
  );
}

// ---------- الإعدادات العامة ----------
export function SettingsGeneral() {
  const organization = useOrganization();
  const [logo, setLogo] = useState(settings.logo ? 'default' : '');
  const [lang, setLang] = useState(document.documentElement.lang === 'en' ? 'English' : 'العربية (الافتراضية الموحدة)');
  const file = useRef(null);
  const pickLang = (v) => {
    setLang(v);
    const code = v === 'English' ? 'en' : 'ar';
    try { localStorage.setItem('ibram-lang', code); } catch (e) {}
    setLanguage(code);
  };
  const onFile = (e) => {
    const fl = e.target.files?.[0];
    if (!fl) return;
    if (!/^image\/(png|jpe?g|svg\+xml)$/.test(fl.type) || fl.size > 2 * 1024 * 1024) { e.target.value = ''; return; }
    setLogo(URL.createObjectURL(fl));
    settings.logo = true;
  };
  return (
    <div className="sgen">
      <PageHead title="الإعدادات" sub="إدارة المعلومات والتفضيلات العامة للجهة والنظام المعتمد سيادياً." tag={<span className="stag stag--plain" dir="ltr">SYS-CONF-V4.2<i /></span>} />
      <section className="vcard ssec">
        <header className="ssec__head"><span className="ssec__icon"><BuildingIcon size={24} /></span><div><h2>معلومات الجهة</h2><p>الهوية المعيارية والاسم المعتمد في كافة عقود ومنصات التوريد</p></div><span className="ssec__no">القسم 01</span></header>
        <div className="ssec__cols">
          <div className="sf">
            <h3>اسم الجهة</h3>
            <p>الاسم القانوني كما يظهر في المخاطبات الرسمية، دفاتر الشروط، وإشعارات الترسية.</p>
            <div className="sname"><input readOnly value={organization?.name ?? ''} aria-label="اسم الجهة" /><ShieldCheckIcon size={20} /></div>
            <small>يُشترط مطابقة الاسم لما هو مسجل في السجل التجاري الموحد للمشتريات.</small>
          </div>
          <div className="sf">
            <h3>شعار الجهة</h3>
            <p>الشعار الرسمي المطبوع على أوامر الشراء والوثائق المتبادلة مع الموردين.</p>
            <div className="slogo">
              <div className="slogo__box">
                {logo === 'default' ? <div className="slogo__def"><CheckBadgeIcon size={44} /><b>IBRAM</b></div> : logo ? <img src={logo} alt="شعار الجهة" /> : null}
              </div>
              <div className="slogo__side">
                <p><InfoCircleIcon size={14} />الصيغ المدعومة: PNG, SVG, JPG  الحجم الأقصى 2 ميجابايت , الأبعاد المستحسنة 512×512 بكسل بخلفية شفافة.</p>
                <div className="slogo__btns">
                  <button type="button" className="slogo__up" onClick={() => file.current?.click()}><CloudUploadIcon size={16} />تغيير الشعار</button>
                  <button type="button" className="slogo__rm" onClick={() => { setLogo(''); settings.logo = false; }}><TrashIcon size={16} />إزالة</button>
                  <input ref={file} type="file" accept="image/png,image/svg+xml,image/jpeg" hidden onChange={onFile} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="vcard ssec">
        <header className="ssec__head"><span className="ssec__icon"><GlobeIcon2 size={24} /></span><div><h2>التفضيلات العامة</h2><p>ضبط اللغات الإقليمية، المنطقة الزمنية المعتمدة، وتنسيقات التاريخ الحسابي للمنظومة</p></div><span className="ssec__no">القسم 02</span></header>
        <div className="sprefs">
          <div className="spref"><div className="spref__h"><b><TranslateIcon size={18} />اللغة الرسمية</b><i /></div><p>لغة واجهة المستخدم والتقارير التنفيذية الصادرة.</p>
            <label className="spsel"><select value={lang} onChange={(e) => pickLang(e.target.value)}><option>العربية (الافتراضية الموحدة)</option><option>English</option></select><span>{lang}</span><ChevronDownIcon size={18} /></label><small>يدعم النظام التدقيق اللغوي التلقائي للنصوص العربية.</small></div>
          <div className="spref"><div className="spref__h"><b><ClockIcon size={18} />المنطقة الزمنية</b><em dir="ltr">UTC+03:00</em></div><p>حساب مواعيد فتح المظاريف والمهل الزمنية للمنافسات.</p>
            <label className="spsel"><select defaultValue="توقيت مكة المكرمة / الرياض (UTC+03:00)"><option>توقيت مكة المكرمة / الرياض (UTC+03:00)</option></select><span>توقيت مكة المكرمة / الرياض (UTC+03:00)</span><ChevronDownIcon size={18} /></label><small>يتم تسجيل الأختام الزمنية في سجل التدقيق وفق هذا التوقيت.</small></div>
          <div className="spref"><div className="spref__h"><b><CalendarIcon size={18} />تنسيق التاريخ</b></div><p>عرض التواريخ في جداول الترسية ودفاتر الشروط.</p>
            <label className="spsel"><select defaultValue="هجري / ميلادي مزدوج: 1445/10/15 هـ (2024/04/24 م)"><option>هجري / ميلادي مزدوج: 1445/10/15 هـ (2024/04/24 م)</option></select><span>هجري / ميلادي مزدوج: 1445/10/15 هـ (2024/04/24 م)</span><ChevronDownIcon size={18} /></label><small>يعتمد نظام المشتريات تقويم أم القرى لحساب المهل القانونية.</small></div>
        </div>
      </section>
      <section className="vcard sgov2">
        <span className="scard2__icon"><ShieldCheckIcon size={22} /></span>
        <div><strong>حوكمة الإعدادات المركزية</strong><p>تخضع كافة التغييرات للتوثيق المشفر في السجل السيادي للعمليات (Audit Trail) بقرم ترخيص جهة سار.</p></div>
        <span className="sig" dir="ltr"><FingerprintIcon size={14} />AUTH-SIG: 9FA8-230C-7140</span>
      </section>
    </div>
  );
}

// ---------- المشتريات وسير العمل ----------
const STAGES = [
  { n: 1, t: 'إنشاء طلب الشراء', b: 'مكتمل آليا', dark: true, d: 'الجهة الطالبة / موظف المشتريات. التحقق الأولي من اكتمال المواصفات وتحديد التصنيف المناسب وضمان وضوح نطاق العمل.', sla: 'SLA: 24 ساعة كحد أقصى', c: [['الجهة المسؤولة: الإدارة الطالبة / مدخل البيانات', <BuildingIcon size={14} />], ['نقطة التحقق: مصفوفة التصنيف الموحد (UNSPSC)', <ClipboardListIcon size={14} />]] },
  { n: 2, t: 'مراجعة واعتماد الطلب', b: 'مستوى إشرافي', d: 'مدير الإدارة الطالبة والمشرف المباشر. مراجعة الجدوى التشغيلية وتوافق الاحتياج مع الخطة السنوية للجهة قبل التصعيد المالي.', sla: 'SLA: 48 ساعة', c: [['الجهة المسؤولة: مدير الإدارة المختصة (Level 1)', <SmallUserIcon size={14} />], ['المصادقة: توقيع رقمي معتمد', <ShieldCheckIcon size={14} />]] },
  { n: 3, t: 'التحقق من الموازنة وتوفر البند المالي', b: 'رقابة مالية إلزامية', d: 'الإدارة المالية والميزانية. التحقق من مطابقة التكاليف التقديرية وتخصيص البند وحجز المخصص المالي السيادي قبل الطرح.', sla: 'SLA: 24 ساعة', c: [['الجهة المسؤولة: الرقابة المالية وإدارة الموازنة', <BankIcon size={14} />], ['الحجز المالي: ارتباط آلي بنظام الخزينة', <LockIcon size={14} />]] },
  { n: 4, t: 'إدارة طلبات عروض الأسعار واستلام العروض', b: 'سلاسل الإمداد', d: 'مسؤولو المشتريات وسلاسل الإمداد. توجيه الدعوات واستلام العروض الفنية والمالية المشفرة والمغلقة عبر المنصة المعتمدة.', sla: 'SLA: 3 - 5 أيام عمل', c: [['الجهة المسؤولة: قسم المشتريات والمنافسات', <DocIcon size={14} />], ['آلية التشفير: مظاريف مغلقة رقمياً', <LockIcon size={14} />]] },
];
export function SettingsProcurement() {
  const nav = useNavigate();
  return (
    <div className="sproc">
      <PageHead title="المشتريات وسير العمل" sub="إدارة إعدادات المشتريات ومراجعة مراحل الطلبات والاعتمادات وفق القواعد المعتمدة للجهة." tag={<span className="stag">حاكمية إجرائية<i /></span>} inline>
        <div className="sprod sprod--ver"><span className="sprod__icon"><ShieldCheckIcon size={20} /></span><div><strong dir="ltr">SYS-PROC-CONF-V1.8</strong><small>سيادي موحد · تدقيق نشط</small></div></div>
      </PageHead>
      <section className="sban">
        <span className="sban__icon"><LockOpenIcon size={22} /></span>
        <div><strong>إعدادات سير العمل غير مهيأة للتعديل</strong><p>يتم تحديد مراحل سير العمل وقواعد الاعتماد تلقائياً وفق المتطلبات المعتمدة للنظام والمسار السيادي المعياري لضمان الشفافية والامتثال المالي الموحد.</p></div>
        <button type="button" className="sban__btn" onClick={() => nav('/audit-log')}>سجل الاعتماد التنظيمي<ShieldCheckIcon size={14} /></button>
      </section>
      <section className="vcard spath">
        <header className="spath__head"><div><h2>المسار المعياري المعتمد لدورة المشتريات</h2><p>تسلسل إلزامي خاضع للرقابة الإدارية والمالية الشاملة</p></div><span className="spath__tot">إجمالي المراحل: <b>6 محطات نظامية</b></span></header>
        <ol className="spath__list">
          {STAGES.map((s) => (
            <li key={s.n}>
              <span className="spath__n">{s.n}</span>
              <div className="spstage">
                <div className="spstage__top"><strong>{s.t}</strong><em className={s.dark ? 'is-dark' : ''}>{s.b}</em><small>{s.sla}</small></div>
                <p>{s.d}</p>
                <div className="spstage__chips">{s.c.map(([t, ic]) => <span key={t}>{ic}{t}</span>)}</div>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

// ---------- إعدادات الإشعارات ----------
const NOTIFS = [
  { k: 'approvals', icon: <ClipboardCheckIcon size={24} />, t: 'الموافقات والإجراءات المطلوبة', tag: 'مستوى التدقيق والاعتماد', who: 'إلزامي للمعتمدين', d: 'إشعارات فورية عند وجود طلب شراء أو اعتماد يتطلب مراجعة المستخدم أو اتخاذ إجراء تنفيذي منه ضمن سلسلة الصلاحيات.' },
  { k: 'returns', icon: <ClipboardListIcon size={24} />, t: 'إرجاع الطلبات والتعليقات', tag: 'التواصل وسير العمل', who: 'حسب دور المستخدم', d: 'إشعارات عند إرجاع طلب للشراء لإعادة الاستيفاء أو إضافة تعليق وملاحظات تدقيق في أو مالي مرتبطة به.' },
  { k: 'rfq', icon: <FileTextIcon size={24} />, t: 'طلبات عروض الأسعار', tag: 'سلاسل الإمداد والتوريد', who: 'مسؤولو المشتريات والتسعير', d: 'إشعارات مرتبطة بإجراءات طلبات عروض الأسعار (RFQ)، إصدار الدعوات وتحديثات مهل تقديم العروض للموردين المعنيين.' },
  { k: 'opening', icon: <FolderOpenIcon size={24} />, t: 'استلام العروض وفتحها', tag: 'اللجان المعتمدة فقط', who: 'لجان المشتريات والمظاريف', d: 'إشعارات مرتبطة بمراحل استلام العروض الفنية والمالية، إغلاق المظاريف، وتحديد جلسات فتح المظاريف (أعضاء لجان الفتح والمخولين فقط).' },
  { k: 'system', icon: <MegaphoneIcon size={24} />, t: 'التحديثات العامة للنظام', tag: 'إعلانات تشغيلية', who: 'كافة المستخدمين', d: 'إشعارات تشغيلية عامة حول صيانة النظام، تحديث لوائح المشتريات التنظيمية، وإعلانات إدارة المنصة.' },
];
export function SettingsNotifications() {
  const nav = useNavigate();
  const [v, setV] = useState({ ...settings.notif });
  const save = () => { settings.notif = { ...v }; nav('/settings'); };
  const cancel = () => { setV({ ...settings.notif }); nav('/settings'); };
  return (
    <div className="snot">
      <PageHead title="إعدادات الإشعارات" sub="إدارة تفضيلات الإشعارات المرتبطة بإجراءات المشتريات وسير العمل في النظام وحوكمة تدفق التنبيهات المعتمدة." tag={<span className="stag stag--blue">تحديث تلقائي للملف الشخصي<ClockIcon size={14} /></span>} />
      <section className="snot__ban"><span className="sban__icon"><ShieldCheckIcon size={22} /></span><div><strong>ملاحظة حوكمية وإشعار الصلاحيات المعتمدة</strong><p>تقتصر الإشعارات المعروضة على المراحل والصلاحيات الممنوحة لحسابك الإداري وفق مصفوفة الأدوار المعتمدة. لن يتم إرسال تنبيهات لإجراءات تقع خارج نطاق اختصاصك الوظيفي، وتُطبّق سياسات التدقيق الآلي والسرية على كافة الرسائل المرسلة من منصة إبرام.</p></div></section>
      <section className="vcard snot__card">
        <header><div><h2>فئات إشعارات سلسلة الإمداد وسير العمل</h2><p>حدد الإشعارات التي ترغب بتلقيها أثناء إدارة عمليات الشراء والمنافسات</p></div><span className="snot__tot">إجمالي الفئات المؤهلة: <b>5 فئات معتمدة</b></span></header>
        <ul>
          {NOTIFS.map((n) => (
            <li key={n.k}>
              <span className="snot__ic">{n.icon}</span>
              <div className="snot__body">
                <div className="snot__t"><strong>{n.t}</strong><em>{n.tag}</em><span><i />{n.who}</span></div>
                <p>{n.d}</p>
              </div>
              <div className="snot__sw">
                <b>{v[n.k] ? 'مفعّل' : 'غير مفعّل'}</b>
                <button type="button" role="switch" aria-checked={v[n.k]} aria-label={n.t} className={'sw' + (v[n.k] ? ' is-on' : '')} onClick={() => setV((p) => ({ ...p, [n.k]: !p[n.k] }))}><i /></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <div className="snot__foot">
        <button type="button" className="btn-outline" onClick={cancel}>إلغاء</button>
        <button type="button" className="btn-primary" onClick={save}>حفظ و إعتماد التغييرات</button>
      </div>
    </div>
  );
}
