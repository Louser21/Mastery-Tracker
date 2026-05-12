import React from 'react';

export function TabBar({ tabs, activeTab, onTabChange, accent }) {
  return (
    <div className="tab-bar">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
          style={{ '--accent-current': activeTab === tab.id ? accent : 'transparent' }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
