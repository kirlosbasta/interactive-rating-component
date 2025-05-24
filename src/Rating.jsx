import React from 'react';
import RatingBtn from './components/RatingBtn';
import star from './assets/icon-star.svg';

function Rating({ onSubmit, onClick }) {
  return (
    <form onSubmit={onSubmit}>
      <img
        src={star}
        alt='Orange star'
        className='bg-grey-800 rounded-full p-2'
      />
      <h1 className='text-white text-2xl py-4 '>How did we do?</h1>
      <p className='text-grey-500 pb-5'>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className='flex justify-around'>
        <RatingBtn onClick={onClick}>1</RatingBtn>
        <RatingBtn onClick={onClick}>2</RatingBtn>
        <RatingBtn onClick={onClick}>3</RatingBtn>
        <RatingBtn onClick={onClick}>4</RatingBtn>
        <RatingBtn onClick={onClick}>5</RatingBtn>
      </div>
      <button
        type='submit'
        className='w-full uppercase mt-5 bg-orange-500 font-semibold py-3 rounded-3xl cursor-pointer hover:bg-white hover:text-grey-950'
      >
        submit
      </button>
    </form>
  );
}

export default Rating;
