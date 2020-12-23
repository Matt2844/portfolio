
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
    title: 'Scheduler',
    thumbnail: './images/scheduler-thumb.png',
    description: 'LHL Independent Project',
    link: 'link goes here'
  },
  {
    title: 'Tweeter',
    thumbnail: './images/tweeter-thumbnail.png',
    description: 'LHL Independent Project',
    link: 'link goes here',
  },
  {
    title: 'MS-Paint',
    thumbnail: './images/ms-paint1.png',
    description: 'Just For Fun',
    link: 'link goes here'
  },
  {
    title: 'Nav Bar Function',
    thumbnail: './images/nav-bar-function.png',
    description: 'Just For Fun',
    link: 'link goes here'
  },
  {
    title: 'Coding Notebook',
    thumbnail: './images/pieces-of-code.png',
    description: 'Just For Fun',
    link: 'link goes here'
  },
  {
    title: 'Front End Quiz',
    thumbnail: './images/front-end-quiz.png',
    description: 'Just For Fun',
    link: 'link goes here'
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