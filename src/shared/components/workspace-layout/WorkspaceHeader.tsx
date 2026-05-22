import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WaffleMenu } from 'shared/new-components';
import './WorkspaceHeader.css';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);

      /* ui changes update starts - 11/05/2026 */
      document.body.classList.add('dark');
      /* ui changes update ends - 11/05/2026 */
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newMode = !prev;

      if (newMode) {
        /* ui changes update starts - 11/05/2026 */
        document.body.classList.add('dark');
        /* ui changes update ends - 11/05/2026 */

        localStorage.setItem('theme', 'dark');
      } else {
        /* ui changes update starts - 11/05/2026 */
        document.body.classList.remove('dark');
        /* ui changes update ends - 11/05/2026 */

        localStorage.setItem('theme', 'light');
      }

      return newMode;
    });
  };

  return (
    <header className="ws-header">
      <div className="ws-header-inner">
        {/* Logo */}
        <div
          className="ws-logo-section"
          onClick={() => navigate('/home')}
          style={{ cursor: 'pointer' }}
        >
          <div className="ws-logo-box">N</div>

          <div className="ws-logo-text">
            <span className="ws-logo-title">UMS ERP</span>

            <span className="ws-logo-subtitle">Workspace OS</span>
          </div>
        </div>

        {/* Search */}
        <div className="ws-search-section">
          <div className="ws-search-container">
            <i className="pi pi-search ws-search-icon" />

            <input
              type="text"
              className="ws-search-input"
              placeholder="Search Services, records, people..."
            />
          </div>
        </div>

        {/* Actions */}
        <div className="ws-header-actions">
          <div className="ws-action-icons">
            {/* Dark Mode Toggle */}
            <div
              className="ws-icon-btn"
              onClick={toggleDarkMode}
              title="Toggle Dark Mode"
            >
              <i className={`pi ${isDarkMode ? 'pi-sun' : 'pi-moon'}`} />
            </div>

            {/* Help */}
            <div className="ws-icon-btn">
              <i className="pi pi-question-circle" />
            </div>

            {/* Notification */}
            <div className="ws-notif-btn">
              <i className="pi pi-bell" />

              <span className="ws-badge">1</span>
            </div>

            <WaffleMenu isDarkMode={isDarkMode} />
          </div>

          {/* User Profile */}
          <div
            className="ws-user-profile"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            style={{ position: 'relative', cursor: 'pointer' }}
          >
            <div className="ws-avatar">RS</div>

            <span className="ws-username">Rahul Singh</span>

            <i className="pi pi-chevron-down" />

            {dropdownOpen && (
              <div
                className="ws-header-dropdown"
                onClick={e => e.stopPropagation()}
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 8px)',
                  right: 0,
                  background: '#fff',
                  border: '1px solid #f0f0f0',
                  borderRadius: '12px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                  padding: '6px',
                  minWidth: '180px',
                  zIndex: 100,
                }}
              >
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    navigate('/profile');
                  }}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 14px',
                    border: 'none',
                    background: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#374151',
                    textAlign: 'left',
                  }}
                  onMouseEnter={e =>
                    (e.currentTarget.style.background = '#f5f5f5')
                  }
                  onMouseLeave={e =>
                    (e.currentTarget.style.background = 'none')
                  }
                >
                  <i
                    className="pi pi-user"
                    style={{ fontSize: '14px', color: '#9ca3af' }}
                  />
                  View Profile
                </button>
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    navigate('/profile/edit');
                  }}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 14px',
                    border: 'none',
                    background: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#374151',
                    textAlign: 'left',
                  }}
                  onMouseEnter={e =>
                    (e.currentTarget.style.background = '#f5f5f5')
                  }
                  onMouseLeave={e =>
                    (e.currentTarget.style.background = 'none')
                  }
                >
                  <i
                    className="pi pi-pencil"
                    style={{ fontSize: '14px', color: '#9ca3af' }}
                  />
                  Edit Profile
                </button>
                <div
                  style={{
                    height: '1px',
                    background: '#f0f0f0',
                    margin: '4px 6px',
                  }}
                />
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    navigate('/login');
                  }}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 14px',
                    border: 'none',
                    background: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#ef4444',
                    textAlign: 'left',
                  }}
                  onMouseEnter={e =>
                    (e.currentTarget.style.background = '#fef2f2')
                  }
                  onMouseLeave={e =>
                    (e.currentTarget.style.background = 'none')
                  }
                >
                  <i
                    className="pi pi-sign-out"
                    style={{ fontSize: '14px', color: '#ef4444' }}
                  />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {dropdownOpen && (
        <div
          onClick={() => setDropdownOpen(false)}
          style={{ position: 'fixed', inset: 0, zIndex: 99 }}
        />
      )}
    </header>
  );
};

export default Header;
