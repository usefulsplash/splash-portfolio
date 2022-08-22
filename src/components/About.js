import React from 'react'
import "../styles/About.css"

function About() {
  return (
    <div id="about">
        <div className="about-title">About</div>
        <div className="about-subtitle">
            I graduated from St. John's University with a degree in Computer Science, with experience in languages and technologies such as:
        </div>
        <ul className="skill-list">
            <li className="skill-item">Java</li>
            <li className="skill-item">Python</li>
            <li className="skill-item">HTML5/CSS</li>
            <li className="skill-item">JavaScript</li>
            <li className="skill-item">React.js</li>
            <li className="skill-item">Node.js</li>
            <li className="skill-item">Jira/Confluence</li>
            <li className="skill-item">Linux (Ubuntu)</li>
        </ul>
        <div className="about-subtitle">
          When I'm not working or studying, you'll most likely catch me playing video games, tinkering with mechanical keyboards, or reading my favorite books and manga.
        </div>
    </div>
  )
}

export default About