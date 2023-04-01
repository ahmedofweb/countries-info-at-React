
import {BrowserRouter as Router , Routes , Route}  from 'react-router-dom'

//componenrts
import Header from './components/Header'

//pages
import Home from './pages/Home'
import About from './pages/About'

function App() {

  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about/:id' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
