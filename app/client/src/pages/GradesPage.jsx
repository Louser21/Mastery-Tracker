import React from 'react';
import { GradeSelect } from '../components/GradeSelect';

export default function GradesPage({ state, setState }) {
  const { gradeLog } = state;

  const updateLog = (idx, field, val) => {
    setState(prev => {
      const newList = [...prev.gradeLog];
      newList[idx] = { ...newList[idx], [field]: val };
      return { ...prev, gradeLog: newList };
    });
  };

  return (
    <div className="fade-in page-medium" style={{ margin: '0 auto' }}>
      <div className="section-hero" style={{ borderColor: 'var(--accent-current)30', background: 'var(--accent-current)08' }}>
        <div className="header-label">PERFORMANCE LOG</div>
        <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)' }}>Monthly Audit</h2>
      </div>

      <div className="card">
        <table className="grade-table">
          <thead>
            <tr>
              <th>WEEK</th>
              <th>DSA</th>
              <th>CP</th>
              <th>WEB</th>
              <th>PLC</th>
              <th>OVERALL</th>
              <th>REMARKS</th>
            </tr>
          </thead>
          <tbody>
            {gradeLog.map((row, i) => (
              <tr key={i}>
                <td className="mono-label-sm" style={{ color: 'var(--text-primary)' }}>{row.week}</td>
                <td><GradeSelect value={row.dsa} onChange={v => updateLog(i, 'dsa', v)} /></td>
                <td><GradeSelect value={row.cp} onChange={v => updateLog(i, 'cp', v)} /></td>
                <td><GradeSelect value={row.web} onChange={v => updateLog(i, 'web', v)} /></td>
                <td><GradeSelect value={row.placement} onChange={v => updateLog(i, 'placement', v)} /></td>
                <td><GradeSelect value={row.overall} onChange={v => updateLog(i, 'overall', v)} /></td>
                <td>
                  <input 
                    type="text" 
                    className="input" 
                    style={{ fontSize: '11px', border: 'none', background: 'transparent' }} 
                    placeholder="Add note..."
                    value={row.note || ''}
                    onChange={e => updateLog(i, 'note', e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
