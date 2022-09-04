import './CardTeamLeaders.css'

const CardTeamLeaders = () => {
    return ( 
        <div className="card-cont">
                <img src="https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png" alt="" className="player-headshot" />
                <span className='player-name'>Lebron James</span>
                <span className='player-ppg'>28.3 PPG</span>
        </div>
     );
}
 
export default CardTeamLeaders;