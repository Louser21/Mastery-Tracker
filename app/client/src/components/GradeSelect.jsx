import React from 'react';

const GRADES = ['', 'S', 'A', 'B', 'C', 'D', 'F'];
const GRADE_COLOR = { S:'#10b981', A:'#34d399', B:'#3b82f6', C:'#f59e0b', D:'#f97316', F:'#ef4444', '':'#94a3b8' };

export function GradeSelect({ value, onChange }) {
  const color = GRADE_COLOR[value] || GRADE_COLOR[''];
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{ color, borderColor: color, minWidth: '52px' }}
    >
      {GRADES.map(g => (
        <option key={g} value={g}>{g || '—'}</option>
      ))}
    </select>
  );
}
