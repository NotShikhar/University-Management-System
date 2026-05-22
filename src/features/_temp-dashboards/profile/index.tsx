import { Route, Routes } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import EditProfilePage from './EditProfilePage';

export default function Profile() {
  return (
    <Routes>
      <Route index element={<ProfilePage />} />
      <Route path="edit" element={<EditProfilePage />} />
    </Routes>
  );
}
