import React from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import '../video.css'



export default function VideoCard () {

  const Play = () => {
    console.log('clicked play');
  }

  return (
    <div className="video-card" onClick={Play}>
      <img className="video-thumbnail" alt="video thumbnail" src="./images/burgers-r-us-thumb.png" />
      <div className="video-description-container">
        <h5 className="video-card-title">Burgers-R-us</h5>
        <h6 className="video-card-desc">Group Project</h6>
        <i className="play-arrow"><PlayArrowIcon fontSize="large" /></i>
      </div>
    </div>
  )
}