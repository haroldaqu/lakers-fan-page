import PlayerInfoCard from '../player-info-cards/PlayerInfoCard';
import './PlayerInfo.css' 

const PlayerInfo = ({bioPlayer}) => {

    return ( 
        <div className="info">
            {/* {
                bioPlayer ? */}
                    <div className="info__cont">
                            <div className="info__item">
                                <span>Jersey</span>
                                <p> 0 </p>
                            </div>
                            <div className="info__item">
                                <span>Position</span>
                                <p> G </p>
                            </div>
                            <div className="info__item">
                                <span>Height</span>
                                <p> 6'10 </p>
                            </div>
                            <div className="info__item">
                                <span>Weight </span>
                                <p> 210 lbs </p>
                            </div>
                            <div className="info__item">
                                <span>Debut</span>
                                <p> 2003 </p>
                            </div>
                            <div className="info__item">
                                <span>Country</span>
                                <p> USA </p>
                            </div>
                        </div> 
            {/* } */}
        </div>
     );
}
 
export default PlayerInfo;