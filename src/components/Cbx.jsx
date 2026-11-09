/* Square checkbox used on the roles screens (blue outline, rounded) */
export default function Cbx({ checked, indeterminate, onChange, size = 24, label, radio }) {
  return (
    <button
      type="button"
      role={radio ? 'radio' : 'checkbox'}
      aria-checked={indeterminate ? 'mixed' : !!checked}
      aria-label={label}
      className={'cbx' + (checked ? ' is-on' : '') + (indeterminate ? ' is-mixed' : '')}
      style={{ width: size, height: size }}
      onClick={(e) => {
        e.stopPropagation();
        onChange && onChange(!checked);
      }}
    >
      {checked && !indeterminate && (
        <svg viewBox="0 0 24 24" width={size * 0.62} height={size * 0.62} fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
      )}
      {indeterminate && <span className="cbx__dash" />}
    </button>
  );
}
