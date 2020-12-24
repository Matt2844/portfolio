
import React, { useState } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
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

