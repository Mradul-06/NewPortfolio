import React from 'react'
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import Dummy from './components/Dummy'
import './App.css'

const App = () => {
  return (
    <Router>
        <div className='header'>
            <div className='owner'>
                <h2>Portfolio</h2>
            </div>
            <div className="nav">
                <div className="nav-pills">
                    <Link to="/"className='nav-link'>Home</Link>
                </div>
                <div className="nav-pills">
                    <Link to="/Projects" className='nav-link'>Projects</Link>
                </div>
                <div className="nav-pills">
                    <Link to="/Blogs" className='nav-link'>Blogs</Link>
                </div>
            </div>
        </div>
        <hr></hr>

        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Projects" element={<Projects/>}></Route>
            <Route path="/Blogs" element={<Blogs/>}></Route>
            <Route path="dummy" element={<Dummy/>}></Route>
        </Routes>
    </Router>  
        )
}

export default App
