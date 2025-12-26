import { use, useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";


function PodcastVideo(){
    useEffect(() => {
    fetch('https://www.w3schools.com/html/mov_bbb.mp4')
      .then(res => res.json())
      .then(data => setPostcat(data));
}, []);
    const videoRef = useRef(null);

    return(
        <div>
            <video ref={videoRef} controls width="640">
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div style={{marginTop: '0.5rem'}}>
                <button onClick={() => videoRef.current && videoRef.current.play()}>Play</button>
                <button onClick={() => videoRef.current && videoRef.current.pause()} style={{marginLeft: '0.5rem'}}>Pause</button>
            </div>
        </div>
    )
}

export default PodcastVideo;