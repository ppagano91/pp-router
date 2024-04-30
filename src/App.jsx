import {useState, useEffect} from 'react'
import HomePage from './pages/Home'
import AboutPage from './pages/About'

import {EVENTS} from './utils/consts'
import './App.css'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () =>{
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])
  
  return (
    <main>
      {currentPath === "/" && <HomePage/>}
      {currentPath === "/about" && <AboutPage/>}
    </main>
  )
}

export default App
