import { useState, useEffect } from 'react';
import { buildChecks, buildRevChecks, buildStatuses } from '../data/sections';

const defaultState = {
  checks: buildChecks(),
  revChecks: buildRevChecks(),
  statuses: buildStatuses(),
  notes: { general: "", dsa: "", cp: "", webdev: "", placement: "", mistakes: "" },
  dailyTasks: [
    { id: 1, text: "Solve 2 LC mediums (timed)", done: false },
    { id: 2, text: "CF problem 1600–1800 rated", done: false },
    { id: 3, text: "Current study block topic", done: false },
    { id: 4, text: "Revision: 1 concept from checklist", done: false }
  ],
  weeklyGoals: [
    { id: 1, text: "Complete DSA-Graphs subtopics", done: false, grade: "" },
    { id: 2, text: "Participate in CF round", done: false, grade: "" },
    { id: 3, text: "Go: finish HTTP server", done: false, grade: "" },
    { id: 4, text: "LLD: Parking Lot design", done: false, grade: "" },
    { id: 5, text: "Weekly contest LC", done: false, grade: "" }
  ],
  monthlyGoals: [
    { id: 1, text: "CF Rating +100", done: false, grade: "" },
    { id: 2, text: "NeetCode 150 done", done: false, grade: "" },
    { id: 3, text: "WebRTC signaling server deployed", done: false, grade: "" },
    { id: 4, text: "Resume final draft", done: false, grade: "" },
    { id: 5, text: "System Design: 5 designs done", done: false, grade: "" }
  ],
  gradeLog: [
    { week: "Week 1", dsa: "", cp: "", web: "", placement: "", overall: "", note: "" },
    { week: "Week 2", dsa: "", cp: "", web: "", placement: "", overall: "", note: "" },
    { week: "Week 3", dsa: "", cp: "", web: "", placement: "", overall: "", note: "" },
    { week: "Week 4", dsa: "", cp: "", web: "", placement: "", overall: "", note: "" }
  ],
  dailyMetrics: { lc: "", cf: "", hours: "", contest: "" }
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
