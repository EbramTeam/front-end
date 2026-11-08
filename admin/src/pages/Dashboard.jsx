import { Link, useNavigate } from 'react-router-dom';
import { DASHBOARD_ROWS, ACTIVITY } from '../data.js';
import { UsersFilters, UsersTable, Pagination, useUserFilters } from '../components/UsersTable.jsx';
import {
  IdCardIcon,
  UsersIcon,
  UserCheckIcon,
  ClipboardUserIcon,
  ReportIcon,
  SettingsIcon,
  ShieldCheckIcon,
  GridIcon,
  BanUserIcon,
  SmallUserIcon,
} from '../components/Icons.jsx';

const ROWS = DASHBOARD_ROWS.map((r, i) => ({ ...r, rowKey: 'd' + i }));

const ACT_ICON = { users: 'bg-users-blue', shield: 'bg-shield-blue', grid: 'bg-dashboard-blue' };

function StatCard({ badge, badgeTone, icon, value, label, sub, iconTone }) {
  return (
    <div className="dstat">
      <div className="dstat__top">
        <span className={'dstat__badge dstat__badge--' + badgeTone}>{badge}</span>
        <span className={'dstat__icon has-tile dstat__icon--' + iconTone}>{icon}</span>
      </div>
      <strong>{value}</strong>
      <span className="dstat__label">{label}</span>
      <small>{sub}</small>
    </div>
  );
}

