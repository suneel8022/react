import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// custom made
const reactElement = {
    type : 'a' ,
    props : {
        href : "https://www.google.com",
        target : '_blank'
    },
    childen : 'Click me to visit Google'

}

function MyApp(){
  return (
    <div>
      <h1>Custom React App</h1>
    </div>
  )
}

const AnotherElement = (
  <a href = "http://www.google.com" target='_blank' >Visit Google</a>
)

// react expected code declaration
const areactelement = React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  'click to visit google'
)


ReactDOM.createRoot(document.getElementById('root')).render(
    <App />   //component
    // MyApp()
    // <MyApp/>
    // AnotherElement  // capital demo
    // areactelement  // react expected dec


)
