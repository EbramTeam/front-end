import { useNavigate } from 'react-router-dom';
import { Pagination, UsersFilters, UsersTable } from '../components/UsersTable.jsx';
import { useUsersList, useUserStats } from '../hooks/use-users.js';
import { IdCardIcon, UsersIcon, HourglassIcon, BanIcon } from '../components/Icons.jsx';

const count = (value) => (value === undefined ? '—' : value.toLocaleString('en-US'));

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
  const list = useUsersList({ pageSize: 20 });
  const stats = useUserStats();
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
          value={count(stats.total)}
          label="إجمالي المستخدمين"
          sub=""
        />
        <Stat
          icon={<img className="tile-img" src="/assets/icons/tile-users-green.png" alt="" />}
          tint={{ bg: '#eefff8', fg: '#0a5c36' }}
          value={count(stats.active)}
          label="المستخدمون النشطون"
          sub=""
        />
        <Stat
          icon={<HourglassIcon size={26} />}
          tint={{ bg: '#e8f6ff', fg: '#0b2a4a' }}
          value="—"
          label="بانتظار التفعيل"
          sub=""
        />
        <Stat
          icon={<BanIcon size={26} />}
          tint={{ bg: '#fff4f4', fg: '#e84a4a' }}
          value={count(stats.inactive)}
          label="المقفلة وغير النشطة"
          sub=""
        />
      </div>

      <UsersFilters f={list.filters} layout="stacked" />
      <div className="paged">
        <UsersTable rows={list.rows} isLoading={list.isLoading} />
        <Pagination total={list.total} pageSize={list.pageSize} lastPage={list.lastPage} page={list.page} onPageChange={list.setPage} />
      </div>
    </div>
  );
}
