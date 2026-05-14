import React, { useState, useMemo } from 'react';
import { SECTIONS } from '../data/sections';

export default function CalendarPage({ state, setState }) {
  const { completionDates = {} } = state;
  const getLocalDateStr = (d = new Date()) => {
    const local = new Date(d);
    local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
    return local.toISOString().split('T')[0];
  };

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(getLocalDateStr());

  // Build a lookup map for item labels
  const itemLabels = useMemo(() => {
    const map = {};
    SECTIONS.forEach(sec => {
      sec.tracks.forEach(track => {
        track.sub.forEach((subItem, i) => {
          map[`${track.id}-${i}`] = `[${sec.id.toUpperCase()}] ${track.title} - ${subItem}`;
        });
        if (track.rev) {
          track.rev.forEach((revItem, i) => {
            map[`rev-${track.id}-${i}`] = `[${sec.id.toUpperCase()} REV] ${track.title} - ${revItem}`;
          });
        }
      });
    });
    return map;
  }, []);

  // Group completionDates by date
  const completedByDate = useMemo(() => {
    const grouped = {};
    Object.entries(completionDates).forEach(([id, dateStr]) => {
      if (!grouped[dateStr]) grouped[dateStr] = [];
      grouped[dateStr].push({ id, label: itemLabels[id] || id });
    });
    return grouped;
  }, [completionDates, itemLabels]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleDayClick = (day) => {
    const dateStr = getLocalDateStr(new Date(year, month, day));
    setSelectedDate(dateStr);
  };

  const selectedDayItems = completedByDate[selectedDate] || [];

  return (
    <div className="fade-in">
      <div className="section-hero" style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}>
        <div className="hero-icon">📅</div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="header-label" style={{ color: '#f97316' }}>EXECUTION</div>
          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '8px' }}>
            Completion Calendar
          </h2>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', maxWidth: '600px' }}>
            Track when you mastered topics and completed revisions.
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 600px) 1fr', gap: '24px', marginTop: '24px', alignItems: 'start' }}>
        {/* Calendar Grid */}
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700' }}>
              {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </h3>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button 
                onClick={prevMonth} 
                className="btn btn-secondary"
              >Prev</button>
              <button 
                onClick={() => setCurrentDate(new Date())} 
                className="btn btn-secondary"
              >Today</button>
              <button 
                onClick={nextMonth} 
                className="btn btn-secondary"
              >Next</button>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', textAlign: 'center', marginBottom: '8px' }}>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
              <div key={d} className="mono-label-sm" style={{ color: 'var(--text-muted)' }}>{d}</div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px' }}>
            {Array.from({ length: firstDayOfMonth }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const dateStr = getLocalDateStr(new Date(year, month, day));
              const hasItems = completedByDate[dateStr]?.length > 0;
              const isSelected = selectedDate === dateStr;
              const isToday = getLocalDateStr() === dateStr;

              return (
                <div
                  key={day}
                  onClick={() => handleDayClick(day)}
                  style={{
                    aspectRatio: '1',
                    maxHeight: '80px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: `1px solid ${isSelected ? '#f97316' : 'var(--border)'}`,
                    borderRadius: 'var(--radius-sm)',
                    background: isSelected ? 'rgba(249, 115, 22, 0.1)' : 'var(--bg-surface)',
                    cursor: 'pointer',
                    position: 'relative',
                    fontWeight: isToday ? '800' : '500',
                    color: isToday ? '#f97316' : 'var(--text-primary)',
                    fontSize: '14px',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => { if(!isSelected) e.currentTarget.style.borderColor = 'var(--border-light)'; }}
                  onMouseLeave={(e) => { if(!isSelected) e.currentTarget.style.borderColor = 'var(--border)'; }}
                >
                  {day}
                  {hasItems && (
                    <div style={{
                      position: 'absolute',
                      bottom: '4px',
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: '#10b981'
                    }} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Date Details */}
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '24px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>
            Completed on {selectedDate}
          </h3>
          
          {selectedDayItems.length === 0 ? (
            <p style={{ color: 'var(--text-muted)', fontSize: '13px', textAlign: 'center', marginTop: '32px' }}>
              No tasks completed on this date.
            </p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {selectedDayItems.map((item, idx) => (
                <div key={idx} style={{ 
                  background: 'var(--bg)', 
                  padding: '12px', 
                  borderRadius: 'var(--radius-sm)',
                  borderLeft: '3px solid #10b981',
                  fontSize: '13px'
                }}>
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
