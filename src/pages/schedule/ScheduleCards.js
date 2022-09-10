import './ScheduleCards.css'

const ScheduleCards = () => {
    return ( 
        <div className="schedule-cards">
            <img src="https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg" alt="" />
            <span>Win</span>
            <div className="score">
                <h3>100</h3>
                <span> - </span>
                <h3>200</h3>
            </div>
            <button>Box Score</button>
        </div>
     );
}
 
export default ScheduleCards;