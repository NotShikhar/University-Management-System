import { Route, Routes } from 'react-router-dom';

import ProgrammeDashboard from './dashboard/programme';
import CoreDashboard from './dashboard/LandingPage';
import AdmissionsDashboard from './dashboard/admissions';
import FeedbackDashboard from './dashboard/feedback';
import EHousingDashboard from './dashboard/ehousing';
import CommunicationDashboard from './dashboard/communication';
import AffiliationDashboard from './dashboard/affiliation';

export default function Core() {
  return (
    <Routes>
      <Route index element={<CoreDashboard />} />
      <Route path="programme-dashboard" element={<ProgrammeDashboard />} />
      <Route path="admissions-dashboard" element={<AdmissionsDashboard />} />
      <Route path="feedback-dashboard" element={<FeedbackDashboard />} />
      <Route path="ehousing-dashboard" element={<EHousingDashboard />} />
      <Route
        path="communication-dashboard"
        element={<CommunicationDashboard />}
      />
      <Route path="affiliation-dashboard" element={<AffiliationDashboard />} />
    </Routes>
  );
}
