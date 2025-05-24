import React from 'react';

function Container({ children }) {
  return (
    <main className='bg-grey-900 rounded-xl w-9/10 max-w-xs p-5'>
      {children}
    </main>
  );
}

export default Container;
