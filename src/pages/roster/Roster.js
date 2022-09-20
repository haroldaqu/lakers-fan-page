import PlayerCards from '../../components/player-cards/PlayerCards';
import './Roster.css'
import StatsModal from '../../components/stats-modal/StatsModal';
import players from '../../data/data';
import { useState } from 'react';
import Coach from '../../components/coach/Coach';

const Roster = ({ data, profile, statsDataHandle }) => {
    const [toggleModal, setToggleModal] = useState(false)
    const [statPlayer, setStatPlayer] = useState(null)
    const [bioPlayer, setBioPlayer] = useState(null)
    
    return ( 
        <main className="roster">
            <h1>Roster</h1>
            <p>17x Champions, get to know your 2021-21 Lakers Team</p>
            <div className="roster__cont">
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
            <div className={toggleModal ? 'roster__modal' : 'hide'}>
                <button 
                    className='modal__btn' 
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