import React from 'react';

export function CheckItem({ id, label, checked, onToggle, accent }) {
  return (
    <div className="check-item" onClick={() => onToggle(id)}>
      <div className={`checkbox ${checked ? 'checked' : ''}`}
        style={checked ? { borderColor: accent || 'var(--status-done)', backgroundColor: `${accent}18` || 'rgba(0,230,118,0.1)' } : {}}
      >
        {checked && <span className="check-icon" style={{ color: accent || 'var(--status-done)' }}>✓</span>}
      </div>
      <span className={`check-label ${checked ? 'checked' : ''}`}>{label}</span>
    </div>
  );
}
