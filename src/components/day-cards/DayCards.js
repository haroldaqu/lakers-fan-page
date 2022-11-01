import { useEffect } from 'react'
import { useState } from 'react'
import ScheduleCards from '../schedule-cards/ScheduleCards'
import './DayCards.css'

const DayCards = ({list, schedule, i, setToggleModal}) => {
    // const [filteredGame, setFilteredGame] = useState(null)
    
    // const filter = async () => {
    //     const filtered = await schedule.filter(game =>  (parseInt(game.homeStartDate) === parseInt(list.homeStartDate)))
    //     setFilteredGame(filtered)
    // }

    // useEffect(() => {
    //     filter()
    // },[])

    return ( 
        <div className={(i === 2 || i === 8 || i === 12 || i === 13 || i === 18 || i === 22 || i === 28 || i === 30 || i === 31)? 'day-cards': 'day-cards--empty'}>
        {/* <div className="day-cards"> */}
            <p>{i + 1}</p>
            {
                (i === 2 || i === 8 || i === 12 || i === 13 || i === 18 || i === 22 || i === 28 || i === 30 || i === 31) ?  <ScheduleCards  key={i} setToggleModal={setToggleModal}/> : <div className="empty-cards"></div>
            }
            {/* // <ScheduleCards  key={i} setToggleModal={setToggleModal}/> */}
            {/* {
              (filteredGame && filteredGame[0] !== undefined) ? <ScheduleCards  setToggleModal={setToggleModal}  filteredGame={filteredGame} /> : <div className="empty-cards"></div>
            } */}
        </div>
     );
}
 
export default DayCards;