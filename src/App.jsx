import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ClassList from './components/ClassList';
import ClassDetail from './components/ClassDetail';
import GradeComponent from './components/GradeComponent';
import TeacherSection from './components/TeacherSection';
import NoteView from './components/NoteView';


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
            <Route path="/grades" element={<GradeComponent/>}/>
            <Route path='/teachers' element={<TeacherSection/>}/>
            <Route path='/notes' element={<NoteView/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
