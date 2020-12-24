import React, { useState } from 'react'
import SearchAppBar from './components/Toolbar'
import Video from './components/Video'
import "./app.css"




function App (props) {


  return (
    <div className="App">
      <SearchAppBar />
      <div className="Video">
        <Video />
      </div>
    </div>

  );
}

export default App;
