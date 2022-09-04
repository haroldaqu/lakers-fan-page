import './PlayerCards.css'

const PlayerCards = () => {
    return ( 
        <div className="player-cards">
            <div className="player-pic-cont">
                <img src="https://lalweb.blob.core.windows.net/public/lakers/product-marketing/web/player-page/2122_lal_mktg_roster_westbrook_1920x2304.jpg" alt="" className='player-pic'/>
                <button className='view-stats-btn'>View Stats</button>
                {/* <h1 className="view-stats-btn">33.3 PPG</h1> */}
            </div>   
            <div className="player-info">
                <span className='player-name'>Russell Westbrook</span>
            </div>         
        </div>

     );
}
 
export default PlayerCards;