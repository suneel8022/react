import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// useState def
function App() {
  const [color, setColor] = useState('olive')

  // function setColor(color){
  //   setColor(color)
  // }

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={() => setColor('red')}  style={{backgroundColor:'red'}}
            className='bg-red outline-none px-4 py-1 rounded-full shadow-lg text-black'>Red</button>
            <button onClick={() => setColor('green')} style={{backgroundColor:'green'}}
            className='bg-green outline-none px-4 py-1 rounded-full shadow-lg text-black'>Green</button>
            <button onClick={() => setColor('#e622c8')} style={{backgroundColor:'#e622c8'}}
            className='bg-#e622c8 outline-none px-4 py-1 rounded-full shadow-lg text-black'>Pink</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
