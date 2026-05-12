import React, { useState } from 'react';
import { CheckItem } from './CheckItem';
import { pct } from '../data/sections';

export function SubtopicList({ track, checks, onToggle, accent }) {
  const [expanded, setExpanded] = useState(false);
  const done = track.sub.filter((_, i) => checks[`${track.id}-${i}`]).length;
  const total = track.sub.length;
  const progress = total ? Math.round((done / total) * 100) : 0;

  return (
    <div>
      <div
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', cursor: 'pointer' }}
        onClick={() => setExpanded(v => !v)}
      >
        <span className="mono-label-sm">Topics ({done}/{total} · {progress}%)</span>
        <span style={{ color: 'var(--text-dim)', fontSize: '10px' }}>{expanded ? '▲ collapse' : '▼ expand'}</span>
      </div>

      {/* Inline progress bar */}
      <div className="progress-track" style={{ marginBottom: expanded ? '12px' : '0' }}>
        <div
          className="progress-fill"
          style={{ width: `${progress}%`, backgroundColor: accent }}
        />
      </div>

      {expanded && (
        <div className="fade-in">
          {track.sub.map((item, i) => (
            <CheckItem
              key={i}
              id={`${track.id}-${i}`}
              label={item}
              checked={!!checks[`${track.id}-${i}`]}
              onToggle={onToggle}
              accent={accent}
            />
          ))}
        </div>
      )}
    </div>
  );
}
