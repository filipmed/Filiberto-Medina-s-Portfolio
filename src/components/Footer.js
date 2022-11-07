import React from 'react'
import { Instagram } from '@material-ui/icons'
import { Twitter } from '@material-ui/icons'
import { Facebook } from '@material-ui/icons'
import { LinkedIn } from '@material-ui/icons'
import '../styles/Footer.css'
function Footer() {

  return (
    <div className='footer'>
        <div className='socialMedia'>
      <a href="https://www.instagram.com/4ilip.js/"><Instagram/></a>
      <a href="https://twitter.com/Filiber25626466"><Twitter/></a>
      <a href="https://www.facebook.com/filiberto.medina.1238/"><Facebook/></a>
      <a href="https://www.linkedin.com/in/filiberto-medina-98a2b3184/"><LinkedIn/></a>
        
        </div>
        <p>&copy;2022 Filiberto Medina's Portfolio</p>
    </div>
  )
}

export default Footer