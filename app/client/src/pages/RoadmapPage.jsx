import React, { useState, useEffect } from 'react';
import { SECTIONS, PRIORITY_COLOR } from '../data/sections';
import { ProgressBar } from '../components/ProgressBar';
import { StatusBadge, PriorityTag } from '../components/StatusBadge';
import { SubtopicList } from '../components/SubtopicList';
import { RevisionList } from '../components/RevisionList';

export default function RoadmapPage({ activeSection, state, setState }) {
  const section = SECTIONS.find(s => s.id === activeSection) || SECTIONS[0];
  const { checks, revChecks, statuses, notes = {} } = state;
  
  const [activeTrackId, setActiveTrackId] = useState(section.tracks[0]?.id);

  // Reset active track when section changes
  useEffect(() => {
    setActiveTrackId(section.tracks[0]?.id);
  }, [section.id]);

  const activeTrack = section.tracks.find(t => t.id === activeTrackId) || section.tracks[0];

  const onStatusCycle = (trackId) => {
    const orders = ['available', 'in_progress', 'done', 'locked'];
    const current = statuses[trackId] || 'available';
    const next = orders[(orders.indexOf(current) + 1) % orders.length];
    setState(prev => ({
      ...prev,
      statuses: { ...prev.statuses, [trackId]: next }
    }));
  };

  const onCheckToggle = (id) => {
    setState(prev => {
      const isChecking = !prev.checks[id];
      const newCompletionDates = { ...(prev.completionDates || {}) };
      if (isChecking) {
        const d = new Date();
        d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
        newCompletionDates[id] = d.toISOString().split('T')[0];
      } else {
        delete newCompletionDates[id];
      }
      return {
        ...prev,
        checks: { ...prev.checks, [id]: isChecking },
        completionDates: newCompletionDates
      };
    });
  };

  const onRevToggle = (id) => {
    setState(prev => {
      const isChecking = !prev.revChecks[id];
      const revId = `rev-${id}`;
      const newCompletionDates = { ...(prev.completionDates || {}) };
      if (isChecking) {
        const d = new Date();
        d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
        newCompletionDates[revId] = d.toISOString().split('T')[0];
      } else {
        delete newCompletionDates[revId];
      }
      return {
        ...prev,
        revChecks: { ...prev.revChecks, [id]: isChecking },
        completionDates: newCompletionDates
      };
    });
  };

  const onNotesChange = (e) => {
    const val = e.target.value;
    setState(prev => ({
      ...prev,
      notes: { ...(prev.notes || {}), [activeTrackId]: val }
    }));
  };

  // Calculate section progress
  const totalSub = section.tracks.reduce((acc, t) => acc + t.sub.length, 0);
  const doneSub = section.tracks.reduce((acc, t) => 
    acc + t.sub.filter((_, i) => checks[`${t.id}-${i}`]).length, 0
  );
  const progress = totalSub ? Math.round((doneSub / totalSub) * 100) : 0;

  return (
    <div className="fade-in">
      <div className="section-hero" style={{ borderColor: `${section.accent}30`, background: `${section.accent}08` }}>
        <div className="hero-icon">{section.icon}</div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="header-label" style={{ color: section.accent }}>{section.id.toUpperCase()} MASTERY</div>
          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '8px' }}>
            {section.title}
          </h2>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '16px' }}>
            {section.level}
          </p>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span className="mono-label-sm">Overall Progress</span>
                <span className="mono-label-sm" style={{ color: section.accent }}>{progress}%</span>
              </div>
              <ProgressBar progress={progress} accent={section.accent} />
            </div>
            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '8px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }}>
              <div className="mono-label-sm" style={{ fontSize: '7px' }}>ESTIMATED TIME</div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)' }}>
                {section.tracks.reduce((acc, t) => acc + parseInt(t.est) || 0, 0)} Weeks
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="roadmap-split-layout">
        <div className="roadmap-side-render">
          {section.tracks.map((track, i) => {
            const isActive = activeTrackId === track.id;
            const isLocked = statuses[track.id] === 'locked';
            const priorityColor = PRIORITY_COLOR[track.priority] || 'var(--border)';
            
            return (
              <button 
                key={track.id}
                className={`track-btn ${isActive ? 'active' : ''} ${isLocked ? 'locked' : ''}`}
                onClick={() => setActiveTrackId(track.id)}
                style={isActive ? { borderLeft: `3px solid ${section.accent}` } : { borderLeft: `3px solid transparent` }}
              >
                <div className="track-btn-top">
                  <span className="track-btn-title">{track.title}</span>
                  <StatusBadge trackId={track.id} status={statuses[track.id]} onCycle={onStatusCycle} />
                </div>
                <div className="track-btn-sub">
                  Est: {track.est} • <span style={{ color: priorityColor, fontWeight: 'bold' }}>{track.priority}</span>
                </div>
              </button>
            );
          })}
        </div>
        
        <div className="roadmap-main-render fade-in" key={activeTrackId}>
          {activeTrack && (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div>
                  <PriorityTag priority={activeTrack.priority} />
                  <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-primary)', marginTop: '8px' }}>
                    {activeTrack.title}
                  </h3>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{activeTrack.pw}</p>
                </div>
                <StatusBadge trackId={activeTrack.id} status={statuses[activeTrack.id]} onCycle={onStatusCycle} />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <SubtopicList 
                  track={activeTrack} 
                  checks={checks} 
                  onToggle={onCheckToggle} 
                  accent={section.accent} 
                />
              </div>

              {activeTrack.res && activeTrack.res.length > 0 && (
                <div style={{ marginBottom: '24px', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                  <div className="mono-label-sm" style={{ marginBottom: '12px' }}>Resources</div>
                  {activeTrack.res.map((r, i) => (
                    <div key={i} className="resource-link" style={{ borderLeftColor: section.accent }}>
                      {r}
                    </div>
                  ))}
                </div>
              )}

              <div style={{ marginBottom: '24px' }}>
                <RevisionList 
                  track={activeTrack} 
                  revChecks={revChecks} 
                  onToggle={onRevToggle} 
                  accent={section.accent} 
                />
              </div>

              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                <div className="mono-label-sm" style={{ marginBottom: '8px', color: section.accent }}>
                  {activeTrack.title.toUpperCase()} NOTES
                </div>
                <textarea
                  className="input"
                  placeholder={`Add your notes, insights, and shortcuts for ${activeTrack.title}...`}
                  value={notes[activeTrack.id] || ''}
                  onChange={onNotesChange}
                  style={{ minHeight: '180px' }}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
