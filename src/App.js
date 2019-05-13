import React from 'react';
import Navbar from './Navbar/Navbar'
import AllStreamers from './components/AllStreamers'
import Streamers from './components/Streamers'
import AddStreamer from './components/AddStreamer'
import './app.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllStreamers />
      <Streamers />
      <AddStreamer />
    </div>
  );
}

export default App;
