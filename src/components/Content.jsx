import { useRef } from "react";
import { useEffect, useState } from "react";
import PodcastImage from '../assets/podcast1.jpeg';
import stressImage from '../assets/stress.jpeg';
import timeImage from '../assets/time.jpeg';
import List from '../components/episodeList';
import '../App.css';

function MainPage({subTitle, title, description}) {
    const [color] = useState("#24093e");
    const [displayTitle, setDisplayTitle] = useState("");
    const [width, setWidth] = useState("60px");
    const [height, setHeight] = useState("60px");
    const [borderRadius, setBorderRadius] = useState("50%");
    const [displayList, setDisplayList] = useState(false);

    useEffect(() => {
    setDisplayTitle(""); 

    const interval = setInterval(() => {
      setDisplayTitle(prev => {
        if (prev.length === title.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + title[prev.length];
      });
    }, 80);

    return () => clearInterval(interval);
  }, [title]);

    // useEffect(() => {
    //     setDisplayTitle("");
    //     const interval = setInterval(() => {
    //         setDisplayTitle(prev => {prev.length === title.length ? prev : prev + title[prev.length]});
    //     }, 70);

    //     return () => clearInterval(interval);
    // }, [title]);

    return(
        <div className="main-page">
           <img src={PodcastImage} alt="image" className="podcast-image"/>
           <div className="content">
              <h2 style={{color}} className="subtitle">{subTitle}</h2> 
              <h2 style={{color}} className="topic">{displayTitle}</h2>
              <p style={{color}} className="details">{description}</p>
              <div className="pic">
                <img style={{width, height, borderRadius}} src={stressImage} alt="stress" 
                onClick={() => setDisplayList(true)}/> {displayList && <List className="episode-list"/>}
                <img style={{width, height, borderRadius}} src={timeImage} alt="time" />
              </div>
           </div>
        </div>
    )
}
export default MainPage;

// const podcastVideo = memo(function PodcastVideo(src){
//     const videoRef = useRef(null);

//     return(
//         <div>
//             <video ref={videoRef} controls width="240">
//                 <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
//             </video>

//             {/* <div style={{marginTop: '0.5rem'}}>
//                 <button onClick={() => videoRef.current && videoRef.current.play()}>Play</button>
//                 <button onClick={() => videoRef.current && videoRef.current.pause()} style={{marginLeft: '0.5rem'}}>Pause</button>
//             </div> */}
//         </div>
//     )
// });
