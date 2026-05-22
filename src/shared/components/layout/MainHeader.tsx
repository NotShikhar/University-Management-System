import { Avatar } from 'primereact/avatar';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainHeader.css';

export default function MainHeader() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="main-header">
      {/* Left Section */}
      <div
        className="main-header-left"
        onClick={() => navigate('/home')}
        style={{ cursor: 'pointer' }}
      >
        <div className="main-header-logo">N</div>

        <div>
          <div className="main-header-title">UMS ERP</div>

          <div className="main-header-subtitle">Workspace OS</div>
        </div>
      </div>

      {/* Search */}
      <div className="main-header-search-wrapper">
        <div className="main-header-search-box">
          <i className="pi pi-search main-header-search-icon" />

          <InputText
            placeholder="Search Services, records, people..."
            className="main-header-search-input"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="main-header-right">
        <div className="main-header-actions">
          <i className="pi pi-question-circle main-header-action-icon" />

          <div className="main-header-notification">
            <i className="pi pi-bell main-header-action-icon" />

            <span className="main-header-badge">1</span>
          </div>

          <i className="pi pi-th-large main-header-action-icon" />

          <i
            className="pi pi-sign-out main-header-action-icon"
            onClick={() => navigate('/login')}
            title="Logout"
          />
        </div>

        {/* User */}
        <div
          className="main-header-user"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <Avatar
            label="RS"
            shape="circle"
            className="main-header-user-avatar"
          />

          <span className="main-header-user-name">Rahul Singh</span>

          <i className="pi pi-chevron-down main-header-user-arrow" />

          {dropdownOpen && (
            <div
              className="main-header-dropdown"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => {
                  setDropdownOpen(false);
                  navigate('/profile');
                }}
              >
                <i className="pi pi-user" />
                View Profile
              </button>
              <button
                onClick={() => {
                  setDropdownOpen(false);
                  navigate('/profile/edit');
                }}
              >
                <i className="pi pi-pencil" />
                Edit Profile
              </button>
              <div className="main-header-dropdown-divider" />
              <button
                onClick={() => {
                  setDropdownOpen(false);
                  navigate('/login');
                }}
              >
                <i className="pi pi-sign-out" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {dropdownOpen && (
        <div
          className="main-header-overlay"
          onClick={() => setDropdownOpen(false)}
        />
      )}
    </div>
  );
}
