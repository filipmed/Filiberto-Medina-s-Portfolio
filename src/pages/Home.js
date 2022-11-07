import React from 'react'
import { Instagram } from '@material-ui/icons'
import { Twitter } from '@material-ui/icons'
import { Facebook } from '@material-ui/icons'
import { LinkedIn } from '@material-ui/icons'
import '../styles/Home.css'
import Typewriter from 'typewriter-effect';





function Home() {
  return (
    <div className='Home'>
      
    <div className='about'>
      <h2>
        
      Hello, My Name is Filiberto Medina

      </h2>
      <div className='prompt'>
        <Typewriter
           options={{ 
            loop: true,
            delay:0.5}}
          onInit ={(typewriter)=>{
            return typewriter.pauseFor(2).typeString("I am a Web Developer ").pauseFor(1300).deleteChars(14).typeString(" Problem Solver ").pauseFor(1300).deleteChars(15).typeString(" BookWorm ").pauseFor(1300).start();
          }}
        />
        <div className='social'>
          <ul>
            <li><a href='https://www.facebook.com/filiberto.medina.1238'><Facebook  className='facebook'/></a></li>
            <li><a href='https://twitter.com/Filiber25626466'><Twitter className='twit'/></a></li>
            <li><a href='https://www.instagram.com/4ilip.js/?next=%2F'><Instagram className='insta'/></a></li>
            <li><a href='https://www.linkedin.com/in/filiberto-medina-98a2b3184/'><LinkedIn className='linked'/></a></li>
          </ul>
       
        </div>
      </div>
      </div> 
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <div className='front'>
                <h2>Front-End</h2>

                  <ul className='skillset' >
                    <li className='skill-list-react'>ReactJS</li>
                    <li className='skill-list-redux'>Redux</li>
                    <li className='skill-list-js'>Javascript</li>
                    <li className='skill-list-html'>HTML</li>
                    <li className='skill-list-css'>CSS</li>
                    <li className='skill-list-boot'>Bootstrap</li>
                    <li className='skill-list-sass'>SASS</li>
                    <li className='skill-list-jq'>Jquery</li>
                  </ul>
              </div>
              
          </li>
          <li className='item'>
            <div className='front'>
            <h2>Back-End</h2>
            <ul className='skillset'>
                <li className='skill-list-node'>Node.js</li>
                <li className='skill-list-exp' >Express.js</li>
                <li className='skill-list-DB'>MongoDB</li>
                
              </ul>
             </div>
          </li>
          <li className='item'>
          <div className='front'>
            <h2>Languages </h2>
            <ul className='skillset'>
                <li className='skill-list-js'>Javascript</li>
                <li className='skill-list-html'>HTML</li>
                <li className='skill-list-css'>CSS</li>
                <li className='skill-list-cplus'>C++</li>
                <li className='skill-list-cee'>C</li>
              </ul>
              </div>
              
          </li>
        </ol>
      </div>
    
    
   

    </div>
  )
}

export default Home