import React from 'react';

function RatingBtn({ children, onClick }) {
  return (
    <button
      type='button'
      onClick={onClick}
      className='text-grey-500 bg-grey-800 rounded-full w-10 h-10 leading-11 cursor-pointer hover:bg-orange-500 hover:text-grey-950 focus:bg-white focus:text-grey-950'
      value={children}
    >
      {children}
    </button>
  );
}

export default RatingBtn;
