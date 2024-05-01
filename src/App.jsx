import { Suspense, lazy } from 'react'

// import HomePage from './pages/Home'
const LazyHomePage = lazy(()=>import('./pages/Home.jsx'))
// import AboutPage from './pages/About'
const LazyAboutPage = lazy(()=>import('./pages/About.jsx'))
import Router from './components/Router'
import Page404 from './pages/Page404'
import SearchPage from './pages/Search'
import './App.css'
import Route from './components/Route'

const routes = [
  // {
  //   path:'/',
  //   Component: HomePage
  // },
  {
    path:'/:lang/about',
    Component: LazyAboutPage
  },
  {
    path:'/search/:query',
    Component: SearchPage
  }
]

function App() {  
  
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={routes} defaultComponent={Page404}>
          <Route path='/' Component={LazyHomePage}/>
          <Route path='/about' Component={LazyAboutPage}/>        
        </Router>
      </Suspense>
    </main>
  )
}

export default App
