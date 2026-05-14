import React from 'react';

export function Header({ title, accent, saveStatus }) {
  const statusColor = saveStatus === 'saving' ? 'var(--status-progress)' : 
                      saveStatus === 'unsaved' ? 'var(--priority-high)' :
                      saveStatus === 'error' ? 'var(--priority-critical)' : 'var(--status-done)';

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-top">
          <div>
            <div className="header-label">INTERNSHIP & PLACEMENT ROADMAP 2025–26</div>
            <div className="header-title" style={{ '--accent-current': accent }}>
              MASTERY <span>TRACKER</span>
            </div>
          </div>
          
          <div className={`save-indicator ${saveStatus}`}>
            <span className={`save-dot ${saveStatus}`} style={{ backgroundColor: statusColor }}></span>
            {saveStatus === 'saving' ? 'Saving...' : 
             saveStatus === 'error' ? 'Save Error' : 
             saveStatus === 'unsaved' ? 'Unsaved (Ctrl+S)' : 'Changes Saved'}
          </div>
        </div>
      </div>
    </header>
  );
}
