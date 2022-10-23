import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ham-jun/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/hamjun" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials