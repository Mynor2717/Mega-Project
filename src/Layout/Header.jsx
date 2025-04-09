import { Link } from "react-router-dom";
import '../App.css';
import Logo from '../assets/Images/Logo1Mega.png'


const Header = () => {
  return (
    <>
      <header className="headers_P">
        <nav className="navbar">
          <Link to='/'><img src={Logo} alt="LogoImage" /></Link>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/garage">Garage Door</Link></li>
            <li><Link to="/gate">Gate Repair</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          <button className="nav_button">Contact Us: ### ### ###</button>
          </ul>
        </nav>
      </header>
    </>
  )
}
export default Header