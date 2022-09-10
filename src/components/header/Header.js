import './Header.css'
import Navbar from "../navbar/Navbar";

const Header = () => {
    return ( 
        <header className="navbar">
            <div className="laker-logo">
                <img src="https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg" alt="" />                
            </div>

            <Navbar />
        </header>
     );
}
 
export default Header;