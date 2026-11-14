// صلاحيات بوابة الموظف: مين يشوف أي صفحة، ووين يروح بعد الدخول، وشو يظهر بالقائمة الجانبية.
// مبني على صلاحيات الباك إند (RoleSeeder) مش على أسماء الأدوار، فبيشتغل حتى لو اليوزر إله أكثر من دور.
import { queryClient } from './lib/query-client.js';
import { CalendarIcon, ClipboardCheckIcon, EnvelopeOpenIcon, ListIcon } from './components/PortalNavIcons.jsx';

export const ADMIN_ROLE = 'admin';
const CURRENT_USER_KEY = ['auth', 'me'];

export const isAdminUser = (user) => Boolean(user?.roles?.some((role) => role.name === ADMIN_ROLE));

// أسماء صلاحيات اليوزر: من القائمة الجاهزة اللي بيرجعها الباك إند، أو من الأدوار إذا مش موجودة
export function permissionsOf(user) {
  if (Array.isArray(user?.permissions)) return user.permissions;
  return (user?.roles ?? []).flatMap((role) => (role.permissions ?? []).map((p) => p.name ?? p));
}

export const can = (user, ...anyOf) => {
  if (isAdminUser(user)) return true;
  const perms = permissionsOf(user);
  return anyOf.some((name) => perms.includes(name));
};

// مجموعات الصلاحيات المستعملة بالبوابة
const P = {
  createRequest: ['purchase_requests.create'],
  editRequest: ['purchase_requests.create', 'purchase_requests.edit'],
  viewRequests: ['purchase_requests.view'],
  decide: ['purchase_requests.review', 'purchase_requests.approve', 'budget.verify'],
  suppliers: ['suppliers.manage'],
  rfq: ['rfqs.manage', 'quotations.manage'],
  envelopes: ['bid_opening.manage'],
  minutes: ['bid_opening.manage', 'bid_opening.approve'],
};

// ===== وين يروح اليوزر بعد الدخول =====
// الأدمن للوحة الإدارة، والباقي حسب شغله. بالترتيب: أول شرط بينطبق هو اللي بيحدد.
export function homePathFor(user) {
  if (isAdminUser(user)) return '/admin';
  if (can(user, ...P.createRequest)) return '/dashboard'; // الإدارة الطالبة
  if (can(user, ...P.envelopes, ...P.rfq)) return '/envelopes-opened'; // موظف المشتريات
  if (can(user, ...P.decide)) return '/pending-approval-order'; // مدير الإدارة، المالية، جهة الاعتماد
  if (can(user, ...P.minutes)) return '/envelopes-minutes'; // جهة اعتماد المحاضر
  return '/dashboard';
}

// ===== مين يقدر يفتح أي صفحة =====
// كل مسار بالبوابة وصلاحياته (يكفي وحدة منها). المسار اللي مش موجود هون مفتوح لكل يوزر مسجّل.
const ROUTE_RULES = [
  // لوحة الإدارة الطالبة (إحصائيات طلباتي): الأدوار الثانية بترجع لصفحتها
  [/^\/dashboard$/, P.createRequest],
  // إنشاء وتعديل الطلبات
  [/^\/(new-order|new-need-request|new-need|new-purchase-order|dashboard\/new-order)$/, P.createRequest],
  [/^\/(edit-order(\/[^/]+)?|orders\/[^/]+\/edit|draft-order)$/, P.editRequest],
  // RFQ وعروض الأسعار (قبل قاعدة /orders/:id العامة)
  [/^\/(rfq-preview|rfq|offers-request|request-offers|envelopes-opened\/rfq|orders\/[^/]+\/rfq)$/, P.rfq],
  // عرض الطلبات وحالاتها
  [/^\/(my-orders|need-requests|orders|order-details|approved-order(\/[^/]+)?|rejected-orders|orders\/[^/]+)$/, P.viewRequests],
  [/^\/pending-approval-order$/, [...P.decide, ...P.viewRequests]],
  // الموردين
  [/^\/(suppliers(\/[^/]+)?|supplier-details)$/, P.suppliers],
  // فتح المظاريف والمحاضر
  [/^\/envelopes-opened$/, P.envelopes],
  [/^\/(envelopes-minutes|envelopes-opened\/minutes|envelopes-report|minutes)$/, P.minutes],
];

