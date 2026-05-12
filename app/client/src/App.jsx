import React, { useState } from 'react';
import { useAppState } from './hooks/useAppState';
import { useAutoSave } from './hooks/useAutoSave';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { FloatingLegend } from './components/FloatingLegend';
import Home from './pages/Home';
import RoadmapPage from './pages/RoadmapPage';
import DailyPage from './pages/DailyPage';
import WeeklyPage from './pages/WeeklyPage';
import MonthlyPage from './pages/MonthlyPage';
import GradesPage from './pages/GradesPage';
import NotesPage from './pages/NotesPage';

export function App() {
  const { state, setState, isLoaded } = useAppState();
  const saveStatus = useAutoSave(state, isLoaded);

  const [activeTab, setActiveTab] = useState('home');

  // Unified accent color mapping for all topics and dashboards
  const accentMap = {
    home: '#3b82f6', // Blue
    dsa: '#10b981', // Emerald
    cp: '#f59e0b', // Amber
    webdev: '#8b5cf6', // Violet
    placement: '#ef4444', // Red
    daily: '#f97316', // Orange
    weekly: '#d946ef', // Fuchsia
    monthly: '#ef4444', // Red
    grades: '#34d399', // Emerald light
    notes: '#64748b', // Slate
  };
  const accent = accentMap[activeTab] || accentMap.home;

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home state={state} setState={setState} setActiveTab={setActiveTab} />;
      case 'dsa':
      case 'cp':
      case 'webdev':
      case 'placement':
        // The activeTab directly maps to the activeSection in RoadmapPage!
        return <RoadmapPage activeSection={activeTab} state={state} setState={setState} />;
      case 'daily':
        return <DailyPage state={state} setState={setState} />;
      case 'weekly':
        return <WeeklyPage state={state} setState={setState} />;
      case 'monthly':
        return <MonthlyPage state={state} setState={setState} />;
      case 'grades':
        return <GradesPage state={state} setState={setState} />;
      case 'notes':
        return <NotesPage state={state} setState={setState} />;
      default:
        return <Home state={state} setState={setState} setActiveTab={setActiveTab} />;
    }
  };

  const isRoadmap = ['dsa', 'cp', 'webdev', 'placement'].includes(activeTab);

  return (
    <div className="app-layout" style={{ '--accent-current': accent }}>
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} accentMap={accentMap} />
      
      <div className="app-main">
        <Header accent={accent} saveStatus={saveStatus} />
        <main className="main-content">
          {isLoaded ? renderContent() : <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Loading Mastery Data…</p>}
        </main>
        <FloatingLegend visible={isRoadmap} />
      </div>
    </div>
  );
}
