import logo from './logo.svg';
import './App.css';
import {increment, decrement} from './createSlice'
import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

// createSlice.js (스토어에 등록할 리듀서 작성)
// store.js (리듀서를 등록)

// index.js (사용할 수 있도록 스토어 활용)

function App() {
  const {count} = useSelector(state=>state.counter);
  const dispatch = useDispatch();

  console.log(dispatch);
  console.log(count);

  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(decrement(100))}> - </button>
        {count}
        <button onClick={() => dispatch(increment(100))}> + </button>
      </div>

      {/* <div>
        <button onClick={() => dispatch(decrement(1000))}> - </button>
        {count2}
        <button onClick={() => dispatch(increment(1000))}> + </button>
      </div> */}
    </div>

    
  );
}

export default App;
