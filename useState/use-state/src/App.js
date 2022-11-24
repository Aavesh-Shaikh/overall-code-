
import './App.css';
import { useState } from 'react';




function App() {
  const [prevNum,setNum] = useState(0);
 
  const Increment = ( ) =>{
      setNum(prevNum + 1 )
  }
  


  const [prevState , newState] = useState(0);

  const Decrement = () => {
    newState(prevState - 1)
  }
  return (
    <>
      <h1 className='heading' >{prevNum}&nbsp;{prevState}</h1><br/>
      {/* <h1 className='head'>{prevState}</h1> */}
      <div className='center'>
      <button onClick={Increment} className='btn'>Increment</button><br></br><br/>
      <button onClick={Decrement} className='btn'>Decrement</button>
      </div>
      </>
  );
}

export default App;
