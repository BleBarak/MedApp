import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/Sign-in';
import Dashboard from './pages/Dashboard';
import HealthRecords from './pages/HealthRecords';
import SupplyChain from './pages/SupplyChain';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/health-records" element={<HealthRecords />} />
          <Route path="/supply-chain" element={<SupplyChain />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
