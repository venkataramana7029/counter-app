import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  const [count,setCount] = useState(0)
  return (
    <div className='container my-5'>
      <div className='card m-4 border' >
        <div className='card-header text-center'>
          <h1>Counter-App</h1>

        </div>

        <div className='card-body'>


          <p className='m-4 text-center'>Count : &nbsp; {count}  &nbsp; times</p>


          <div className='m-5 text-center'>
            <button className='mx-2 px-2 btn btn-success' onClick={()=> setCount(count +1)} >Increment</button>
            <button className='mx-2 px-2 btn btn-danger' onClick={()=> setCount(count -1)}>Decrement</button>
            <button className='mx-2 px-2 btn btn-info' onClick={()=> setCount(0)}>Reset</button>
            
          </div>

        </div>

      </div>
    
    </div>
  );
}

export default App;
