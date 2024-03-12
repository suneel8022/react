import { useState } from 'react'
import './App.css'

function App() {
  
  // old fashion 
  /*   let counter = 15
      const addValue = () =>{
      counter = counter+1
      console.log(counter);
    } 
  */


  // using useState changing number count dynamically
  const [counter,setCounter] = useState(15)

  const addValue = () => {
    setCounter(counter + 1)
    // what if u have multiple same statements and how does it gets executed

    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  } 

  const removeValue = () => {
    setCounter(counter - 1)
  }


  return (
    <>
      <h1>React course begin {counter}</h1>  
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}> Add Value </button> {" "}
      <button onClick={removeValue}> Remove Value </button>
      <p>Footer: wassup homies!</p>
    </>
  )
}

export default App
