import PlayerCards from '../../components/player-cards/PlayerCards';
import './Roster.css'
import StatsModal from './stats-modal/StatsModal';
import players from '../../data/data';
import Sidebar from './sidebar/Sidebar';
import { useState } from 'react';

const Roster = ({ data, profile, statsDataHandle }) => {
    const [toggleModal, setToggleModal] = useState(false)
    const [statPlayer, setStatPlayer] = useState(null)
    const [bioPlayer, setBioPlayer] = useState(null)
    
    return ( 
        <main className="roster">
            <h1>2021 Roster</h1>
            <div className="roster-cont">
                {
                    players.map((player, i) => (
                        <PlayerCards  
                            key={i} 
                            player={player} 
                            profile={profile}
                            setToggleModal={setToggleModal} 
                            statsDataHandle={statsDataHandle}
                            setStatPlayer={setStatPlayer}
                            setBioPlayer={setBioPlayer}
                        />
                    ))
                }
            </div>
            <div className={toggleModal ? 'roster-modal' : 'no-show'}>
                <button 
                    className='close-btn' 
                    onClick={() => setToggleModal(false)}
                >X</button>
                <StatsModal 
                    data={data} 
                    profile={profile} 
                    statPlayer={statPlayer}
                    bioPlayer={bioPlayer}
                />
            </div>
        </main>
     );
}
 
export default Roster;