
import React, { useState } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import '../video.css'



const projectData = [
  {
    title: 'Burgers-R-Us',
    thumbnail: './images/burgers-r-us-thumb.png',
    description: 'LHL Group Project',
    link: 'https://www.youtube.com/embed/VUJDlB1THgA'
  },
  {
    title: 'Webpage Copy',
    thumbnail: './images/macbook-webpage-copy.png',
    description: 'Independent Project',
    link: "https://www.youtube.com/embed/Sgu0YXcb_eU"
  },
  {
    title: 'Scheduler',
    thumbnail: './images/scheduler-thumb.png',
    description: 'LHL Independent Project',
    link: 'https://www.youtube.com/embed/jYyT3PK9YZg'
  },
  {
    title: 'Tweeter',
    thumbnail: './images/tweeter-thumbnail.png',
    description: 'LHL Independent Project',
    link: 'https://www.youtube.com/embed/jtYK8moIw34'
  },
  {
    title: 'MS-Paint',
    thumbnail: './images/ms-paint1.png',
    description: 'Just For Fun',
    link: 'https://www.youtube.com/embed/wgrhSCet7Jg'
  },

  {
    title: 'Coding Notebook',
    thumbnail: './images/pieces-of-code.png',
    description: 'Just For Fun',
    link: 'https://www.youtube.com/embed/qsCvRFJ1wTE'
  },

]



export default function Video (props) {

  const [videoSrc, setVideoSrc] = useState(projectData[2].link)


  return (

    <div className="main-video-container">

      <div className="video-screen-container">
        <iframe width="854" height="480" src={videoSrc} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="description">
          <h3 className="project-title">Scheduler</h3>
          <h5 className="project-views-date">57K views, developed Dec 17, 2020 </h5><hr />
          <h3 className="project-description-title">Description</h3>
          <p className="project-description-text">A management system built with ReactJS. Users can schedule an interview,
          edit an appointment, and delete an appointment. Linked to a database that is updated through
            API requests. Independent project that was part of the Lighthouse Labs curriculum.</p><hr />
          <h3 className="project-challenges-title">Challenges</h3>
          <p className="project-challenges-text">Since this was my first React project, learning how to use React would be the most obvious challenge.
          Even though I was very comfortable with Javascript, learning React is no small task. It takes HTML, CSS, JS, and
          packages it all together. At the same time it introduces new concepts. Surprisingly, it did not take very long to wrap my head around the idea of state or props.
          My biggest challenge was learning JSX syntax.</p><hr />
          <h3 className="project-outcomes-title">Positive Outcomes</h3>
          <p className="project-outcomes-text">Besides becoming comfortable with React and its constituents like JSX,
          I learned that coding requires a mental shift at times. In my personal experience, learning React was more about
          trying to wrap my head around concepts, rather than learning through repetition. For example, writing a lot of jQuery
          is a great way to improve your jQuery skills. When it comes to improving your React skills, you might have more luck
          by reading theory or watching Youtube tutorials.<p></p>
          Essentially, React taught me how to be extremely flexible while learning.</p>
        </div>
      </div>

      <div className="video-container" >
        <div className="card">
          {projectData.map(project => (
            <div className="video-card" onClick={() => setVideoSrc(project.link)}>
              <img className="video-thumbnail" alt="video thumbnail" src={project.thumbnail} />
              <div className="video-description-container">
                <h5 className="video-card-title">{project.title}</h5>
                <h6 className="video-card-desc">{project.description}</h6>
                <i className="play-arrow"><PlayArrowIcon fontSize="large" /></i>
              </div>
            </div >
          ))}
        </div>
      </div>



    </div>
  )
}

