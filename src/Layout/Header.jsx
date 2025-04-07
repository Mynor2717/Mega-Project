import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <Link to='/'><img src="" alt="" /></Link>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/garage">Garage Door</Link></li>
            <li><Link to="/gate">Gate Repair</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
          <button>Contact Us</button>
        </nav>
      </header>
    </>
  )
}
export default Header