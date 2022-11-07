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
        
      <Typewriter
         options={{delay:2}}
         onInit ={(typewriter)=>{
            
            typewriter
            .typeString("Hello, My Name is Filiberto Medina")
            .start()
          }}
        />

      </h2>
      <div className='prompt'>
        <Typewriter
           options={{ 
            loop: true,
            delay:0.5}}
          onInit ={(typewriter)=>{
            return typewriter.pauseFor(2).typeString("I am a Web Developer ").deleteChars(14).typeString(" Problem Solver ").start();
          }}
        />
        <div className='socialIcons'>
        <Facebook/>
        <Twitter/>
        <Instagram/>
        <LinkedIn/>
        
        </div>
      </div>
      </div> 
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <Typewriter 
          onInit ={(typewriter)=>{
            typewriter.typeString("ReactJS, Redux, Javascript, NPM, HTML, CSS, Bootstrap, SASS").start()
          }}/>
              
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <Typewriter 
            onInit ={(typewriter)=>{
            typewriter.typeString(" Node.js, Express.js, MongoDB").start()
          }}/>
              
          </li>
          <li className='item'>
            <h2>Languages </h2>
            <Typewriter 
             onInit ={(typewriter)=>{
             typewriter.typeString(" Javascript, HTML, CSS, C++, C").start()
          }}/>
              
          </li>
        </ol>
      </div>
    
    
   

    </div>
  )
}

export default Home