import PlayerCards from '../../components/player-cards/PlayerCards';
import CardTeamLeaders from './CardTeamLeaders';
import './TeamLeaders.css'

const TeamLeaders = () => {
    return ( 
        <section className="home-stats-cont">
            <h1 className="title-team-leaders">Team Leaders</h1>
            <PlayerCards />
            <PlayerCards />
            <PlayerCards />
            <PlayerCards />
            <PlayerCards />
            <PlayerCards />
        </section>
     );
}
 
export default TeamLeaders;