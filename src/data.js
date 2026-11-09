// All data below is transcribed from the design screens. Nothing is invented.

export const NAV_ITEMS = [
  { key: 'home', label: 'الرئيسية', to: '/admin', icon: 'grid' },
  { key: 'users', label: 'المستخدمون', to: '/users', icon: 'users', permission: 'users.manage' },
  { key: 'roles', label: 'الأدوار والصلاحيات', to: '/roles', icon: 'roles', permission: 'users.manage' },
  { key: 'vendors', label: 'الموردين', to: '/vendors', icon: 'vendors', permission: 'suppliers.manage' },
  { key: 'master', label: 'البيانات الأساسية', to: '/master-data', icon: 'db' },
  { key: 'settings', label: 'الإعدادات', to: '/settings', icon: 'settings' },
];

export const STATUS = {
  active: { label: 'نشط الآن', cls: 'st-active' },
  pending: { label: 'بإنتظار التفعيل', cls: 'st-pending' },
  inactive: { label: 'غير نشط', cls: 'st-inactive' },
  disabled: { label: 'معطل', cls: 'st-disabled' },
};
