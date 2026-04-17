import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Home, Blog, Team } from './components/pages'
import { Navbar } from './components/navbar'


function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <div className='min-h-screen w-full flex items-center justify-center'>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/team' element={<Team />} />
          </Routes>
        </div>
      </Router>
    </main>
  )
}

export default App