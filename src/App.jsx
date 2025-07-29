import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ClassList from './components/ClassList';
import ClassDetail from './components/ClassDetail';

const App = () => {
  return (
    <Router>
      <div className="grid grid-cols-1 md:grid-cols-6 min-h-screen">
        <Sidebar />
        <div className="col-span-5 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/classes" element={<ClassList />} />
            <Route path="/classes/:id" element={<ClassDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
