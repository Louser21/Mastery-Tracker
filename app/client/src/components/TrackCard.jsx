import React, { useState } from 'react';
import { StatusBadge, PriorityTag } from './StatusBadge';
import { SubtopicList } from './SubtopicList';
import { RevisionList } from './RevisionList';
import { PRIORITY_COLOR } from '../data/sections';

export function TrackCard({ track, checks, revChecks, status, onStatusCycle, onCheckToggle, onRevToggle, accent, index }) {
  const isLocked = status === 'locked';
  const priorityColor = PRIORITY_COLOR[track.priority] || 'var(--border)';
  // If locked, default to collapsed. Otherwise, default to collapsed to save space.
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`card ${isLocked ? 'card--locked' : ''}`} style={{ borderTopColor: priorityColor }}>
      <div className="card-priority-bar" style={{ backgroundColor: priorityColor }} />
      <div className="card-number">{String(index + 1).padStart(2, '0')}</div>
      
      <div className="card-header" style={{ cursor: 'pointer' }} onClick={() => setIsExpanded(!isExpanded)}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
          <PriorityTag priority={track.priority} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '10px', color: 'var(--text-dim)', fontWeight: 'bold' }}>{isExpanded ? '▲' : '▼'}</span>
            <StatusBadge trackId={track.id} status={status} onCycle={onStatusCycle} />
          </div>
        </div>
        
        <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px' }}>
          {track.title}
        </h3>
        <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: isExpanded ? '12px' : '0' }}>
          Est: {track.est} • {track.pw}
        </p>
      </div>

      {isExpanded && (
        <div className="card-body fade-in">
          <SubtopicList 
            track={track} 
            checks={checks} 
            onToggle={onCheckToggle} 
            accent={accent} 
          />
          
          {track.res && track.res.length > 0 && (
            <div style={{ marginTop: '16px', borderTop: '1px solid var(--border)', paddingTop: '12px' }}>
              <div className="mono-label-sm" style={{ marginBottom: '8px' }}>Resources</div>
              {track.res.map((r, i) => (
                <div key={i} className="resource-link" style={{ borderLeftColor: accent }}>
                  {r}
                </div>
              ))}
            </div>
          )}

          <RevisionList 
            track={track} 
            revChecks={revChecks} 
            onToggle={onRevToggle} 
            accent={accent} 
          />
        </div>
      )}
    </div>
  );
}
