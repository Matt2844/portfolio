import React from 'react'
import SearchAppBar from './components/Toolbar'
import Video from './components/Video'
import "./app.css"
import VideoScreen from './components/VideoScreen';


function App () {
  return (
    <div className="App">
      <SearchAppBar />
      <div className="Video">
        <VideoScreen />
        <Video />
      </div>
    </div>

  );
}

export default App;
