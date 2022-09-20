import './Team.css'

const Team = ({boxScore}) => {
    return ( 
        <div className="team">
            <img src="https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg" alt="" />
            <h1>Lakers</h1>
            <span>100</span>
            <p>30-29</p>
        </div>
     );
}
 
export default Team;