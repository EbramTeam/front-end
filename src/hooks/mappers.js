// تحويل بيانات الـ API إلى الشكل الذي تقرؤه الشاشات، والعكس عند الحفظ
const EMPTY = '—';

const orEmpty = (value) => value || EMPTY;
const trimOrNull = (value) => value?.trim() || null;

export function formatDate(iso) {
  if (!iso) return EMPTY;
  return new Intl.DateTimeFormat('ar-u-nu-latn', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso));
}

export function formatDateTime(iso) {
  if (!iso) return EMPTY;
  return new Intl.DateTimeFormat('ar-u-nu-latn', { day: 'numeric', month: 'long', hour: 'numeric', minute: '2-digit' }).format(new Date(iso));
}

export function toPagedResult(paginator, mapRow) {
  return {
    rows: (paginator?.data ?? []).map(mapRow),
    total: paginator?.total ?? 0,
    page: paginator?.current_page ?? 1,
    lastPage: paginator?.last_page ?? 1,
    pageSize: paginator?.per_page ?? 0,
  };
}

/* ---------- users ---------- */
function initialsOf(name) {
  return String(name ?? '').trim().split(/\s+/).slice(0, 2).map((part) => part[0] ?? '').join('');
}

export function toUserRow(user) {
  return {
    id: user.id,
    rowKey: String(user.id),
    name: user.name,
    email: user.email,
    handle: '@' + String(user.email ?? '').split('@')[0],
    dept: user.department?.name ?? EMPTY,
    unit: EMPTY,
    role: user.roles?.[0]?.label ?? EMPTY,
    roles: user.roles ?? [],
    initials: initialsOf(user.name),
    avatar: 'light',
    status: user.is_active ? 'active' : 'inactive',
    isActive: Boolean(user.is_active),
    verified: false,
    last: formatDateTime(user.last_login_at),
    lastSub: user.last_login_ip ?? '',
    created: formatDate(user.created_at),
  };
}

export function toUserParams(filters, page, perPage) {
  const params = { page, per_page: perPage };
  const search = filters.q?.trim();
  if (search) params.search = search;
  if (filters.role) params.role_id = filters.role;
  if (filters.dept) params.department_id = filters.dept;
  if (filters.status) params.is_active = filters.status === 'active' ? 1 : 0;
  return params;
}

export function toCreateUserBody(form) {
  return {
    name: form.name.trim(),
    email: form.email.trim(),
    department_id: form.dept ? Number(form.dept) : null,
    role_ids: form.roles.map(Number),
  };
}

export function toRoleOption(role) {
  const count = role.permissions?.length ?? 0;
  return { key: String(role.id), ar: role.label, en: role.name, text: '', perms: count, permsLabel: `${count} صلاحية`, tag: '' };
}

/* ---------- roles ---------- */
const GROUP_TITLES = {
  users: 'المستخدمون والأدوار',
  settings: 'الإعدادات',
  suppliers: 'الموردون',
  purchase_requests: 'طلبات الشراء',
  budget: 'الموازنة',
  rfqs: 'طلبات عروض الأسعار',
  quotations: 'العروض',
  bid_opening: 'فتح العروض',
  reports: 'التقارير',
  audit: 'سجل التدقيق',
};

function toPermissionGroups(allPermissions, grantedIds) {
  const groups = new Map();
  allPermissions.forEach((permission) => {
    const prefix = permission.name.split('.')[0];
    if (!groups.has(prefix)) groups.set(prefix, { id: prefix, icon: 'shield', title: GROUP_TITLES[prefix] ?? prefix, items: [] });
    groups.get(prefix).items.push({ id: permission.id, name: permission.label, desc: '', tag: null, checked: grantedIds.has(permission.id) });
  });
  return [...groups.values()];
}

export function toRoleView(role, allPermissions) {
  const granted = role.permissions ?? [];
  return {
    id: role.id,
    title: role.label,
    desc: EMPTY,
    tag: role.is_locked ? 'مقفل' : 'قابل للتعديل',
    status: 'active',
    icon: 'shield',
    users: role.users_count ?? 0,
    perms: granted.length,
    readOnly: Boolean(role.is_locked),
    groups: toPermissionGroups(allPermissions, new Set(granted.map((permission) => permission.id))),
  };
}

export function collectCheckedIds(groups) {
  return groups.flatMap((group) => group.items.filter((item) => item.checked).map((item) => item.id));
}

