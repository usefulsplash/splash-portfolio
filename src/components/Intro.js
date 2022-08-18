import React from 'react';
import "../styles/Intro.css";
import pfp from "../assets/pfp.jpg"

function Intro() {
  return (
    <div id="intro">
      <div className='intro-text'>
        <h2>Yo! This is Enrique.</h2>
        <p>
            I'm a computer programmer and systems administrator from New York, with interests in full-stack development, DevOps, content creation, and making sure things are accessible.
        </p>
      </div>
      <div className="pfp">
        <img src={pfp} alt="me" />
      </div>
    </div>
  )
}

export default Intro