export function canAccessPath(user, pathname) {
  if (isAdminUser(user)) return true;
  if (pathname === homePathFor(user)) return true; // صفحة اليوزر الأساسية دايماً مفتوحة إله
  const rule = ROUTE_RULES.find(([pattern]) => pattern.test(pathname));
  return rule ? can(user, ...rule[1]) : true;
}

// ===== القائمة الجانبية =====
const currentUser = () => queryClient.getQueryData(CURRENT_USER_KEY);

// عناصر حسب الدور، بتنضاف للقائمة الموجودة بكل صفحة إذا اليوزر عنده صلاحيتها
const EXTRA_ITEMS = [
  { id: 'pending-approval', label: 'طلبات بانتظار قرارك', Icon: ClipboardCheckIcon, to: '/pending-approval-order', perms: P.decide },
  { id: 'all-requests', label: 'طلبات الشراء', Icon: ListIcon, to: '/my-orders', perms: P.viewRequests, hideIf: P.createRequest },
  { id: 'rfq', label: 'طلبات عروض الأسعار', Icon: ListIcon, to: '/rfq-preview', perms: P.rfq },
  { id: 'envelopes', label: 'فتح المظاريف', Icon: EnvelopeOpenIcon, to: '/envelopes-opened', perms: P.envelopes },
  { id: 'minutes', label: 'محاضر فتح المظاريف', Icon: CalendarIcon, to: '/envelopes-minutes', perms: P.minutes },
];

// صلاحية كل عنصر من عناصر القوائم الموجودة بالصفحات (حسب الرابط أو الاسم)
function baseItemPerms(item) {
  const target = item.path ?? item.route;
  if (item.isModal) return P.createRequest; // "طلب إحتياج جديد"
  if (/الموردين/.test(item.label)) return P.suppliers;
  if (target === '/new-order') return P.createRequest;
  if (target === '/my-orders') return P.createRequest; // "طلباتي" للإدارة الطالبة
  return null; // الرئيسية وغيرها: للكل
}

// بتاخد قائمة الصفحة، وبترجع القائمة المناسبة لليوزر الحالي:
// بتشيل اللي ما إله صلاحية عليه، وبتصلّح الروابط، وبتضيف عناصر دوره.
export function portalNav(baseItems) {
  const user = currentUser();
  if (!user) return baseItems;

  const items = baseItems
    .filter((item) => {
      const perms = baseItemPerms(item);
      return !perms || can(user, ...perms);
    })
    .map((item) => {
      let to = item.path ?? item.route;
      if (/الموردين/.test(item.label)) to = '/suppliers';
      if (item.id === 'home' || to === '/dashboard') to = homePathFor(user);
      return to === undefined ? item : { ...item, path: to, route: to };
    });

  const taken = new Set(items.map((i) => i.path ?? i.route));
  for (const extra of EXTRA_ITEMS) {
    if (!can(user, ...extra.perms)) continue;
    if (extra.hideIf && can(user, ...extra.hideIf)) continue;
    if (taken.has(extra.to)) continue;
    taken.add(extra.to);
    items.push({ id: extra.id, label: extra.label, Icon: extra.Icon, ActiveIcon: extra.Icon, path: extra.to, route: extra.to });
  }
  return items;
}

// اسم الدور للعرض: من label تبع الأدوار اللي بيرجعها الباك إند
export function roleLabelOf(user) {
  const labels = (user?.roles ?? []).map((role) => role.label || role.name).filter(Boolean);
  return labels.join('، ');
}