import './Home.css'
import HomePic from './HomePic';
import TeamLeaders from './TeamLeaders';
import TeamStats from './TeamStats';

const Home = () => {
    return ( 
        <main className="home">
            <HomePic />
            <TeamLeaders />
            <TeamStats />
        </main>
     );
}
 
export default Home;