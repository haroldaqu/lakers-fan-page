import { useEffect } from 'react';
import { useState } from 'react';
import DayCards from '../day-cards/DayCards';
import './Month.css'

const Month = ({i, month, schedule, setToggleModal, boxScoreDataHandle}) => {
    const [totalDays, setTotalDays] = useState(null)
    const totalDaysInSeason = [...Array(parseInt(month.days)).keys()].map(x => { return {homeStartDate: x + parseInt(month.start)} })
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    useEffect(() => {
        setTotalDays(totalDaysInSeason)
    },[])


    return ( 
        <div className="month">
            <h2>{month.name}</h2>
            <div className="month__days">
                {days.map((day, i) => <p key={i} >{day}</p> )}
            </div>
            <div className="month__day-cards">
                {
                    totalDays && totalDays.map((list,i) => <DayCards  setToggleModal={setToggleModal}  boxScoreDataHandle={boxScoreDataHandle} key={i} list={list} schedule={schedule} i={i}/>)
                }
            </div>
        </div>
     );
}
 
export default Month;