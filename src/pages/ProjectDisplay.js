import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";
import Typewriter from 'typewriter-effect';

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
      <Typewriter
         options={{delay:2}}
         onInit ={(typewriter)=>{
            
            typewriter
            .typeString("Technologies Used:")
            .start()
          }}
        />
        <b>{project.Skills}</b> 
      </p>
       
      <GitHubIcon onClick={()=>(  //code line 18-19 is used to make github icon give links to projects
        window.location.href=project.Link
  )}
  />
    <h3>Click Icon To Use Application</h3>
    </div>
  );
}

export default ProjectDisplay;