import React from 'react';
import { SECTIONS, secPct } from '../data/sections';

export function SectionNav({ activeSection, onSectionChange, checks }) {
  return (
    <div className="section-nav" style={{ marginBottom: '20px' }}>
      {SECTIONS.map(s => {
        const p = secPct(s.id, checks);
        const isActive = activeSection === s.id;
        return (
          <button
            key={s.id}
            className={`section-pill ${isActive ? 'active' : ''}`}
            onClick={() => onSectionChange(s.id)}
            style={{ '--accent-current': s.accent }}
          >
            {s.icon} {s.id.toUpperCase()}
            <div 
              className="pill-progress" 
              style={{ width: `${p}%`, backgroundColor: s.accent }}
            />
          </button>
        );
      })}
    </div>
  );
}
