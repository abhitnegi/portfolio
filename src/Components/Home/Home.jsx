import React from 'react'
import './Home.css'
import { LinkedinLogo, InstagramLogo } from 'phosphor-react'

const Home = () => {
  return (
    <div className='home'> 
      <h1>Hi, My name is Abhit Negi</h1>
      <br />
      <p>A react developer with a passion for learning <br /> 
      and creating.</p>
      <div className="logo">
        <a href="https://www.linkedin.com/in/abhit-negi-b05925227"><LinkedinLogo size="60" /></a>
        <a href="https://www.instagram.com/kaunabhit/"><InstagramLogo size="60" /></a>
      </div>
    </div>
  )
}

export default Home

