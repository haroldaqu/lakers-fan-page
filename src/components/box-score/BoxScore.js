import './BoxScore.css'
import Score from './Score';
import Team from './Team';

const BoxScore = ({boxScore}) => {
    return ( 
        <div className="box-score">
            <div className="box-score__teams">
                <Team  finalScore={boxScore && boxScore.vTeam} />
                <h1>Final</h1>
                <Team finalScore={boxScore && boxScore.hTeam}/>
            </div>
            <Score boxScore={boxScore}/>
        </div>
     );
}
 
export default BoxScore;