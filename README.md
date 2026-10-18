# IBRAM (React)

منصة إبرام لتنظيم دورة المشتريات — الواجهة الأمامية بعد التحويل إلى React.

## التقنيات
- React 19 + Vite
- Tailwind CSS v4 (عبر `@tailwindcss/vite`، بدون حاجة لـ `tailwind CLI` أو `output.css`)
- Font Awesome (عبر CDN في `index.html`، كما في النسخة الأصلية)

## التشغيل
```bash
npm install
npm run dev       # تشغيل محلي
npm run build     # بناء نسخة الإنتاج داخل dist/
npm run preview   # معاينة نسخة الإنتاج
```

## هيكل المشروع
```
src/
├── main.jsx                 # نقطة الدخول
├── App.jsx                  # ترتيب الأقسام
├── index.css                # Tailwind + الخط + الـ nav-glow + animation
├── assets/
│   ├── fonts/               # خطوط Montserrat Arabic
│   └── images/              # الصور (بأسماء إنجليزية) + index.js يجمعها
├── data/content.js          # كل النصوص والبيانات المتكررة (المميزات، الخطوات، الفريق...)
├── hooks/
│   ├── useTheme.js          # الوضع الليلي (يحفظ في localStorage)
│   └── useDismiss.js        # إغلاق القوائم بالضغط خارجها أو Escape
└── components/
    ├── TopBar.jsx           # الشريط العلوي (الموقع، الإيميل، السوشيال)
    ├── Header.jsx           # الهيدر + قائمة الجوال
    ├── LanguageMenu.jsx     # قائمة اللغات
    ├── ThemeToggle.jsx      # زر الوضع الليلي
    ├── Hero.jsx             # العنوان الرئيسي والأزرار
    ├── PlatformPreview.jsx  # صورة لوحة التحكم
    ├── About.jsx            # من نحن
    ├── Features.jsx         # المميزات الرئيسية (الدوائر)
    ├── HowItWorks.jsx       # كيف تعمل إبرام؟
    └── Team.jsx             # أعضاء الفريق
```

## ملاحظات
- لتعديل نص أو إضافة عضو فريق أو ميزة: عدّل `src/data/content.js` فقط.
- الوضع الليلي يعتمد على كلاس `dark` على عنصر `<html>`، ويُطبَّق من `index.html` قبل الرسم لتجنب الوميض.
- اختيار اللغة (عربي/English) يتغيّر في القائمة ويُحفظ، لكن لا توجد ترجمة فعلية للمحتوى بعد.
