import { createContext, useContext, useState } from 'react';
import { ITEMS, UNITS, CATEGORIES } from './masterData.js';

const Ctx = createContext(null);
const BY = 'د. محمد كسبة';
const AR_MONTHS = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
const today = () => { const d = new Date(); return `${d.getDate()} ${AR_MONTHS[d.getMonth()]} ${d.getFullYear()}`; };
let seq = 100;
const nid = (p) => p + ++seq;

export const SEED_COUNT = { items: ITEMS.length, units: UNITS.length, categories: CATEGORIES.filter((c) => c.inList && c.level === 1).length };

export function MasterProvider({ children }) {
  const [items, setItems] = useState(ITEMS);
  const [units, setUnits] = useState(UNITS);
  const [categories, setCategories] = useState(CATEGORIES);

  const S = { items: [items, setItems], units: [units, setUnits], categories: [categories, setCategories] };
  const stamp = { date: today(), by: BY };

  const add = (kind, rec) => { const id = nid(kind[0]); S[kind][1]((p) => [{ id, ...rec, ...stamp, created: today(), audited: today() }, ...p]); return id; };
  const update = (kind, id, rec) => S[kind][1]((p) => p.map((r) => (r.id === id ? { ...r, ...rec, ...stamp, audited: today() } : r)));
  const remove = (kind, id) => S[kind][1]((p) => p.filter((r) => r.id !== id));
  const toggle = (kind, id) => S[kind][1]((p) => p.map((r) => (r.id === id ? { ...r, status: r.status === 'active' ? 'off' : 'active', ...stamp, audited: today() } : r)));

  return <Ctx.Provider value={{ items, units, categories, add, update, remove, toggle }}>{children}</Ctx.Provider>;
}
export const useMaster = () => useContext(Ctx);

export const fmt = (n) => Number(n).toLocaleString('en-US');
export const two = (n) => (n === 0 ? '00' : fmt(n));
