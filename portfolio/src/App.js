import React from 'react'
import SimpleBackdrop from './components/SimpleBackdrop'
import SearchAppBar from './components/Toolbar'
import Video from './components/Video'
import "./app.css"


function App () {
  return (
    <div className="App">
      <SearchAppBar />
      <p>Hello</p>
      <SimpleBackdrop />
      <div className="Video">
        <Video />
      </div>
    </div>

  );
}

export default App;
