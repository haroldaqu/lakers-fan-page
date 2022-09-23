import './Team.css'

const Team = ({finalScore}) => {
    return ( 
        <div className="team">
            <img src={`https://cdn.nba.com/logos/nba/${finalScore && finalScore.teamId}/primary/L/logo.svg`} alt="" />
            {/* <h1>{finalScore && finalScore.triCode}</h1>
            <span>{finalScore && finalScore.score}</span>
            <p>{`${finalScore && finalScore.win}-${finalScore && finalScore.loss}`}</p> */}
        </div>
     );
}
 
export default Team;