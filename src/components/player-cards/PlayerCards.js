import './PlayerCards.css'

const PlayerCards = ({player, profile, setToggleModal, setStatPlayer, setBioPlayer}) => {
    // const filterPlayersHandle = (id) => {
    //     const filteredPlayers = profile.filter(prof => prof.personId === id)
    //     setBioPlayer(filteredPlayers)
    // }

    return ( 
        <div className="player-cards" onClick={() => {
                        // statsDataHandle(player.id)
                        setStatPlayer(player)
                        // filterPlayersHandle(player.id)
                        setToggleModal(true)
        }} >  
            <div className="player__pic">
                <img src={player.src} alt="" className='player__pic--image'/>
            </div>   
            <div className="player__info">
                <span className='player__info--name'> {player.name} </span>
            </div>     
            <button 
                className='btn btn__view-stats' 
                onClick={() => {
                    // statsDataHandle(player.id)
                    setStatPlayer(player)
                    // filterPlayersHandle(player.id)
                    setToggleModal(true)
                }} 
            >Player Stats</button>  
        </div>

     );
}
 
export default PlayerCards;