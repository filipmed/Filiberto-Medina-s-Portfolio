import React, { useEffect, useState } from 'react'
import {Link,useLocation} from 'react-router-dom'
import "../styles/Navbar.css"
import  Reordericon  from '@material-ui/icons/Reorder'


function Navbar() {
  
  const location= useLocation();
  useEffect(()=>{
    setExpandNavbar(false);
  },[location])
 
  const [expandNavbar,setExpandNavbar]=useState(false)
  return (
    <div className='navbar' id={expandNavbar?"open":"close"}>
        <div className='toggleButton'>
                <button onClick={()=>{setExpandNavbar((prev)=>!prev)}}>
                <Reordericon/>
                </button>
        </div>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>
            
            
        </div>
    </div>
  )
}

export default Navbar