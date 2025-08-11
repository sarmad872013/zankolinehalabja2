import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ComputerProvider } from './contexts/ComputerContext';
import MasterDashboard from './components/MasterDashboard';
import ClientView from './components/ClientView';

function App() {
  return (
    <HashRouter>
      <ComputerProvider>
        <div className="bg-slate-900 text-white min-h-screen">
          <Routes>
            <Route path="/master" element={<MasterDashboard />} />
            <Route path="/client/:id" element={<ClientView />} />
            <Route path="*" element={<Navigate to="/master" />} />
          </Routes>
        </div>
      </ComputerProvider>
    </HashRouter>
  );
}

export default App;
