// يبدّل ملفات التنسيق بين RTL (الأصل) و LTR (مرآة مولّدة بـ rtlcss)
import r_global from './global.css?inline';
import l_global from '../styles-ltr/global.css?inline';
import r_layout from './layout.css?inline';
import l_layout from '../styles-ltr/layout.css?inline';
import r_login from './login.css?inline';
import l_login from '../styles-ltr/login.css?inline';
import r_dashboard from './dashboard.css?inline';
import l_dashboard from '../styles-ltr/dashboard.css?inline';
import r_users from './users.css?inline';
import l_users from '../styles-ltr/users.css?inline';
import r_detail from './detail.css?inline';
import l_detail from '../styles-ltr/detail.css?inline';
import r_wizard from './wizard.css?inline';
import l_wizard from '../styles-ltr/wizard.css?inline';
import r_roles from './roles.css?inline';
import l_roles from '../styles-ltr/roles.css?inline';
import r_responsive from './responsive.css?inline';
import l_responsive from '../styles-ltr/responsive.css?inline';
import r_vendors from './vendors.css?inline';
import l_vendors from '../styles-ltr/vendors.css?inline';
import r_master from './master.css?inline';
import l_master from '../styles-ltr/master.css?inline';
import r_mobile from './mobile.css?inline';
import l_mobile from '../styles-ltr/mobile.css?inline';
const RTL = [r_global,r_layout,r_login,r_dashboard,r_users,r_detail,r_wizard,r_roles,r_responsive,r_vendors,r_master,r_mobile].join('\n');
const LTR = [l_global,l_layout,l_login,l_dashboard,l_users,l_detail,l_wizard,l_roles,l_responsive,l_vendors,l_master,l_mobile].join('\n');
let el = null;
export function applyCss(lang) {
  if (!el) {
    el = document.createElement('style');
    el.id = 'app-css';
    document.head.appendChild(el);
  }
  el.textContent = lang === 'en' ? LTR : RTL;
}
