import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import App from './App.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Home/>}>
      {/* <Route path='landing' element={<Landing.jsx />}/> */}
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App/>
  </StrictMode>,
)
