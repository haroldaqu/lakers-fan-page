import './HomePic.css'

const HomePic = () => {
    return ( 
        <section className="home-pic">
            <img src={require('./lakers-duo.png')} alt="" className='lakers-duo'/>
            <div id="span-cont">
                <p className='span-year'>2021</p>
                <p className='span-city'>Los Angeles</p>
                <p className='span-team' >Lakers</p>                
            </div>
        </section>
     );
}
 
export default HomePic;