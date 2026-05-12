import React from 'react';

export default function NotesPage({ state, setState }) {
  const { notes } = state;

  const updateNote = (key, val) => {
    setState(prev => ({
      ...prev,
      notes: { ...prev.notes, [key]: val }
    }));
  };

  const sections = [
    { key: 'mistakes', title: 'Critical Mistakes Log', accent: 'var(--priority-critical)' },
    { key: 'dsa', title: 'DSA Insights', accent: 'var(--accent-dsa)' },
    { key: 'cp', title: 'Competitive Strategy', accent: 'var(--accent-cp)' },
    { key: 'webdev', title: 'System Arch / Web Dev', accent: 'var(--accent-web)' },
    { key: 'placement', title: 'Interview Prep', accent: 'var(--accent-placement)' },
    { key: 'general', title: 'General Roadmap Notes', accent: 'var(--text-muted)' },
  ];

  return (
    <div className="fade-in">
      <div className="section-hero" style={{ borderColor: 'var(--accent-current)30', background: 'var(--accent-current)08' }}>
        <div className="header-label">KNOWLEDGE BASE</div>
        <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)' }}>Personal Playbook</h2>
      </div>

      <div className="notes-grid">
        {sections.map(s => (
          <div key={s.key} className="card">
            <div className="card-header" style={{ borderBottom: `2px solid ${s.accent}` }}>
              <span className="mono-label" style={{ color: s.accent }}>{s.title}</span>
            </div>
            <div className="card-body" style={{ padding: '0' }}>
              <textarea
                style={{ 
                  height: '140px', 
                  border: 'none', 
                  background: 'transparent', 
                  padding: '16px',
                  fontFamily: s.key === 'mistakes' ? 'JetBrains Mono, monospace' : 'inherit'
                }}
                placeholder={`Enter your ${s.title.toLowerCase()} here...`}
                value={notes[s.key] || ''}
                onChange={e => updateNote(s.key, e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
