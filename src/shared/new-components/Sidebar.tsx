import React from 'react';
import './Sidebar.css';

export interface SidebarItem {
  label: string;
  icon?: string;
  slug?: string;
  path?: string;
  description?: string;
  children?: SidebarItem[];
}

export interface SidebarProps {
  headerTitle: string;
  headerSubtitle?: string;
  headerIcon?: string;
  items: SidebarItem[];
  activeIndex: number;
  onItemClick: (index: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  headerTitle,
  headerSubtitle,
  headerIcon = 'shield',
  items,
  activeIndex,
  onItemClick,
}) => {
  const getIcon = (iconName?: string) => {
    if (!iconName) return 'file';
    const map: Record<string, string> = {
      person_add: 'user-plus',
      assignment: 'file-edit',
      edit_location: 'map-marker',
      grid_view: 'th-large',
      manage_accounts: 'user',
      explore: 'map-marker',
      badge: 'id-card',
      groups: 'users',
      tune: 'sliders-v',
      work_history: 'briefcase',
      account_tree: 'sitemap',
      menu_book: 'book',
      model_education: 'book',
      category: 'tag',
      business: 'building',
      account_balance: 'building',
      diversity_3: 'users',
      person_search: 'search',
      school: 'book',
      meeting_room: 'home',
      label: 'tag',
      assignment_ind: 'id-card',
      dataset: 'table',
      signal_cellular_alt: 'chart-bar',
      calendar_month: 'calendar',
      book_online: 'book',
      public: 'globe',
      redeem: 'gift',
      how_to_reg: 'user-plus',
      auto_stories: 'book',
      fact_check: 'check-square',
      quiz: 'question-circle',
      verified: 'verified',
      feedback: 'comment',
      person_outline: 'user',
      payments: 'wallet',
      receipt_long: 'receipt',
      gavel: 'briefcase',
      forward_to_inbox: 'envelope',
      report: 'exclamation-triangle',
      home_pin: 'home',
      hotel: 'building',
      dashboard: 'th-large',
      admin_panel_settings: 'shield',
      post_add: 'plus',
      event: 'calendar',
      work: 'briefcase',
      science: 'flask',
      accessible: 'user',
      credit_card: 'id-card',
      desktop_windows: 'desktop',
      build: 'cog',
      workspace_premium: 'star-fill',
      flag: 'flag',
      layers: 'layers',
      pin_drop: 'map-marker',
      share_location: 'map-marker',
      view_module: 'th-large',
      folder_special: 'folder-open',
      receipt: 'receipt',
      card_giftcard: 'gift',
      temple_buddhist: 'building',
      home: 'home',
    };
    return map[iconName] || 'file';
  };

  const topLevel = items.slice(0, Math.ceil(items.length / 2));
  const bottomLevel = items.slice(Math.ceil(items.length / 2));

  return (
    <aside className="app-sidebar-container">
      <div className="app-sidebar-header">
        <i className={`pi pi-${getIcon(headerIcon)} app-sidebar-header-icon`} />
        <div className="app-sidebar-header-text">
          <h3>{headerTitle}</h3>
          {headerSubtitle && <p>{headerSubtitle}</p>}
        </div>
      </div>
      <nav className="app-sidebar-menu">
        {topLevel.map((item, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={item.slug || idx}
              className={`app-sidebar-item ${isActive ? 'active' : ''}`}
              onClick={() => onItemClick(idx)}
            >
              <i className={`pi pi-${getIcon(item.icon)} app-sidebar-icon`} />
              <span className="app-sidebar-label">{item.label}</span>
              {isActive && (
                <i className="pi pi-chevron-right app-sidebar-arrow" />
              )}
            </button>
          );
        })}
      </nav>
      {bottomLevel.length > 0 && (
        <>
          <div className="app-sidebar-group-label">More</div>
          <nav className="app-sidebar-menu">
            {bottomLevel.map((item, idx) => {
              const realIdx = topLevel.length + idx;
              const isActive = realIdx === activeIndex;
              return (
                <button
                  key={item.slug || idx}
                  className={`app-sidebar-item ${isActive ? 'active' : ''}`}
                  onClick={() => onItemClick(realIdx)}
                >
                  <i
                    className={`pi pi-${getIcon(item.icon)} app-sidebar-icon`}
                  />
                  <span className="app-sidebar-label">{item.label}</span>
                  {isActive && (
                    <i className="pi pi-chevron-right app-sidebar-arrow" />
                  )}
                </button>
              );
            })}
          </nav>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