function ActionCard({ tag, tagTone, icon, title, text, children }) {
  return (
    <article className="acard">
      <div className="acard__icon acard__icon--red has-tile" data-tone={tagTone}>
        {icon}
      </div>
      <div className="acard__body">
        <div className="acard__head">
          <h3>{title}</h3>
          <span className={'acard__tag acard__tag--' + tagTone}>{tag}</span>
        </div>
        <p>{text}</p>
        <div className="acard__btns">{children}</div>
      </div>
    </article>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();
  const f = useUserFilters();
  return (
    <div className="dash">
      <div className="page-head">
        <div>
          <div className="dash__hello">
            <h1 className="page-title">مرحبًا، مدير النظام</h1>
            <span className="live-pill">
              <i />
              <i />
              النظام متصل وآمن | المزامنة الفورية نشطة
            </span>
          </div>
          <p className="page-subtitle">نظرة عامة على حالة النظام وأهم الإجراءات المطلوبة لحوكمة المنظومة</p>
        </div>
        <div className="page-head__actions dash__actions">
          <button type="button" className="btn-outline" onClick={() => navigate('/audit-log')}>
            تصدير تقارير النظام
          </button>
          <button type="button" className="btn-primary" onClick={() => navigate('/users/new')}>
            إضافة مستخدم جديد
          </button>
        </div>
      </div>

      <div className="dstats">
        <StatCard badge="+12 هذا الشهر" badgeTone="blue" iconTone="blue" icon={<img className="tile-img" src="/assets/icons/tile-idcard.png" alt="" />} value="248" label="إجمالي المستخدمين" sub="حساب مسجل وموثوق" />
        <StatCard badge="حالة سليمة" badgeTone="green" iconTone="green" icon={<img className="tile-img" src="/assets/icons/tile-users-green.png" alt="" />} value="215" label="المستخدمون النشطون" sub="معدل النشاط اليومي 86.7%" />
        <StatCard badge="يتطلب متابعة" badgeTone="gray" iconTone="gray" icon={<img className="tile-img" src="/assets/icons/bg-userban.png" alt="" />} value="33" label="غير النشطين" sub="18 معلقة · 15 معطلة" />
        <StatCard badge="محدثة وفق الدليل" badgeTone="blue" iconTone="blue" icon={<img className="tile-img" src="/assets/icons/bg-roles.png" alt="" />} value="12" label="الأدوار والصلاحيات" sub="دور وظيفي · 86 صلاحية" />
        <StatCard badge="سجل التدقيق نشط" badgeTone="blue" iconTone="blue" icon={<img className="tile-img" src="/assets/icons/bg-monitor.png" alt="" />} value="1,840" label="نشاطات النظام" sub="عملية مسجلة خلال 24 ساعة" />
      </div>

      <div className="dcols">
        {/* right column in RTL: actions + distribution */}
        <section className="dcol dcol--actions">
          <div className="dsec-head">
            <h2>
              <span className="dsec-head__alert">!</span>
              يحتاج إلى إجراء
            </h2>
            <span className="urgent-pill">3 إجراءات ملحة</span>
          </div>

          <ActionCard
            tag="أولوية عالية"
            tagTone="red"
            icon={<img className="tile-img" src="/assets/icons/tile-users-red.png" alt="" />}
            title="مستخدمون يحتاجون إلى تفعيل"
            text="18 دعوة مستخدم معلقة بانتظار التحقق والمصادقة وتعيين الصلاحيات الأولية للمنظومة"
          >
            <button type="button" className="mini mini--solid" onClick={() => navigate('/users')}>
              مراجعة وتفعيل المستخدمين
            </button>
            <button type="button" className="mini mini--outline" onClick={() => navigate('/users')}>
              إعادة إرسال الروابط
            </button>
          </ActionCard>

          <ActionCard
            tag="أولوية عالية"
            tagTone="red"
            icon={<img className="tile-img" src="/assets/icons/tile-users-red2.png" alt="" />}
            title="مستخدمون يحتاجون إلى أدوار وصلاحيات"
            text="18 دعوة مستخدم معلقة بانتظار التحقق والمصادقة وتعيين الصلاحيات الأولية للمنظومة"
          >
            <button type="button" className="mini mini--outline" onClick={() => navigate('/roles')}>
              مراجعة الأدوار والصلاحيات
            </button>
          </ActionCard>

          <ActionCard
            tag="أمن سيبراني"
            tagTone="blue"
            icon={<img className="tile-img" src="/assets/icons/tile-settings-navy.png" alt="" />}
            title="إعدادات تحتاج إلى تحديث"
            text="سياسة كلمات المرور والتحقق الثنائي (MFA) تتطلب مواءمة دورية مع معايير NCA لعام 2025"
          >
            <button type="button" className="mini mini--outline" onClick={() => navigate('/settings')}>
              تحديث الإعدادات والامتثال
            </button>
          </ActionCard>

          <div className="dist">
            <div className="dsec-head dsec-head--plain">
              <h2>توزيع صلاحيات المستخدمين حسب النطاق</h2>
              <span className="auto-note">محدث آلياً</span>
            </div>
            <div className="dist__grid">
              <div className="dist__tile">
                <div>
                  <span>مديرو نظام كاملون</span>
                  <strong>6 مسؤولون</strong>
                </div>
                <i className="bar bar--blue" style={{ '--w': '14%' }} />
              </div>
              <div className="dist__tile">
                <div>
                  <span>مسؤولو بيانات وأقسام</span>
                  <strong>42 مستخدم</strong>
                </div>
                <i className="bar bar--green" style={{ '--w': '45%' }} />
              </div>
              <div className="dist__tile">
                <div>
                  <span>مراجعون ومدققون</span>
                  <strong>167 مستخدم</strong>
                </div>
                <i className="bar bar--dark" style={{ '--w': '72%' }} />
              </div>
            </div>
          </div>
        </section>

        {/* left column in RTL: recent activity */}
        <section className="dcol dcol--activity">
          <div className="dsec-head">
            <h2>
              <span className="dsec-head__icon">
                <SmallUserIcon size={18} />
              </span>
              آخر النشاطات
            </h2>
            <Link to="/audit-log" className="muted-link">
              سجل الرقابة الإدارية
            </Link>
          </div>
          <div className="activity">
            {ACTIVITY.map((a) => {
              const Icon = ACT_ICON[a.icon];
              return (
                <article className="act-item" key={a.title + a.time}>
                  <span className="act-item__icon has-tile">
                    <img className="tile-img" src={`/assets/icons/${Icon}.png`} alt="" />
                  </span>
                  <div>
                    <div className="act-item__top">
                      <h3>{a.title}</h3>
                      <small>{a.time}</small>
                    </div>
                    <p>{a.body}</p>
                  </div>
                </article>
              );
            })}
            <div className="act-item act-item--ghost" aria-hidden="true" />
            <button type="button" className="audit-btn" onClick={() => navigate('/audit-log')}>
              عرض كافة سجلات التدقيق (Audit Log)
            </button>
          </div>
        </section>
      </div>

      <UsersFilters f={f} layout="inline" />
      <div className="paged">
        <UsersTable rows={ROWS} f={f} />
        <Pagination total={55} pageSize={5} lastPage={31} />
      </div>
    </div>
  );
}
