import { useState } from 'react'   // hooks in react
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {   

  let [counter, setCounter] = useState(5);   // Hooks are always stored in an array, one is the actual var to hold the value, and other is the method to set that value.


  //let counter = 6;
  const addValue = () =>{
    console.log("clicked ", counter);
    counter = counter + 1;
    setCounter(counter);       // method to set the count in useState
  }

  const removeValue = () =>{
    if(counter > 0){ 
    setCounter(counter - 1);
    }
    else{
      console.log("Can't decrement to negative.");
    }
  }
 
  return (
    <>
      <h1>Apple Banana Pineapple</h1>
      <h2>Counter value : {counter} </h2>
      <button
      onClick = {addValue}>Add Value</button>
      <br />
      <button
      onClick = {removeValue} >Remove Value</button>
    </>
  )
}

export default App
