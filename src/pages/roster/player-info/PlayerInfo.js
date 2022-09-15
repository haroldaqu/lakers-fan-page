import PlayerInfoCard from '../../../components/player-info-cards/PlayerInfoCard'
import './PlayerInfo.css' 

const PlayerInfo = ({bioPlayer}) => {

    return ( 
        <div className="player-info">
            {
                bioPlayer ?
                    <div className="player-info-cont">
                            <div className="player-info-profiles">
                                <span>Jersey</span>
                                <p> {bioPlayer[0].jersey} </p>
                            </div>
                            <div className="player-info-profiles">
                                <span>Position</span>
                                <p> {bioPlayer[0].pos} </p>
                            </div>
                            <div className="player-info-profiles">
                                <span>Height</span>
                                <p> {`${bioPlayer[0].heightFeet}'${bioPlayer[0].heightInches}`} </p>
                            </div>
                            <div className="player-info-profiles">
                                <span>Weight</span>
                                <p> {bioPlayer[0].weightPounds} </p>
                            </div>
                            <div className="player-info-profiles">
                                <span>Debut</span>
                                <p> {bioPlayer[0].nbaDebutYear} </p>
                            </div>
                            <div className="player-info-profiles">
                                <span>Country</span>
                                <p> {bioPlayer[0].country} </p>
                            </div>
                        </div> : null
            }
        </div>
     );
}
 
export default PlayerInfo;