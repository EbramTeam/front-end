import { useNavigate } from 'react-router-dom';
import { USERS_PAGE_ROWS } from '../data.js';
import { UsersFilters, UsersTable, useUserFilters } from '../components/UsersTable.jsx';
import { IdCardIcon, UsersIcon, HourglassIcon, BanIcon } from '../components/Icons.jsx';

const ROWS = USERS_PAGE_ROWS.map((r, i) => ({ ...r, rowKey: 'u' + i }));

function Stat({ icon, tint, value, label, sub, subClass }) {
  return (
    <div className="ustat">
      <div className="ustat__text">
        <strong>{value}</strong>
        <span>{label}</span>
        <small className={subClass}>{sub}</small>
      </div>
      <span className="ustat__icon has-tile" style={{ background: tint.bg, color: tint.fg }}>
        {icon}
      </span>
    </div>
  );
}

export default function Users() {
  const navigate = useNavigate();
  const f = useUserFilters();
  return (
    <div className="users-page">
      <div className="page-head">
        <div>
          <h1 className="page-title">إدارة المستخدمين</h1>
          <p className="page-subtitle">التحكم المركزي في حسابات موظفي المشتريات، وتعيين الأدوار التخصصية، ومتابعة النشاط الإداري</p>
        </div>
        <div className="page-head__actions">
          <button type="button" className="btn-outline" onClick={() => navigate('/audit-log')}>
            تصدير تقارير النظام
          </button>
          <button type="button" className="btn-primary" onClick={() => navigate('/users/new')}>
            إضافة مستخدم جديد
          </button>
        </div>
      </div>

      <div className="ustats">
        <Stat
          icon={<img className="tile-img" src="/assets/icons/tile-idcard.png" alt="" />}
          tint={{ bg: '#e8f6ff', fg: '#0b2a4a' }}
          value="248"
          label="إجمالي المستخدمين"
          sub="↑ 6+ هذا الشهر"
          subClass="is-green"
        />
        <Stat
          icon={<img className="tile-img" src="/assets/icons/tile-users-green.png" alt="" />}
          tint={{ bg: '#eefff8', fg: '#0a5c36' }}
          value="215"
          label="المستخدمون النشطون"
          sub="معدل النشاط اليومي 86.7%"
          subClass="is-green"
        />
        <Stat
          icon={<HourglassIcon size={26} />}
          tint={{ bg: '#e8f6ff', fg: '#0b2a4a' }}
          value="12"
          label="بانتظار التفعيل"
          sub="دعوات معلقة"
        />
        <Stat
          icon={<BanIcon size={26} />}
          tint={{ bg: '#fff4f4', fg: '#e84a4a' }}
          value="15"
          label="المقفلة وغير النشطة"
          sub="تتطلب فحص أمني"
          subClass="is-red"
        />
      </div>

      <UsersFilters f={f} layout="stacked" />
      <UsersTable rows={ROWS} f={f} />
    </div>
  );
}
