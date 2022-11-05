import React  from 'react';
import {Link} from 'react-router-dom';

// import './tab.scss';
// import Weather from '../Weather/Weather'
// import Fetch from '../Fetch/Fetch'

const MyNav = () => {
    // const [render, setRender] = useState('')

  return (
    <>
    {/* <div className='tab'> 
    <button onClick={()=>{
        setRender('Weather')
    }}>Weather</button>
    <button onClick={()=>
    setRender('Electronic Shop')}>Electronic Shop</button>
    
        {
            render === 'Weather'? <Weather/>: render === 'Electronic Shop'? <Fetch/> : <></>
        }
    </div> */}
    <div>
      <ul>
       
        <li>
          <Link to="/news" style={{color:'black',textDecoration:'none'}}>News</Link>
          
          {/* <Link to='/weather'>Weather</Link> */}
        </li>
        <li>
          <Link to="/todo" style={{color:'black',textDecoration:'none'}}>Todo</Link> 
          {/* {/* <Link to='/todo'>Todo</Link> */} 
        </li>
        <li>
          <Link to="/electronic" style={{color:'black',textDecoration:'none'}}>Electronic</Link> 
          {/* {/* <Link to='/electronic'>Todo</Link> */} 
        </li>
      </ul>
    </div>



    </>

  )
}

export default MyNav