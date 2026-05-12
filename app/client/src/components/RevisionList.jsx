import React, { useState } from 'react';
import { CheckItem } from './CheckItem';

const REV_TAG_COLOR = {
  'WEEKLY': { color: '#42a5f5', border: '#42a5f5' },
  'BIWEEKLY': { color: '#ab47bc', border: '#ab47bc' },
  'MONTHLY': { color: '#ef5350', border: '#ef5350' },
  'REVISION': { color: '#ffa726', border: '#ffa726' },
};

function getRevTag(item) {
  if (item.includes('WEEKLY') && item.includes('BI')) return 'BIWEEKLY';
  if (item.includes('WEEKLY')) return 'WEEKLY';
  if (item.includes('MONTHLY')) return 'MONTHLY';
  if (item.includes('REVISION')) return 'REVISION';
  return null;
}

export function RevisionList({ track, revChecks, onToggle, accent }) {
  const [expanded, setExpanded] = useState(false);
  if (!track.rev || track.rev.length === 0) return null;

  const done = track.rev.filter((_, i) => revChecks[`rev-${track.id}-${i}`]).length;
  const total = track.rev.length;

  return (
    <div className="revision-section" style={{ borderColor: `${accent}30`, backgroundColor: `${accent}06` }}>
      <div
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
        onClick={() => setExpanded(v => !v)}
      >
        <span className="mono-label-sm" style={{ color: accent }}>🔁 Revision Drills ({done}/{total})</span>
        <span style={{ color: 'var(--text-dim)', fontSize: '10px' }}>{expanded ? '▲' : '▼'}</span>
      </div>

      {expanded && (
        <div className="fade-in" style={{ marginTop: '12px' }}>
          {track.rev.map((item, i) => {
            const tag = getRevTag(item);
            const tagStyle = tag ? REV_TAG_COLOR[tag] : null;
            const cleanLabel = item.replace(/^🔁\s*(WEEKLY:|BIWEEKLY:|MONTHLY:|REVISION:)\s*/i, '');
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                {tag && (
                  <span className="rev-tag" style={{ color: tagStyle.color, borderColor: tagStyle.border }}>
                    {tag}
                  </span>
                )}
                <CheckItem
                  id={`rev-${track.id}-${i}`}
                  label={cleanLabel}
                  checked={!!revChecks[`rev-${track.id}-${i}`]}
                  onToggle={onToggle}
                  accent={accent}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
