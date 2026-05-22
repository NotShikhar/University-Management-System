import PageNav from 'shared/new-components/PageNav';
import './Profile.css';

const mockProfile = {
  name: 'Rahul Singh',
  course: 'B.Tech Computer Science',
  department: 'School of Engineering',
  enrollmentNo: 'UMS-2024-CS-0042',
  email: 'rahul.singh@university.edu',
  phone: '+1 (555) 823-4719',
  location: 'Hostel Block C, Room 112, Main Campus',
  semester: '4th Semester',
  batch: '2024-2028',
  advisor: 'Dr. Priya Sharma',
  cgpa: '8.74',
  standing: 'Good',
  skills: ['Python', 'Java', 'Data Structures', 'DBMS', 'Machine Learning'],
  education: [
    {
      degree: 'Senior Secondary (XII)',
      institution: 'Delhi Public School',
      year: '2023',
    },
    {
      degree: 'Secondary (X)',
      institution: 'Delhi Public School',
      year: '2021',
    },
  ],
  recentActivity: [
    {
      action: 'Submitted DBMS Project - Library Management System',
      date: '3 hours ago',
    },
    { action: 'Attended Guest Lecture on AI Ethics', date: 'Yesterday' },
    { action: 'Scored 92% in Mid-Term Exams', date: '1 week ago' },
    { action: 'Registered for Hackathon 2026', date: '2 weeks ago' },
  ],
};

export default function ProfilePage() {
  return (
    <div className="profile-page">
      <PageNav title="Profile" />

      {/* Cover + Avatar */}
      <div className="profile-cover">
        <div className="profile-cover-bg" />
        <div className="profile-avatar-section">
          <div className="profile-avatar-wrapper">
            <div className="profile-avatar-blur">
              <span className="profile-avatar-initials">RS</span>
              <div className="profile-avatar-overlay" />
            </div>
          </div>
          <div className="profile-name-section">
            <h1 className="profile-name">{mockProfile.name}</h1>
            <p className="profile-role">{mockProfile.course}</p>
            <p className="profile-dept">{mockProfile.department}</p>
          </div>
        </div>
      </div>

      <div className="profile-body">
        {/* Left Column */}
        <div className="profile-left">
          {/* Contact Card */}
          <div className="profile-card">
            <h3 className="profile-card-title">Contact</h3>
            <div className="profile-info-list">
              <div className="profile-info-item">
                <i className="pi pi-envelope" />
                <span>{mockProfile.email}</span>
              </div>
              <div className="profile-info-item">
                <i className="pi pi-phone" />
                <span>{mockProfile.phone}</span>
              </div>
              <div className="profile-info-item">
                <i className="pi pi-map-marker" />
                <span>{mockProfile.location}</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="profile-card">
            <h3 className="profile-card-title">Skills</h3>
            <div className="profile-skills">
              {mockProfile.skills.map(skill => (
                <span key={skill} className="profile-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="profile-card">
            <h3 className="profile-card-title">Education</h3>
            {mockProfile.education.map((edu, i) => (
              <div key={i} className="profile-edu-item">
                <div className="profile-edu-dot" />
                <div>
                  <p className="profile-edu-degree">{edu.degree}</p>
                  <p className="profile-edu-inst">
                    {edu.institution} · {edu.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="profile-right">
          {/* Academic Details */}
          <div className="profile-card">
            <h3 className="profile-card-title">Academic Details</h3>
            <div className="profile-detail-grid">
              <div className="profile-detail-item">
                <span className="profile-detail-label">Enrollment No.</span>
                <span className="profile-detail-value">
                  {mockProfile.enrollmentNo}
                </span>
              </div>
              <div className="profile-detail-item">
                <span className="profile-detail-label">Department</span>
                <span className="profile-detail-value">
                  {mockProfile.department}
                </span>
              </div>
              <div className="profile-detail-item">
                <span className="profile-detail-label">Semester</span>
                <span className="profile-detail-value">
                  {mockProfile.semester}
                </span>
              </div>
              <div className="profile-detail-item">
                <span className="profile-detail-label">Batch</span>
                <span className="profile-detail-value">
                  {mockProfile.batch}
                </span>
              </div>
              <div className="profile-detail-item">
                <span className="profile-detail-label">Advisor</span>
                <span className="profile-detail-value">
                  {mockProfile.advisor}
                </span>
              </div>
              <div className="profile-detail-item">
                <span className="profile-detail-label">CGPA</span>
                <span className="profile-detail-value">{mockProfile.cgpa}</span>
              </div>
              <div className="profile-detail-item">
                <span className="profile-detail-label">Standing</span>
                <span className="profile-detail-value">
                  {mockProfile.standing}
                </span>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="profile-card">
            <h3 className="profile-card-title">Recent Activity</h3>
            <div className="profile-activity-list">
              {mockProfile.recentActivity.map((act, i) => (
                <div key={i} className="profile-activity-item">
                  <div className="profile-activity-dot" />
                  <div className="profile-activity-content">
                    <p className="profile-activity-action">{act.action}</p>
                    <span className="profile-activity-date">{act.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
