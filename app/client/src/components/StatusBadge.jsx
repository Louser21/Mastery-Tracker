import React from 'react';
import { PRIORITY_COLOR, STATUS_CFG } from '../data/sections';

const STATUS_ORDER = ['available', 'in_progress', 'done', 'locked'];

export function StatusBadge({ trackId, status, onCycle }) {
  const cfg = STATUS_CFG[status] || STATUS_CFG.available;
  return (
    <span
      className="status-badge"
      style={{ color: cfg.color, borderColor: cfg.color, backgroundColor: cfg.bg }}
      onClick={(e) => { e.stopPropagation(); onCycle && onCycle(trackId); }}
      title="Click to cycle status"
    >
      {cfg.icon} {cfg.label}
    </span>
  );
}

export function PriorityTag({ priority }) {
  const color = PRIORITY_COLOR[priority] || '#555';
  return (
    <span className="priority-tag" style={{ color, borderColor: color }}>
      {priority}
    </span>
  );
}
