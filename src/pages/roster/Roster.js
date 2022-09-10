import PlayerCards from '../../components/player-cards/PlayerCards';
import './Roster.css'
import StatsModal from './stats-modal/StatsModal';
import players from '../../data/data';

const Roster = () => {
    return ( 
        <main className="roster">
            <h1>2021 Roster</h1>
            <div className="roster-cont">
                {
                    players.map(player => (
                        <PlayerCards player={player} />
                    ))
                }
            </div>
        </main>
     );
}
 
export default Roster;