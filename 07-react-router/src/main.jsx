import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    // sandwich method to use nested routing
    <Route path="/" element={<Layout/>}>
      {/* we can have as many routes under this as we wish , it is gng to do after '/' */}
      <Route path="" element={<Home/>} />
      <Route path = "about" element = {<About/>}/>
      {/* <Route path='user' element ={<User/>} /> */}
      <Route path='/user' element={<User/>}>
        <Route path=':userid' element ={<User/>} />  {/* performing dynamic routing  */}
      </Route>
      <Route loader={githubInfoLoader} path='github' element={<Github/>}/>
      <Route path='*' element={<div>Not Found</div>}/>
    </Route>
  )
)





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
