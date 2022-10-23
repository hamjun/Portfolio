import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer__logo'>Jun Ham</a>

      <ul className='permalinks'>
        <li><a href="/#">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#experience">Experience</a></li>
        <li><a href="/#portfolio">Portfolio</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/jun.ham.562" target='_blank' rel="noreferrer"><BsFacebook /></a>
        <a href="https://www.instagram.com/junny.poo/" target='_blank' rel="noreferrer"><BsInstagram /></a>
        <a href="https://www.linkedin.com/in/ham-jun/" target="_blank" rel=" noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/hamjun" target="_blank" rel=" noreferrer"><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Junnypoo. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer