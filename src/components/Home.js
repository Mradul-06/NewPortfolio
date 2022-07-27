import React from 'react'
import './Home.css'
import Reactlogo from '../images/react1.png'
import Csslogo from '../images/css.png'
import gitlogo from '../images/git.png'
import JavaScriptlogo from '../images/javascript.png'
import Htmllogo from '../images/html.png'
import pythonlogo from '../images/python.png'
import programmerlogo from '../images/programmer.svg'



const Home = () => {
  return (
    <>
        <section className="main-section">
            <div className='head-container'>
                <h2> Mradul Agrawal</h2>
            </div>
            <div className='img-container'>
                <img src={programmerlogo} alt="image goes here"></img>
            </div>
            <hr></hr>
            <div className='techStack'>
            <div className='head-container'>
                <h2>Tech Stack</h2>
            </div>
            <div className='Card-container'>
                <div className='Card'>
                    <img className='card-img' src={Reactlogo} alt='img' height='100'/>
                        <div className='card-info'>
                            <h3><b>React</b></h3>
                        </div>
                </div>
                <div className='Card'>
                    <img className='card-img' src={JavaScriptlogo} alt='img' height='100'/>
                    <div className="card-info">
                        <h3><b>JavaScript</b></h3>
                    </div>
                </div>
                <div className='Card'>
                    <img className='card-img' src={Htmllogo} alt='img' height='100'/>
                    <div className="card-info">
                        <h3><b>HTML</b></h3>
                    </div>    
                </div>
                <div className='Card'>
                    <img className='card-img' src={Csslogo} alt='img' height='100'/>
                    <div className="card-info">
                        <h3><b>CSS</b></h3>
                    </div>    
                </div>
                <div className='Card'>
                    <img className='card-img' src={pythonlogo} alt='img' height='100'/>
                    <div className="card-info">
                        <h3><b>Python</b></h3>
                    </div>
                </div>
                <div className='Card'>
                    <img className='card-img' src={gitlogo} alt='img' height='100'/>
                    <div className="card-info">
                        <p><b>Git</b></p>
                    </div>
                </div>
            </div>
            </div>    
        </section>
        <section>
            <hr></hr>
            <div className="footer">
                <div className='head-container'>
                    <h2>Social Media Presence</h2>
                </div>
                <div className='footer-body'>
                    <a className='footer-links' href="https://www.instagram.com/amazemodi/?hl=en">Instagram</a>
                    <a className='footer-links' href="https://www.linkedin.com/in/mradulagrawal/">LinkedIn</a>
                    <a className='footer-links' href="https://github.com/Mradul-06">Github</a>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home