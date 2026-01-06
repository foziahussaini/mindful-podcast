import { useState } from 'react';
import Header from './components/header';
import Mainpage from './components/Content';
import VideoPlayer from "./components/VideoPlayer"; 

function App() {
  const [count, setCount] = useState(0)
  const [currentVideo, setCurrentVideo] = useState(null);

  return (
    <>
      <Header/>
      <Mainpage subTitle= "Welcome to" title = " Mindful Minutes Podcast" 
      description = "We explore practical tips and strategies to help you navigate the challenges of modern life with mindfulness and intention."/>
    </>
  )
}

export default App
