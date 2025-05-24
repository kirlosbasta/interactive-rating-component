import React from 'react';
import Thankyou from '../assets/illustration-thank-you.svg';

function Thanks({ rate }) {
  return (
    <div className='flex flex-col justify-center items-center text-center'>
      <img src={Thankyou} alt='Phone with a bill coming out of it' />
      <p className='my-5 bg-grey-800 text-orange-500 text-center w-max rounded-2xl p-1 px-2.5'>
        You selected {rate} out of 5
      </p>
      <h2 className='text-white text-2xl'>Thank you!</h2>
      <p className='py-5 text-grey-500'>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default Thanks;
