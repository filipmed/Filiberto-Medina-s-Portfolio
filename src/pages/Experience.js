import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import '../styles/Experience.css'

function Experience() {
  return (
    <div className='experience'>
      
      <VerticalTimeline lineColor="#252A34">
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='2015-2019'
        iconStyle={{background:'#252A34',color:'#08D9D6'}}
        icon = {<SchoolIcon/>}
        >
          <h3>Dr Maya Angelou Community High School, Los Angeles, California</h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='2019-2022'
        iconStyle={{background:'#252A34',color:'#08D9D6'}}
        icon = {<SchoolIcon/>}
        >
          <h3>Santa Monica College and Los Angeles Trade Tech College , Los Angeles, California</h3>
          <p>Transfer Credit</p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='2022-2024'
        iconStyle={{background:'#252A34',color:'#08D9D6'}}
        icon = {<SchoolIcon/>}
        >
          <h3>California State University Dominguez Hills , Los Angeles, California</h3>
          <p>Current Student</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

    </div>
  )
}

export default Experience