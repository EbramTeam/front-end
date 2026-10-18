import {
  iconOrders,
  iconApprovals,
  iconEnvelopes,
  featureApproval,
  featureDocuments,
  featureCheck,
  teamFarahHarz,
  teamYousefAbuOdeh,
  teamHayaAhmad,
  teamMohammedKasba,
  teamMohammedWael,
  teamRawaaJabr,
  teamAhmadMadhoun,
  teamDimaYounes,
} from '../assets/images'

// روابط القائمة بالترتيب الظاهر في الديسكتوب (من اليمين لليسار عبر flex-row-reverse الأصلي)
export const desktopNavLinks = [
  { label: 'تواصل معنا', href: '#' },
  { label: 'الباقات', href: '#' },
  { label: 'المميزات', href: '#' },
  { label: 'من نحن', href: '#' },
]

// قائمة الجوال (الرئيسية أولًا)
export const mobileNavLinks = [
  { label: 'من نحن', href: '#' },
  { label: 'المميزات', href: '#' },
  { label: 'الباقات', href: '#' },
  { label: 'تواصل معنا', href: '#' },
]

export const languages = [
  { code: 'ar', label: 'العربية' },
  { code: 'en', label: 'English' },
]

// القسم الثالث: "من نحن"
export const aboutItems = [
  {
    icon: iconOrders,
    alt: 'أيقونة 1',
    title: 'تنظيم طلبات الشراء',
    text: 'كل الطلبات في مكان واحد ببيانات موحّدة وحالة واضحة.',
    size: 'w-[clamp(60px,4.32vw,90px)] h-[clamp(60px,4.32vw,90px)]',
  },
  {
    icon: iconApprovals,
    alt: 'أيقونة 2',
    title: 'متابعة الاعتمادات',
    text: 'اعرف أين يقف كل طلب، ومن ينتظر قراره.',
    size: 'w-[clamp(56px,4.32vw,83px)] h-[clamp(56px,4.32vw,83px)]',
  },
  {
    icon: iconEnvelopes,
    alt: 'أيقونة 3',
    title: 'إدارة عروض الأسعار وفتح المظاريف',
    text: 'استقبل العروض ونظّمها، ووثّق فتح المظاريف بإجراء واضح.',
    size: 'w-[clamp(56px,4.32vw,83px)] h-[clamp(56px,4.32vw,83px)]',
  },
]

// القسم الرابع: المميزات الرئيسية (الدوائر)
// variant: "light" = خلفية فاتحة متدرجة، "dark" = خلفية داكنة متدرجة
export const featureItems = [
  {
    number: '01',
    title: 'إدارة مركزية للطلبات',
    text: 'كل طلبات الجهة في قائمة واحدة، مع حالة واضحة لكل طلب.',
    image: iconOrders,
    imageClass: 'w-[95px] h-[106px]',
    variant: 'light',
    textColor: 'text-[#4a5f78]',
    delay: '[animation-delay:0s]',
    dashedConnector: true,
  },
  {
    number: '02',
    title: 'تنظيم إجراءات الاعتماد',
    text: 'مسارات اعتماد تتبع الصلاحيات المعتمدة لدى جهتك.',
    image: featureApproval,
    imageClass: 'w-[95px] h-[106px] object-cover',
    variant: 'dark',
    textColor: 'text-[#6f6f6f]',
    delay: '[animation-delay:.45s]',
    dashedConnector: true,
  },
  {
    number: '03',
    title: 'سهولة متابعة عروض الأسعار',
    text: 'العروض مرتبطة بطلبها، وجاهزة للمراجعة في مكان واحد.',
    image: featureDocuments,
    imageClass: 'w-[95px] h-[106px] object-cover',
    variant: 'light',
    textColor: 'text-[#6f6f6f]',
    delay: '[animation-delay:.9s]',
    dashedConnector: true,
  },
  {
    number: '04',
    title: 'وضوح الإجراءات وتوثيقها',
    text: 'سجل واضح لكل خطوة، من أنشأ الطلب، ومن اعتمده، ومتى.',
    image: featureCheck,
    imageClass: 'w-[95px] h-[106px] object-cover',
    variant: 'dark',
    textColor: 'text-[#6f6f6f]',
    delay: '[animation-delay:1.35s]',
    dashedConnector: false,
  },
]

// القسم الخامس: كيف تعمل إبرام؟
export const steps = [
  { number: '01', title: 'إنشاء طلب الشراء', text: 'تبدأ الجهة بإدخال احتياجاتها وتفاصيل الطلب.' },
  { number: '02', title: 'المراجعة والاعتماد', text: 'ينتقل الطلب إلى المسؤولين وفق الصلاحيات المعتمدة.' },
  { number: '03', title: 'استقبال عروض الأسعار', text: 'تُنظَّم العروض المرتبطة بالطلب وتُتاح مراجعتها.' },
  { number: '04', title: 'لجنة فتح المظاريف', text: 'تُوثَّق الخطوات ذات الصلة ويُتابَع تقدّم المعاملة.' },
]

// القسم السادس: فريق العمل
export const team = [
  { name: 'فرح حرز', role: 'مصممة UXUI', photo: teamFarahHarz },
  { name: 'يوسف أبو عودة', role: 'مصمم UXUI', photo: teamYousefAbuOdeh },
  { name: 'هيا أحمد', role: 'مصممة جرافيك', photo: teamHayaAhmad },
  { name: 'محمد كسبة', role: 'مطور واجهات خلفية', photo: teamMohammedKasba },
  { name: 'محمد أبو القميز', role: 'مطور واجهات أمامية', photo: teamMohammedWael },
  { name: 'رواء جبر', role: 'مطورة واجهات أمامية', photo: teamRawaaJabr },
  { name: 'أحمد المدهون', role: 'مصمم جرافيك', photo: teamAhmadMadhoun },
  { name: 'ديما يونس', role: 'مصممة جرافيك', photo: teamDimaYounes },
]
