// بيانات البيانات الأساسية كما تظهر في التصاميم فقط (النصوص منسوخة حرفياً)
const BY = 'د . عبدالله منصور';
const MAIN = 'إدارة رئيسية مستقلة';
const D1 = 'الإدارة العامة للمشتريات والعقود';
const CHILD_SCOPE = 'نطاق المهام: فحص العروض، كراسات الشروط، محاضر الترسية النهائية';

export const DEPARTMENTS = [
  { id: 'd1', name: D1, sub: 'المركز الرئيسي · قطاع العمليات', code: 'DEPT-HQ-01', level: 'main', parent: MAIN, status: 'active', date: '24 اكتوبر 2026', by: BY, cc: 'CC-1010',
    desc: 'الإشراف الكامل على خطط الشراء السنوية والمنافسات الحكومية والتأهيل المسبق للموردين ومتابعة تنفيذ العقود ومطابقة أوامر الصرف المالي وفق الأنظمة واللوائح المعتمدة.', kidsLabel: '5 أقسام فرعية', created: '12 أكتوبر 2026', audited: '26 أكتوبر 2026' },
  { id: 'd2', name: 'قسم المنافسات والمناقصات الحكومية', sub: 'المركز الرئيسي · قطاع العمليات', code: 'SEC-RFP-01', level: 'sub', parent: D1, status: 'active', date: '4 اكتوبر 2026', by: BY, scope: CHILD_SCOPE, tenders: 6, staff: 9, cc: 'CC-1010', desc: '' },
  { id: 'd3', name: 'قسم إدارة وتأهيل الموردين', sub: 'بوابة اعتماد · منافسات مفتوحة ومحدودة', code: 'SEC-VND-02', level: 'sub', parent: D1, status: 'active', date: '14 اكتوبر 2026', by: BY, scope: CHILD_SCOPE, tenders: 6, staff: 9, cc: 'CC-1010', desc: '' },
  { id: 'd4', name: 'وحدة الشراء المباشر والتعميدات الفورية', sub: 'مؤرشف ومدمج مع المنافسات', code: 'SEC-DIR-03', level: 'sub', parent: D1, status: 'off', date: '14 اكتوبر 2026', by: BY, scope: CHILD_SCOPE, tenders: 6, staff: 9, cc: 'CC-1010', desc: '' },
];
export const DEPT_MAIN = MAIN;
export const COST_CENTERS = ['CC-1010', 'CC-TECH-100'];

const ITEM_BASE = { name: 'خوادم معالجة سحابية فائقة الأداء', desc: 'خوادم افتراضية متوافقة مع متطلبات الأمن السيبراني الحكومي (Tier-4)', category: 'تقنية المعلومات والحلول الرقمية', unit: 'رخصة سنوية', status: 'active', date: '24 اكتوبر 2026', by: BY, grade: 'الدرجة الأولى (أ) - مشاريع كبرى واستراتيجية', vat: '300948291000003' };
export const ITEMS = [1, 2, 3, 4].map((n) => ({ id: 'i' + n, code: 'ITM- SRV- 0102', ...ITEM_BASE }));
export const ITEM_LONG = 'حزم سحابية مخصصة للبيئات عالية الاعتمادية ومراكز البيانات الحكومية المشتركة، متوافقة مع ضوابط الأمن السيبراني للأنظمة السحابية (CCC) وتدعم معايير التوافر العالي %99.99 والتشفير المتقدم عند السكون وأثناء النقل مع دعم الاستجابة السريعة للأحمال الحرجة.';
export const GRADE_OPTION = 'الدرجة الأولى (أ) - مشاريع كبرى واستراتيجية';

