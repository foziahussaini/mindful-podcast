import { useState } from "react";
import '../App.css';
// import { useRef } from "react"; 

function EpisodeList({episodes, onClick}){
    const [color] = useState("#24093e");

  return(
      <li className="list" style={{color}}
      onClick={onClick}>{episodes}</li>
  );
}

function List({onEpisodeClick}){
    return(
      <>
      <ul className="episode-container">
        <EpisodeList episodes={"Episode 1: Understanding Stress"} onClick={() => onEpisodeClick("https://www.youtube.com/embed/qUz93CyNIz0?si=kCOYlz9UAYw89nJr")}/>
        <EpisodeList episodes={"Episode 2: relief stress Tips"} onClick={() => onEpisodeClick("https://www.youtube.com/embed/lrhPTqholcc?si=2qAL1IL_Ot2B-t1Y")}/>
        <EpisodeList episodes={"Episode 3: Mindfulness Practices"} onClick={() => onEpisodeClick("https://www.youtube.com/embed/fcRANlaqf9c?si=mIn8aO4mi2wtuZp6")}/>
      </ul>
      </>
    )
}
export default List