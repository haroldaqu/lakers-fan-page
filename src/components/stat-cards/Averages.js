import './Averages.css'

const Averages = ({stat}) => {
    return ( 
        <div className="averages">
             <span>{stat[0].toUpperCase()} </span>
            <p>{stat[1]} </p>
        </div>
     );
}
 
export default Averages;