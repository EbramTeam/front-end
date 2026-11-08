import { DocIcon, OrgChartIcon, PieIcon, HandshakeIcon, UsersIcon, SettingsIcon, RolesIcon, DatabaseIcon, LogsIcon, ShieldIcon } from './Icons.jsx';

const MAP = {
  doc: DocIcon,
  org: OrgChartIcon,
  pie: PieIcon,
  hand: HandshakeIcon,
  group: UsersIcon,
  admin: SettingsIcon,
  users: UsersIcon,
  roles: RolesIcon,
  settings: SettingsIcon,
  db: DatabaseIcon,
  logs: LogsIcon,
  shield: ShieldIcon,
};
export default function RoleIcon({ name, size = 20 }) {
  const I = MAP[name] || ShieldIcon;
  return <I size={size} />;
}
