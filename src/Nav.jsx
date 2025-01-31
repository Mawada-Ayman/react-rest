
import { NavLink } from "react-router-dom"

export default function Nav() {
  return (
    <nav className="nav">
        <ul>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'/contact'}>Contact</NavLink></li>
            <li><NavLink to={'/api'}>Api</NavLink></li>
        </ul>
    </nav>
  )
}
