import CardTeamLeaders from './CardTeamLeaders';
import './TeamLeaders.css'

const TeamLeaders = () => {
    return ( 
        <section className="home-stats-cont">
            <h1 className="title-team-leaders">Team Leaders</h1>
            <CardTeamLeaders />
            <CardTeamLeaders />
            <CardTeamLeaders />
            <CardTeamLeaders />
            <CardTeamLeaders />
            <CardTeamLeaders />
        </section>
     );
}
 
export default TeamLeaders;