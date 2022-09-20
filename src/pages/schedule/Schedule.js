import './Schedule.css'
import ScheduleCards from '../../components/schedule-cards/ScheduleCards';
import Month from '../../components/month/Month';
import BoxScore from '../../components/box-score/BoxScore';
import { useState } from 'react';

const Schedule = ({schedule, boxScoreDataHandle, boxScore}) => {
    const [toggleModal, setToggleModal] = useState(false)
    const monthNames = ['November', 'December', 'January', 'February', 'March', 'April']
    const months = [
        {
            name: 'October',
            days: '31',
            num: '10',
            year: '2021',
            dayStart: '1',
            dayEnd: '31',
            start: '20211001',
            end: '20211031'
        },
        {
            name: 'November',
            days: '30',
            num: '11',
            year: '2021',
            dayStart: '1',
            dayEnd: '31',
            start: '20211101',
            end: '20211130'
        },
        {
            name: 'December',
            days:'31',
            num: '12',
            year: '2021',
            dayStart: '3',
            dayEnd: '34',
            start: '20211201',
            end: '20211231'
        },
        {
            name: 'January',
            days:'31',
            num: '01',
            year: '2022',
            dayStart: '6',
            dayEnd: '37',
            start: '20220101',
            end: '20220131'
        },
        {
            name: 'February',
            days:'28',
            num: '02',
            year: '2022',
            dayStart: '1',
            dayEnd: '29',
            start: '20220201',
            end: '20220228'
        },
        {
            name: 'March',
            days:'31',
            num: '03',
            year: '2022',
            dayStart: '1',
            dayEnd: '32',
            start: '20220301',
            end: '20220331'
        },
        {
            name: 'April',
            days:'30',
            num: '4',
            year: '2022',
            dayStart: '4',
            dayEnd: '34',
            start: '20220401',
            end: '20220430'
        },
    ]



    return ( 
        <main className="schedule">
            <h1>Schedule</h1>
            <p>Lakers full season calendar</p>
            <div className={toggleModal ? 'box-score__modal' : 'hide'}>
                <button  onClick={() => setToggleModal(false)}>X</button>
                <BoxScore  boxScore={boxScore} />
            </div>
            {months.map((month, i )=> <Month  setToggleModal={setToggleModal}   boxScoreDataHandle={boxScoreDataHandle} key={i}  month={month} schedule={schedule} boxScore={boxScore}/>)}
            {/* {schedule && schedule.map((game, i) =>   <ScheduleCards key={i}  game={game} />)} */}
            {/* <Month schedule={schedule}/> */}
        </main>
     );
}
 
export default Schedule