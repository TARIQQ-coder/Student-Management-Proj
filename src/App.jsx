import React from 'react'
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-6 '>
      <Sidebar />
      <div className='col-span-5 min-h-screen p-4'>
      <Dashboard/>

      </div>
    </div>
  )
}

export default App