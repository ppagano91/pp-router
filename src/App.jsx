import {useState} from 'react'
import image from './assets/20221029_183015.jpg'
import './App.css'

function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Home Page</p>
      <a href="/about">Nosotros</a>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Desarrollador @ppagano91</p>
      <img src={image} alt="Foto de ppagano" />
      <a href="/">Home</a>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  return (
    <main>
      {currentPath === "/" && <HomePage/>}
      {currentPath === "/about" && <AboutPage/>}
    </main>
  )
}

export default App
