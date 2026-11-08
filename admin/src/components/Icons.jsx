// Simple outline icons (24x24 grid, stroke based). Drawn to approximate the icons in the design.
const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

function make(children, extra = {}) {
  return function Icon({ size = 20, className, style, ...rest }) {
    return (
      <svg
        width={size}
        height={size}
        className={className}
        style={style}
        aria-hidden="true"
        {...base}
        {...extra}
        {...rest}
      >
        {children}
      </svg>
    );
  };
}

const SearchIcon_old = make(
  <>
    <circle cx="11" cy="11" r="7.5" />
    <path d="M21 21l-4.3-4.3" />
  </>
);
export const BellIcon = make(
  <>
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.9 1.9 0 0 0 3.4 0" />
  </>
);
export const GlobeIcon = make(
  <>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M2.5 12h19" />
    <path d="M12 2.5a14 14 0 0 1 0 19a14 14 0 0 1 0-19" />
  </>
);
export const ShieldIcon = make(
  <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9.5C7.2 20 4 16.5 4 12V6z" />
);
const ShieldCheckIcon_old = make(
  <>
    <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9.5C7.2 20 4 16.5 4 12V6z" />
    <path d="M8.5 12l2.5 2.5 4.5-5" />
  </>
);
export const ShieldLockIcon = make(
  <>
    <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9.5C7.2 20 4 16.5 4 12V6z" />
    <circle cx="12" cy="11" r="2" />
    <path d="M12 13v2.5" />
  </>
);
const HeadsetIcon_old = make(
  <>
    <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
    <rect x="3" y="14" width="4" height="6" rx="1.5" />
    <rect x="17" y="14" width="4" height="6" rx="1.5" />
    <path d="M19 20c0 1.2-1.5 2-4 2h-2" />
  </>
);
export const GridIcon = make(
  <>
    <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
    <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
    <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
    <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
  </>
);
export const UsersIcon = make(
  <>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M17.5 14.2c2.4.3 4 2 4 4.8" />
  </>
);
export const RolesIcon = make(
  <>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4" />
    <path d="M14 3l5 5v2" />
    <path d="M14 3v5h5" />
    <path d="M8 11h4M8 15h3" />
    <path d="M17.5 21l3-1.3v-3l-3-1.2-3 1.2v3z" />
  </>
);
export const VendorsIcon = make(
  <>
    <circle cx="9" cy="6.5" r="3" />
    <path d="M3 18c0-3 2.6-5 6-5" />
    <rect x="12" y="13" width="9" height="6" rx="1.3" />
    <circle cx="14.5" cy="20.5" r="1" />
    <circle cx="19" cy="20.5" r="1" />
  </>
);
export const DatabaseIcon = make(
  <>
    <ellipse cx="12" cy="5.5" rx="8" ry="3" />
    <path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13" />
    <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
  </>
);
export const SettingsIcon = make(
  <>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2.5l1.6 2.3 2.7-.5.8 2.6 2.6.9-.5 2.7L21.5 12l-2.3 1.6.5 2.7-2.6.8-.9 2.6-2.7-.5L12 21.5l-1.6-2.3-2.7.5-.8-2.6-2.6-.9.5-2.7L2.5 12l2.3-1.6-.5-2.7 2.6-.8.9-2.6 2.7.5z" />
  </>
);
export const RefreshIcon = make(
  <>
    <path d="M20 12a8 8 0 1 1-2.6-5.9" />
    <path d="M20 4v5h-5" />
  </>
);
const ChevronDownIcon_old = make(<path d="M6 9l6 6 6-6" />);
const ChevronLeftIcon_old = make(<path d="M15 6l-6 6 6 6" />);
const ChevronRightIcon_old = make(<path d="M9 6l6 6-6 6" />);
export const ChevronsLeftIcon = make(
  <>
    <path d="M11 6l-6 6 6 6" />
    <path d="M19 6l-6 6 6 6" />
  </>
);
const LockIcon_old = make(
  <>
    <rect x="4.5" y="10.5" width="15" height="10.5" rx="2.5" />
    <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
  </>
);
export const PencilIcon = make(
  <>
    <path d="M4 20l1-4L16.5 4.5a2 2 0 0 1 3 0l0 0a2 2 0 0 1 0 3L8 19z" />
    <path d="M14.5 6.5l3 3" />
  </>
);
export const DotsVerticalIcon = ({ size = 20, className, style, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true" {...rest}>
    <circle cx="12" cy="5" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="12" cy="19" r="2" />
  </svg>
);
export const CopyIcon = make(
  <>
    <rect x="8.5" y="8.5" width="12" height="12" rx="2.5" />
    <path d="M15.5 8.5V6a2.5 2.5 0 0 0-2.5-2.5H6A2.5 2.5 0 0 0 3.5 6v7A2.5 2.5 0 0 0 6 15.5h2.5" />
  </>
);
const CloseCircleIcon_old = make(
  <>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M9 9l6 6M15 9l-6 6" />
  </>
);
const HourglassIcon_old = make(
  <>
    <path d="M6 3h12M6 21h12" />
    <path d="M7 3c0 5 5 6 5 9s-5 4-5 9" />
    <path d="M17 3c0 5-5 6-5 9s5 4 5 9" />
  </>
);
const BanUserIcon_old = make(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M5.6 5.6l12.8 12.8" />
  </>
);
export const VerifiedIcon = make(
  <>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M8 12.3l2.8 2.8 5.2-5.6" />
  </>
);
const CalendarIcon_old = make(
  <>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </>
);
export const BuildingIcon = make(
  <>
    <rect x="4" y="3" width="11" height="18" rx="1.5" />
    <path d="M15 9h4a1 1 0 0 1 1 1v11h-5" />
    <path d="M8 7.5h3M8 11.5h3M8 15.5h3" />
  </>
);
export const IdCardIcon = make(
  <>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <circle cx="8.5" cy="11" r="2" />
    <path d="M5.5 16c.4-1.7 1.6-2.5 3-2.5s2.6.8 3 2.5" />
    <path d="M14.5 10h4M14.5 14h4" />
  </>
);
export const SlidersIcon = make(
  <>
    <path d="M4 7h9M17 7h3M4 17h3M11 17h9" />
    <circle cx="15" cy="7" r="2" />
    <circle cx="9" cy="17" r="2" />
  </>
);
export const SyncIcon = make(
  <>
    <path d="M20 11a8 8 0 0 0-14-4.5L4 9" />
    <path d="M4 4v5h5" />
    <path d="M4 13a8 8 0 0 0 14 4.5l2-2.5" />
    <path d="M20 20v-5h-5" />
  </>
);
export const KeyLockIcon = make(
  <>
    <circle cx="12" cy="12" r="9.5" />
    <rect x="8.5" y="11" width="7" height="5.5" rx="1.3" />
    <path d="M10 11V9.5a2 2 0 0 1 4 0V11" />
  </>
);
export const UserCheckIcon = make(
  <>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20c0-3.6 2.9-6 6.5-6 1.4 0 2.6.3 3.6.9" />
    <path d="M15 17.5l2.2 2.2 4-4.4" />
  </>
);
const UserFilledIcon_old = ({ size = 20, className, style, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden="true" {...rest}>
    <circle cx="12" cy="12" r="11" />
    <circle cx="12" cy="9.5" r="3.8" fill="#fff" />
    <path d="M4.8 18.6c1.2-3 4-4.3 7.2-4.3s6 1.3 7.2 4.3A10.4 10.4 0 0 1 12 22.4a10.4 10.4 0 0 1-7.2-3.8z" fill="#fff" />
  </svg>
);
export const ReportIcon = make(
  <>
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M12 16v4M8 20h8" />
    <path d="M7 12l3-3 2.5 2L16 8" />
  </>
);
export const ClipboardUserIcon = make(
  <>
    <rect x="4" y="4" width="16" height="17" rx="2" />
    <path d="M9 4V3h6v1" />
    <circle cx="9" cy="10.5" r="1.8" />
    <path d="M6.2 16c.4-1.6 1.5-2.4 2.8-2.4s2.4.8 2.8 2.4" />
    <path d="M14 10h3.5M14 14h3.5" />
  </>
);
export const BanIcon = make(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M5.6 5.6l12.8 12.8" />
  </>
);
export const SmallUserIcon = make(
  <>
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 20c0-3.5 3-5.5 7-5.5s7 2 7 5.5" />
  </>
);
export const LogsIcon = make(
  <>
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M12 16v4M8 20h8" />
    <path d="M7 11l2.5-2.5L12 11l3-3.5" />
  </>
);
export const ExportIcon = make(
  <>
    <path d="M12 3v12" />
    <path d="M7 10l5 5 5-5" />
    <path d="M4 20h16" />
  </>
);

export const FingerprintIcon = make(
  <>
    <path d="M6 10a6 6 0 0 1 12 0v2.5" />
    <path d="M9 21c-1-2-1.5-4-1.5-6.5V10a4.5 4.5 0 0 1 9 0v4.5c0 1.5.3 2.8 1 4" />
    <path d="M12 10v5c0 2 .5 3.8 1.5 5.5" />
    <path d="M4.5 14c0-1.5.2-2.7.5-3.5" />
  </>
);
export const SparkIcon = make(
  <>
    <circle cx="12" cy="12" r="2.5" />
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
  </>
);
export const GavelIcon = make(
  <>
    <path d="M14 4l6 6-3 3-6-6z" />
    <path d="M10 8L4 14l3 3 6-6" />
    <path d="M3 21h9" />
  </>
);
export const ScalesIcon = make(
  <>
    <path d="M12 3v18M7 21h10" />
    <path d="M4 7h16" />
    <path d="M6 7l-3 7a3.5 3.5 0 0 0 6 0z" />
    <path d="M18 7l-3 7a3.5 3.5 0 0 0 6 0z" />
  </>
);
export const InfoCircleIcon = ({ size = 22, className, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
    <circle cx="12" cy="12" r="11" fill="currentColor" />
    <rect x="11" y="6.5" width="2" height="7" rx="1" fill="#fff" />
    <circle cx="12" cy="17" r="1.3" fill="#fff" />
  </svg>
);
export const CheckBoxIcon = ({ size = 28, className, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
    <rect x="1" y="1" width="22" height="22" rx="7" fill="currentColor" />
    <path d="M6.5 12.3l3.6 3.7L17.5 8.5" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export const DocIcon = make(
  <>
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v4h4M9 12h6M9 16h6" />
  </>
);
export const HandshakeIcon = make(
  <>
    <path d="M3 11l4-4 4 3 3-3 3 3 4-1" />
    <path d="M3 11v6l5 3 3-2 2 1 4-3 3-1v-5" />
  </>
);
export const OrgChartIcon = make(
  <>
    <rect x="9" y="3" width="6" height="5" rx="1.2" />
    <rect x="3" y="16" width="6" height="5" rx="1.2" />
    <rect x="15" y="16" width="6" height="5" rx="1.2" />
    <path d="M12 8v4M6 16v-4h12v4" />
  </>
);
export const PieIcon = make(
  <>
    <path d="M12 3v9h9" />
    <path d="M20.5 15A9 9 0 1 1 9 3.5" />
  </>
);
export const SelectAllIcon = make(
  <>
    <rect x="3.5" y="3.5" width="17" height="17" rx="3" strokeDasharray="3 3" />
    <rect x="8" y="8" width="8" height="8" rx="1.5" />
  </>
);
/* |⇤  (arrow pointing at a bar on its left) and ⇥| */
export const BarArrowLeftIcon = make(
  <>
    <path d="M5 5v14" />
    <path d="M19 12H9" />
    <path d="M13 8l-4 4 4 4" />
  </>
);
export const BarArrowRightIcon = make(
  <>
    <path d="M19 5v14" />
    <path d="M5 12h10" />
    <path d="M11 8l4 4-4 4" />
  </>
);

/* ---------- vendors icons ---------- */
const sv = (size, children, extra = {}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...extra}>
    {children}
  </svg>
);
export const PinIcon = ({ size = 16 }) => sv(size, <><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.800 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>);
export const MailIcon = ({ size = 16 }) => sv(size, <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.500 7 8.500 6 8.500-6" /></>);
export const PhoneIcon = ({ size = 16 }) => sv(size, <path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />);
export const UploadIcon = ({ size = 24 }) => sv(size, <><rect x="4" y="3" width="16" height="18" rx="4" /><path d="M12 16V8m0 0-3 3m3-3 3 3" /></>);
export const TrashIcon = ({ size = 20 }) => sv(size, <><path d="M4 7h16M10 11v6M14 11v6" /><path d="M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3" /></>);
export const ClockHistoryIcon = ({ size = 24 }) => sv(size, <><path d="M3.500 12a8.500 8.500 0 1 0 2.600-6.100L3.500 8.500" /><path d="M3.500 4v4.500H8M12 7.500V12l3 2" /></>);
export const CertIcon = ({ size = 24 }) => sv(size, <><rect x="3" y="4" width="18" height="12" rx="2" /><circle cx="12" cy="10" r="2.500" /><path d="m9.500 16-1 4 3.500-1.500 3.500 1.500-1-4" /></>);
export const SendMailIcon = ({ size = 24 }) => sv(size, <><path d="M3 6h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H3z" /><path d="m3 7 7.500 5L18 7M17 19l4-2-1-4" /></>);
export const TrendUpIcon = ({ size = 14 }) => sv(size, <path d="m3 17 6-6 4 4 8-8m0 0h-5m5 0v5" />);
const CircleXIcon_old = ({ size = 18 }) => sv(size, <><circle cx="12" cy="12" r="9" /><path d="m9 9 6 6m0-6-6 6" /></>);
export const PauseCircleIcon = ({ size = 24 }) => sv(size, <><circle cx="12" cy="12" r="9" /><path d="M10 9v6M14 9v6" /></>);
export const CircleCheckIcon = ({ size = 14 }) => sv(size, <><circle cx="12" cy="12" r="9" /><path d="m8 12.500 3 3 5-6" /></>);
export const WarnIcon = ({ size = 14 }) => sv(size, <><path d="M12 4 2.500 20h19z" /><path d="M12 10v4.500M12 17.500v.1" /></>);
export const UserRefreshIcon = ({ size = 24 }) => sv(size, <><circle cx="12" cy="9" r="3" /><path d="M7 19a5 5 0 0 1 10 0" /><path d="M20 12a8.500 8.500 0 1 0-2 5.500M20 6v4h-4" /></>);
export const GlobeLineIcon = ({ size = 22 }) => sv(size, <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>);
export const FileBadgeIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 28 32" aria-hidden="true">
    <path d="M5 2h12l7 7v19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" fill="#e53030" />
    <text x="14" y="24" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff" fontFamily="Arial">PDF</text>
  </svg>
);

export { SearchIcon, CircleXIcon, CloseCircleIcon, HourglassIcon, BanUserIcon, CalendarIcon, UserFilledIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, LockIcon } from './TIcons.jsx';

export { NavShieldCheck as ShieldCheckIcon, NavHeadset as HeadsetIcon } from './NavIcons.jsx';
