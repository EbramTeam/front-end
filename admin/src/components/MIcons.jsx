// أيقونات إضافية لشاشات البيانات الأساسية والإعدادات (نفس أسلوب Icons.jsx)
const base = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
function make(children, extra = {}) {
  return function Icon({ size = 20, className, style, ...rest }) {
    return (
      <svg width={size} height={size} className={className} style={style} aria-hidden="true" {...base} {...extra} {...rest}>
        {children}
      </svg>
    );
  };
}
const fill = { fill: 'currentColor', stroke: 'none' };

export const CubeIcon = make(<><path d="M12 2.5l8.5 4.5v10L12 21.5 3.5 17V7z" /><path d="M3.8 7.2L12 11.7l8.2-4.5M12 11.7v9.6" /></>);
export const AppsIcon = make(<><rect x="3" y="3" width="8" height="8" rx="2" /><rect x="13" y="3" width="8" height="8" rx="2" /><rect x="3" y="13" width="8" height="8" rx="2" /><circle cx="17" cy="17" r="4" /></>, fill);
export const RulerIcon = make(<><path d="M3 15.5l12.5-12.5 5.5 5.5L8.5 21z" /><path d="M7 12l2.5 2.5M10 9l2 2M13 6l2.5 2.5" /></>);
export const ClipboardListIcon = make(<><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4h6v3H9zM8.5 11h7M8.5 14.5h7M8.5 18h4" /></>);
export const ClipboardCheckIcon = make(<><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4h6v3H9zM8.5 14l2.5 2.5 4.5-5" /></>);
export const FolderIcon = make(<path d="M3 6.5A1.5 1.5 0 014.5 5H9l2 2.5h8.5A1.5 1.5 0 0121 9v8.5a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 17.5z" />);
export const FolderOpenIcon = make(<><path d="M3 18V6.5A1.5 1.5 0 014.5 5H9l2 2.5h7A1.5 1.5 0 0119.5 9v1.5" /><path d="M3 18l2.7-7h16.3l-2.7 7z" /></>);
export const WandIcon = make(<><path d="M4 20L16 8" /><path d="M14 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1zM19 12l.7 1.3L21 14l-1.3.7L19 16l-.7-1.3L17 14l1.3-.7z" /></>);
export const TreeIcon = make(<><rect x="9" y="2.5" width="6" height="5" rx="1" /><rect x="2.5" y="16.5" width="6" height="5" rx="1" /><rect x="15.5" y="16.5" width="6" height="5" rx="1" /><path d="M12 7.5v4.5M5.5 16.5V12h13v4.5" /></>);
export const WorkflowIcon = make(<><rect x="3" y="4" width="6" height="5" rx="1" /><rect x="15" y="3" width="6" height="4" rx="1" /><rect x="15" y="10" width="6" height="4" rx="1" /><rect x="3" y="15" width="6" height="5" rx="1" /><path d="M9 6.5h6M12 6.5V12h3M12 17.5h4" /></>);
export const MegaphoneIcon = make(<><path d="M3 10v4a1 1 0 001 1h2l7 4V5L6 9H4a1 1 0 00-1 1z" /><path d="M16.5 8.5a5 5 0 010 7M19 6a8.5 8.5 0 010 12" /></>);
export const ArrowLeftLongIcon = make(<path d="M20 12H5M11 6l-6 6 6 6" />);
const ChevronUpIcon_old = make(<path d="M6 15l6-6 6 6" />);
export const CloudUploadIcon = make(<><path d="M7 18a4.5 4.5 0 01-.6-8.96A6 6 0 0117.7 10 4 4 0 0117 18" /><path d="M12 21v-8M9 15.5l3-3 3 3" /></>);
export const TranslateIcon = make(<><path d="M3 6h10M8 3v3M5 6c.5 3.5 3 6 6.5 7.5M11 6c-.5 3.5-3 6.5-7 8" /><path d="M13 21l4-10 4 10M14.5 18h5" /></>);
export const ClockIcon = make(<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>);
export const PlusCircleIcon = make(<><circle cx="12" cy="12" r="8.5" /><path d="M12 8v8M8 12h8" /></>);
export const CheckBadgeIcon = make(<><path d="M12 2.5l2.4 1.7 3-.1.9 2.8 2.4 1.8-.9 2.8.9 2.8-2.4 1.8-.9 2.8-3-.1L12 21.5l-2.4-1.7-3 .1-.9-2.8-2.4-1.8.9-2.8-.9-2.8 2.4-1.8.9-2.8 3 .1z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></>);
export const FileTextIcon = make(<><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4M9 12h6M9 16h6" /></>);
export const LockOpenIcon = make(<><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 017.5-2" /></>);
export const BankIcon = make(<><path d="M3 9l9-5 9 5zM5 9v9M9.5 9v9M14.5 9v9M19 9v9M3 20h18" /></>);
export const UserTieIcon = make(<><circle cx="12" cy="8" r="3.5" /><path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" /></>);
export const SpinIcon = make(<><path d="M20 12a8 8 0 11-2.3-5.6" /><path d="M20 4v4.5h-4.5" /></>);
export const LinkIcon = make(<><path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1" /><path d="M14 10a4 4 0 00-5.7 0l-3 3A4 4 0 0011 18.7l1-1" /></>);
export const GlobeIcon2 = make(<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>);
export const BoxesIcon = make(<><rect x="4" y="3" width="7" height="7" rx="1.5" /><rect x="13" y="3" width="7" height="7" rx="1.5" /><circle cx="7.5" cy="16.5" r="3.5" /><path d="M13 14h7v6h-7z" /></>);

export { ChevronUpIcon, EyeIcon, SpinnerUpDownIcon, AlertCircleIcon, CheckCircleSolidIcon, InboxIcon, CheckSquareIcon } from './TIcons.jsx';
