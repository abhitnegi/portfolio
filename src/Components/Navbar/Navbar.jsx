import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/project'>Project</Link>
    </div>
  )
}

export default Navbar

