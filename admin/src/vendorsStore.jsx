import { createContext, useContext, useState } from 'react';
import { VENDORS as SEED } from './vendorsData.js';

const Ctx = createContext(null);

function stamp() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  const h = d.getHours();
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${p(d.getDate())}/${p(d.getMonth() + 1)}/${d.getFullYear()} - ${p(h12)}:${p(d.getMinutes())} ${h >= 12 ? 'م' : 'ص'}`;
}
const AR_MONTHS = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
function longStamp() {
  const d = new Date();
  const h = d.getHours();
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${d.getDate()} ${AR_MONTHS[d.getMonth()]} - ${d.getFullYear()} ${String(h12).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')} ${h >= 12 ? 'م' : 'ص'}`;
}

export function VendorsProvider({ children }) {
  const [vendors, setVendors] = useState(SEED);

  // يحوّل قيم النموذج إلى سجل مورد كما تقرؤه القائمة والتفاصيل
  const fromForm = (f, active) => ({
    name: f.name.trim(),
    listName: f.name.trim(),
    cr: f.cr.trim(),
    vat: f.vat.trim(),
    activity: f.activity.trim(),
    activityFull: f.activity.trim(),
    grade: f.grade.trim(),
    gradeFull: f.grade.trim(),
    city: f.city.trim(),
    email: f.mail.trim(),
    phone: f.phone.trim(),
    status: active === 'off' ? 'suspended' : 'active',
    updated: stamp(),
    updatedLong: longStamp(),
    by: 'بواسطة: د. محمد كسبة',
    detail: { rep: f.rep.trim(), repTitle: f.title.trim(), mobile: f.phone.trim(), mail: f.mail.trim(), address: f.addr.trim(), city: f.city.trim() },
  });

  const addVendor = (f, active) => {
    const n = vendors.length + 887; // يكمل ترقيم VND-2024-0891…0894
    const id = 'VND-2026-' + String(n).padStart(4, '0');
    const v = { id, verified: null, legal: '', ...fromForm(f, active), isNew: true };
    setVendors((p) => [v, ...p]);
    return id;
  };

  const updateVendor = (id, f, active) =>
    setVendors((p) =>
      p.map((v) => {
        if (v.id !== id) return v;
        const nv = fromForm(f, active);
        return { ...v, ...nv, status: active ? nv.status : v.status, detail: { ...(v.detail || {}), ...nv.detail } };
      })
    );

  const setStatus = (id, status) =>
    setVendors((p) => p.map((v) => (v.id === id ? { ...v, status, updated: stamp(), updatedLong: longStamp(), by: 'بواسطة: د. محمد كسبة' } : v)));

  return <Ctx.Provider value={{ vendors, addVendor, updateVendor, setStatus }}>{children}</Ctx.Provider>;
}

export const useVendors = () => useContext(Ctx);
