
import React, { useState } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { makeStyles } from '@material-ui/core/styles';

import '../video.css'




const projectData = [
  {
    title: 'Fresh BsQt',
    thumbnail: './images/fresh-thumb.png',
    description: 'LHL Group Project',
    link: 'https://www.youtube.com/embed/u-otrA9L96w',
    aboutProject: {
      title: 'Fresh BsQt',
      videoData: '617K views, developed Jan 28, 2021',
      description: `An online shopping website meant for local groceries. The site uses the users location and if a registered store is within a certain distance from the user, products will 
      display as available. A group project part of the LHL curriculum.`,
      challenges: `This was a full stack project built from scratch in ten days. That meant planning the idea, building out wireframes and designs in Figma, and setting up the database structure. 
      There was so much planning involved, that it actually took a while before we could write the first line of code. At first, this was an overwhelming experience. On top of all that, 
      none of us in the group of three knew how to work with the Google Maps API. The API was a lot of fun to work with, but we all had to learn on the go.`,
      positiveOutcomes: `It was a lot of fun to build a full stack project from scratch as a group. Sure, practicing whiteboarding questions can help you as a developer, 
      but it was such an amazing experience to do some 'real' developing. This meant we had to do more than just code. For example, it involved myself creating designs for a feature 
      on Figma, forwarding the designs to my team members, and asking for their input. Another example could be when I had to spend hours researching the Google Maps API. Although this project has thousands of lines of code, it was nice to be involved in the processes that 
      happen before the code was written.`
    }
  },
  {
    title: 'Burgers-R-Us',
    thumbnail: './images/burgers-r-us-thumb.png',
    description: 'LHL Group Project',
    link: 'https://www.youtube.com/embed/VUJDlB1THgA',
    aboutProject: {
      title: 'Burgers-R-Us',
      videoData: '502K views, developed Dec 4, 2020',
      description: `An online food ordering system for an individual restaurant. Users can register an account, 
      login, view checkout, and receive personalized messages. Built primarily with Express, NodeJS, SASS, and jQuery. A
      group project that was part of the Lighthouse Labs curriculum.`,
      challenges: `Learning how to code on a group project. This mostly meant learning how to properly use version control
      when working as a team. We got off to a slow start because we had to figure out do tasks like creating and accepting a pull request.
      On top of that, this was a remote group project.`,
      positiveOutcomes: `Discovered that group projects can be fun, and they can make you a better developer. You get to learn from 
      other developers when you see them do something that you did not know how to do. Of course, it was also great to learn how to 
      use version control when working with others on the same project.`,
    }
  },
  {
    title: 'Webpage Copy',
    thumbnail: './images/macbook-webpage-copy.png',
    description: 'Independent Project',
    link: "https://www.youtube.com/embed/Sgu0YXcb_eU",
    aboutProject: {
      title: 'Apple Webpage Copy',
      videoData: '23K views, developed Sep 15, 2020',
      description: `A pixel for pixel copy of a webpage from Apple's website. Built using only HTML and CSS.`,
      challenges: `I could barely write a line of code before this project. This project was the most simple out of all the projects
      I have done, yet I had to Google something every 5 minutes. I also had no idea how difficult or easy the project would be.
      I simply had to think that if I can figure out how to copy the nav bar, I can probably do everything else.`,
      positiveOutcomes: `800 lines of CSS later, I gained a solid understanding of the language. Also, knowing that I 
      could build a webpage without any prior knowledge of CSS or HTML gave me a lot of confidence.`
    }
  },
  {
    title: 'Scheduler',
    thumbnail: './images/scheduler-thumb.png',
    description: 'LHL Independent Project',
    link: 'https://www.youtube.com/embed/jYyT3PK9YZg',
    aboutProject: {
      title: 'Scheduler',
      videoData: '57K views, developed Dec 17, 2020',
      description: `A management system built with ReactJS. Users can schedule an interview,
        edit an appointment, and delete an appointment. Linked to a database that is updated through
        API requests. Independent project that was part of the Lighthouse Labs curriculum.`,
      challenges: `Since this was my first React project, learning how to use React would be the most obvious challenge.
      Even though I was very comfortable with Javascript, learning React is no small task. It takes HTML, CSS, JS, and
      packages it all together. At the same time it introduces new concepts. Surprisingly, it did not take very long to wrap my head around the idea of state or props.
      My biggest challenge was learning JSX syntax.`,
      positiveOutcomes: `Besides becoming comfortable with React and its constituents like JSX,
      I learned that coding requires a mental shift at times. In my personal experience, learning React was more about
      trying to wrap my head around concepts, rather than learning through repetition. For example, writing a lot of jQuery
      is a great way to improve your jQuery skills. When it comes to improving your React skills, you might have more luck
      by reading theory or watching Youtube tutorials.
      Essentially, React taught me that I need to be extremely flexible while learning.`,

    }
  },
  {
    title: 'Tweeter',
    thumbnail: './images/tweeter-thumbnail.png',
    description: 'LHL Independent Project',
    link: 'https://www.youtube.com/embed/jtYK8moIw34',
    aboutProject: {
      title: 'Tweeter',
      videoData: '19K views, developed Nov 20, 2020',
      description: `A Twitter clone built using jQuery, HTML, and CSS. An independent project that was part of the Lighthouse Labs curriculum.`,
      challenges: `Dynamically rendering data and getting that data to persist after refreshing the page. Going into 
      this project I did not have a good understanding of dynamic data and how it interacts with the server. It was difficult
      to visualize what is happening behind the scenes.`,
      positiveOutcomes: `Had the opportunity to realize that dynamic content is not as difficult as it seems. Also, it is a pretty 
      good feeling when you click refresh and still see the data sitting there.`
    }
  },
  {
    title: 'MS-Paint',
    thumbnail: './images/ms-paint1.png',
    description: 'Just For Fun',
    link: 'https://www.youtube.com/embed/wgrhSCet7Jg',
    aboutProject: {
      title: 'MS-Paint Hat Tip',
      videoData: '1.7M views, developed Nov 10, 2020',
      description: `A Microsoft Paint themed project, built for fun during my spare time.`,
      challenges: `A month before building this brainless app, I came across a web developers portfolio where you could
      draw a moustache on her face. I thought it was the coolest thing in the world at the time, and I wanted to figure out how it
      was done. Figuring out how on earth she did that was sadly the biggest challenge.`,
      positiveOutcomes: `Overall, coding and building web apps is fun. However, there are often deadlines, difficult problems, roadblocks, 
      and specific requirements that have to be met. Taking a step back after a serious project to build something creative and light is a great way
      to ensure web development is always fun and balanced.`
    }
  },

  {
    title: 'Coding Notebook',
    thumbnail: './images/pieces-of-code.png',
    description: 'Just For Fun',
    link: 'https://www.youtube.com/embed/qsCvRFJ1wTE',
    aboutProject: {
      title: 'Coding Notebook',
      videoData: '3K views, developed Nov 5, 2020',
      description: `A personal notebook to store useful material so that it can be referenced again in the future. Also helps solidify new concepts.
      Project is meant to be ongoing.`,
      challenges: `Having the time to update it. It is built so that it is easy to maintain and update, however, when you are learning
      10 new things a day, being able to update it all the time is difficult.`,
      positiveOutcomes: `Experiencing the benefits of web development first hand. Web apps are usually intended to make our lives
      easier, and this project has certainly done that. I can reference the content in this project efficiently. If I put the material into a word document or physical notebook, I would probably forget about it, and it would be difficult to reference. `
    }
  },

]




