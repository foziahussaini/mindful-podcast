import { useState } from "react"; 
import '../App.css';

function VideoPlayer({currentVideo}){
    if (!currentVideo) return null;
    return(
        <>
        <iframe src={currentVideo}  width="600" height="350" frameborder="0" allow="autoplay; encrypted-media;" allowfullscreen></iframe>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/lrhPTqholcc?si=2qAL1IL_Ot2B-t1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; allowfullscreen></iframe>
        <iframe width="600" height="315" src="https://www.youtube.com/embed/fcRANlaqf9c?si=mIn8aO4mi2wtuZp6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
        </>
       
    )
}

export default VideoPlayer
{/* <iframe title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}