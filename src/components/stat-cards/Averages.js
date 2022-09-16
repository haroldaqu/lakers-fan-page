import './Averages.css'

const Averages = ({stat}) => {
    return ( 
        <div className="averages">
             <span>{stat[0].toUpperCase()} </span>
            <h2>{stat[1]} </h2>
        </div>
     );
}
 
export default Averages;