import './Team.css'

const Team = ({finalScore}) => {
    return ( 
        <div className="team">
            <img src={`https://cdn.nba.com/logos/nba/${finalScore.teamId}/primary/L/logo.svg`} alt="" />
            <h1>{finalScore.triCode}</h1>
            <span>{finalScore.score}</span>
            <p>{`${finalScore.win}-${finalScore.loss}`}</p>
        </div>
     );
}
 
export default Team;