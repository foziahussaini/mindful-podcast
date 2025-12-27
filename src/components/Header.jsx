import logoImage from '../assets/logo.png';
import discordlogo from '../assets/discord.svg';
import instagramlogo from '../assets/instagram.jpg';
import githublogo from '../assets/gitlogo.png';
import { useState } from 'react';
import '../App.css';

// lifting state up example
function MenuItem({name, activeMenu, color, onChange}){
    return(
        <li className={`menu-item ${activeMenu === name ? 'active' : ""}`}
        onClick={()  => onChange(name)}
        style={{color: activeMenu === name ? "rgb(97, 61, 25)" : "white"}}>
            {name}
        </li>
    );
}

function Header(){
    const [backgroundColor, setbackgroundColor] = useState("#a581cff9")
    const [height, setheight] = useState("50px")
    const [activeMenu, setActiveMenu] = useState('Home'); //why its not working?
   
    return (
        <header style={{backgroundColor, height}} className="header">
            <div className='logo-content'>
                <img className='image' src={logoImage} alt="" />
                <div className='title'> 
                    <h3>Mindful</h3> 
                    <h6>Mins_podcast</h6>
                </div>
            </div>
            <ul className='menu'>
                <MenuItem name={"Home"} activeMenu={activeMenu} onChange={setActiveMenu}/>
                <MenuItem name={"About"} activeMenu={activeMenu} onChange={setActiveMenu}/>
                <MenuItem name={"Contact"} activeMenu={activeMenu} onChange={setActiveMenu}/>
                <MenuItem name={"Episodes"} activeMenu={activeMenu} onChange={setActiveMenu}/>
            </ul>
            <ul className="social-icons">
                <li className="icon">
                    <a href="https://discord.gg/pAG6Eytj" target="_blank" >
                        <img src={discordlogo} className="discord" alt="discord" />
                    </a>
                </li>
                <li className="icon">
                    <a href="#" target="_blank" >
                        <img src={githublogo} className="github" alt="github" />
                    </a>
                </li>    
                <li className="icon">
                    <a href="#" target="_blank" >
                        <img src={instagramlogo} className="instagram" alt="instagram" />
                    </a>
                </li>    
            </ul>
        </header>
    )
}
export default Header;