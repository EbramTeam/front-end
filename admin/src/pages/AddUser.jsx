import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from '../components/AuthLayout.jsx';
import { evaluate } from '../components/PasswordRules.jsx';
import { DEPTS_FILTER, DETAIL_USER_ID } from '../data.js';
import {
  IdCardIcon,
  ClipboardUserIcon,
  RolesIcon,
  ReportIcon,
  SparkIcon,
  FingerprintIcon,
  GavelIcon,
  ScalesIcon,
  InfoCircleIcon,
  CheckBoxIcon,
  CalendarIcon,
  ChevronDownIcon,
  ShieldCheckIcon,
  ShieldLockIcon,
  UsersIcon,
  HandshakeIcon,
  DocIcon,
  CloseCircleIcon,
  PencilIcon,
  CopyIcon,
  VerifiedIcon,
  SearchIcon,
} from '../components/Icons.jsx';

/* ---------- static content copied from the design ---------- */
const STEPS = [
  { n: 1, title: 'المعلومات الأساسية', sub: 'البيانات الوظيفية والهوية', icon: IdCardIcon },
  { n: 2, title: 'بيانات الدخول', sub: 'الحساب والتحقق الثنائي', icon: ClipboardUserIcon },
  { n: 3, title: 'الأدوار والصلاحيات', sub: 'مستويات الحوكمة والاعتماد', icon: RolesIcon },
  { n: 4, title: 'المراجعة والاعتماد', sub: 'التحقق والتوقيع الرقمي', icon: ReportIcon },
];

const ROLE_OPTIONS = [
  {
    key: 'req',
    ar: 'الجهة الطالبة',
    en: 'Requesting Entity',
    text: 'تقديم طلبات الشراء، متابعة احتياجات القسم، وتأكيد استلام وتسلّم المواد والخدمات الميدانية.',
    perms: 8,
    permsLabel: '8 صلاحيات تنفيذية',
    tag: 'نطاق القسم',
  },
  {
    key: 'mgr',
    ar: 'مدير القسم',
    en: 'Department Manager',
    text: 'اعتماد طلبات الشراء المبدئية للقسم، مراجعة المبررات الفنية والمالية، وإحالة الاحتياجات لإدارة المشتريات.',
    perms: 14,
    permsLabel: '14 صلاحية اعتماد',
    tag: 'اشراف فرعي',
  },
  {
    key: 'fin',
    ar: 'المالية / الموازنة',
    en: 'Finance & Budgeting',
    text: 'التحقق من توفر بنود الميزانية، حجز الارتباط المالي المسبق، ومطابقة أوامر الصرف والفواتير المستحقات.',
    perms: 18,
    permsLabel: '18 صلاحية مالية',
    tag: 'تدقيق مالي',
  },
  {
    key: 'proc',
    ar: 'قسم المشتريات',
    en: 'Procurement Department',
    text: 'إعداد كراسات الشروط، طرح المنافسات والممارسات، التواصل مع الموردين، وإصدار أوامر الشراء الرسمية.',
    perms: 32,
    permsLabel: '32 صلاحية مشتريات',
    tag: 'عقود كاملة',
  },
  {
    key: 'tender',
    ar: 'لجنة فتح العطاءات',
    en: 'Tender Opening Committee',
    text: 'فتح المظاريف والعروض الفنية والمالية في المواعيد المحددة نظاماً، وتحرير المحاضر وتوثيق الضمانات.',
    perms: 18,
    permsLabel: '18 صلاحية مالية',
    tag: 'محاضر لجان',
  },
  {
    key: 'sys',
    ar: 'مدير النظام',
    en: 'System Administrator',
    text: 'إدارة الحسابات، ضبط الإعدادات العامة للمنظومة، إسناد الصلاحيات، والاطلاع على سجلات التدقيق الرقابي.',
    perms: 32,
    permsLabel: '32 صلاحية مشتريات',
    tag: 'تحكم كامل',
  },
];
const UNITS_PER_ROLE = 10; // assumption: the design shows 20 units for 2 selected roles

