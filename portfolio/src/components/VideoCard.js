import React from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import '../video.css'




export default function VideoCard (props) {

  const Play = () => {
    console.log('clicked play');
  }

  return (
    <div className="video-card" onClick={Play}>
      <img className="video-thumbnail" alt="video thumbnail" src={props.thumbnail} />
      <div className="video-description-container">
        <h5 className="video-card-title">{props.title}</h5>
        <h6 className="video-card-desc">{props.description}</h6>
        <i className="play-arrow"><PlayArrowIcon fontSize="large" /></i>
      </div>
    </div>
  )
}