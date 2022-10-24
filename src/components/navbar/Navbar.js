import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            {/* <Link to='/'>Home</Link> */}
            {/* <Link to='/roster'>Roster</Link> */}
            <Link to='/'>Roster</Link>
            <Link to='/schedule'>Schedule</Link>
        </nav>
     );
}
 
export default Navbar;