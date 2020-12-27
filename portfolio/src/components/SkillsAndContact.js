import React from 'react'


export default function SkillsAndContact () {


  return (
    <div className="skills-and-contact">
      <div className="skills-contact-container">
        <div className="skills">
          <p>In the <span>SEARCH</span> bar, type:</p><p></p>
          <h3>skills</h3><p></p>
          <p className="skills-search-instructions">to view languages, libraries, and other tools that I have worked with in the past.</p>
        </div>
        <div className="contact">
          <p>Contact:</p>
          <a className="email-link" href="mailto:matt.hd.ford@gmail.com">matt.hd.ford@gmail.com</a>
          <p className="contact-or">or</p>
          <a href="https://www.linkedin.com/sharing/share-offsite/?url=http://www.linkedin.com/in/matthew-ford-4327387b/"><img className="linkedin-contact" src="./images/linkedin-full.png" /></a>

        </div>
      </div>

    </div>
  )
}