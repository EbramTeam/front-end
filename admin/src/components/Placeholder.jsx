import AuthLayout from './AuthLayout.jsx';

// Destination for buttons whose screen was not provided in the design.
// It keeps the page shell (header/sidebar/footer) and renders no invented content.
export default function Placeholder({ standalone }) {
  if (standalone) {
    return <AuthLayout>{null}</AuthLayout>;
  }
  return <div className="placeholder-page" />;
}
