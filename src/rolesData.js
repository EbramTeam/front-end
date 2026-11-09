/* All Arabic texts are copied literally from the design (typos included). */

/* ---------- roles list (seed) ---------- */
export const SEED_ROLES = [
  {
    id: 'requester',
    icon: 'doc',
    title: 'الجهة الطالبة',
    tag: 'قياسي',
    status: 'active',
    desc: 'تقديم طلبات الشراء، متابعة احتياجات القسم التشغيلية، ومطابقة وتأكيد استلام المواد والخدمات الميدانية.',
    users: 54,
    perms: 8,
  },
  {
    id: 'dept-manager',
    icon: 'org',
    title: 'مدير القسم',
    tag: 'قياسي',
    status: 'active',
    desc: 'اعتماد طلبات الشراء المبدئية للقسم، مراجعة المبررات الفنية والمالية، وإحالة الاحتياجات لسلسلة التوريد.',
    users: 54,
    perms: 8,
  },
  {
    id: 'finance',
    icon: 'pie',
    title: 'المالية / الموازنة',
    tag: 'قياسي',
    status: 'active',
    desc: 'التحقق من توفر بنود الميزانية، حجز الارتباط المالي المسبق، ومطابقة أوامر الصرف وتدقيق الفواتير الضريبية.',
    users: 54,
    perms: 8,
  },
  {
    id: 'procurement',
    icon: 'hand',
    title: 'قسم المشتريات',
    tag: 'قياسي',
    status: 'active',
    desc: 'إعداد كراسات الشروط، طرح المنافسات والممارسات، والتواصل مع الموردين وتأهيلهم وإصدار أوامر الشراء الرسمية.',
    users: 54,
    perms: 8,
  },
  {
    id: 'committee',
    icon: 'group',
    title: 'لجنة فتح العطاءات',
    tag: 'قياسي',
    status: 'active',
    desc: 'فتح المظاريف والعروض الفنية والمالية في المواعيد المحددة نظاماً، وتحرير المحاضر وتوثيق خطابات الضمان الابتدائي.',
    users: 54,
    perms: 8,
  },
  {
    id: 'sysadmin',
    icon: 'admin',
    title: 'مدير النظام',
    tag: 'قياسي رئيسي',
    status: 'active',
    desc: 'إدارة الحسابات، ضبط الإعدادات العامة للمنظومة، وإسناد الصلاحيات والاطلاع على سجلات التدقيق الرقابي والمتابعة الفنية.',
    users: 54,
    perms: 8,
    panelSub: 'معاينة وتعديل مصفوفة الصلاحيات الممنوحة',
    panelTag: 'تحكم كامل',
  },
];

/* ---------- permission matrix shown in the side panel of /roles ---------- */
const P = (id, name, desc, tag) => ({ id, name, desc, tag });
export const PANEL_CATALOG = [
  {
    id: 'users',
    icon: 'users',
    title: 'وحدة المستخدمين (Users)',
    items: [
      P('users.view', 'عرض المستخدمين', 'الاطلاع على قوائم وحسابات منسوبي الجهات الحكومية'),
      P('users.add', 'اضافة مستخدم', 'إنشاء حسابات جديدة وإرسال بيانات الاعتماد المبدئية'),
      P('users.edit', 'تعديل بيانات المستخدم', 'تحديث أرقام التواصل، الأقسام، والمسمى الوظيفي'),
      P('users.disable', 'تعطيل / إيقاف المستخدمين', 'تجميد الوصول الفوري وحجب الحساب عن تسجيل الدخول', 'sensitive'),
    ],
  },
  {
    id: 'roles',
    icon: 'roles',
    title: 'الأدوار والصلاحيات (Roles)',
    items: [
      P('roles.view', 'عرض الادوار', 'معاينة تفاصيل الأدوار ومستخدميها'),
      P('roles.add', 'اضافة دور جديد', 'إنشاء مسميات أدوار وظيفية أو لجان عمل جديدة'),
      P('roles.matrix', 'تعديل مصفوفة الصلاحيات', 'منح أو سحب الحقوق التشغيلية الحساسة', 'critical'),
    ],
  },
  /* the bottom of this group is cropped in the design: texts are taken from the add-role screen */
  {
    id: 'master',
    icon: 'db',
    title: 'البيانات الأساسية (Master Data)',
    items: [
      P('master.view', 'عرض البيانات الأساسية', 'استعراض تصنيفات الأصناف، المعايير والموردين'),
      P('master.add', 'إضافة بيانات جديدة', 'إدراج تصنيفات ومستودعات ومراكز تكلفة جديدة'),
      P('master.edit', 'تعديل البيانات', 'تحديث جداول المطابقة ومسميات بنود التوريد'),
      P('master.disable', 'تعطيل البيانات', 'إيقاف بنود المخزون والتصنيفات غير المتداولة'),
    ],
  },
];

