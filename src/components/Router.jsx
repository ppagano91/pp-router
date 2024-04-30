import {useState, useEffect} from 'react'
import {EVENTS} from '../utils/consts'
import {match} from 'path-to-regexp'

export default function Router({routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1>}){
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

    let routeParams = {
        
    }
  
    const Page = routes.find(({path})=> {
        if (path === currentPath) return true

        // Detectar rutas dinámicas
        const matcherUrl = match(path, {decode: decodeURIComponent})
        const matched = matcherUrl(currentPath)

        if(!matched) return false

        // Guardar los parámetros de las rutas dinámicas
        routeParams = matched.params
        return true
    })?.Component
  
    return Page 
    ? <Page routeParams={routeParams} /> 
    : <DefaultComponent routeParams={routeParams} />
  }