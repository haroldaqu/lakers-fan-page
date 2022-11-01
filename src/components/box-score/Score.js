import './Score.css'

const Score = ({boxScore}) => {
    return ( 
        <div className="score">
            <div className="team-score">
                <h1>Lakers</h1> 
                <span>100</span>  
                <p>0-0</p>             
            </div>
            <div className="game-score">
                <div className="score__quarters">
                    <p className='empty' >E</p>
                    <p>Q1</p>
                    <p>Q2</p>
                    <p>Q3</p>
                    <p>Q4</p>
                </div>
                <div className="score__team score__team--home">
                    <p className='team-name' >Home</p>
                    <p>25</p>
                    <p>25</p>
                    <p>25</p>
                    <p>25</p>
                </div>
                <div className="score__team score__team--away">
                    <p className='team-name' >Away</p>
                    <p>25</p>
                    <p>25</p>
                    <p>25</p>
                    <p>25</p>
                </div>
                <button>Watch</button>
            </div>
            <div className="team-score">
                <h1>Warriors</h1> 
                <span>100</span>  
                <p>0-0</p>                   
            </div>
        </div>
     );
}
 
export default Score;