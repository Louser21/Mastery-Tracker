import { useState, useEffect, useRef } from 'react';

export function useAutoSave(state, isLoaded) {
  const [saveStatus, setSaveStatus] = useState('saved'); // 'saved', 'saving', 'error'
  const timerRef = useRef(null);

  useEffect(() => {
    if (!isLoaded) return;

    setSaveStatus('saving');
    
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(async () => {
      try {
        // Save to LocalStorage immediately
        localStorage.setItem('mastery_tracker_state', JSON.stringify(state));

        // Save to backend
        const res = await fetch('/api/state', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(state)
        });
        
        if (res.ok) {
          setSaveStatus('saved');
        } else {
          setSaveStatus('error');
        }
      } catch (err) {
        console.error("Auto-save failed", err);
        setSaveStatus('error');
      }
    }, 3000); // 3 second debounce

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [state, isLoaded]);

  return saveStatus;
}
