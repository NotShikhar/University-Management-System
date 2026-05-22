import { Route, Routes } from 'react-router-dom';
import UserDashboard from './dashboard';

export default function UserManagement() {
  return (
    <Routes>
      <Route index element={<UserDashboard />} />
    </Routes>
  );
}
