import './Score.css'

const Score = () => {
    return ( 
        <div className="score">
            <h1>Final</h1>
            <div className="score__quarters">
                <p>Q1</p>
                <p>Q2</p>
                <p>Q3</p>
                <p>Q4</p>
            </div>
            <div className="score__team--home">
                <p>25</p>
                <p>25</p>
                <p>25</p>
                <p>25</p>
            </div>
            <div className="score__team--away">
                <p>25</p>
                <p>25</p>
                <p>25</p>
                <p>25</p>
            </div>
            <button>Watch</button>
        </div>
     );
}
 
export default Score;