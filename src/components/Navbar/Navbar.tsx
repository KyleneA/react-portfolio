import "./Navbar.css";
import logo from "../../assets/logo/WebLogo2026.png";
import { IconHome, IconAbout, IconProject, IconHamburger } from "../../assets/icons/Icons";

function MenuList() {
    const iconSize = 24;
    return(
        <ul className="menu__list ">
            <li className="menu__item menu__item--current">
                <a href="/" className="menu__link">
                    <IconHome 
                        size={iconSize}
                    />
                    Home
                </a>
            </li>

            <li className="menu__item">
                <a href="/about-me" className="menu__link">
                    <IconAbout
                        size={iconSize}
                    />
                    About me
                </a>
            </li>

            <li className="menu__item">
                <a href="/projects" className="menu__link">
                    <IconProject 
                    size={iconSize}
                    />
                    Projects
                </a>
            </li>
        </ul>
    );
}

export default function Navbar() {
    return (
        <nav className="navbar">
            <a href="/" className="navbar__logo">
                <img src={logo} alt="Website logo" className="logo" />
            </a>

            <div className="menu menu--mobile">
                <button className="menu__btn">
                    <IconHamburger
                        size={28}
                    />
                </button>

                <MenuList />
            </div>

            <div className="menu menu--desktop">
                <MenuList />
            </div>
        </nav>
    );
}