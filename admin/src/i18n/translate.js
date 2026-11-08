import dict from './en.json';
import { applyCss } from '../styles/loader.js';

// ترجمة عبر استبدال النصوص الظاهرة: النص العربي الأصلي هو المفتاح
const KEYS = Object.keys(dict).sort((a, b) => b.length - a.length);
const PARTIAL = KEYS.filter((k) => k.length >= 2 && !/[\s]$/.test(k) || k.length >= 3);
const L = '\\u0600-\\u06FF';
const esc = (k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const RX = new Map(PARTIAL.map((k) => [k, new RegExp('(?<![' + L + '])' + esc(k) + '(?![' + L + '])', 'g')]));
const ATTRS = ['placeholder', 'aria-label', 'title', 'alt'];
const AR = /[؀-ۿ]/;

let lang = 'ar';
let observer = null;
const textMap = new WeakMap(); // node -> {orig, out}
const attrMap = new WeakMap(); // el -> {attr: {orig, out}}

const EXTRA = { 'س.ت': 'CR', 'الضريبي': 'VAT' };
function tr(s) {
  if (!AR.test(s)) return s;
  const t = s.trim();
  if (dict[t]) return s.replace(t, dict[t]);
  let out = s;
  for (const k of PARTIAL) {
    if (out.includes(k)) out = out.replace(RX.get(k), () => dict[k]);
    if (!AR.test(out)) break;
  }
  for (const k in EXTRA) out = out.split(k).join(EXTRA[k]);
  return out;
}

function doText(node) {
  const rec = textMap.get(node);
  if (rec && node.nodeValue === rec.out) return;
  const orig = node.nodeValue;
  if (lang === 'en') {
    const out = tr(orig);
    if (out !== orig) {
      textMap.set(node, { orig, out });
      node.nodeValue = out;
    } else textMap.delete(node);
  }
}

function doAttrs(el) {
  let rec = attrMap.get(el);
  for (const a of ATTRS) {
    const v = el.getAttribute && el.getAttribute(a);
    if (!v) continue;
    if (rec && rec[a] && rec[a].out === v) continue;
    if (lang === 'en') {
      const out = tr(v);
      if (out !== v) {
        rec = rec || {};
        rec[a] = { orig: v, out };
        attrMap.set(el, rec);
        el.setAttribute(a, out);
      }
    }
  }
}

function walk(root) {
  if (root.nodeType === 3) return doText(root);
  if (root.nodeType !== 1) return;
  if (root.tagName === 'SCRIPT' || root.tagName === 'STYLE') return;
  doAttrs(root);
  const tw = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
  let n = tw.nextNode();
  while (n) {
    if (n.nodeType === 3) doText(n);
    else doAttrs(n);
    n = tw.nextNode();
  }
}

function restore(root) {
  const tw = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
  let n = tw.nextNode();
  while (n) {
    if (n.nodeType === 3) {
      const r = textMap.get(n);
      if (r && n.nodeValue === r.out) n.nodeValue = r.orig;
      textMap.delete(n);
    } else {
      const r = attrMap.get(n);
      if (r) {
        for (const a in r) if (n.getAttribute(a) === r[a].out) n.setAttribute(a, r[a].orig);
        attrMap.delete(n);
      }
    }
    n = tw.nextNode();
  }
}

function start() {
  if (!observer) observer = createObserver();
  observer.observe(document.body, OPTS);
}
function createObserver() {
  const o = new MutationObserver((muts) => {
    o.disconnect();
    for (const m of muts) {
      if (m.type === 'characterData') doText(m.target);
      else if (m.type === 'attributes') doAttrs(m.target);
      else m.addedNodes.forEach(walk);
    }
    o.observe(document.body, OPTS);
  });
  return o;
}
const OPTS = { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS };

export function setLanguage(code) {
  lang = code;
  const root = document.documentElement;
  root.lang = code;
  root.dir = code === 'en' ? 'ltr' : 'rtl';
  root.classList.toggle('lang-en', code === 'en');
  applyCss(code);
  window.dispatchEvent(new CustomEvent('ibram-lang', { detail: code }));
  if (observer) observer.disconnect();
  if (document.body) {
    if (code === 'en') walk(document.body);
    else restore(document.body);
    start();
  }
}
