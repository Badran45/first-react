import { useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Conatct/Contact'
import NotFound from './Components/NotFound/NotFound'

function App() {
  const [count, setCount] = useState(0)




      const route =     createBrowserRouter([
         { path:"/", element: <Layout/> ,
           children:[
              { path:"/home", element: <Home/> },
    { path:"/about", element: <About/> },
    { path:"/portfolio", element: <Portfolio/> },
    { path:"/contact", element: <Contact/> },
    { path:"*", element: <NotFound/> },
         ]  }


  
  
  ])

  return (
    <>
      <RouterProvider  router={route}/>
     




    </>
  )
}

export default App
