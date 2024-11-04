import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="p-6 bg-indigo-600 text-white rounded-lg">
      <h1 className="text-3xl font-semibold">Welcome to the Home Page</h1>
      <p>This is a page styled with Tailwind CSS.</p>
    </div>
    </>
  )
}

export default App
