import './BoxScore.css'
import Score from './Score';
import Team from './Team';

const BoxScore = ({boxScore}) => {
    return ( 
        <div className="box-score">
            <div className="box-score__teams">
                <div className="team">
                    <img src={`https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg`} alt="" />
                </div>
                <h1>Final</h1>
                <div className="team">
                    <img src={`https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg`} alt="" />
                </div>
            </div>
            <Score boxScore={boxScore}/>
        </div>
     );
}
 
export default BoxScore;