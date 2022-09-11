import React from 'react'
import './Blogs.css'
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'

const Blogs = () => {
  return (
    <div>
      <div className='head-container'>
        <h2>Blogs</h2>
      </div>
      <div className='BlogContainer'>
        <ul type='none'>
          <li className='listElement'>
            <div className='blog-head'>Dummy Blog -1</div>
            <div className='preview-text'>The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. </div>
              <Link to="/Dummy" className='link'>Read</Link>
          </li>
          <br></br>
          <hr className='separator'></hr>
          <li className='listElement'>
            <div className='blog-head'>Dummy Blog -1</div>
            <div className='preview-text'>The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.</div>
            <Link to="/Dummy" className='link'>Read</Link>

          </li>
        </ul> 

      </div>

    </div>
  )
}

export default Blogs