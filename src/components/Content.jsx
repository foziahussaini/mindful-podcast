import { useRef } from "react";
import { useEffect, useState } from "react";
import  PodcastImage from '../assets/podcast1.jpeg';
import '../App.css';

function MainPage({title, description}) {
    const [color] = useState("#24093e");
    const [displayTitle, setDisplayTitle] = useState("");

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
              <h2 style={{color}} className="topic">{displayTitle}</h2>
              <p className="details">{description}</p>
           </div>
        </div>
    )
}
export default MainPage;

// function PodcastVideo(){
//     const videoRef = useRef(null);

//     return(
//         <div>
//             <video ref={videoRef} controls width="240">
//                 <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
//             </video>

//             <div style={{marginTop: '0.5rem'}}>
//                 <button onClick={() => videoRef.current && videoRef.current.play()}>Play</button>
//                 <button onClick={() => videoRef.current && videoRef.current.pause()} style={{marginLeft: '0.5rem'}}>Pause</button>
//             </div>
//         </div>
//     )
// }
