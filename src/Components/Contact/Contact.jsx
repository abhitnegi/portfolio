import React from 'react'
import { EnvelopeSimple,InstagramLogo,Phone, LinkedinLogo } from 'phosphor-react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="mail">
            <EnvelopeSimple size={32} className='envelope'/> : abhitnegi@gmail.com
        </div>  
        <div className="mail">
            <InstagramLogo size={32} /> : kaunabhit
        </div> 
        <div className="mail">
            <Phone size={32} /> : 91-9540026088
        </div> 
        <div className="mail">
            <LinkedinLogo size={32} /> : Abhit Negi
        </div>
    </div>
  )
}

export default Contact
