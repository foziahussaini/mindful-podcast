import { useState } from 'react';
import Header from './components/header';
// import PodcastVideo from './components/Content';
import Mainpage from './components/Content';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Mainpage title = "Welcome to Mindful Minutes Podcast" 
      description = "Join us as we explore practical tips and strategies to help you navigate the challenges of modern life with mindfulness and intention."/>
      {/* <PodcastVideo/> */}
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
