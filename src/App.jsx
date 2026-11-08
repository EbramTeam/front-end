import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LandingPage, PrivacyPolicy, Dashboard, NewOrder, NewNeedRequest, MyOrders, OrderDetails, EditOrder, EnvelopesOpened, RejectedOrders, PendingApprovalOrder, DraftOrder, ApprovedOrder, Suppliers, SupplierDetails, RfqPreview, EnvelopesMinutes, Profile, EditProfile } from './pages'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/user-profile" element={<Profile />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/supplier-details" element={<SupplierDetails />} />
        <Route path="/suppliers/:id" element={<SupplierDetails />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/need-requests" element={<MyOrders />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/draft-order" element={<DraftOrder />} />
        <Route path="/approved-order" element={<ApprovedOrder />} />
        <Route path="/approved-order/:id" element={<ApprovedOrder />} />
        <Route path="/orders/PR-2026-0006" element={<DraftOrder />} />
        <Route path="/orders/PR-2026-0009" element={<ApprovedOrder />} />
        <Route path="/pending-approval-order" element={<PendingApprovalOrder />} />
        <Route path="/orders/:id" element={<OrderDetails />} />
        <Route path="/order-details" element={<OrderDetails />} />
        <Route path="/edit-order" element={<EditOrder />} />
        <Route path="/edit-order/:id" element={<EditOrder />} />
        <Route path="/orders/:id/edit" element={<EditOrder />} />
        <Route path="/new-order" element={<NewOrder />} />
        <Route path="/new-need-request" element={<NewOrder />} />
        <Route path="/new-need" element={<NewOrder />} />
        <Route path="/dashboard/new-order" element={<NewOrder />} />
        <Route path="/new-purchase-order" element={<NewOrder />} />
        <Route path="/envelopes-opened" element={<EnvelopesOpened />} />
        <Route path="/envelopes-minutes" element={<EnvelopesMinutes />} />
        <Route path="/envelopes-opened/minutes" element={<EnvelopesMinutes />} />
        <Route path="/envelopes-report" element={<EnvelopesMinutes />} />
        <Route path="/minutes" element={<EnvelopesMinutes />} />
        <Route path="/rfq-preview" element={<RfqPreview />} />
        <Route path="/envelopes-opened/rfq" element={<RfqPreview />} />
        <Route path="/orders/PR-2026-0001/rfq" element={<RfqPreview />} />
        <Route path="/rfq" element={<RfqPreview />} />
        <Route path="/offers-request" element={<RfqPreview />} />
        <Route path="/request-offers" element={<RfqPreview />} />
        <Route path="/rejected-orders" element={<RejectedOrders />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<PrivacyPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<PrivacyPolicy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
