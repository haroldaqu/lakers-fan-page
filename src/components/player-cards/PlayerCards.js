import './PlayerCards.css'

const PlayerCards = ({player, profile, setToggleModal, statsDataHandle, setStatPlayer, setBioPlayer}) => {
    const filterPlayersHandle = (id) => {
        const filteredPlayers = profile.filter(prof => prof.personId === id)
        setBioPlayer(filteredPlayers)
    }

    return ( 
        <div className="player-cards">
            <div className="player__pic">
                <img src={player.src} alt="" className='player__pic--image'/>
                <button 
                    className='btn btn__view-stats' 
                    onClick={() => {
                        statsDataHandle(player.id)
                        setStatPlayer(player)
                        filterPlayersHandle(player.id)
                        setToggleModal(true)
                    }} 
                >View Stats</button>
            </div>   
            <div className="player__info">
                <span className='player__info--name'> {player.name} </span>
            </div>         
        </div>

     );
}
 
export default PlayerCards;