import React from 'react';
import './App.css';
import AllStreamers from './components/AllStreamers'
import Streamers from './components/Streamers'
import AddStreamer from './components/AddStreamer'

function App() {
  return (
    <div className="App">
      <AllStreamers />
      <Streamers />
      <AddStreamer />
    </div>
  );
}

export default App;
