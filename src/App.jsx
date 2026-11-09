import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

// Public landing & policy pages
import {
  LandingPage,
  PrivacyPolicy,
  Dashboard,
  NewOrder,
  MyOrders,
  OrderDetails,
  EditOrder,
  EnvelopesOpened,
  RejectedOrders,
  PendingApprovalOrder,
  DraftOrder,
  ApprovedOrder,
  Suppliers,
  SupplierDetails,
  RfqPreview,
  EnvelopesMinutes,
  Profile,
  EditProfile,
  AdminDashboard,
  Login,
  UserLogin,
  ForgotPassword,
  ResetPassword,
  FirstLoginPassword,
  Users,
  UserDetail,
  AddUser,
  Roles,
  Vendors,
  VendorDetail,
  VendorForm,
} from './pages'
import ScrollToTop from './components/ScrollToTop'

// Admin system & Auth
import { isAuthed } from './auth.js'
import AppLayout from './components/AppLayout.jsx'
import Placeholder from './components/Placeholder.jsx'
import { FullScreenLoader } from './components/Spinner.jsx'
import { PASSWORD_CHANGE_PATH, useCurrentUser } from './hooks/use-auth.js'
import { MasterProvider } from './masterStore.jsx'
import MasterHub from './pages/master/MasterHub.jsx'
import { DepartmentsList, ItemsList, UnitsList, CategoriesList } from './pages/master/MasterList.jsx'
import { DepartmentDetail, ItemDetail, UnitDetail, CategoryDetail } from './pages/master/MasterDetail.jsx'
import { DepartmentForm, ItemForm, UnitForm, CategoryForm } from './pages/master/MasterForm.jsx'
import { SettingsHub, SettingsGeneral, SettingsProcurement, SettingsNotifications } from './pages/SettingsPages.jsx'

export function fitToDesign() {
  const pathname = window.location.pathname
  const isAdmin = pathname.startsWith('/admin') ||
    pathname.startsWith('/users') ||
    pathname.startsWith('/roles') ||
    pathname.startsWith('/vendors') ||
    pathname.startsWith('/master-data') ||
    pathname.startsWith('/settings') ||
    pathname === '/login' ||
    pathname === '/user-login' ||
    pathname === '/forgot-password' ||
    pathname === '/reset-password' ||
    pathname === PASSWORD_CHANGE_PATH

  if (!isAdmin) {
    document.documentElement.style.zoom = ''
    document.documentElement.style.removeProperty('--z')
    return
  }
  const w = window.innerWidth
  const z = w > 1024 ? Math.min(Math.max(w / 1920, 0.6), 1.5) : 1
  document.documentElement.style.zoom = z === 1 ? '' : String(z)
  document.documentElement.style.setProperty('--z', String(z))
}

function RequireAuth({ children }) {
  const { user, isLoading } = useCurrentUser()
  if (!isAuthed()) return <Navigate to="/login" replace />
  if (isLoading) return <FullScreenLoader />
  if (user?.must_change_password) return <Navigate to={PASSWORD_CHANGE_PATH} replace />
  return children
}

export default function App() {
  const location = useLocation()

  useEffect(() => {
    fitToDesign()
  }, [location.pathname])

  return (
    <MasterProvider>
      <ScrollToTop />
      <Routes>
        {/* Public Landing & Policy pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<PrivacyPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<PrivacyPolicy />} />

        {/* Procurement / Employee Portal */}
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

        {/* Authentication screens (no sidebar) */}
        <Route path="/login" element={<Login />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path={PASSWORD_CHANGE_PATH} element={<FirstLoginPassword />} />

        {/* Footer & Compliance pages */}
        <Route path="/support" element={<Placeholder standalone />} />
        <Route path="/cyber-compliance" element={<Placeholder standalone />} />

        {/* Admin System (Protected by RequireAuth) */}
        <Route
          element={
            <RequireAuth>
              <AppLayout />
            </RequireAuth>
          }
        >
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/new" element={<AddUser />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/users/:id/permissions" element={<Placeholder />} />
          <Route path="/users/:id/edit" element={<Placeholder />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/roles/new" element={<Navigate to="/roles" replace />} />
          <Route path="/roles/:key/edit" element={<Placeholder />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/vendors/new" element={<VendorForm />} />
          <Route path="/vendors/:id" element={<VendorDetail />} />
          <Route path="/vendors/:id/edit" element={<VendorForm edit />} />
          <Route path="/master-data" element={<MasterHub />} />
          <Route path="/master-data/departments" element={<DepartmentsList />} />
          <Route path="/master-data/departments/new" element={<DepartmentForm />} />
          <Route path="/master-data/departments/:id" element={<DepartmentDetail />} />
          <Route path="/master-data/departments/:id/edit" element={<DepartmentForm edit />} />
          <Route path="/master-data/items" element={<ItemsList />} />
          <Route path="/master-data/items/new" element={<ItemForm />} />
          <Route path="/master-data/items/:id" element={<ItemDetail />} />
          <Route path="/master-data/items/:id/edit" element={<ItemForm edit />} />
          <Route path="/master-data/units" element={<UnitsList />} />
          <Route path="/master-data/units/new" element={<UnitForm />} />
          <Route path="/master-data/units/:id" element={<UnitDetail />} />
          <Route path="/master-data/units/:id/edit" element={<UnitForm edit />} />
          <Route path="/master-data/categories" element={<CategoriesList />} />
          <Route path="/master-data/categories/new" element={<CategoryForm />} />
          <Route path="/master-data/categories/:id" element={<CategoryDetail />} />
          <Route path="/master-data/categories/:id/edit" element={<CategoryForm edit />} />
          <Route path="/settings" element={<SettingsHub />} />
          <Route path="/settings/general" element={<SettingsGeneral />} />
          <Route path="/settings/procurement" element={<SettingsProcurement />} />
          <Route path="/settings/notifications" element={<SettingsNotifications />} />
          <Route path="/audit-log" element={<Placeholder />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MasterProvider>
  )
}
