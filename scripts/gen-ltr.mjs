// يولّد نسخة LTR مرآة من ملفات CSS (المصدر مكتوب لـ RTL) باستخدام rtlcss
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import rtlcss from 'rtlcss';
mkdirSync('src/styles-ltr', { recursive: true });
for (const f of readdirSync('src/styles')) {
  if (!f.endsWith('.css') || f === 'fonts.css') continue;
  const out = rtlcss.process(readFileSync('src/styles/' + f, 'utf8'), { autoRename: false, clean: false });
  writeFileSync('src/styles-ltr/' + f, out);
}
console.log('ltr css generated');
