import React,{useState} from 'react'
import { EnvelopeSimple,InstagramLogo,Phone, LinkedinLogo } from 'phosphor-react'
import './Contact.css'

const Contact = () => {
  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ message, setMessage ] = useState("")

  const setClick = () => {
    if(name === "" || email === "" || message === ""){
      alert("Invalid Name or Email or Message")
    }
    else{
      alert("Thank you for contacting me")
    }
  }
  return (
    <div className='contact'>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => {setName(e.target.value)}}/><br />
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/><br />
        <label for="message">Message:</label>
        <textarea name="message" id="message" cols="30" rows="10" value={message} onChange={(e) => {setMessage(e.target.value)}}></textarea>
        <input type="submit" value="Submit" id='submit' onClick={setClick}></input>
    </div>
  )
}

export default Contact
