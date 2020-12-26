import React from 'react';





export default function About () {


  return (
    <div className="about-section">

      <div className="about-content">
        <img className="about-photo" src="./images/profilePic.png" />
        <div className="about-description">
          <ul>
            <li> Full stack web developer in Toronto.<img className="canada-flag" src="./images/canada-flag.png" /></li>
            <li> Appreciates good UI/UX.</li>
            <li> Likes to ski and sit around bonfires.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}