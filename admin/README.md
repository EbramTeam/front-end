# إبرام – نظام إدارة المشتريات (واجهة React)

Vite + React + react-router-dom، CSS عادي، اتجاه RTL، حالة محلية فقط (بدون Backend).

## التشغيل

```bash
npm install
npm run dev      # للتطوير
npm run build    # للإنتاج
```

## الملفات
- `ROUTES.md` ← خريطة الأزرار والمسارات كاملة
- `DIFFS.md` ← الفروقات والافتراضات والنواقص بصراحة
- `src/pages` ← كل شاشة بملف، `src/components` ← الهيكل المشترك والجدول والأيقونات
- `src/data.js` ← كل البيانات منقولة حرفياً من التصاميم
- `public/assets` ← اللوجو + رسم المكتب (Step 3)

## API configuration

- Development: `npm run dev` sends `/api` requests to staging through the Vite proxy.
- Local backend or production: set `VITE_API_URL` (see `.env.example`). The API must list this site's origin in `CORS_ALLOWED_ORIGINS`.
