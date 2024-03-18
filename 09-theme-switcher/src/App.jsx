import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './context/theme'

function App() {

  const [themeMode , setThemeMode] = useState('light') // default is dark

  const darkTheme = () =>{
    setThemeMode('dark')
  }

  const lightTheme = () => {
    setThemeMode('light')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark','light')
    document.querySelector('html').classList.add(themeMode)
  } , [themeMode]) // if any change arises in the array then it re-renders the component


  return (
    <ThemeProvider value = {{themeMode, darkTheme,lightTheme}}>
      <div className='flex flex-wrap min-h-screen items-center'>
        <div className='w-full'>
          <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
            <ThemeBtn/>
          </div>

          <div className='w-full max-w-sm mx-auto'>
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
