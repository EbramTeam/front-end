// اسم ودور اليوزر المسجّل دخول، من /me، لبطاقة اليوزر بالقائمة الجانبية للبوابة
// اسم ودور اليوزر المسجّل دخول، من /me، لبطاقة اليوزر بالقائمة الجانبية للبوابة
import { useCurrentUser } from '../hooks/use-auth.js';
import { roleLabelOf } from '../portal-access.js';

export function CurrentUserName() {
  const { user } = useCurrentUser();
  return <>{user?.name ?? ''}</>;
}

export function CurrentUserRole() {
  const { user } = useCurrentUser();
  const role = roleLabelOf(user);
  const department = user?.department?.name;
  return <>{[role, department].filter(Boolean).join(' · ')}</>;
}