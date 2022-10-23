import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {MdOutlineImportContacts} from 'react-icons/md'
import {FaBook} from 'react-icons/fa'
import {MdContactSupport} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="/#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome /></a>
      <a href="/#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><BiUser /></a>
      <a href="/#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><MdOutlineImportContacts /></a>
      <a href="/#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#services' ? 'active': ''}><FaBook /></a>
      <a href="/#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><MdContactSupport /></a>
    </nav>
  )
}

export default Nav