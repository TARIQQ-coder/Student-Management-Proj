import React from 'react';

const Homework = () => {
  return (
    <div className='mt-20'>
      <h2 className="text-xl font-semibold ">Homework</h2>

      <div className="bg-white p-8 rounded-2xl flex items-center justify-between mt-4 border border-gray-400">
        <div>
          <p className='font-semibold text-xl'>The Metric System</p>
          <p className='text-sm text-[#989b98]'>Deadline:10 August 2025</p>
        </div>
        <span className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center text-purple-800">→</span>
      </div>

    </div>
  );
};

export default Homework