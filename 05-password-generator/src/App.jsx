import { useState , useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const passwordRef = useRef(null)
  const [password, setPassword] = useState('') 

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    // write the acondition if numbers and character are allowed, so append them if checked true
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"

    // now generate using loop
    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char) // char is index here!      
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed]) // make sure to include what to get changed and involved in the code

  
  useEffect(() => {
    generatePassword()
  } , [length,numberAllowed,charAllowed])


  const copyPasswordToClipBoard = () => {
    window.navigator.clipboard.writeText(password) // write into our clipboard
    passwordRef.current?.select() // give feedback to user using 'useRef'
  } 



  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500'>
        <h1 className='text-white text-center my-3'> Password Generator </h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          {/* text field for password generation at final which is not writeable but read only */}
          <input type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}          
          />

          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipBoard}> copy </button>
          
        </div>

        <div className='flex text-sm gap-x-2'>
          {/* barlength */}
          <div className='flex items-center gap-x-1'>
          <input className='cursor-pointer'
          type="range"
          min={6}
          max={100}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          name="" id="" />
          
          <label htmlFor="length">Length:{length}</label>
          </div>

          {/* checkbox with label for Numbers */}
          <div className='flex items-center gap-x-1'>

            <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev) // using a call back
            }}
            name="" 
            id="" />

            <label htmlFor="number">Numbers</label>

          </div>

          {/* checkbox with label for Characters */}
          <div className='flex items-center gap-x-1'>

            <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev) // using a call back
            }}
            name="" 
            id="" />

            <label htmlFor="charInput">Character</label>

          </div>

        
        </div>
      </div>
    </>
  )
}

export default App
