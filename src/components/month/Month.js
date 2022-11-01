import { useEffect } from 'react';
import { useState } from 'react';
import DayCards from '../day-cards/DayCards';
import './Month.css'

const Month = ({i, month, schedule, setToggleModal}) => {
    const [totalDays, setTotalDays] = useState(null)
    const totalDaysInSeason = [...Array(parseInt(month.days)).keys()].map(x => { return {homeStartDate: x + parseInt(month.start)} })
    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']

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
                    totalDays && totalDays.map((list,i) => <DayCards  setToggleModal={setToggleModal}  key={i} list={list} schedule={schedule} i={i}/>)
                }
            </div>
        </div>
     );
}
 
export default Month;