/* ---------- permission catalog of the "add role" page ---------- */
export const ADD_CATALOG = [
  {
    id: 'roles',
    icon: 'roles',
    title: 'إدارة الأدوار والصلاحيات (Roles)',
    items: [
      P('a.roles.add', 'إضافة دور', 'استحداث مسميات أدوار جديدة وتحديد صلاحياتها', 'sensitive'),
      P('a.roles.view', 'عرض الأدوار', 'معاينة تفاصيل مصفوفات الصلاحيات وحزم النظام'),
      P('a.roles.matrix', 'تعديل صلاحيات الأدوار', 'إعادة صياغة امتيازات الحسابات واللجان الحكومية', 'critical'),
      P('a.roles.edit', 'تعديل بيانات الدور', 'تحديث المسمى والتوصيف وحالة الدور التشغيلية'),
      P('a.roles.delete', 'حذف الأدوار المخصصة', 'إلغاء الدور بالكامل وفك ارتباط كافة المستخدمين به', 'irreversible'),
      P('a.roles.toggle', 'تفعيل وتعطيل الأدوار', 'إيقاف مؤقت لأي دور وتجميد صلاحيات منتسبيه'),
    ],
  },
  {
    id: 'users',
    icon: 'users',
    title: 'إدارة المستخدمين (Users)',
    items: [
      P('a.users.view', 'عرض المستخدمين', 'الاطلاع على قوائم الموظفين وسجلات نشاطهم'),
      P('a.users.add', 'إضافة مستخدم', 'إنشاء حسابات المستخدمين الجدد وتعيين المراكز'),
      P('a.users.edit', 'تعديل بيانات المستخدم', 'تحديث المعلومات الوظيفية وأرقام الاتصال'),
      P('a.users.toggle', 'تفعيل وتعطيل المستخدمين', 'تعليق وصول الموظفين أو إعادة التنشيط فوريا', 'sensitive'),
      P('a.users.assign', 'إسناد الأدوار للمستخدمين', 'تخصيص الصلاحيات والحزم الوظيفية للموظفين المعتمدين', null, true),
    ],
  },
  {
    id: 'settings',
    icon: 'settings',
    title: 'إعدادات النظام (Settings)',
    items: [
      P('a.set.view', 'عرض الإعدادات', 'الاطلاع على معايير الاتصال والتكامل التقني'),
      P('a.set.edit', 'تعديل إعدادات النظام', 'تعديل قنوات الربط المالي، والشهادات الرقمية', 'critical'),
    ],
  },
  {
    id: 'master',
    icon: 'db',
    title: 'البيانات الأساسية (Master Data)',
    items: [
      P('a.m.view', 'عرض البيانات الأساسية', 'استعراض تصنيفات الأصناف، المعايير والموردين'),
      P('a.m.add', 'إضافة بيانات جديدة', 'إدراج تصنيفات ومستودعات ومراكز تكلفة جديدة'),
      P('a.m.edit', 'تعديل البيانات', 'تحديث جداول المطابقة ومسميات بنود التوريد'),
      P('a.m.disable', 'تعطيل البيانات', 'إيقاف بنود المخزون والتصنيفات غير المتداولة'),
    ],
  },
  {
    id: 'audit',
    icon: 'logs',
    title: 'سجل التدقيق (Audit Log)',
    wide: true,
    items: [
      P('a.au.view', 'عرض سجل التدقيق', 'مراجعة قيود العمليات والحركات المنفذة من المستخدمين'),
      P('a.au.search', 'البحث والتصفية في سجل التدقيق', 'إجراء استعلامات جنائية وتصدير الأدلة الرقمية'),
    ],
  },
];
/* the 5th item in "Users" spans the full row (as in the design) */
ADD_CATALOG[1].items[4].full = true;

export const TAG_LABEL = {
  sensitive: 'حساسة',
  critical: 'فائقة الحساسية',
  irreversible: 'إجراء لا رجعة فيه',
};

export const ACTION_TYPES = [
  { key: 'read', ar: 'عرض' },
  { key: 'create', ar: 'إضافة' },
  { key: 'update', ar: 'تعديل' },
  { key: 'delete', ar: 'حذف' },
  { key: 'approve', ar: 'اعتماد' },
  { key: 'export', ar: 'تصدير' },
  { key: 'custom', ar: 'إجراء مخصص', en: '(custom)', wide: true },
];

export const UNIT_OPTIONS = ['التقارير', ...ADD_CATALOG.map((g) => g.title)];

/* ---------- helpers ---------- */
export const cloneGroups = (groups, checked = false) =>
  groups.map((g) => ({ ...g, items: g.items.map((i) => ({ ...i, checked })) }));

export function panelGroupsFor(count) {
  // assumption: admin has everything, other roles get the first `count` permissions
  let n = 0;
  return PANEL_CATALOG.map((g) => ({
    ...g,
    items: g.items.map((i) => ({ ...i, checked: count === Infinity ? true : n++ < count })),
  }));
}
export const countChecked = (groups) => groups.reduce((s, g) => s + g.items.filter((i) => i.checked).length, 0);
export const countAll = (groups) => groups.reduce((s, g) => s + g.items.length, 0);
