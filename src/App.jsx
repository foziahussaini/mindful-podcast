import { useState } from 'react';
import Header from './components/header';
// import PodcastVideo from './components/Content';
import Mainpage from './components/Content';
import List from './components/episodeList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Mainpage subTitle= "Welcome to" title = " Mindful Minutes Podcast" 
      description = "We explore practical tips and strategies to help you navigate the challenges of modern life with mindfulness and intention."/>
    </>
  )
}

export default App
