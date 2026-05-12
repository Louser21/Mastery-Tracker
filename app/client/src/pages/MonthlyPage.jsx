import React from 'react';
import { CheckItem } from '../components/CheckItem';
import { GradeSelect } from '../components/GradeSelect';

export default function MonthlyPage({ state, setState }) {
  const { monthlyGoals } = state;

  const toggleGoal = (id) => {
    setState(prev => ({
      ...prev,
      monthlyGoals: prev.monthlyGoals.map(g => g.id === id ? { ...g, done: !g.done } : g)
    }));
  };

  const setGrade = (id, grade) => {
    setState(prev => ({
      ...prev,
      monthlyGoals: prev.monthlyGoals.map(g => g.id === id ? { ...g, grade } : g)
    }));
  };

  return (
    <div className="fade-in page-narrow" style={{ margin: '0 auto' }}>
      <div className="section-hero" style={{ borderColor: 'var(--accent-current)30', background: 'var(--accent-current)08' }}>
        <div className="header-label">MONTHLY MILESTONES</div>
        <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)' }}>Strategic View</h2>
      </div>

      <div className="card">
        <div className="card-header">
          <span className="mono-label">High-Level Targets</span>
        </div>
        <div className="card-body">
          {monthlyGoals.map(goal => (
            <div key={goal.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.02)', padding: '4px 0' }}>
              <div style={{ flex: 1 }}>
                <CheckItem
                  id={goal.id}
                  label={goal.text}
                  checked={goal.done}
                  onToggle={toggleGoal}
                  accent="var(--accent-current)"
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="mono-label-sm" style={{ fontSize: '7px' }}>OUTCOME</span>
                <GradeSelect value={goal.grade} onChange={(g) => setGrade(goal.id, g)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
