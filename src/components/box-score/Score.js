import './Score.css'

const Score = ({boxScore}) => {
    return ( 
        <div className="score">
            <div className="team-score">
                <h1>{boxScore && boxScore.vTeam.triCode}</h1> 
                <span>{boxScore && boxScore.vTeam.score}</span>  
                <p>{`${boxScore && boxScore.vTeam.win}-${boxScore && boxScore.vTeam.loss}`}</p>             
            </div>
            <div className="game-score">
                <div className="score__quarters">
                    <p className='empty' >E</p>
                    <p>Q1</p>
                    <p>Q2</p>
                    <p>Q3</p>
                    <p>Q4</p>
                </div>
                <div className="score__team score__team--home">
                    <p className='team-name' >{boxScore && boxScore.vTeam.triCode}</p>
                    {boxScore && boxScore.hTeam.linescore.map(quarter => <p>{quarter.score}</p> )}
                </div>
                <div className="score__team score__team--away">
                    <p className='team-name' >{boxScore && boxScore.hTeam.triCode}</p>
                    {boxScore && boxScore.vTeam.linescore.map(quarter => <p>{quarter.score}</p> )}
                </div>
                <button>Watch</button>
            </div>
            <div className="team-score">
                <h1>{boxScore && boxScore.hTeam.triCode}</h1> 
                <span>{boxScore && boxScore.hTeam.score}</span>  
                <p>{`${boxScore && boxScore.hTeam.win}-${boxScore && boxScore.hTeam.loss}`}</p>                   
            </div>
        </div>
     );
}
 
export default Score;