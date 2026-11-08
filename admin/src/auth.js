// تسجيل دخول تجريبي (بدون Backend): الحالة بالـ sessionStorage، تنتهي بإغلاق المتصفح
const KEY = 'ibram-auth';
export const isAuthed = () => { try { return sessionStorage.getItem(KEY) === '1'; } catch { return false; } };
export const signIn = () => { try { sessionStorage.setItem(KEY, '1'); } catch {} };
export const signOut = () => { try { sessionStorage.removeItem(KEY); } catch {} };
