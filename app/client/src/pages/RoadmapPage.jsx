import React from 'react';
import { SECTIONS } from '../data/sections';
import { TrackCard } from '../components/TrackCard';
import { ProgressBar } from '../components/ProgressBar';

export default function RoadmapPage({ activeSection, state, setState }) {
  const section = SECTIONS.find(s => s.id === activeSection) || SECTIONS[0];
  const { checks, revChecks, statuses } = state;

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
    setState(prev => ({
      ...prev,
      checks: { ...prev.checks, [id]: !prev.checks[id] }
    }));
  };

  const onRevToggle = (id) => {
    setState(prev => ({
      ...prev,
      revChecks: { ...prev.revChecks, [id]: !prev.revChecks[id] }
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
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ flex: 1 }}>
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

      <div className="track-grid">
        {section.tracks.map((track, i) => (
          <TrackCard
            key={track.id}
            index={i}
            track={track}
            checks={checks}
            revChecks={revChecks}
            status={statuses[track.id]}
            onStatusCycle={onStatusCycle}
            onCheckToggle={onCheckToggle}
            onRevToggle={onRevToggle}
            accent={section.accent}
          />
        ))}
      </div>
    </div>
  );
}
