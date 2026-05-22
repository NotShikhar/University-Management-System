import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from 'shared/components/layout/MainLayout';
import CasDashboard from './_temp-dashboards/cas/dashboard';
import Core from './_temp-dashboards/core-module';
import EmployeeManagement from './_temp-dashboards/employee-management';
import FscmDashboard from './_temp-dashboards/fscm/dashboard';
import GetInvolved from './_temp-dashboards/get-involved';
import Home from './home';
import LoginPage from './_temp-dashboards/login';
import Master from './master';
import Profile from './_temp-dashboards/profile';
import Sis from './sis';
import TempPages from './_temp-dashboards/temp-page';
import UserManagement from './_temp-dashboards/user-management';

export default function Features() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="public/*" element={<div>Public Page Placeholder</div>} />
      <Route path="home/*" element={<Home />} />
      <Route
        path="/*"
        element={
          <MainLayout>
            <Routes>
              <Route index element={<Navigate to={'/login'} />} />
              <Route path="master/*" element={<Master />} />
              <Route path="sis/*" element={<Sis />} />
              <Route path="profile/*" element={<Profile />} />
              <Route path="core/*" element={<Core />} />
              <Route path="user-management/*" element={<UserManagement />} />
              <Route
                path="employee-management/*"
                element={<EmployeeManagement />}
              />
              <Route path="get-involved/*" element={<GetInvolved />} />
              <Route path="cas-dashboard" element={<CasDashboard />} />
              <Route path="fscm-dashboard" element={<FscmDashboard />} />
              <Route path="temp/*" element={<TempPages />} />
            </Routes>
          </MainLayout>
        }
      />
    </Routes>
  );
}
