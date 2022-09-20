import './BoxScore.css'
import Score from './Score';
import Team from './Team';

const BoxScore = ({boxScore}) => {
    return ( 
        <div className="box-score">
            <Team  boxScore={boxScore} />
            <Score boxScore={boxScore}/>
            <Team boxScore={boxScore}/>
        </div>
     );
}
 
export default BoxScore;