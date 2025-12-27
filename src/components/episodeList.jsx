import { useState } from "react";
import '../App.css';
// import { useRef } from "react"; 

function EpisodeList({episodes}){
    const [color] = useState("#24093e");
  return(
      <li className="list" style={{color}}>{episodes}</li>
  );
}

function List(){
    return(
      <ul className="episode-container">
        <EpisodeList episodes={"Episode 1: Understanding Stress"}/>
        <EpisodeList episodes={"Episode 2: relief stress Tips"}/>
        <EpisodeList episodes={"Episode 3: Mindfulness Practices"}/>
      </ul>
    )
}
export default List;