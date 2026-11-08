import { Routes, Route, Navigate } from 'react-router-dom';
import { isAuthed } from './auth.js';
import AppLayout from './components/AppLayout.jsx';
import Placeholder from './components/Placeholder.jsx';
import { FullScreenLoader } from './components/Spinner.jsx';
import { PASSWORD_CHANGE_PATH, useCurrentUser } from './hooks/use-auth.js';
import Login from './pages/Login.jsx';
import UserLogin from './pages/UserLogin.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import ResetPassword from './pages/ResetPassword.jsx';
import FirstLoginPassword from './pages/FirstLoginPassword.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Users from './pages/Users.jsx';
import UserDetail from './pages/UserDetail.jsx';
import AddUser from './pages/AddUser.jsx';
import Roles from './pages/Roles.jsx';
import Vendors from './pages/Vendors.jsx';
import VendorDetail from './pages/VendorDetail.jsx';
import VendorForm from './pages/VendorForm.jsx';
import { MasterProvider } from './masterStore.jsx';
import MasterHub from './pages/master/MasterHub.jsx';
import { DepartmentsList, ItemsList, UnitsList, CategoriesList } from './pages/master/MasterList.jsx';
import { DepartmentDetail, ItemDetail, UnitDetail, CategoryDetail } from './pages/master/MasterDetail.jsx';
import { DepartmentForm, ItemForm, UnitForm, CategoryForm } from './pages/master/MasterForm.jsx';
import { SettingsHub, SettingsGeneral, SettingsProcurement, SettingsNotifications } from './pages/SettingsPages.jsx';

function RequireAuth({ children }) {
  const { user, isLoading } = useCurrentUser();
  if (!isAuthed()) return <Navigate to="/login" replace />;
  if (isLoading) return <FullScreenLoader />;
  if (user?.must_change_password) return <Navigate to={PASSWORD_CHANGE_PATH} replace />;
  return children;
}

export default function App() {
  return (
    <MasterProvider>
    <Routes>
      {/* Authentication screens (no sidebar) */}
      <Route path="/login" element={<Login />} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path={PASSWORD_CHANGE_PATH} element={<FirstLoginPassword />} />

      {/* Footer pages: no design provided */}
      <Route path="/support" element={<Placeholder standalone />} />
      <Route path="/privacy" element={<Placeholder standalone />} />
      <Route path="/cyber-compliance" element={<Placeholder standalone />} />

      {/* Admin system */}
      <Route element={<RequireAuth><AppLayout /></RequireAuth>}>
        <Route path="/" element={<Dashboard />} />
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

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
    </MasterProvider>
  );
}
