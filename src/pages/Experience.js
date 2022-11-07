import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import '../styles/Experience.css'
import WorkIcon from '@material-ui/icons/Work';


function Experience() {
  return (
    <div className='experience'>
      
      <VerticalTimeline lineColor="#ffff">
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        contentStyle={{ backgroundColor: '#3F72AF', color: '#ffff' }}
         contentArrowStyle={{ borderRight: '7px solid  #3F72AF' }}
        date='2015-2019'
        iconStyle={{background:'#3F72AF',color:'#EAEAEA'}}
        icon = {<SchoolIcon/>}
        >
          <h3>Dr Maya Angelou Community High School, Los Angeles, California</h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        contentStyle={{ backgroundColor: '#3F72AF', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #3F72AF' }}
        date='2019-2022'
        iconStyle={{background:'#3F72AF',color:'#EAEAEA'}}
        icon = {<SchoolIcon/>}
        >
          <h3>Santa Monica College and Los Angeles Trade Tech College , Los Angeles, California</h3>
          <p>Transfer Credit</p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        contentStyle={{ backgroundColor: '#3F72AF', color: '#fff' }}
         contentArrowStyle={{ borderRight: '7px solid  #3F72AF' }}
        date='2022-2024'
        iconStyle={{background:'#3F72AF',color:'#EAEAEA'}}
        icon = {<SchoolIcon/>}
        >
          <h3>California State University Dominguez Hills , Los Angeles, California</h3>
          <p>Current Student</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--work'
        contentStyle={{ backgroundColor: '#364F6B', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #364F6B' }}
        date='July 2022-Current'
        iconStyle={{background:'#364F6B',color:'#EAEAEA'}}
        icon = {<WorkIcon />}
        >
          <h3>Our Future Reads</h3>
          <p>Software Developer</p>
          <ul className='lists'>
            <li className='list'>
            Solely responsible for designing and developing Login/Register System for new and returning users.

            </li >
            <li className='list'>
             Utilized test driven development to build out deploy the feature in less than 4 months.
            </li>
            <li className='list'>
            Updated old code bases to modern development standards, improving functionality using React.js.
            </li>
            
            
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>

    </div>
  )
}

export default Experience