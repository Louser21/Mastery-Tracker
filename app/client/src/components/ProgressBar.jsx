import React from 'react';

export function ProgressBar({ progress, accent, glow = true, small = false }) {
  return (
    <div className={`progress-track ${small ? 'progress-track--small' : ''}`}>
      <div 
        className={`progress-fill ${glow ? 'glow' : ''}`}
        style={{ 
          width: `${progress}%`, 
          backgroundColor: accent,
          color: accent // For currentColor in glow
        }}
      />
    </div>
  );
}
