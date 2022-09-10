import './PlayerCards.css'
import players from '../../data/data';

const PlayerCards = ({player}) => {
    return ( 
        <div className="player-cards">
            <div className="player__pic">
                <img src={player.src} alt="" className='player__pic--image'/>
                <button className='btn__view-stats'>View Stats</button>
            </div>   
            <div className="player__info">
                <span className='player__info--name'> {player.name} </span>
            </div>         
        </div>

     );
}
 
export default PlayerCards;