import PlayerInfoCard from '../player-info-cards/PlayerInfoCard';
import './PlayerInfo.css' 

const PlayerInfo = ({bioPlayer}) => {

    return ( 
        <div className="info">
            {
                bioPlayer ?
                    <div className="info__cont">
                            <div className="info__item">
                                <span>Jersey</span>
                                <p> {bioPlayer[0].jersey} </p>
                            </div>
                            <div className="info__item">
                                <span>Position</span>
                                <p> {bioPlayer[0].pos} </p>
                            </div>
                            <div className="info__item">
                                <span>Height</span>
                                <p> {`${bioPlayer[0].heightFeet}'${bioPlayer[0].heightInches}`} </p>
                            </div>
                            <div className="info__item">
                                <span>Weight </span>
                                <p> {bioPlayer[0].weightPounds} </p>
                            </div>
                            <div className="info__item">
                                <span>Debut</span>
                                <p> {bioPlayer[0].nbaDebutYear} </p>
                            </div>
                            <div className="info__item">
                                <span>Country</span>
                                <p> {bioPlayer[0].country} </p>
                            </div>
                        </div> : null
            }
        </div>
     );
}
 
export default PlayerInfo;