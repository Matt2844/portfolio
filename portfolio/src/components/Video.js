
import React from 'react';
import VideoCard from './VideoCard'
import '../video.css'



const projectData = [
  {
    title: 'Burgers-R-Us',
    thumbnail: './images/burgers-r-us-thumb.png',
    description: 'LHL Group Project',
    link: 'link goes here'
  },
  {
    title: 'Webpage Copy',
    thumbnail: './images/macbook-webpage-copy.png',
    description: 'Independent Project',
    link: 'link goes here'
  },
  {
    title: 'Tweeter',
    thumbnail: './images/tweeter-thumbnail.png',
    description: 'LHL Independent Project',
    link: 'link goes here',
  }
]



export default function Video (props) {

  return (
    <div className="video-container">
      <div className="card">
        {projectData.map(project => (
          <VideoCard
            thumbnail={project.thumbnail}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>

    </div>
  )
}