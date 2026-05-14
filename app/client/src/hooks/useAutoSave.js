import { useState, useEffect, useRef, useCallback } from 'react';

export function useAutoSave(state, isLoaded) {
  const [saveStatus, setSaveStatus] = useState('saved'); // 'saved', 'unsaved', 'saving', 'error'
  const stateRef = useRef(state);
  const isDirty = useRef(false);
  const firstLoad = useRef(true);

  // Keep track of latest state and mark dirty
  useEffect(() => {
    if (isLoaded) {
      if (firstLoad.current) {
        firstLoad.current = false;
        stateRef.current = state;
        isDirty.current = false;
        setSaveStatus('saved');
      } else if (stateRef.current !== state) {
        stateRef.current = state;
        isDirty.current = true;
        setSaveStatus('unsaved');
      }
    }
  }, [state, isLoaded]);

  // Perform the actual save
  const saveState = useCallback(async () => {
    if (!isDirty.current) return;
    
    setSaveStatus('saving');
    try {
      localStorage.setItem('mastery_tracker_state', JSON.stringify(stateRef.current));

      const res = await fetch('/api/state', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(stateRef.current)
      });
      
      if (res.ok) {
        isDirty.current = false;
        setSaveStatus('saved');
      } else {
        setSaveStatus('error');
      }
    } catch (err) {
      console.error("Save failed", err);
      setSaveStatus('error');
    }
  }, []);

  // Global Ctrl + S listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        saveState();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [saveState]);

  // Auto-save every 5 minutes
  useEffect(() => {
    if (!isLoaded) return;
    const interval = setInterval(() => {
      saveState();
    }, 5 * 60 * 1000); // 5 minutes
    return () => clearInterval(interval);
  }, [isLoaded, saveState]);

  // Warn before window unload if there are unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isDirty.current) {
        e.preventDefault();
        e.returnValue = 'You have unsaved changes. Are you sure you want to leave?'; // Most browsers ignore the custom string, but need a truthy value
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return saveStatus;
}
