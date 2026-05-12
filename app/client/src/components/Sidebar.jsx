import React from 'react';

const NAV_GROUPS = [
  {
    label: "Overview",
    items: [
      { id: "home", label: "Dashboard", icon: "🏠" }
    ]
  },
  {
    label: "Mastery Tracks",
    items: [
      { id: "dsa", label: "DSA", icon: "🧠" },
      { id: "cp", label: "Competitive", icon: "⚡" },
      { id: "webdev", label: "Web Dev", icon: "🌐" },
      { id: "placement", label: "Placement", icon: "💼" },
    ]
  },
  {
    label: "Execution",
    items: [
      { id: "daily", label: "Daily Tasks", icon: "📝" },
      { id: "weekly", label: "Weekly Goals", icon: "🎯" },
      { id: "monthly", label: "Monthly Targets", icon: "🔭" },
    ]
  },
  {
    label: "Logs",
    items: [
      { id: "grades", label: "Performance Audit", icon: "📊" },
      { id: "notes", label: "Knowledge Base", icon: "📓" },
    ]
  }
];

export function Sidebar({ activeTab, onTabChange, accentMap }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-icon">⚔️</div>
        <div className="brand-text">MASTERY</div>
      </div>
      
      <nav className="sidebar-nav" style={{ overflowY: 'auto' }}>
        {NAV_GROUPS.map((group, i) => (
          <div key={i} style={{ marginBottom: '24px' }}>
            <div className="mono-label-sm" style={{ padding: '0 16px', marginBottom: '8px' }}>
              {group.label}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {group.items.map(tab => {
                const isActive = activeTab === tab.id;
                const tabAccent = accentMap[tab.id] || '#3b82f6';
                return (
                  <button
                    key={tab.id}
                    className={`sidebar-btn ${isActive ? 'active' : ''}`}
                    onClick={() => onTabChange(tab.id)}
                    style={isActive ? { backgroundColor: `${tabAccent}15`, color: tabAccent, borderColor: tabAccent } : {}}
                  >
                    <span className="sidebar-icon">{tab.icon}</span>
                    <span className="sidebar-label">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
