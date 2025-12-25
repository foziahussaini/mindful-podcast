import logoImage from '../assets/logo.png';
import discordlogo from '../assets/discord.svg';
import instagramlogo from '../assets/instagram.jpg';
import githublogo from '../assets/gitlogo.png';
function Header(){
    return (
        <header className="header">
            <div className='logo-content'>
                <img className='image' src={logoImage} alt="" />
                <div className='title'> 
                    <h3>Mindful</h3> 
                    <h6>Minutes</h6>
                </div>
            </div>
            <ul className='menu'>
                <li className='menu-bar'><a>Home</a></li>
                <li className="menu-bar"><a>About</a></li>
                <li className="menu-bar"><a>Contact</a></li>
                <li className="menu-bar"><a>Episodes</a></li>
            </ul>
            <ul className="social-icons">
                <li className="icon">
                    <a href="https://discord.gg/pAG6Eytj" target="_blank" >
                        <img src={discordlogo} className="logo" alt="discord" />
                    </a>
                </li>
                <li className="icon">
                    <a href="https://github.com/foziahussaini" target="_blank" >
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