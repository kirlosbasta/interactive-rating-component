import { useState } from 'react';
import Container from './components/Container';
import Rating from './Rating';
import Thanks from './components/Thanks';

function App() {
  const [rate, setRate] = useState(0);
  const [isRated, setIsRated] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (rate) {
      setIsRated(true);
    }
  }

  function handleClick(e) {
    console.log(Number(e.target.value));
    setRate(Number(e.target.value));
  }
  return (
    <div className='font-overpass text-[15px] bg-grey-950 w-full h-screen flex justify-center items-center'>
      <Container>
        {!isRated && <Rating onSubmit={handleSubmit} onClick={handleClick} />}
        {isRated && <Thanks rate={rate} />}
      </Container>
    </div>
  );
}

export default App;
