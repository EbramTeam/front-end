import { useLayoutEffect, useRef } from 'react';
import LangButton from './LangButton.jsx';
import { Link } from 'react-router-dom';
import { GlobeIcon, ShieldIcon, ShieldLockIcon, HeadsetIcon } from './Icons.jsx';

export function AuthHeader() {
  return (
    <header className="auth-header">
      <div className="auth-header__inner">
        <div className="auth-header__start">
          <span className="auth-badge">
            <ShieldIcon size={12} />
            بوابة مشفرة ومطابقة للمعايير الوطنية
          </span>
          <span className="auth-status">
            <span className="auth-status__dot" />
            الأنظمة التشغيلية تعمل بكفاءة
          </span>
        </div>
        <LangButton size={12} />
      </div>
    </header>
  );
}

export function AuthFooter({ year = 2026 }) {
  return (
    <footer className="auth-footer">
      <div className="auth-footer__inner">
        <div className="auth-footer__copy">
          <span>منظومة إبرام (IBRAM) لإدارة المشتريات والمنافسات الحكومية والخاصة</span>
          <span className="auth-footer__sep">|</span>
          <span>© {year} جميع الحقوق محفوظة</span>
        </div>
        <nav className="auth-footer__links">
          <Link to="/cyber-compliance">
            <ShieldLockIcon size={14} />
            الامتثال السيبراني
          </Link>
          <Link to="/privacy">
            <ShieldLockIcon size={14} />
            سياسة الخصوصية والاستخدام
          </Link>
          <Link to="/support">
            <HeadsetIcon size={14} />
            الدعم الفني المعتمد
          </Link>
        </nav>
      </div>
    </footer>
  );
}

// يمنع السكرول على الشاشات > 1024px: يثبّت ارتفاع الصفحة على الشاشة ويصغّر المحتوى (zoom) ليتسع
export default function AuthLayout({ children, year }) {
  const pageRef = useRef(null);
  const mainRef = useRef(null);
  const fitRef = useRef(null);

  useLayoutEffect(() => {
    const page = pageRef.current, main = mainRef.current, fit = fitRef.current;
    if (!page || !main || !fit) return;
    const compute = () => {
      if (window.innerWidth <= 1024) { page.style.height = ''; fit.style.zoom = ''; return; }
      const z = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--z')) || 1;
      page.style.height = window.innerHeight / z + 'px'; // ارتفاع الشاشة بوحدات التصميم
      fit.style.zoom = '1';
      const cs = getComputedStyle(main);
      const avail = main.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
      const natural = fit.offsetHeight;
      const k = natural > avail && avail > 0 ? Math.max(0.4, (avail - 1) / natural) : 1;
      fit.style.zoom = k === 1 ? '' : String(k);
    };
    compute();
    window.addEventListener('resize', compute);
    const ro = new ResizeObserver(compute);
    ro.observe(fit);
    document.fonts?.ready.then(compute);
    return () => { window.removeEventListener('resize', compute); ro.disconnect(); };
  });

  return (
    <div className="auth-page" ref={pageRef}>
      <AuthHeader />
      <main className="auth-main" ref={mainRef}>
        <div className="auth-fit" ref={fitRef}>{children}</div>
      </main>
      <AuthFooter year={year} />
    </div>
  );
}

export function AuthHero({ pill, title, subtitle, wide }) {
  return (
    <div className="auth-hero">
      <div className="auth-logo">
        <img src="/assets/ibram-logo-3x.png" width="172" height="52" alt="IBRAM" />
      </div>
      <div className="auth-pill">{pill}</div>
      <h1 className="auth-title">{title}</h1>
      <p className={'auth-subtitle' + (wide ? ' auth-subtitle--wide' : '')}>{subtitle}</p>
    </div>
  );
}

export function Field({ label, required, tight, invalid, type = 'text', value, onChange, placeholder, name }) {
  return (
    <div className="field">
      <label className="field__label" htmlFor={name}>
        {required && !tight && <span className="field__req">*</span>}
        {label}
        {required && tight && <span className="field__req field__req--tight">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className={'field__input' + (invalid ? ' is-invalid' : '')}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
      />
    </div>
  );
}

export function Check({ checked, onChange, readOnly, children, className = '' }) {
  return (
    <label className={'check ' + className}>
      <input
        type="checkbox"
        checked={checked}
        onChange={readOnly ? undefined : (e) => onChange(e.target.checked)}
        readOnly={readOnly}
        tabIndex={readOnly ? -1 : 0}
      />
      <span className="check__box">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
      </span>
      <span className="check__text">{children}</span>
    </label>
  );
}

export function SecureFooterNote() {
  return (
    <div className="auth-note">
      <div className="auth-note__pill">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9.5" />
          <path d="M8 12.3l2.8 2.8 5.2-5.6" />
        </svg>
        اتصال آمن ومشفّر وفق معايير الأمن السيبراني المؤسسي
      </div>
      <p className="auth-note__text">
        هذا النظام مخصص للموظفين والمفوضين المصرح لهم فقط. تخضع جميع المعاملات والمحاولات للرصد والتدقيق الدوري والأرشفة الآمنة.
      </p>
      <p className="auth-note__version">
        إصدار المنظومة v4.2.0 <span className="auth-note__dot">•</span> الدعم الفني للمشتريات
      </p>
    </div>
  );
}
