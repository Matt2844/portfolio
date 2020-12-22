
import React from 'react';
import VideoCard from './VideoCard'
import '../video.css'



const projectData = [
  {
    title: 'Burgers-R-Us',
    thumbnail: 'picture here',
    description: 'Online ordering for restaurant',
    link: 'link goes here'
  },
  {
    title: 'MacBook Webpage Copy',
    thumbnail: 'picture here',
    description: 'Pixel by pixel copy of a webpage',
    link: 'link goes here'
  },
  {
    title: 'Tweeter',
    thumbnail: 'picture here',
    description: 'Twitter clone',
    link: 'link goes here',
  }
]



export default function Video (props) {

  return (
    <div className="video-container">
      <div>
        <p>Projects</p>
      </div>
      <div className="video-card">
        {projectData.map(project => (
          <p>Video Card here</p>
        ))}
      </div>

    </div>
  )
}