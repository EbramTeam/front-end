import { useEffect, useRef, useState } from 'react';
import { GlobeIcon } from './Icons.jsx';
import { setLanguage } from '../i18n/translate.js';

const LANGS = [
  { code: 'ar', label: 'عربية', dir: 'rtl' },
  { code: 'en', label: 'English', dir: 'ltr' },
];

function initial() {
  try {
    return localStorage.getItem('ibram-lang') || 'ar';
  } catch (e) {
    return 'ar';
  }
}

export function applyLang(code) {
  setLanguage(code);
}

export default function LangButton({ size = 13 }) {
  const [code, setCode] = useState(initial);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const off = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const esc = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', off);
    document.addEventListener('keydown', esc);
    return () => {
      document.removeEventListener('mousedown', off);
      document.removeEventListener('keydown', esc);
    };
  }, [open]);

  useEffect(() => {
    const h = (e) => setCode(e.detail);
    window.addEventListener('ibram-lang', h);
    return () => window.removeEventListener('ibram-lang', h);
  }, []);

  const cur = LANGS.find((x) => x.code === code) || LANGS[0];
  const pick = (c) => {
    setCode(c);
    applyLang(c);
    try {
      localStorage.setItem('ibram-lang', c);
    } catch (e) {}
    setOpen(false);
  };

  return (
    <div className="lang" ref={ref}>
      <button type="button" className="lang-btn" aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <GlobeIcon size={size} />
        {cur.label}
      </button>
      {open && (
        <ul className="lang__menu" role="listbox">
          {LANGS.map((l) => (
            <li key={l.code}>
              <button type="button" role="option" aria-selected={l.code === code} className={l.code === code ? 'is-on' : ''} onClick={() => pick(l.code)}>
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
