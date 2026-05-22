import { Route, Routes } from 'react-router-dom';
import TempPage from './TempPage';

export default function TempPages() {
  return (
    <Routes>
      <Route path=":slug" element={<TempPage />} />
    </Routes>
  );
}
