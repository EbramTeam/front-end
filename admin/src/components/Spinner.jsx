const LOADING_TEXT = 'جارٍ التحميل…';

// مؤشر صغير للأزرار والعناصر داخل الصفحة
export function Spinner({ size = 'md', tone = 'brand', label }) {
  const className = `spinner spinner--${size} spinner--${tone}`;
  if (label) return <span className={className} role="status" aria-label={label} />;
  return <span className={className} aria-hidden="true" />;
}

// مكان الجدول أو البطاقة أثناء أول تحميل
export function LoadingBlock({ label = LOADING_TEXT }) {
  return (
    <div className="loading-block">
      <Spinner size="md" label={label} />
    </div>
  );
}

// يغطي الشاشة كاملة أثناء العمليات التي تمنع التفاعل
export function FullScreenLoader({ label = LOADING_TEXT }) {
  return (
    <div className="screen-loader" role="status" aria-live="polite" aria-label={label}>
      <div className="screen-loader__card">
        <Spinner size="lg" />
        <span>{label}</span>
      </div>
    </div>
  );
}
