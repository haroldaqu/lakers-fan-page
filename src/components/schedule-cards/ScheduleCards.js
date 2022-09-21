import { useState } from 'react'
import { useEffect } from 'react'
import './ScheduleCards.css'

const ScheduleCards = ({filteredGame, setToggleModal, boxScoreDataHandle}) => {
    const [results, setResults] = useState(null)
    const winLossHandle = () => {
        if (filteredGame[0].vTeam.score < filteredGame[0].hTeam.score && filteredGame[0].isHomeTeam || filteredGame[0].vTeam.score > filteredGame[0].hTeam.score && !filteredGame[0].isHomeTeam) {
            setResults('Win')
        } else {
            setResults('Loss')
        }
    }

    useEffect(() => {
        winLossHandle()
    },[])

    return ( 
        <div className="schedule-cards">
            <div className="mini-box-score"
                    onClick={() => {
                        boxScoreDataHandle(filteredGame[0].homeStartDate, filteredGame[0].gameId)
                        setToggleModal(true)
                    }}>
                <img src={`https://cdn.nba.com/logos/nba/${filteredGame[0].isHomeTeam ? filteredGame[0].vTeam.teamId : filteredGame[0].hTeam.teamId}/primary/L/logo.svg`} alt="" />
                <span>{results}</span>
                <div className="mini-score">
                    <h3>{filteredGame[0].hTeam.score}</h3>
                    <span> - </span>
                <h3>{filteredGame[0].vTeam.score}</h3>
                </div>
                <button onClick={() => {
                        boxScoreDataHandle(filteredGame[0].homeStartDate, filteredGame[0].gameId)
                        setToggleModal(true)
                    }}  
                >Box Score</button>
            </div>
        </div>
     );
}
 
export default ScheduleCards;