import './Name.css'

const Name = ({statPlayer}) => {
    return ( 
        <div className="name">
            <span className='name__first'>{statPlayer && statPlayer.first}</span>
            <span className='name__last' >{statPlayer && statPlayer.last}</span>
        </div>
     );
}
 
export default Name;