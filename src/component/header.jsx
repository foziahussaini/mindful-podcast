import logo from '../assets/logo.png'
function Header(){
    return (
        <header className="header">
            <div className='logo-content'>
                <img className='image' src={"./src/assets/logo.png"} alt="" />
                <h3 className='title'>Mindful Minutes</h3>
            </div>
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
                <li><a>dashboard</a></li>
            </ul>
            <ul>
                <li>https://discord.gg/pAG6Eytj</li>
                <li><i class="fa-brands fa-discord"></i></li>
            </ul>
        </header>
    )
}
export default Header;