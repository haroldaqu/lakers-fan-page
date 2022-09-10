import Averages from './Averages';
import Name from './Name';
import PlayerInfo from './PlayerInfo';
import Sidebar from './Sidebar';
import './StatsModal.css'

const StatsModal = () => {
    return ( 
        <div className="stats-modal">
            <div className="player-cont">
                <Sidebar />
                <img src={require('/Users/Harold/lakers-fan-page/src/images/westbrook.png')} alt="" className="player-img" />
            </div>
            <div className="player-about">
                <Name />
                <div className="player-info">
                    <Averages/>
                    <Averages/>
                    <Averages/>
                    <Averages/>
                    <Averages/>
                    <Averages/>
                    <Averages/>
                    <Averages/>
                </div>
                <div className="player-info">In his first season donning the Purple and Gold, Russell Westbrook started and played the most games of any Laker (78 games). Brodie added 10 triple-doubles to his league-leading career stat and finished fourth in the NBA.</div>
            </div>
        </div>
     );
}
 
export default StatsModal;