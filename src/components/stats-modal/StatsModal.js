import Name from '../name/Name';
import PlayerInfo from '../player-info/PlayerInfo';
import Sidebar from '../sidebar/Sidebar';
import './StatsModal.css'

const StatsModal = ({ data, statPlayer, bioPlayer}) => {
    return ( 
        <div className="modal">
            <div className="modal__player">
                <Sidebar data ={ data } />
                <img src={statPlayer && statPlayer.src} alt="" className="player__img" />
            </div>
            <div className="modal__about">
                <Name statPlayer={statPlayer}/>
                <PlayerInfo bioPlayer={bioPlayer} />
                <div className="modal__bio">{statPlayer && statPlayer.bio}</div>
            </div>
        </div>
     );
}
 
export default StatsModal;