export const UNITS = [
  { id: 'u1', name: 'قطعة', title: '(Piece) قطعة', desc: 'وحدة عد فردية أساسية', symbol: 'PCS', linked: 740, status: 'active', date: '24 اكتوبر 2026', by: BY, uom: 'UOM-ID-0928', group: 'وحدة العدّ الفردي (Discrete)', nature: 'أعداد صحيحة مطلقة (غير مجزأة)', longDesc: 'وحدة قياس عدّية قياسية تستخدم للسلع والأجهزة المستقلة والمعدات التقنية والمكتبية التي يتم توريدها بالعدد الفردي دون إمكانية للقسمة أو التجزئة الحسابية في الفواتير والتدقيق المخزني.', subtitle: 'تُستخدم لقياس الأصناف التي يتم التعامل معها كوحدات منفردة.' },
  { id: 'u2', name: 'صندوق', title: 'صندوق', desc: 'حاوية تجميعية للمواد الإستهلاكية', symbol: 'Box', linked: 310, status: 'active', date: '24 اكتوبر 2026', by: BY, group: '', uom: '', longDesc: '' },
  { id: 'u3', name: 'متر طولي', title: 'متر طولي', desc: 'وحدة قياس الكابلات والتوريدات الإنشائية', symbol: 'M', linked: 185, status: 'active', date: '24 اكتوبر 2026', by: BY, group: '', uom: '', longDesc: '' },
  { id: 'u4', name: 'رخصة سنوية', title: 'رخصة سنوية', desc: 'وحدة لاشتراكات الأنظمة والبرمجيات التقنية', symbol: 'LIC', linked: 125, status: 'active', date: '24 اكتوبر 2026', by: BY, group: '', uom: 'UOM-LIC-01', longDesc: '' },
];
export const UNIT_GROUPS = ['الكتلة والوزن (Mass & Weight)', 'وحدة العدّ الفردي (Discrete)'];

export const CATEGORIES = [
  { id: 'c1', name: 'تقنية المعلومات والاتصالات', sub: '(Level 1) مستوى رئيسي', code: 'CAT-IT-00', level: 1, parent: 'تصنيف رئيسي مستقلة', count: 580, status: 'active', date: '24 اكتوبر 2026', by: BY, cc: 'CC-TECH-100', owner: 'م. خالد التميمي', full: 'تقنية المعلومات والاتصالات', desc: 'يشمل كافة تجهيزات البنية التحتية للحوسبة والشبكات والأنظمة الرقمية والبرمجيات المرخصة للمؤسسة وخدمات استضافة السحابة السيادية.', inList: true },
  { id: 'c1a', name: 'أجهزة الحاسب والخوادم', sub: 'محطات عمل، خوادم رفيعة', sub2: 'خوادم، حواسيب مكتبية، محطات عمل متنقلة', code: 'CAT-IT-01', level: 2, parent: 'تقنية المعلومات والاتصالات', count: 240, status: 'active', date: '4 اكتوبر 2026', by: BY, listCode: 'CAT-IT-01', detailCode: 'CAT-IT-00', detailCount: 580, inList: true },
  { id: 'c1b', name: 'البرمجيات والتراخيص', sub: 'اشتراكات سحابية، رخص تشغيل', sub2: 'تراخيص قواعد البيانات، سحابة إلكترونية، أنظمة تشغيل', code: 'CAT-IT-02', level: 2, parent: 'تقنية المعلومات والاتصالات', count: 180, status: 'active', date: '4 اكتوبر 2026', by: BY, detailCode: 'CAT-IT-00', detailCount: 580, inList: true },
  { id: 'c1c', name: 'شبكات ومعدات الاتصالات السلكية واللاسلكية', sub: '', sub2: 'موزعات، جدران حماية،', code: 'CAT-IT-00', level: 2, parent: 'تقنية المعلومات والاتصالات', count: 580, status: 'active', date: '24 اكتوبر 2026', by: BY, detailCode: 'CAT-IT-00', detailCount: 580, inList: false },
  { id: 'c2', name: 'تقنية المعلومات والاتصالات', sub: '(Level 1) مستوى رئيسي', code: 'CAT-IT-00', level: 1, parent: 'تصنيف رئيسي مستقلة', count: 580, status: 'active', date: '24 اكتوبر 2026', by: BY, cc: 'CC-TECH-100', owner: 'م. خالد التميمي', full: 'تقنية المعلومات والاتصالات', desc: '', inList: true },
];

export const AUDIT_ROWS = [
  { t: 'تحديث شجرة التصنيفات - اعتماد تصنيف البرمجيات والخدمات السحابية', who: 'د. عبدالله المنصور', date: '24 أكتوبر 2026', st: 'معتمد', cls: 'blue' },
  { t: 'إضافة وحدة قياس جديدة: ساعة استشارية تخصصية', who: 'م. سارة العتيبي', date: '23 أكتوبر 2026', st: 'نشط', cls: 'green' },
  { t: 'ربط قسم تقنية المعلومات بمركز التكلفة 4010', who: 'أ. فهد السالم', date: '21 أكتوبر 2026', st: 'متزامن', cls: 'orange' },
];
