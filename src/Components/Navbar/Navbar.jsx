import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="container">
        <ul className="navbar-lists">
            <li className="navbar-list"><Link to={'/'}>HomePages</Link></li>
            <li className="navbar-list"><Link to={'/service'}>Service</Link></li>
            <li className="navbar-list"><Link to={'/about'}>About</Link></li>
        </ul>
    </div>
  )
}

export default Navbar