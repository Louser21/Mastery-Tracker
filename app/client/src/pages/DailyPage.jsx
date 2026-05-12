import React from 'react';
import { CheckItem } from '../components/CheckItem';

export default function DailyPage({ state, setState }) {
  const { dailyTasks, dailyMetrics } = state;

  const toggleTask = (id) => {
    setState(prev => ({
      ...prev,
      dailyTasks: prev.dailyTasks.map(t => t.id === id ? { ...t, done: !t.done } : t)
    }));
  };

  const updateMetric = (key, val) => {
    setState(prev => ({
      ...prev,
      dailyMetrics: { ...prev.dailyMetrics, [key]: val }
    }));
  };

  return (
    <div className="fade-in page-narrow" style={{ margin: '0 auto' }}>
      <div className="section-hero" style={{ borderColor: 'var(--accent-current)30', background: 'var(--accent-current)08' }}>
        <div className="header-label">DAILY GRIND</div>
        <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)' }}>Execution Core</h2>
      </div>

      <div className="card" style={{ marginBottom: '20px' }}>
        <div className="card-header">
          <span className="mono-label">Primary Tasks</span>
        </div>
        <div className="card-body">
          {dailyTasks.map(task => (
            <CheckItem
              key={task.id}
              id={task.id}
              label={task.text}
              checked={task.done}
              onToggle={toggleTask}
              accent="var(--accent-current)"
            />
          ))}
        </div>
      </div>

      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-label">LC Solved</div>
          <input 
            type="number" 
            className="metric-input" 
            value={dailyMetrics.lc || ''} 
            onChange={e => updateMetric('lc', e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="metric-card">
          <div className="metric-label">CF Problems</div>
          <input 
            type="number" 
            className="metric-input" 
            value={dailyMetrics.cf || ''} 
            onChange={e => updateMetric('cf', e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="metric-card">
          <div className="metric-label">Study Hours</div>
          <input 
            type="number" 
            className="metric-input" 
            value={dailyMetrics.hours || ''} 
            onChange={e => updateMetric('hours', e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="metric-card">
          <div className="metric-label">Contest Rank</div>
          <input 
            type="text" 
            className="metric-input" 
            value={dailyMetrics.contest || ''} 
            onChange={e => updateMetric('contest', e.target.value)}
            placeholder="—"
          />
        </div>
      </div>
    </div>
  );
}
