// All data below is transcribed from the design screens. Nothing is invented.

export const NAV_ITEMS = [
  { key: 'home', label: 'الرئيسية', to: '/', icon: 'grid' },
  { key: 'users', label: 'المستخدمون', to: '/users', icon: 'users' },
  { key: 'roles', label: 'الأدوار والصلاحيات', to: '/roles', icon: 'roles' },
  { key: 'vendors', label: 'الموردين', to: '/vendors', icon: 'vendors' },
  { key: 'master', label: 'البيانات الأساسية', to: '/master-data', icon: 'db' },
  { key: 'settings', label: 'الإعدادات', to: '/settings', icon: 'settings' },
];

export const STATUS = {
  active: { label: 'نشط الآن', cls: 'st-active' },
  pending: { label: 'بإنتظار التفعيل', cls: 'st-pending' },
  inactive: { label: 'غير نشط', cls: 'st-inactive' },
  disabled: { label: 'معطل', cls: 'st-disabled' },
};

const U_ABDULLAH = {
  name: 'د. عبدالله المنصور',
  verified: true,
  email: 'a.almansour@procure.gov.sa',
  handle: '@a.almansour',
  dept: 'الإدارة العامة للمشتريات',
  unit: 'المركز الرئيسي',
  role: 'مدير نظام (Admin)',
  initials: 'عم',
  avatar: 'dark',
};
const U_SARA = {
  name: 'سارة بنت خالد العتيبي',
  email: 's.alotaibi@procure.gov.sa',
  handle: '@s.alotaibi',
  dept: 'إدارة المنافسات والعقود',
  unit: 'لجنة فتح المظاريف',
  role: 'مديرة مشتريات',
  initials: 'سا',
  avatar: 'light',
};
const U_FAHD = {
  name: 'م. فهد بن إبراهيم السليمان',
  email: 'f.alsulaiman@procure.gov.sa',
  handle: '@f.alsulaiman',
  dept: 'إدارة التدقيق المالي',
  unit: 'وحدة الفحص المحاسبي',
  role: 'مراجع مالي معتمد',
  initials: 'فه',
  avatar: 'light',
};

// Rows exactly as shown on the "إدارة المستخدمين" screen
export const USERS_PAGE_ROWS = [
  { id: 1, ...U_ABDULLAH, status: 'active', last: 'منذ 15 دقيقة', lastSub: 'IP: 10.240.12.8' },
  { id: 2, ...U_SARA, status: 'pending', last: 'اليوم 09:30 ص', lastSub: 'عبر بوابة الموردين' },
  { id: 3, ...U_FAHD, status: 'inactive', last: 'اليوم 09:30 ص', lastSub: 'عبر بوابة الموردين' },
  { id: 4, ...U_SARA, status: 'disabled', last: 'اليوم 09:30 ص', lastSub: 'عبر بوابة الموردين' },
];

// Rows exactly as shown in the dashboard table
export const DASHBOARD_ROWS = [
  { id: 1, ...U_ABDULLAH, status: 'active', last: 'منذ 15 دقيقة', lastSub: 'IP: 10.240.12.8' },
  { id: 2, ...U_SARA, status: 'disabled', last: 'اليوم 09:30 ص', lastSub: 'عبر بوابة الموردين' },
  { id: 3, ...U_FAHD, status: 'pending', last: 'اليوم 09:30 ص', lastSub: 'عبر بوابة الموردين' },
  { id: 4, ...U_SARA, status: 'inactive', last: 'اليوم 09:30 ص', lastSub: 'عبر بوابة الموردين' },
  { id: 5, ...U_FAHD, status: 'inactive', last: 'اليوم 09:30 ص', lastSub: 'عبر بوابة الموردين' },
];

export const ROLES_FILTER = ['مدير نظام (Admin)', 'مديرة مشتريات', 'مراجع مالي معتمد'];
export const DEPTS_FILTER = ['الإدارة العامة للمشتريات', 'إدارة المنافسات والعقود', 'إدارة التدقيق المالي'];

export const DETAIL_USER_ID = 'EMP-04821';

export const ACTIVITY = [
  {
    title: 'مستخدم تمت إضافته',
    time: 'منذ 15 دقيقة',
    icon: 'users',
    body: 'تمت إضافة المستخدم «م. رائد الخالدي» وإسناد دور «مراجع مالي معتمد» بواسطة مدير النظام.',
  },
  {
    title: 'صلاحية تم تعديلها',
    time: 'منذ ساعتين',
    icon: 'shield',
    body: 'تعديل حزمة صلاحيات دور «مدير المشتريات المركزي» إضافة حق اعتماد الاستثناءات الإدارية.',
  },
  {
    title: 'قسم تمت إضافته',
    time: 'أمس، 03:45 م',
    icon: 'grid',
    body: 'إضافة وحدة تنظيمية جديدة «إدارة العقود الاستراتيجية والاتفاقيات الإطارية» ضمن الهيكل الإداري.',
  },
  {
    title: 'بيانات مستخدم تم تعديلها',
    time: 'أمس، 03:45 م',
    icon: 'users',
    body: 'تحديث البريد الرسمي ورقم الهاتف الوظيفي للمستخدم «سارة العتيبي».',
  },
];
