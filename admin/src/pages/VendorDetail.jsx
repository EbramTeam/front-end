import { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useSupplier, useToggleSupplier } from '../hooks/use-suppliers.js';
import { LoadingBlock } from '../components/Spinner.jsx';
import { VendorStatusModal } from '../components/VendorModals.jsx';
import {
  CopyIcon, FingerprintIcon, IdCardIcon, SendMailIcon, ClockHistoryIcon, CircleCheckIcon, PhoneIcon,
  GlobeLineIcon, PinIcon, GavelIcon, CalendarIcon,
} from '../components/Icons.jsx';

function Copy({ text }) {
  const [ok, setOk] = useState(false);
  return (
    <button
      type="button"
      className={'vcopy' + (ok ? ' is-ok' : '')}
      aria-label="نسخ"
      onClick={() => {
        try { navigator.clipboard?.writeText(text); } catch (e) {}
        setOk(true);
        setTimeout(() => setOk(false), 1200);
      }}
    >
      <CopyIcon size={16} />
    </button>
  );
}

function Tile({ label, children, sub, copy, icon }) {
  return (
    <div className={'vtile' + (icon ? ' vtile--icon' : '')}>
      <span className="vtile__label">{label}</span>
      <div className="vtile__value">{children}</div>
      {sub}
      {copy}
      {icon && <span className="vtile__ico">{icon}</span>}
    </div>
  );
}