/* ---------- vendors ---------- */
export function toVendorRow(supplier) {
  const updated = formatDate(supplier.updated_at);
  return {
    id: supplier.id,
    name: supplier.name,
    listName: supplier.name,
    verified: null,
    legal: '',
    cr: EMPTY,
    vat: orEmpty(supplier.tax_number),
    activity: EMPTY,
    activityFull: EMPTY,
    grade: EMPTY,
    gradeFull: EMPTY,
    city: EMPTY,
    email: orEmpty(supplier.email),
    phone: orEmpty(supplier.phone),
    status: supplier.is_active ? 'active' : 'suspended',
    updated,
    by: '',
    detail: {
      uid: EMPTY,
      created: formatDate(supplier.created_at),
      createdBy: supplier.creator?.name ?? '',
      hash: EMPTY,
      legalForm: EMPTY,
      crExpiry: EMPTY,
      updatedLong: updated,
      rep: orEmpty(supplier.contact_person),
      repTitle: '',
      office: EMPTY,
      mobile: orEmpty(supplier.phone),
      mail: orEmpty(supplier.email),
      address: orEmpty(supplier.address),
      timeline: [],
    },
    form: {
      name: supplier.name ?? '',
      cr: '',
      activity: '',
      vat: supplier.tax_number ?? '',
      grade: '',
      rep: supplier.contact_person ?? '',
      title: '',
      phone: supplier.phone ?? '',
      mail: supplier.email ?? '',
      city: '',
      addr: supplier.address ?? '',
    },
  };
}

export function toSupplierBody(form, active) {
  const body = {
    name: form.name.trim(),
    tax_number: trimOrNull(form.vat),
    contact_person: trimOrNull(form.rep),
    email: trimOrNull(form.mail),
    phone: trimOrNull(form.phone),
    address: trimOrNull(form.addr),
  };
  if (active) body.is_active = active === 'active';
  return body;
}

export function duplicateMessage(error) {
  const duplicates = error.data?.duplicates;
  if (!duplicates?.length) return error.message;
  return 'يوجد مورد مطابق: ' + duplicates.map((supplier) => supplier.name).join('، ');
}

/* ---------- departments ---------- */
export function toDepartmentRow(department) {
  return {
    id: department.id,
    name: department.name,
    code: department.code,
    sub: '',
    level: 'main',
    parent: EMPTY,
    status: department.is_active ? 'active' : 'off',
    staff: department.active_users_count ?? 0,
    tenders: 0,
    cc: EMPTY,
    desc: '',
    date: EMPTY,
    by: '',
  };
}

export function changedDepartmentFields(current, form) {
  const changes = {};
  ['name', 'code'].forEach((field) => {
    const value = form[field].trim();
    if (value !== current[field]) changes[field] = value;
  });
  return changes;
}

/* ---------- audit log ---------- */
const EVENT_TITLES = {
  'auth.login': 'تسجيل دخول',
  'auth.logout': 'تسجيل خروج',
  'auth.login_failed': 'محاولة دخول فاشلة',
  'auth.login_blocked': 'محاولة دخول لحساب معطل',
  'auth.password_changed': 'تغيير كلمة المرور',
  'auth.password_change_failed': 'محاولة فاشلة لتغيير كلمة المرور',
  'user.created': 'إنشاء مستخدم',
  'user.updated': 'تعديل بيانات مستخدم',
  'user.roles_changed': 'تغيير أدوار مستخدم',
  'user.activated': 'تفعيل مستخدم',
  'user.deactivated': 'تعطيل مستخدم',
  'user.password_reset': 'إعادة تعيين كلمة مرور',
  'role.permissions_changed': 'تعديل صلاحيات دور',
  'department.created': 'إنشاء قسم',
  'department.updated': 'تعديل قسم',
  'organization.updated': 'تعديل بيانات الجهة',
};

function activityIcon(event) {
  const prefix = String(event).split('.')[0];
  if (prefix === 'auth') return 'shield';
  return prefix === 'user' || prefix === 'role' ? 'users' : 'grid';
}

export function toActivity(log) {
  return {
    key: log.id,
    title: EVENT_TITLES[log.event] ?? log.event,
    icon: activityIcon(log.event),
    body: log.user?.name ?? '',
    time: formatDateTime(log.created_at),
  };
}
