import { useState, useEffect } from 'react';
import { buildChecks, buildRevChecks, buildStatuses } from '../data/sections';

const defaultState = {
  checks: buildChecks(),
  revChecks: buildRevChecks(),
  statuses: buildStatuses(),
  notes: { general: "", dsa: "", cp: "", webdev: "", placement: "", mistakes: "" },
  gradeLog: [
    { week: "Week 1", dsa: "", cp: "", web: "", placement: "", overall: "", note: "" },
    { week: "Week 2", dsa: "", cp: "", web: "", placement: "", overall: "", note: "" },
    { week: "Week 3", dsa: "", cp: "", web: "", placement: "", overall: "", note: "" },
    { week: "Week 4", dsa: "", cp: "", web: "", placement: "", overall: "", note: "" }
  ],
  completionDates: {},
  calendarData: {}
};

// Hook to fetch initial state from server and provide setters
export function useAppState() {
  const [state, setState] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load state on mount
  useEffect(() => {
    async function fetchState() {
      try {
        const res = await fetch('/api/state');
        const json = await res.json();
        if (json.success && json.data && Object.keys(json.data).length > 0) {
          // Merge defaults with loaded data to ensure no missing keys
          setState({ ...defaultState, ...json.data });
        } else {
          // If no saved state, start with default structure
          setState(defaultState);
        }
      } catch (err) {
        console.error('Failed to load state', err);
        setState(defaultState);
      } finally {
        setIsLoaded(true);
      }
    }
    fetchState();
  }, []);

  // Helper to update nested parts safely
  const updateState = (updater) => {
    setState((prev) => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      return { ...prev, ...next };
    });
  };

  return { state, setState: updateState, isLoaded };
}