export default function VendorDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { vendor, isLoading } = useSupplier(id);
  const { toggleSupplier } = useToggleSupplier();
  const [modal, setModal] = useState(null);

  if (isLoading) return <LoadingBlock />;
  if (!vendor) return <Navigate to="/vendors" replace />;

  const d = vendor.detail;
  const off = vendor.status === 'suspended';

  return (
    <div className="vdetail">
      <section className="vhead">
        <div className="vhead__main">
          <div className="vhead__title">
            <h1>{vendor.name}</h1>
            <div className="vhead__badges">
              {off ? <em className="vpill-off"><i />غير نشط · معلق إداريا</em> : <em className="vpill-ok"><i />نشط ومؤهل</em>}
            </div>
          </div>
          <div className="vhead__meta">
            <span>الرقم الضريبي: <bdi dir="ltr">{vendor.vat}</bdi><CopyIcon size={16} /></span>
            <span>س.ت: <bdi dir="ltr">{vendor.cr}</bdi><CopyIcon size={16} /></span>
            <span>رمز المورد المرجعي: <bdi dir="ltr">{vendor.id}</bdi><CopyIcon size={16} /></span>
          </div>
          <div className="vhead__upd"><ClockHistoryIcon size={14} />آخر تحديث: {d.updatedLong}</div>
        </div>
        <div className="vhead__btns">
          <button type="button" className="btn-primary vbtn" onClick={() => navigate('/vendors/' + vendor.id + '/edit')}>تعديل المورد</button>
          {off ? (
            <button type="button" className="vbtn vbtn--blue" onClick={() => setModal('reactivate')}>إعادة تفعيل المورد</button>
          ) : (
            <button type="button" className="vbtn vbtn--danger" onClick={() => setModal('deactivate')}>تعطيل المورد</button>
          )}
        </div>
      </section>

      {off && (
        <section className="vban">
          <span className="vban__icon"><GavelIcon size={26} /></span>
          <div className="vban__text">
            <div className="vban__top">
              <strong>هذا المورد غير نشط حاليّا</strong>
              <span className="vban__tag">حظر تعاقدي</span>
            </div>
            <p>تم تعطيل المورد بقرار إداري رقابي. لا يمكن دعوة هذا الكيان للمنافسات أو إصدار أوامر شراء جديدة حتى تتم إعادة تفعيله من قبل مدير النظام بعد استيفاء شروط المصادقة.</p>
          </div>
          <button type="button" className="vbtn vbtn--blue" onClick={() => setModal('reactivate')}>إعادة تفعيل</button>
        </section>
      )}

      <div className="vcols">
        <div className="vcol vcol--side">
          <section className="vcard">
            <header className="vcard__head"><FingerprintIcon size={26} /><h2>معلومات السجل والرقابة المرجعية</h2></header>
            <div className="vmini">
              <span>معرف المعاملة المرجعية (Master UID)</span>
              <b dir="ltr">{d.uid}</b>
            </div>
            <div className="vmini">
              <span>تاريخ الإنشاء الأولي بالسجل</span>
              <b>{d.created}</b>
              <small>{d.createdBy}</small>
            </div>
            <div className="vmini">
              <span>التشفير والنزاهة الرقابية</span>
              <b dir="ltr">{d.hash}</b>
              <small className="is-green">سجل ثابت غير قابل للتعديل المباشر</small>
            </div>
          </section>

          <section className="vcard">
            <header className="vcard__head"><ClockHistoryIcon size={26} /><h2>سجل النشاط المرجعي (MDM)</h2></header>
            <ol className="vtl">
              {d.timeline.map((t, i) => (
                <li key={t.title} className={t.done ? 'is-done' : ''}>
                  <span className="vtl__dot">{t.done && <CircleCheckIcon size={20} />}</span>
                  <div className="vtl__top">
                    <strong>{t.title}</strong>
                    <small>{t.date}</small>
                  </div>
                  <p>{t.text}</p>
                  {t.by && <b>{t.by}</b>}
                </li>
              ))}
            </ol>
          </section>
        </div>

        <div className="vcol vcol--main">
          <section className="vcard">
            <header className="vcard__head vcard__head--tag">
              <IdCardIcon size={26} />
              <h2>المعلومات الوظيفية والأساسية</h2>
              <span className="vtag">سجل مركزي موثق</span>
            </header>
            <div className="vgrid">
              <Tile label="اسم المورد / الكيان التجاري">{vendor.name}</Tile>
              <Tile label="رقم السجل التجاري" copy={<Copy text={vendor.cr} />}>{vendor.cr}</Tile>
              <Tile label="نوع النشاط المرجعي">{vendor.activityFull || vendor.activity}</Tile>
              <Tile label="التصنيف المعتمد">{vendor.gradeFull || vendor.grade}</Tile>
              <Tile label="الكيان القانوني">{d.legalForm}</Tile>
              <Tile label="تاريخ انتهاء السجل التجاري">{d.crExpiry}</Tile>
            </div>
          </section>

          <section className="vcard">
            <header className="vcard__head vcard__head--tag">
              <SendMailIcon size={26} />
              <h2>بيانات التواصل والتمثيل النظامي</h2>
              <span className="vtag">مفوض رسمي</span>
            </header>
            <div className="vgrid">
              <Tile label="المفوض الإداري المعتمد" sub={<small className="vtile__sub">{d.repTitle}</small>}>{d.rep}</Tile>
              <Tile label="أرقام التواصل المعتمدة" icon={<PhoneIcon size={18} />}>
                <div className="vphones">
                  <div><span>الهاتف المكتبي:</span><b dir="ltr">{d.office}</b></div>
                  <div><span>الجوال المباشر:</span><b dir="ltr">{d.mobile}</b></div>
                </div>
              </Tile>
              <Tile label="القنوات الرقمية المعتمدة" icon={<GlobeLineIcon size={18} />}>
                <div className="vphones"><div><span>البريد الإلكتروني:</span><b dir="ltr">{d.mail}</b></div></div>
              </Tile>
              <Tile label="العنوان الوطني المعتمد (SPL)" icon={<PinIcon size={18} />}>
                <span className="vtile__addr">{d.address}</span>
              </Tile>
            </div>
          </section>
        </div>
      </div>

      {modal && (
        <VendorStatusModal
          mode={modal}
          vendor={vendor}
          onClose={() => setModal(null)}
          onConfirm={() => {
            toggleSupplier({ id: vendor.id, active: modal !== 'deactivate' });
            setModal(null);
            window.scrollTo({ top: 0 });
          }}
        />
      )}
    </div>
  );
}
