import React from 'react';
import { STATUS_CFG } from '../data/sections';

export function FloatingLegend({ visible }) {
  if (!visible) return null;
  
  return (
    <div className="floating-legend">
      <div style={{ color: 'var(--text-muted)', marginBottom: '12px', fontSize: '10px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>STATUS KEY</div>
      {Object.values(STATUS_CFG).map(s => (
        <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span style={{ color: s.color, fontWeight: 'bold' }}>{s.icon}</span>
          <span style={{ color: 'var(--text-primary)', fontSize: '12px', fontWeight: 500 }}>{s.label}</span>
        </div>
      ))}
      <div style={{ borderTop: '1px solid var(--border)', marginTop: '12px', paddingTop: '12px', color: 'var(--text-muted)', fontSize: '10px' }}>
        Click badge to cycle status
      </div>
    </div>
  );
}
