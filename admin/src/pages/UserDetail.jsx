import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { KebabMenu } from '../components/UsersTable.jsx';
import {
  LockIcon,
  PencilIcon,
  BuildingIcon,
  CalendarIcon,
  VerifiedIcon,
  SlidersIcon,
  IdCardIcon,
  CopyIcon,
  SyncIcon,
  ShieldCheckIcon,
} from '../components/Icons.jsx';

const SCENARIOS = [
  { key: 'new', label: 'مستخدم جديد (بدون نشاط)', dot: '#555' },
  { key: 'lead', label: 'مستخدم نشط وقيادي', dot: '#1a8cff' },
  { key: 'disabled', label: 'حساب معطل', dot: '#e53030' },
  { key: 'multi', label: 'أدوار متعددة', dot: '#1a8cff' },
];

const ROLES = [
  {
    main: true,
    title: 'رئيس لجنة فحص العروض',
    text: 'صلاحية كاملة لترؤس جلسات فتح وفحص العروض الفنية والمالية.',
  },
  {
    title: 'معتمد طلبات الصرف المالي (حق 500,000 ر.س)',
    text: 'حق اعتماد استمارات أوامر الشراء والارتباط المالي للمشاريع',
  },
  {
    title: 'أخصائي منافسات استراتيجية',
    text: 'إعداد كراسات الشروط والمواصفات، ومراجعة متطلبات الموردين',
  },
];

function InfoTile({ label, children, extra }) {
  return (
    <div className="itile">
      <span className="itile__label">{label}</span>
      <div className="itile__value">
        <strong>{children}</strong>
        {extra}
      </div>
    </div>
  );
}

