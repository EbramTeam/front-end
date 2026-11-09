import { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { KebabMenu } from '../components/UsersTable.jsx';
import { LoadingBlock } from '../components/Spinner.jsx';
import TemporaryPasswordDialog from '../components/TemporaryPasswordDialog.jsx';
import { useResetUserPassword, useToggleUser, useUser } from '../hooks/use-users.js';
import {
  LockIcon,
  PencilIcon,
  BuildingIcon,
  CalendarIcon,
  SlidersIcon,
  IdCardIcon,
  CopyIcon,
  ShieldCheckIcon,
} from '../components/Icons.jsx';

const EMPTY = '—';

const SCENARIOS = [
  { key: 'new', label: 'مستخدم جديد (بدون نشاط)', dot: '#555' },
  { key: 'lead', label: 'مستخدم نشط وقيادي', dot: '#1a8cff' },
  { key: 'disabled', label: 'حساب معطل', dot: '#e53030' },
  { key: 'multi', label: 'أدوار متعددة', dot: '#1a8cff' },
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
  const { id } = useParams();
  const { user, isLoading } = useUser(id);
  const { toggleUser, isToggling } = useToggleUser();
  const { resetPassword, temporaryPassword, clearPassword } = useResetUserPassword();
  const [scenario, setScenario] = useState('lead');
  const [copied, setCopied] = useState(false);

  if (isLoading) return <LoadingBlock />;
  if (!user) return <Navigate to="/users" replace />;

  function copyEmail() {
    try {
      navigator.clipboard?.writeText(user.email);
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
            <span className="profile__avatar">{user.initials}</span>
            <div className="profile__info">
              <h2>{user.name}</h2>
              <p className="profile__meta">
                <BuildingIcon size={18} />
                {user.dept}
              </p>
              <p className="profile__meta">
                <CalendarIcon size={18} />
                تاريخ إنشاء الحساب: {user.created}
              </p>
            </div>
          </div>
          <div className="profile__side">
            <div className="profile__side-top">
              <span className={'status ' + (user.isActive ? 'st-active st-active--soft' : 'st-inactive')}>
                <i className="status__dot" />
                {user.isActive ? 'حساب نشط' : 'حساب غير نشط'}
              </span>
              <KebabMenu id={user.id} placement="above" onResetPassword={() => resetPassword(user.id)} />
            </div>
            <div className="profile__actions">
              <button type="button" className="act act--edit act--lg" aria-label="تعديل" onClick={() => navigate(`/users/${user.id}/edit`)}>
                <PencilIcon size={22} />
              </button>
              <button type="button" className="act act--lock act--lg" aria-label="قفل" disabled={isToggling} onClick={() => toggleUser(user)}>
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
          </div>
          <div className="info__grid">
            <InfoTile label="الاسم الكامل">{user.name}</InfoTile>
            <InfoTile
              label="البريد الإلكتروني الحكومي"
              extra={
                <button type="button" className="icon-btn" onClick={copyEmail} aria-label="نسخ البريد">
                  {copied ? <ShieldCheckIcon size={18} /> : <CopyIcon size={18} />}
                </button>
              }
            >
              <span dir="ltr">{user.email}</span>
            </InfoTile>
            <InfoTile label="الرقم الوظيفي">{EMPTY}</InfoTile>
            <InfoTile label="رقم الهاتف المحمول">{EMPTY}</InfoTile>
            <InfoTile label="الإدارة / القسم">{user.dept}</InfoTile>
            <InfoTile label="الوحدة التنظيمية الفرعية">{EMPTY}</InfoTile>
          </div>
        </section>

        <section className="dcard account">
          <div className="dcard__head">
            <h3>
              <ShieldCheckIcon size={26} className="dcard__head-icon" />
              بيانات الحساب والأمان
            </h3>
          </div>
          <dl className="account__list">
            <div>
              <dt>حالة الحساب</dt>
              <dd className={user.isActive ? 'is-ok' : 'plain'}>
                {user.isActive && <i />} {user.isActive ? 'نشط' : 'غير نشط'}
              </dd>
            </div>
            <div>
              <dt>المصادقة الثنائية (2FA)</dt>
              <dd className="plain">{EMPTY}</dd>
            </div>
            <div>
              <dt>تاريخ إنشاء الحساب</dt>
              <dd className="plain">{user.created}</dd>
            </div>
            <div>
              <dt>منشئ الحساب</dt>
              <dd className="plain">{EMPTY}</dd>
            </div>
            <div>
              <dt>آخر تسجيل دخول</dt>
              <dd className="plain two">
                {user.last}
                {user.lastSub && <small><bdi dir="ltr">{user.lastSub}</bdi></small>}
              </dd>
            </div>
            <div>
              <dt>آخر تحديث بيانات</dt>
              <dd className="plain">{EMPTY}</dd>
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
          <span className="soft-pill">{user.roles.length} أدوار معتمدة</span>
        </div>
        <div className="roles__grid">
          {user.roles.map((role, index) => (
            <article key={role.id} className={'rcard' + (index === 0 ? ' rcard--main' : '')}>
              <h4>{role.label}</h4>
            </article>
          ))}
        </div>
      </section>

      {temporaryPassword && <TemporaryPasswordDialog password={temporaryPassword} onClose={clearPassword} />}
    </div>
  );
}
