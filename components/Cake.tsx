import React from 'react';

const Cake = () => {
  return (
    <div className="mt-6 flex justify-center">
      <img 
        src="/cake.png" 
        alt="Birthday Cake" 
        className="w-full max-w-xs h-auto animate-spin"
      />
    </div>
  );
};

export default Cake;