export default function UserDetail() {
  const navigate = useNavigate();
  const [scenario, setScenario] = useState('lead');
  const [copied, setCopied] = useState(false);
  const email = 'h.suwailem@procure.gov.sa';

  function copyEmail() {
    try {
      navigator.clipboard?.writeText(email);
    } catch (e) {
      /* clipboard may be unavailable */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="detail">
      <h1 className="page-title">إدارة المستخدمين</h1>
      <p className="page-subtitle">التحكم المركزي في حسابات موظفي المشتريات، وتعيين الأدوار التخصصية، ومتابعة النشاط الإداري</p>

      <div className="detail__top">
        {/* profile card (right in RTL) */}
        <section className="dcard profile">
          <div className="profile__main">
            <span className="profile__avatar">د.ح</span>
            <div className="profile__info">
              <div className="profile__row">
                <span className="pill pill--id">EMP-04821</span>
              </div>
              <h2>د. حسام بن عبدالعزيز السويلم</h2>
              <p className="profile__meta">
                <BuildingIcon size={18} />
                الإدارة العامة للمنافسات والعقود
              </p>
              <p className="profile__meta">
                <CalendarIcon size={18} />
                تاريخ الانضمام: 01 اكتوبر 2026 (منذ أقل من شهر)
              </p>
              <p className="profile__meta profile__meta--ok">
                <VerifiedIcon size={18} />
                مصادقة الهوية عبر النفاذ الوطني الموحد (IAM)
              </p>
            </div>
          </div>
          <div className="profile__side">
            <div className="profile__side-top">
              <span className="status st-active st-active--soft">
                <i className="status__dot" />
                حساب نشط وموثق
              </span>
              <KebabMenu placement="above" />
            </div>
            <div className="profile__actions">
              <button type="button" className="act act--edit act--lg" aria-label="تعديل" onClick={() => navigate('/users/EMP-04821/edit')}>
                <PencilIcon size={22} />
              </button>
              <button type="button" className="act act--lock act--lg" aria-label="قفل">
                <LockIcon size={22} />
              </button>
            </div>
          </div>
        </section>

        {/* sandbox (left) */}
        <section className="dcard sandbox">
          <div className="sandbox__head">
            <span className="sandbox__icon">
              <SlidersIcon size={22} />
            </span>
            <div>
              <h3>محاكي حالات المستخدم <bdi dir="ltr">(Audit &amp; Governance Sandbox)</bdi></h3>
              <p>تنقل بين السيناريوهات الإدارية لمراجعة الحساب والصلاحيات الرقابية</p>
            </div>
          </div>
          <div className="sandbox__chips">
            {SCENARIOS.map((s) => (
              <button
                key={s.key}
                type="button"
                className={'schip' + (scenario === s.key ? ' is-on' : '')}
                onClick={() => setScenario(s.key)}
              >
                <i style={{ background: s.dot }} />
                {s.label}
              </button>
            ))}
          </div>
        </section>
      </div>

      <div className="detail__mid">
        <section className="dcard info">
          <div className="dcard__head">
            <h3>
              <IdCardIcon size={26} className="dcard__head-icon" />
              المعلومات الوظيفية والأساسية
            </h3>
            <span className="soft-pill">سجل مركزي موثق</span>
          </div>
          <div className="info__grid">
            <InfoTile label="الاسم الكامل">د. حسام بن عبدالعزيز السويلم</InfoTile>
            <InfoTile
              label="البريد الإلكتروني الحكومي"
              extra={
                <button type="button" className="icon-btn" onClick={copyEmail} aria-label="نسخ البريد">
                  {copied ? <ShieldCheckIcon size={18} /> : <CopyIcon size={18} />}
                </button>
              }
            >
              <span dir="ltr">h.suwailem@procure.gov.sa</span>
            </InfoTile>
            <InfoTile label="الرقم الوظيفي" extra={<span className="tag tag--hr">مفعل في HR</span>}>
              <span className="pill pill--id" dir="ltr">EMP-04821</span>
            </InfoTile>
            <InfoTile
              label="رقم الهاتف المحمول"
              extra={
                <span className="tag tag--small">
                  <VerifiedIcon size={11} />
                  موثق نفاذ
                </span>
              }
            >
              <span dir="ltr">+966 50 123 4567</span>
            </InfoTile>
            <InfoTile label="الإدارة / القسم">الإدارة العامة للمنافسات والعقود</InfoTile>
            <InfoTile label="الوحدة التنظيمية الفرعية">وحدة فحص العروض والترسية</InfoTile>
          </div>
          <div className="info__sync">
            <span>
              <SyncIcon size={18} />
              تتم مزامنة البيانات الشخصية والوظيفية آلياً مع منصة الموارد البشرية المركزية.
            </span>
            <small>تحديث: منذ ساعتين</small>
          </div>
        </section>

        <section className="dcard account">
          <div className="dcard__head">
            <h3>
              <ShieldCheckIcon size={26} className="dcard__head-icon" />
              بيانات الحساب والأمان
            </h3>
            <span className="tag tag--ok">
              <i />
              متوافق مع ضوابط NCA
            </span>
          </div>
          <dl className="account__list">
            <div>
              <dt>حالة الحساب</dt>
              <dd className="is-ok">
                <i /> نشط (معتمد وموثق عبر IAM)
              </dd>
            </div>
            <div>
              <dt>المصادقة الثنائية (2FA)</dt>
              <dd>
                <span className="tag tag--ok-soft">مفعلة إلزامياً (NCA-CCC)</span>
              </dd>
            </div>
            <div>
              <dt>تاريخ إنشاء الحساب</dt>
              <dd className="plain">01 رجب 1446 هـ (09:30 ص)</dd>
            </div>
            <div>
              <dt>منشئ الحساب</dt>
              <dd className="plain">
                <a
                  href="/users/EMP-04821"
                  className="auth-link"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/users/a.almansour');
                  }}
                >
                  د. عبدالله المنصور (مدير النظام)
                </a>
              </dd>
            </div>
            <div>
              <dt>آخر تسجيل دخول</dt>
              <dd className="plain two">
                <span>اليوم 10:45 ص</span>
                <small dir="ltr">IP: 10.20.14.88 (غزة)</small>
              </dd>
            </div>
            <div>
              <dt>آخر تحديث بيانات</dt>
              <dd className="plain">أمس 02:15 م (عبر الموارد البشرية)</dd>
            </div>
          </dl>
        </section>
      </div>

      <section className="dcard roles">
        <div className="dcard__head">
          <h3>
            <ShieldCheckIcon size={26} className="dcard__head-icon" />
            الأدوار والصلاحيات المعتمدة
          </h3>
          <span className="soft-pill">3 أدوار معتمدة</span>
        </div>
        <div className="roles__grid">
          {ROLES.map((r) => (
            <article key={r.title} className={'rcard' + (r.main ? ' rcard--main' : '')}>
              {r.main && <span className="rcard__badge">الدور الرئيسي</span>}
              <h4>{r.title}</h4>
              <p>{r.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
