import { Route, Routes } from 'react-router-dom';
import ViewEvents from './ViewEvents';
import AddEvent from './AddEvent';

export default function GetInvolved() {
  return (
    <Routes>
      <Route index element={<ViewEvents />} />
      <Route path="view-events" element={<ViewEvents />} />
      <Route path="add-event" element={<AddEvent />} />
    </Routes>
  );
}
