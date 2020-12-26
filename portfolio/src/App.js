import React, { useState } from 'react'
import SearchAppBar from './components/Toolbar'
import Video from './components/Video'
import About from './components/About'
import SkillsAndContact from './components/SkillsAndContact'
import "./app.css"




function App (props) {


  return (
    <div className="App">
      <SearchAppBar />
      <div className="Video">
        <Video />
      </div>
      <About />
      <SkillsAndContact />
    </div>

  );
}

export default App;
