import { Check } from './AuthLayout.jsx';

export function evaluate(password, confirm) {
  return {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    digit: /[0-9]/.test(password),
    special: /[!@#$%^&*]/.test(password),
    match: password.length > 0 && password === confirm,
  };
}

// Live checklist: the boxes tick themselves as the password changes.
export function RulesBox({ rules }) {
  return (
    <div className="rules-box">
      <h3>شروط الأمان الإلزامية:</h3>
      <div className="rules-box__grid">
        <Check checked={rules.length} readOnly>8 خانات على الأقل</Check>
        <Check checked={rules.upper} readOnly>حرف كبير واحد (A-Z)</Check>
        <Check checked={rules.digit} readOnly>رقم واحد على الأقل (0-9)</Check>
        <Check checked={rules.special} readOnly>رمز خاص واحد (!@#$%^&*)</Check>
      </div>
    </div>
  );
}

export function MatchBar({ matched }) {
  return (
    <div className="match-bar">
      <Check checked={matched} readOnly>كلمتا المرور متطابقتان تماماً وجاهزتان للاعتماد.</Check>
    </div>
  );
}
