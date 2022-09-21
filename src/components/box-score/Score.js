import './Score.css'

const Score = ({boxScore}) => {
    return ( 
        <div className="score">
            <h1>Final</h1>
            <div className="score__quarters">
                <p>Q1</p>
                <p>Q2</p>
                <p>Q3</p>
                <p>Q4</p>
            </div>
            <div className="score__team--home">
                {boxScore.hTeam.linescore.map(quarter => <p>{quarter.score}</p> )}
            </div>
            <div className="score__team--away">
                {boxScore.vTeam.linescore.map(quarter => <p>{quarter.score}</p> )}
            </div>
            <button>Watch</button>
        </div>
     );
}
 
export default Score;