import React from 'react';

const Inbox = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold ">Inbox</h2>

      <div className="bg-white p-8 rounded-2xl flex items-center justify-between mt-8 ">
        <div>
          <p className='font-semibold text-xl'>Your summer scholarship<br/> was approved!</p>
          <p className='text-sm text-[#989b98]'>For further information please <br/> contact Mrs. Horatio to help you.</p>
        </div>
        <span className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center text-purple-800">→</span>
      </div>

    </div>
  );
};

export default Inbox;