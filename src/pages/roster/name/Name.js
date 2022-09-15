import './Name.css'

const Name = ({statPlayer}) => {
    return ( 
        <div className="name">
            <span className='first-name'>{statPlayer && statPlayer.first}</span>
            <span className='last-name' >{statPlayer && statPlayer.last}</span>
        </div>
     );
}
 
export default Name;