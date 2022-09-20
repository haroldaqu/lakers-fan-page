import { useEffect } from 'react'
import { useState } from 'react'
import ScheduleCards from '../schedule-cards/ScheduleCards'
import './DayCards.css'

const DayCards = ({list, schedule, i, setToggleModal, boxScoreDataHandle}) => {
    const [filteredGame, setFilteredGame] = useState(null)
    
    const filter = async () => {
        const filtered = await schedule.filter(game =>  (parseInt(game.homeStartDate) === parseInt(list.homeStartDate)))
        setFilteredGame(filtered)
    }

    useEffect(() => {
        filter()
    },[])

    return ( 
        <div className={(filteredGame && filteredGame[0] !== undefined)? 'day-cards': 'day-cards--empty'}>
            <p>{i + 1}</p>
            {
              (filteredGame && filteredGame[0] !== undefined) ? <ScheduleCards  setToggleModal={setToggleModal}  filteredGame={filteredGame} boxScoreDataHandle={boxScoreDataHandle}/> : <div className="empty-cards"></div>
            }
        </div>
     );
}
 
export default DayCards;