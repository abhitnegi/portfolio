import React from 'react'
import './Home.css'
import picture from '../Images/home.jpg'
import { LinkedinLogo, InstagramLogo } from 'phosphor-react'

const Home = () => {
  return (
    <div className='home'> 
      <div className="left">
        <h1>Hi, My name is Abhit Negi</h1>
        <br />
        <p>A react developer with a passion for learning <br /> 
        and creating.</p>
        <div className="logo">
          <a href="https://www.linkedin.com/in/abhit-negi-b05925227"><LinkedinLogo size="60" /></a>
          <a href="https://www.instagram.com/kaunabhit/"><InstagramLogo size="60" /></a>
        </div>
      </div>
      <div className="right">
        <img src={picture} alt="" />
      </div>
    </div>
  )
}

export default Home

