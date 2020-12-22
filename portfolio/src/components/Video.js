
import React from 'react';
import VideoCard from './VideoCard'
import '../video.css'



const projectData = [
  {
    title: 'Burgers-R-Us',
    thumbnail: 'picture here',
    description: 'LHL Group Project',
    link: 'link goes here'
  },
  {
    title: 'MacBook Webpage Copy',
    thumbnail: 'picture here',
    description: 'Independent Project',
    link: 'link goes here'
  },
  {
    title: 'Tweeter',
    thumbnail: 'picture here',
    description: 'LHL Independent Project',
    link: 'link goes here',
  }
]



export default function Video (props) {

  return (
    <div className="video-container">
      <div>
        <p>Projects</p>
      </div>
      <div className="card">
        {projectData.map(project => (
          <VideoCard />
        ))}
      </div>

    </div>
  )
}