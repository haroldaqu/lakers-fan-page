import './Header.css'
import Navbar from "../navbar/Navbar";

const Header = () => {
    return ( 
        <header className="header">
            <div >
                <img src="https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg" alt="" />                
            </div>
            <Navbar />
        </header>
     );
}
 
export default Header;