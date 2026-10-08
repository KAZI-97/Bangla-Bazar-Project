import React from 'react';

const loading = () => {
   return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#232732] border-t-[#c8f902]" />
      <p className="text-sm text-[#8A92A0]">Loading...</p>
    </div>
  );
};

export default loading;