const useStyles = makeStyles((theme) => ({
  videoFrame: {
    width: '854px',
    height: '480px',
    [theme.breakpoints.down('md')]: {
      width: '640px',
      height: '360px',
      marginLeft: '0em',
    },
    [theme.breakpoints.down('sm')]: {
      width: '426px',
      height: '240px',
      marginLeft: '0em',
    },
  }
}));



export default function Video (props) {
  const classes = useStyles();

  const [videoSrc, setVideoSrc] = useState(projectData[3].link)
  const [descTitle, setTitle] = useState(projectData[3].aboutProject.title)
  const [videoData, setVideoData] = useState(projectData[3].aboutProject.videoData)
  const [desc, setDesc] = useState(projectData[3].aboutProject.description)
  const [challenges, setChallenges] = useState(projectData[3].aboutProject.challenges)
  const [outcomes, setOutcomes] = useState(projectData[3].aboutProject.positiveOutcomes)

  return (

    <div className="main-video-container">

      <div className="video-screen-container">
        <iframe className={classes.videoFrame} src={videoSrc} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="description">
          <h3 className="project-title">{descTitle}</h3>
          <h5 className="project-views-date">{videoData}</h5><hr />
          <h3 className="project-description-title">Description</h3>
          <p className="project-description-text">{desc}</p><hr />
          <h3 className="project-challenges-title">Challenges</h3>
          <p className="project-challenges-text">{challenges}</p><hr />
          <h3 className="project-outcomes-title">Positive Outcomes</h3>
          <p className="project-outcomes-text">{outcomes}</p>
        </div>
      </div>

      <div className="video-container" >
        <div className="card">
          {projectData.map(project => (
            <div className="video-card" onClick={() => {
              setVideoSrc(project.link)
              setTitle(project.aboutProject.title)
              setVideoData(project.aboutProject.videoData)
              setDesc(project.aboutProject.description)
              setChallenges(project.aboutProject.challenges)
              setOutcomes(project.aboutProject.positiveOutcomes)
            }}
            >
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