const SUB_UNITS = ['المركز الرئيسي', 'لجنة فتح المظاريف', 'وحدة الفحص المحاسبي'];

/* ---------- stepper ---------- */
function Stepper({ current }) {
  return (
    <div className="stepper">
      {STEPS.map((s) => {
        const done = s.n < current;
        const isCurrent = s.n === current;
        const Icon = s.icon;
        let label = 'الخطوة ' + s.n;
        if (done && s.n === 3) label = '3'; // as in the design (review screen)
        if (isCurrent && s.n === 1) label = 'الخطوة 1 · قيد التحرير';

        if (done) {
          return (
            <div className="step step--done" key={s.n}>
              <span className="step__check">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </span>
              <div className="step__text">
                <small>{label}</small>
                <strong>{s.title}</strong>
                <em>{s.sub}</em>
              </div>
            </div>
          );
        }
        return (
          <div className={'step' + (isCurrent ? ' step--current' : '')} key={s.n}>
            <div className="step__row">
              <span className="step__icon">{isCurrent ? <Icon size={22} /> : s.n}</span>
              {s.n < 4 && <i className="step__line" />}
            </div>
            <div className="step__text">
              <small>{label}</small>
              <strong>{s.title}</strong>
              <em>{s.sub}</em>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- little form helpers ---------- */
function TextField({ label, req, tight, value, onChange, placeholder, invalid, left, children }) {
  return (
    <div className="wfield">
      <label>
        {req && !tight && <span className="field__req">*</span>}
        {label}
        {req && tight && <span className="field__req field__req--tight">*</span>}
      </label>
      <div className={'winput' + (invalid ? ' is-invalid' : '')}>
        {left}
        <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
        {children}
      </div>
    </div>
  );
}
// Real date picker: the native <input type="date"> sits invisibly over the field and
// the chosen date is shown in the design's format ("الأربعاء . 21 أكتوبر 2026").
function formatDate(iso) {
  const [y, m, day] = iso.split('-').map(Number);
  const parts = new Intl.DateTimeFormat('ar-u-nu-latn', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).formatToParts(new Date(y, m - 1, day));
  const get = (t) => parts.find((p) => p.type === t)?.value;
  return `${get('weekday')} . ${get('day')} ${get('month')} ${get('year')}`;
}
function DateField({ label, value, onChange, placeholder }) {
  const ref = useRef(null);
  return (
    <div className="wfield">
      <label>{label}</label>
      <div className="winput winput--date" onClick={() => ref.current?.showPicker?.()}>
        <CalendarIcon size={22} className="winput__cal" />
        <span className={value ? 'winput__val' : 'winput__ph'}>{value ? formatDate(value) : placeholder}</span>
        <input ref={ref} type="date" className="winput__native" value={value} onChange={(e) => onChange(e.target.value)} aria-label={label} />
      </div>
    </div>
  );
}
function SelectField({ label, value, onChange, placeholder, options }) {
  return (
    <div className="wfield">
      <label>{label}</label>
      <div className="winput winput--select">
        <ChevronDownIcon size={18} className="winput__chev" />
        <select value={value} onChange={(e) => onChange(e.target.value)}>
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function HeadBar({ dot, title, sub, children }) {
  return (
    <div className="hbar">
      <div className="hbar__text">
        <h2>
          <i style={{ background: dot }} />
          {title}
        </h2>
        {sub && <p>{sub}</p>}
      </div>
      <div className="hbar__side">{children}</div>
    </div>
  );
}

/* ---------- step 1 ---------- */
function Step1({ d, set, showErrors }) {
  const filled = [d.name, d.empId, d.email, d.phone, d.dept, d.unit, d.title, d.joined].filter((v) => v && v.trim()).length;
  const pct = Math.round((filled / 8) * 100);
  return (
    <>
      <HeadBar
        dot="#1a8cff"
        title="الخطوة 1: المعلومات الأساسية والوظيفية"
        sub="يجب تعبئة الحقول الأساسية للموظف. الحقول المؤشرة بعلامة ( * ) إلزامية لاستكمال التسجيل والربط مع دليل الهوية الموحد."
      >
        <span className="wbadge wbadge--plain">
          <SparkIcon size={14} />
          الربط مع المنصة المركزية للموارد البشرية
        </span>
        <span className="wbadge wbadge--green">
          <ReportIcon size={14} />
          تدقيق تلقائي للبيانات
        </span>
      </HeadBar>
      <div className="wgrid">
        <TextField label="ادخل اسم المستخدم كامل" req value={d.name} onChange={(v) => set('name', v)} placeholder="د. حسام بن عبدالعزيز السويلم" invalid={showErrors && !d.name.trim()} />
        <TextField label="ادخل الرقم الوظيفي" req tight value={d.empId} onChange={(v) => set('empId', v)} placeholder="EMP-09842" invalid={showErrors && !d.empId.trim()} />
        <TextField label="ادخل البريد الإلكتروني الرسمي" req value={d.email} onChange={(v) => set('email', v)} placeholder="د. حسام بن عبدالعزيز السويلم" invalid={showErrors && !d.email.trim()} />
        <TextField
          label="رقم الهاتف المحمول"
          req
          value={d.phone}
          onChange={(v) => set('phone', v)}
          placeholder="059"
          invalid={showErrors && !d.phone.trim()}
          left={
            <span className="phone-code">
              <svg className="flag" viewBox="0 0 24 16" width="24" height="16" aria-hidden="true">
                <rect width="24" height="5.34" fill="#111" />
                <rect y="5.33" width="24" height="5.34" fill="#fff" />
                <rect y="10.66" width="24" height="5.34" fill="#007a3d" />
                <path d="M0 0L10 8L0 16Z" fill="#ce1126" />
              </svg>
              +970
            </span>
          }
        />
        <SelectField label="الإدارة / القسم" value={d.dept} onChange={(v) => set('dept', v)} placeholder="الإدارة" options={DEPTS_FILTER} />
        <SelectField label="الوحدة / القسم الفرعي" value={d.unit} onChange={(v) => set('unit', v)} placeholder="الإدارة" options={SUB_UNITS} />
        <TextField label="المسمى الوظيفي الداخلي" req value={d.title} onChange={(v) => set('title', v)} placeholder="الإدارة العامة للمنافسات والعقود" invalid={showErrors && !d.title.trim()} />
        <DateField label="ادخل التاريخ الإنضمام" value={d.joined} onChange={(v) => set('joined', v)} placeholder="الأربعاء . 21 اكتوبر" />
      </div>
      <div className="readybar">
        <span className="readybar__icon">
          <FingerprintIcon size={26} />
        </span>
        <div className="readybar__text">
          <h3>
            ملف الموظف جاهز للربط مع نظام النفاذ الوطني (IAM)
            <span className="tag tag--ready">جاهز للترحيل</span>
          </h3>
          <p>سيتم إنشاء حساب مؤقت محمي برمز مشفر، وطلب تعيين كلمة المرور فور استكمال الخطوة 2 و 3 واعتماد المسؤول.</p>
        </div>
        <div className="readybar__pct">
          <span className="ring" style={{ '--p': pct }}>
            <svg viewBox="0 0 36 36" width="44" height="44">
              <circle cx="18" cy="18" r="16" fill="none" stroke="#cfe3f2" strokeWidth="2.5" />
              <circle cx="18" cy="18" r="16" fill="none" stroke="#0a5c36" strokeWidth="2.5" strokeDasharray={`${(pct / 100) * 100.5} 100.5`} strokeLinecap="round" transform="rotate(-90 18 18)" />
            </svg>
            <ShieldCheckIcon size={0} />
          </span>
          <div>
            <small>اكتمال ملف الخطوة</small>
            <strong>{pct}% مكتمل</strong>
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------- step 2 ---------- */
function Step2({ d, set, showErrors }) {
  const rules = evaluate(d.password, d.confirm);
  const pwOk = rules.length && rules.upper && rules.digit && rules.special;
  const score = [rules.length, rules.upper, rules.digit, rules.special].filter(Boolean).length;
  const strengthLabel = ['—', 'ضعيف', 'متوسط', 'قوي', 'قوي جدا (مستوفية)'][score];
  return (
    <>
      <HeadBar dot="#3b3bd8" title="الخطوة 2 :الأدوار والصلاحيات" sub="معايير التوثيق الموحد والهوية الحكومية الرقمية (IAM)">
        <span className="wbadge wbadge--green">
          <ShieldCheckIcon size={14} />
          متوافق مع سياسات الأمن السيبراني الوطنية (NCA)
        </span>
      </HeadBar>
      <div className="infostrip">
        <InfoCircleIcon size={22} className="infostrip__icon" />
        <p>
          تُستخدم هذه البيانات لتمكين الموظف من تسجيل الدخول إلى منصة إبرام والمصادقة عبر بوابة الهوية المؤسسية (IAM). سيُطلب من المستخدم تغيير كلمة المرور عند تسجيل الدخول الأول، وتفعيل المصادقة الثنائية (MFA) عبر تطبيق النفاذ الوطني الموحد.
        </p>
      </div>

      <div className="wfield wfield--wide">
        <label>
          <span className="field__req">*</span>
          اسم المستخدم بالمنظومة (Username)
        </label>
        <div className="winput">
          <input value={d.username} onChange={(e) => set('username', e.target.value)} placeholder="s.otaibi" />
        </div>
        <div className="uname-hint">
          <span>الصيغة المؤسسية: أول حرف من الاسم الأول متبوعاً باسم العائلة (مثل: s.otaibi).</span>
          {d.username.trim() && (
            <span className="uname-ok">
              <ShieldCheckIcon size={18} />
              {d.username}
            </span>
          )}
        </div>
      </div>

      <div className="pwrow">
        <div className="pwrow__field">
          <TextField label="كلمة المرور الجديدة" req tight value={d.password} onChange={(v) => set('password', v)} placeholder="ادخل كلمة المرور" invalid={showErrors && !pwOk} />
          <div className="meter">
            <div className="meter__top">
              <span>مستوى تعقيد وأمان كلمة المرور</span>
              <span className="meter__label">{strengthLabel}</span>
            </div>
            <div className="meter__bars">
              {[0, 1, 2, 3].map((i) => (
                <i key={i} className={i < score ? 'on' : ''} />
              ))}
            </div>
          </div>
        </div>
        <div className="rules-box rules-box--wide">
          <h3>شروط الأمان الإلزامية:</h3>
          <div className="rules-box__grid rules-box__grid--wiz">
            <Check checked={rules.length} readOnly>8 خانات على الأقل</Check>
            <Check checked={rules.digit} readOnly>رقم واحد على الأقل (0-9)</Check>
            <Check checked={rules.upper} readOnly>حرف كبير واحد (A-Z)</Check>
            <Check checked={rules.special} readOnly>رمز خاص واحد (!@#$%^&*)</Check>
          </div>
        </div>
      </div>

      <TextField label="تأكيد كلمة المرور" req value={d.confirm} onChange={(v) => set('confirm', v)} placeholder="ادخل كلمة المرور" invalid={showErrors && !rules.match} />
      <div className="match-bar match-bar--wiz">
        <Check checked={rules.match} readOnly>كلمتا المرور متطابقتان تماماً وجاهزتان للاعتماد.</Check>
      </div>

      <div className="delivery">
        <h3>إعدادات الأمان والتسليم المبدئي</h3>
        <label className="delivery__item">
          <Check checked={d.forceChange} onChange={(v) => set('forceChange', v)} />
          <span>
            <strong>إلزام المستخدم بتغيير كلمة المرور فور تسجيل الدخول الأول</strong>
            <small>معيار سيبراني إلزامي حسب وثيقة ضوابط الحوكمة التقنية لمنصة إبرام</small>
          </span>
        </label>
        <label className="delivery__item">
          <Check checked={d.sendLink} onChange={(v) => set('sendLink', v)} />
          <span>
            <strong>
              إرسال رابط التفعيل وبيانات الدخول إلى البريد الحكومي المعتمد
              <span className="tag tag--secret">سري وآمن</span>
            </strong>
            <small dir="ltr">s.otaibi@procurement.gov.sa</small>
          </span>
        </label>
      </div>
    </>
  );
}

/* ---------- step 3 ---------- */
function Step3({ d, set }) {
  const selected = ROLE_OPTIONS.filter((r) => d.roles.includes(r.key));
  const n = selected.length;
  const perms = selected.reduce((a, r) => a + r.perms, 0);
  const toggle = (k) => set('roles', d.roles.includes(k) ? d.roles.filter((x) => x !== k) : [...d.roles, k]);
  const countLabel = n === 1 ? 'دور مختار' : n === 2 ? 'دوران مختاران' : `${n} أدوار مختارة`;
  return (
    <>
      <HeadBar
        dot="#4a3fd8"
        title="الخطوة 3 :تعيين الأدوار والصلاحيات الوظيفية"
        sub="يمكن للمستخدم امتلاك أكثر من دور حسب مسؤولياته داخل المؤسسة. يتم تفويض الصلاحيات الدقيقة والرقابية تلقائياً بموجب مصفوفة الصلاحيات (RACI Matrix) بما يضمن الفصل الكامل بين المهام التنفيذية والرقابية."
      >
        <span className="wbadge wbadge--green">
          <ShieldCheckIcon size={14} />
          حوكمة مشتريات معتمدة
        </span>
      </HeadBar>

      <div className="rolesplit">
        <section className="rolepanel">
          <div className="rolepanel__head">
            <h3>
              الأدوار الوظيفية المتاحة <small>(اختر واحداً أو أكثر)</small>
            </h3>
            <span className="rolepanel__count">
              <i />
              محدد حالياً: <b>{n}</b> من 6
            </span>
          </div>
          <div className="rolegrid">
            {ROLE_OPTIONS.map((r) => {
              const on = d.roles.includes(r.key);
              return (
                <button type="button" key={r.key} className={'rolecard' + (on ? ' is-on' : '')} onClick={() => toggle(r.key)} aria-pressed={on}>
                  <span className={'rolecard__cb' + (on ? ' is-on' : '')}>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                  </span>
                  <h4>{r.ar}</h4>
                  <small className="rolecard__en">{r.en}</small>
                  <p>{r.text}</p>
                  <span className="rolecard__foot">
                    <b>{r.permsLabel}</b>
                    <i>{r.tag}</i>
                  </span>
                </button>
              );
            })}
          </div>
          <div className="govnote">
            <div className="govnote__text">
              <h4>إشعار الأمان والحوكمة السيادية</h4>
              <p>تخضع جميع التعديلات والصلاحيات لمراقبة سجل التدقيق الحكومي المستمر وفق الأنظمة المعمول بها.</p>
              <ShieldLockIcon size={20} className="govnote__icon" />
            </div>
            <button type="button" className="mini mini--solid">
              دليل مصفوفة الصلاحيات
            </button>
          </div>
        </section>

        <aside className="sumcol">
          <section className="sumcard">
            <div className="sumcard__head">
              <h3>ملخص الصلاحيات</h3>
              {n > 0 && <span className="sumcard__badge">{countLabel}</span>}
            </div>
            <div className="sumtiles">
              <div>
                <UsersIcon size={26} />
                <span>
                  <b>{n}</b>
                  <small>الادوار المحددة</small>
                </span>
              </div>
              <div>
                <ShieldCheckIcon size={26} />
                <span>
                  <b>{perms}</b>
                  <small>الصلاحيات</small>
                </span>
              </div>
              <div>
                <HandshakeIcon size={26} />
                <span>
                  <b>{n * UNITS_PER_ROLE}</b>
                  <small>الوحدات المرتبطة</small>
                </span>
              </div>
            </div>
            {n === 0 ? (
              <div className="sumempty">
                <strong>لم يتم تحديد أي دور بعد</strong>
                <span>اختر دور واحد أو أكثر من القائمة</span>
                <img src="/assets/desk-illustration.png" alt="" />
              </div>
            ) : (
              <div className="sumsel">
                <h4>الادوار المختارة</h4>
                {selected.map((r) => (
                  <div className="selitem" key={r.key}>
                    <span className="selitem__icon">
                      <DocIcon size={22} />
                    </span>
                    <span className="selitem__text">
                      <b>{r.ar}</b>
                      <small>{r.perms} صلاحية</small>
                    </span>
                    <button type="button" aria-label="إزالة" onClick={() => toggle(r.key)}>
                      <CloseCircleIcon size={22} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>
          <section className="regnote">
            <div className="regnote__head">
              <InfoCircleIcon size={26} className="regnote__icon" />
              <h4>ملاحظة تنظيمية</h4>
            </div>
            <p>
              في حال تضارب الصلاحيات المالية مع الصلاحيات الإدارية، يتطلب التفعيل مصادقة إضافية من وحدة الالتزام والمراجعة الداخلية بالخطوة التالية.
            </p>
          </section>
        </aside>
      </div>
    </>
  );
}

/* ---------- step 4 ---------- */
function Section({ icon, title, sub, onEdit, children }) {
  return (
    <section className="rsec">
      <div className="rsec__head">
        <div className="rsec__title">
          <span className="rsec__icon">{icon}</span>
          <div>
            <h3>{title}</h3>
            <p>{sub}</p>
          </div>
        </div>
        <button type="button" className="rsec__edit" onClick={onEdit}>
          <span>
            <PencilIcon size={20} />
          </span>
          تعديل
        </button>
      </div>
      {children}
    </section>
  );
}
function RTile({ label, children, extra, wide }) {
  return (
    <div className={'rtile' + (wide ? ' rtile--wide' : '')}>
      <span>{label}</span>
      <div>
        <strong>{children}</strong>
        {extra}
      </div>
    </div>
  );
}

function Step4({ d, set, goTo, showError }) {
  const picked = ROLE_OPTIONS.filter((r) => d.roles.includes(r.key));
  const shown = picked.length ? picked : ROLE_OPTIONS.filter((r) => r.key === 'proc' || r.key === 'req');
  const perms = shown.reduce((a, r) => a + r.perms, 0);
  return (
    <div className="review">
      <Section icon={<IdCardIcon size={22} />} title="1. المعلومات الأساسية" sub="الهوية المؤسسية والبيانات المعتمدة للموظف" onEdit={() => goTo(1)}>
        <div className="rgrid rgrid--3">
          <RTile label="الاسم الكامل">د. حسام بن عبدالعزيز السويلم</RTile>
          <RTile label="الرقم الوظيفي" extra={<span className="tag tag--hr">مفعل في HR</span>}>
            <span className="pill pill--id" dir="ltr">EMP-04821</span>
          </RTile>
          <RTile label="البريد الإلكتروني الحكومي" extra={<CopyIcon size={16} />}>
            <span dir="ltr">h.suwailem@procure.gov.sa</span>
          </RTile>
          <RTile label="الوحدة التنظيمية الفرعية">وحدة فحص العروض والترسية</RTile>
          <RTile label="الإدارة / القسم">الإدارة العامة للمنافسات والعقود</RTile>
          <RTile
            label="رقم الهاتف المحمول"
            extra={
              <span className="tag tag--small">
                <VerifiedIcon size={11} />
                موثق نفاذ
              </span>
            }
          >
            <span dir="ltr">+966 50 123 4567</span>
          </RTile>
        </div>
        <RTile label="المسمى الوظيفي المعتمد" wide>
          أخصائي منافسات أول ومحلل عروض لجان فنية <em className="dotsep">· المرتبة الحادية عشرة</em>
        </RTile>
      </Section>

      <Section icon={<ClipboardUserIcon size={22} />} title="2. بيانات الدخول وضوابط الأمان" sub="سياسة النفاذ الوطني ومعايير الأمن السيبراني NCA" onEdit={() => goTo(2)}>
        <div className="rgrid rgrid--2">
          <RTile label="اسم المتخدم المعتمد للنظام">
            <span dir="ltr">h.suwailem</span>
          </RTile>
          <RTile label="كلمة المرور المبدئية" extra={<span className="tag tag--ok-soft">مشفرة بنظام SHA-256</span>}>
            ••••••••••••
          </RTile>
          <RTile label="سياسة الدخول الأول">إلزام المستخدم بتعيين كلمة مرور جديدة ومطابقة سياسة التعقيد</RTile>
          <RTile label="المصادقة الثنائية (MFA)">إلزامية عبر تطبيق النفاذ الوطني الموحد ورسائل التحقق</RTile>
        </div>
        <div className="infostrip infostrip--thin">
          <InfoCircleIcon size={22} className="infostrip__icon" />
          <p>
            سيتم إرسال رابط التفعيل المباشر وتعليمات الدخول الآمن إلى البريد الرسمي <a className="auth-link" href="#email" onClick={(e) => e.preventDefault()}>h.suwailem@procure.gov.sa</a> تلقائياً فور الضغط على زر الاعتماد.
          </p>
        </div>
      </Section>

      <Section icon={<DocIcon size={22} />} title="3. الأدوار والصلاحيات الممنوحة" sub="سياسة النفاذ الوطني ومعايير الأمن السيبراني NCA" onEdit={() => goTo(3)}>
        <div className="rgrid rgrid--2 rgrid--roles">
          {shown.map((r) => (
            <article className="rolecard rolecard--static is-on" key={r.key}>
              <span className="rolecard__cb is-on">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </span>
              <h4>{r.ar}</h4>
              <small className="rolecard__en">{r.en}</small>
              <p>{r.text}</p>
              <span className="rolecard__foot">
                <b>{r.permsLabel}</b>
                <i>{r.tag}</i>
              </span>
            </article>
          ))}
        </div>
        <div className="sumtiles sumtiles--row">
          <div>
            <HandshakeIcon size={26} />
            <span>
              <b>{shown.length * UNITS_PER_ROLE}</b>
              <small>الوحدات المرتبطة</small>
            </span>
          </div>
          <div>
            <ShieldCheckIcon size={26} />
            <span>
              <b>{perms}</b>
              <small>الصلاحيات</small>
            </span>
          </div>
          <div>
            <UsersIcon size={26} />
            <span>
              <b>{shown.length}</b>
              <small>الادوار المحددة</small>
            </span>
          </div>
        </div>
      </Section>

      <section className="rsec rsec--gov">
        <div className="govblock">
          <ScalesIcon size={26} />
          <div>
            <h3>إقرار مسؤولية الحوكمة والتدقيق الرقابي</h3>
            <p>
              تخضع عملية إنشاء هذا الحساب ومنح الصلاحيات المرتبطة به لسجل التدقيق الحكومي الفوري (Continuous Audit Log) وفقاً للمادة (78) من نظام المنافسات والمشتريات الحكومية ولائحته التنفيذية، وتتحمل الجهة المعتمدة مسؤولية دقة البيانات المرفوعة.
            </p>
          </div>
        </div>
        <label className={'confirm' + (showError && !d.confirmed ? ' is-invalid' : '')}>
          <Check checked={d.confirmed} onChange={(v) => set('confirmed', v)} />
          <span>
            <strong>أؤكد أن بيانات المستخدم صحيحة ومطابقة لملف الموارد البشرية واللوائح التنظيمية المعتمدة</strong>
            <small>بتفعيل هذا الإقرار، أنت توافق بصفتك مسؤول النظام المعتمد على تفعيل سجل الدخول وإصدار الهوية الرقمية للموظف.</small>
          </span>
        </label>
      </section>
    </div>
  );
}

/* ---------- validation: only the fields marked * in the design block "next" ---------- */
function stepValid(step, d) {
  if (step === 1) return [d.name, d.empId, d.email, d.phone, d.title].every((v) => v.trim());
  if (step === 2) {
    const r = evaluate(d.password, d.confirm);
    return Boolean(d.username.trim()) && r.length && r.upper && r.digit && r.special && r.match;
  }
  return true;
}

/* ---------- page ---------- */
export default function AddUser() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showErrors, setShowErrors] = useState(false);
  const [d, setD] = useState({
    name: '',
    empId: '',
    email: '',
    phone: '',
    dept: '',
    unit: '',
    title: '',
    joined: '',
    username: 's.otaibi',
    password: '',
    confirm: '',
    forceChange: false,
    sendLink: false,
    roles: [],
    confirmed: false,
  });
  const set = (k, v) => setD((s) => ({ ...s, [k]: v }));
  const go = (n) => {
    setShowErrors(false);
    setStep(n);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function create() {
    setShowErrors(true);
    if (d.confirmed) navigate(`/users/${DETAIL_USER_ID}`);
  }

  const footer = {
    1: { next: 'التالي : بيانات الدخول', prev: 'إلغاء والعودة لقائمة المستخدمين' },
    2: { next: 'التالي :الأدوار والصلاحيات', prev: 'السابق :المعلومات الأساسية' },
    3: { next: 'التالي :المراجعة والاعتماد', prev: 'السابق :بيانات الدخول' },
    4: { next: 'إنشاء المستخدم و اعتماد الحساب', prev: 'السابق : الأدوار والصلاحيات' },
  }[step];

  return (
    <div className="wizard">
      <h1 className="page-title">إضافة مستخدم جديد</h1>
      <p className="page-subtitle">التحكم المركزي في حسابات موظفي المشتريات، وتعيين الأدوار التخصصية، ومتابعة النشاط الإداري</p>

      <section className="wcard wcard--stepper">
        <Stepper current={step} />
      </section>

      {step === 4 ? (
        <Step4 d={d} set={set} goTo={go} showError={showErrors} />
      ) : (
        <section className={'wcard wcard--body' + (step === 3 ? ' wcard--plain' : '')}>
          {step === 1 && <Step1 d={d} set={set} showErrors={showErrors} />}
          {step === 2 && <Step2 d={d} set={set} showErrors={showErrors} />}
          {step === 3 && <Step3 d={d} set={set} />}
        </section>
      )}

      <footer className="wfooter">
        {step === 1 && (
          <p className="wfooter__note">
            <GavelIcon size={20} />
            يتم فحص وتدقيق البيانات لحظياً وفق سياسات الحوكمة والأمن السيبراني المعتمدة
          </p>
        )}
        <div className="wfooter__btns">
          <button
            type="button"
            className="btn-outline"
            onClick={() => (step === 1 ? navigate('/users') : go(step - 1))}
          >
            {footer.prev}
          </button>
          <button
            type="button"
            className="btn-primary wfooter__next"
            onClick={() => {
              if (step === 4) return create();
              if (!stepValid(step, d)) return setShowErrors(true);
              setShowErrors(false);
              go(step + 1);
            }}
          >
            {footer.next}
          </button>
        </div>
      </footer>
    </div>
  );
}
