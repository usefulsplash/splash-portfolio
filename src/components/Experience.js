import React from 'react'
import "../styles/Experience.css"

function Experience() {
  return (
    <div id='experience'>
        <div className='experience-title'>Experience</div>
        <div className='experience-job'>Information Technology Intern - Hermes of Paris USA</div>
        <div className='experience-date'>June 2021 - December 2021</div>
        <ul className='experience-duties'>
            <li className='experience-item'>Designed an improved knowledge base in Confluence for internal use, consolidating data from disparate sources and teams to easily access important info.</li>
            <li className='experience-item'>Spearheaded security documentation and procedures of point-of-sales systems ahead of the American Dream location's grand opening.</li>
            <li className='experience-item'>Collaborated with server migration team to set up two new remote data centers, with tasks ranging from operating system setup, network tests, physical installation, and progress documentation in Jira.</li>
        </ul>
        <div className='experience-job'>Buildings and Management Intern - The Metropolitan Museum of Art</div>
        <div className='experience-date'>January 2017 - May 2017</div> 
        <ul className='experience-duties'>
          <li className='experience-item'>Consolidated archived architecture spending budget data from past projects into Excel.</li>
          <li className='experience-item'>Assisted in logistics planning for new exhibits by working with contractors and curators to discuss physical exhibit components (placards, glass cases, etc.).</li>
          <li className='experience-item'>Facilitated guided tours for new and upcoming exhibits throughout the museum.</li>
        </ul>
    </div>
  )
}

export default Experience