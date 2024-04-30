import HomePage from './pages/Home'
import AboutPage from './pages/About'
import Router from './components/Router'
import Page404 from './pages/Page404'
import './App.css'

const routes = [
  {
    path:'/',
    Component: HomePage
  },
  {
    path:'/about',
    Component: AboutPage
  }
]

function App() {
  
  
  return (
    <main>
      <Router routes={routes} defaultComponent={Page404}/>
    </main>
  )
}

export default App
