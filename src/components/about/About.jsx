import React from 'react'
import './about.css'
import ME from '../../assets/meBeach.jpg'
import {FaAward} from 'react-icons/fa'
import {AiFillFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>  
              <small>2 Years of Professional Experience</small>
            </article>
            <article className='about__card'>
              <AiFillFolderOpen className='about__icon'/>
              <h5>Projects</h5>  
              <small>Many Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Necessitatibus cum adipisci ratione temporibus dolores laudantium nulla, 
            explicabo cumque maxime esse, quaerat deserunt iure illum fuga vitae placeat autem dolorum sit!
          </p>

          <a href="/#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About