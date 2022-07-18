import { Link } from 'react-router-dom'
import './Header.scss'

export default function Header() {
    return (
    <div id="header">
	<nav> 
	    <div className="links">
		<Link to="/" className="hover-underline">Home</Link>
		<Link to="/menu" className="hover-underline">Menu</Link>
	    </div>

	    <Link to="/" className="hover-underline">
		<h1>/// ///</h1>
	    </Link>

	    <p>contact</p>
	</nav>
    </div>
    )
}
