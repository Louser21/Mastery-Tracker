import React from 'react';
import { SECTIONS, secPct } from '../data/sections';
import { ProgressBar } from '../components/ProgressBar';

export default function Home({ state, setState, setActiveTab }) {
  const { checks } = state;

  return (
    <div className="fade-in">
      <div className="section-hero" style={{ borderColor: 'var(--border-light)', background: 'var(--bg-card)' }}>
        <div className="header-label">MASTERY TRACKER</div>
        <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '8px' }}>
          Mission Dashboard
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', maxWidth: '600px' }}>
          Welcome back. Stay disciplined and focus on consistent execution. 
          Use the daily and weekly trackers to build momentum.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
        {SECTIONS.map(sec => {
          const progress = secPct(sec.id, checks);
          return (
            <div 
              key={sec.id} 
              className="card" 
              style={{ cursor: 'pointer', borderTop: `2px solid ${sec.accent}` }}
              onClick={() => setActiveTab('roadmap')}
            >
              <div className="card-header">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '18px' }}>{sec.icon}</span>
                    <span className="mono-label" style={{ color: sec.accent }}>{sec.id}</span>
                  </div>
                  <span className="mono-label">{progress}%</span>
                </div>
                <h3 style={{ fontSize: '15px', color: 'var(--text-primary)', marginBottom: '12px' }}>{sec.title}</h3>
                <ProgressBar progress={progress} accent={sec.accent} small />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
