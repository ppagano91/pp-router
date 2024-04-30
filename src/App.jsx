import HomePage from './pages/Home'
import AboutPage from './pages/About'
import Router from './components/Router'
import Page404 from './pages/Page404'
import SearchPage from './pages/Search'
import './App.css'

const routes = [
  {
    path:'/',
    Component: HomePage
  },
  {
    path:'/about',
    Component: AboutPage
  },
  {
    path:'/search/:query',
    Component: SearchPage
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
