import PageNav from 'shared/new-components/PageNav';
import './Profile.css';

export default function EditProfilePage() {
  return (
    <div className="profile-page">
      <PageNav title="Edit Profile" />

      <div className="profile-edit-header">
        <h1>Edit Profile</h1>
        <p>Update your personal and academic information</p>
      </div>

      <div className="profile-edit-body">
        {/* Profile Photo */}
        <div className="profile-card">
          <h3 className="profile-card-title">Profile Photo</h3>
          <div className="profile-photo-section">
            <div className="profile-avatar-wrapper profile-edit-avatar">
              <div className="profile-avatar-blur">
                <span className="profile-avatar-initials">RS</span>
                <div className="profile-avatar-overlay" />
              </div>
            </div>
            <div className="profile-photo-actions">
              <button className="profile-btn profile-btn-outline">
                <i className="pi pi-upload" />
                Upload New Photo
              </button>
              <button className="profile-btn profile-btn-ghost">
                <i className="pi pi-trash" />
                Remove
              </button>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="profile-card">
          <h3 className="profile-card-title">Personal Information</h3>
          <div className="profile-form-grid">
            <div className="profile-form-group">
              <label>Full Name</label>
              <input
                type="text"
                defaultValue="Rahul Singh"
                className="profile-input"
              />
            </div>
            <div className="profile-form-group">
              <label>Enrollment No.</label>
              <input
                type="text"
                defaultValue="UMS-2024-CS-0042"
                className="profile-input"
                disabled
              />
            </div>
            <div className="profile-form-group">
              <label>Course</label>
              <input
                type="text"
                defaultValue="B.Tech Computer Science"
                className="profile-input"
              />
            </div>
            <div className="profile-form-group">
              <label>Department</label>
              <input
                type="text"
                defaultValue="School of Engineering"
                className="profile-input"
              />
            </div>
            <div className="profile-form-group">
              <label>Email</label>
              <input
                type="email"
                defaultValue="rahul.singh@university.edu"
                className="profile-input"
              />
            </div>
            <div className="profile-form-group">
              <label>Phone</label>
              <input
                type="tel"
                defaultValue="+1 (555) 823-4719"
                className="profile-input"
              />
            </div>
            <div className="profile-form-group">
              <label>Hostel / Location</label>
              <input
                type="text"
                defaultValue="Hostel Block C, Room 112, Main Campus"
                className="profile-input"
              />
            </div>
            <div className="profile-form-group">
              <label>Semester</label>
              <input
                type="text"
                defaultValue="4th Semester"
                className="profile-input"
              />
            </div>
            <div className="profile-form-group">
              <label>Batch</label>
              <input
                type="text"
                defaultValue="2024-2028"
                className="profile-input"
              />
            </div>
            <div className="profile-form-group">
              <label>Advisor</label>
              <input
                type="text"
                defaultValue="Dr. Priya Sharma"
                className="profile-input"
              />
            </div>
            <div className="profile-form-group">
              <label>CGPA</label>
              <input
                type="text"
                defaultValue="8.74"
                className="profile-input"
              />
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="profile-card">
          <h3 className="profile-card-title">Bio</h3>
          <textarea
            className="profile-textarea"
            rows={4}
            defaultValue="B.Tech Computer Science student passionate about software development and AI. Active member of the Coding Club and debate society."
          />
        </div>

        {/* Skills */}
        <div className="profile-card">
          <h3 className="profile-card-title">Skills</h3>
          <div className="profile-form-grid">
            <div className="profile-form-group profile-form-group-full">
              <label>Skills (comma separated)</label>
              <input
                type="text"
                defaultValue="Python, Java, Data Structures, DBMS, Machine Learning"
                className="profile-input"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="profile-edit-actions">
          <button className="profile-btn profile-btn-primary">
            <i className="pi pi-check" />
            Save Changes
          </button>
          <button className="profile-btn profile-btn-outline">Cancel</button>
        </div>
      </div>
    </div>
  );
}
