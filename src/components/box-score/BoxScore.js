import './BoxScore.css'
import Score from './Score';
import Team from './Team';

const BoxScore = ({boxScore}) => {
    return ( 
        <div className="box-score">
            <Team  finalScore={boxScore.vTeam} />
            <Score boxScore={boxScore}/>
            <Team finalScore={boxScore.hTeam}/>
        </div>
     );
}
 
export default BoxScore;