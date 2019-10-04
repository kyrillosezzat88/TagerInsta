import React from 'react';
import Home from '../images/home.png'
import Back from '../images/back_en.png'
import {Link} from 'react-router-dom';
import '../styles/InstaFollower.css'

const InstaFollower = ()=>{
    return(
        <div className="InstaFollower">
            {/*Start navbar  */}
            <nav>
                <div className='container'>
                    <div className=' d-flex justify-content-between align-items-center'>
                      <Link  to='/Services'><img className='backimg' src={Back} alt='back'/></Link>
                        <p>Tager insta</p>
                        <Link to='/Home'><img src={Home} alt='home'/></Link>
                    </div>
                </div>
            </nav>
            {/* end navbar */}
            {/*Start Content */}
            <div className="content">
                <div className="container">
                    <h5>Arab Mix Instagram Followers</h5>
                    <p>inactive followers (Real), 10 Day Refill</p>
                    <div className="info d-flex justify-content-around align-items-center">
                        <h6>Quantity 1K</h6>
                        <h6 className='blance'>10 KWD</h6>
                        <button>Select</button>
                    </div>
                </div>
            </div>
            {/*End Content */}
        </div>
    )
}
export default InstaFollower;