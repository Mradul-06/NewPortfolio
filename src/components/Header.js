import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='NavBar'>
        <h3>I Am Developer</h3>
        <div className='navigation'>
        <ul className='list-non-bullet'>
            <li className='list-item-inline'>Home</li>
            <li className='list-item-inline'>Projects</li>
            <li className='list-item-inline'>Blogs</li>
        </ul>
        </div>
    </div>
  )
}

export default Header