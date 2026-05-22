import { Route, Routes } from 'react-router-dom';
import EmployeeRegistration from './registration/EmployeeRegistration';
import QuickOnboarding from './registration/QuickOnboarding';
import FullOnboarding from './registration/FullOnboarding';
import EmployeeDirectory from './directory/EmployeeDirectory';
import SettingsPage from './settings/SettingsPage';

export default function EmployeeManagement() {
  return (
    <Routes>
      <Route index element={<EmployeeRegistration />} />
      <Route path="quick-onboarding" element={<QuickOnboarding />} />
      <Route path="onboarding" element={<FullOnboarding />} />
      <Route path="directory" element={<EmployeeDirectory />} />
      <Route path="settings" element={<SettingsPage />} />
    </Routes>
  );
}
