// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-con">
    <ul className="unoredered">
      <li>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>

      <li>
        <Link to="/about" className="nav-link">
          about
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
