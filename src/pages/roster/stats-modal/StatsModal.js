import Averages from '../../../components/stat-cards/Averages';
import Name from '../name/Name';
import PlayerInfo from '../player-info/PlayerInfo';
import Sidebar from '../sidebar/Sidebar';
import players from '../../../data/data';
import './StatsModal.css'

const StatsModal = ({ data, profile, statPlayer, bioPlayer}) => {
    return ( 
        <div className="stats-modal">
            <div className="player-cont">
                <Sidebar data ={ data } />
                <img src={statPlayer && statPlayer.src} alt="" className="player-img" />
            </div>
            <div className="player-about">
                <Name statPlayer={statPlayer}/>
                <PlayerInfo bioPlayer={bioPlayer} />
                <div className="player-info">{statPlayer && statPlayer.bio}</div>
            </div>
        </div>
     );
}
 
export default StatsModal;