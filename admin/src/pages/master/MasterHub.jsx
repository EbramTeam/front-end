import { useNavigate } from 'react-router-dom';
import { useMaster, fmt, SEED_COUNT } from '../../masterStore.jsx';
import { AUDIT_ROWS } from '../../masterData.js';
import { useDepartments } from '../../hooks/use-departments.js';
import { PageHead } from './Bits.jsx';
import { OrgChartIcon, ScalesIcon, ShieldIcon, ClipboardUserIcon } from '../../components/Icons.jsx';
import { CubeIcon, AppsIcon } from '../../components/MIcons.jsx';

export default function MasterHub() {
  const nav = useNavigate();
  const { items, units, categories } = useMaster();
  const { departments } = useDepartments();
  const cards = [
    { icon: <OrgChartIcon size={24} />, tag: fmt(departments.length) + ' إدارة وقسم معتمد', title: 'الأقسام والإدارات', text: 'تنظيم الهيكل الإداري والمراكز التكليفية والجهات الطالبة لمطابقة اعتمادات المشتريات ومسارات الصرف.', btn: 'إدارة الأقسام والإدارات', to: '/master-data/departments' },
    { icon: <CubeIcon size={24} />, tag: fmt(1840 + items.length - SEED_COUNT.items) + ' صنف مسجل', title: 'الأصناف', text: 'الدليل الموحد للمواد والخدمات، وتوصيف بنود المشتريات ورموزها المرجعية وربطها بالمواصفات الفنية القياسية.', btn: 'إدارة الأصناف', to: '/master-data/items' },
    { icon: <AppsIcon size={22} />, tag: fmt(16 + categories.filter((c) => c.level === 1).length - SEED_COUNT.categories) + ' تصنيف رئيسي وفرعي', title: 'التصنيفات', text: 'شجرة تبويب المشتريات وسلاسل الإمداد ومجموعات الإنفاق وفق المعايير المحاسبية والتصنيف الحكومي الموحد.', btn: 'إدارة التصنيفات', to: '/master-data/categories' },
    { icon: <ScalesIcon size={24} />, tag: fmt(28 + units.length - SEED_COUNT.units) + ' وحدة قياس قياسية', title: 'الوحدات', text: 'معايير قياس الكميات (عدد، طن، متر، رخصة ساعة عمل) وضوابط التحويل الرياضي المعتمدة لتدقيق الفواتير.', btn: 'إدارة وحدة القياس', to: '/master-data/units' },
  ];
  return (
    <div className="mhub">
      <PageHead title="البيانات الأساسية" sub="إدارة البيانات المرجعية التي يعتمد عليها النظام في تنظيم طلبات الشراء ومعالجة البيانات." />
      <div className="mhub__cards">
        {cards.map((c) => (
          <section key={c.to} className="mhubcard">
            <div className="mhubcard__top"><span className="mhubcard__icon">{c.icon}</span><span className="mhubcard__tag">{c.tag}</span></div>
            <h2>{c.title}</h2>
            <p>{c.text}</p>
            <button type="button" className="btn-primary" onClick={() => nav(c.to)}>{c.btn}</button>
          </section>
        ))}
      </div>
      <section className="vcard mhubaudit">
        <header className="mcardhead">
          <span className="mcardhead__icon mcardhead__icon--sq"><ClipboardUserIcon size={22} /></span>
          <div><h2>سجل التدقيق والتكامل المرجعي للبيانات</h2><p>عمليات الضبط والتعديل الأخيرة المسجلة بنظام الإشراف المركزي</p></div>
        </header>
        <div className="vtable mhubtable">
          <table>
            <thead><tr><th>البيان المرجعي والتعديل</th><th>المسؤول عن التعديل</th><th>تاريخ الإجراء</th><th>حالة المزامنة</th></tr></thead>
            <tbody>
              {AUDIT_ROWS.map((r) => (
                <tr key={r.t}><td className="mhub__t">{r.t}</td><td>{r.who}</td><td>{r.date}</td><td><span className={'mpill mpill--' + r.cls}>{r.st}</span></td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mhubnote"><ShieldIcon size={16} /><b>تنويه إجرائي:</b> جميع التعديلات على الجداول المرجعية تخضع للمزامنة التلقائية مع محرك أوامر الشراء ونظام الميزانيات الحكومية.</div>
      </section>
    </div>
  );
}
