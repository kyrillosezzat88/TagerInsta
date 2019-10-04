import React from 'react';
import Home from '../images/home.png'
import Back from '../images/back_en.png'
import '../styles/Insta.css';
import {Link} from 'react-router-dom';
import Insta from '../images/insta.png';
import Arrow from '../images/arrow_en.png'

const InstaServices = ()=>{
    return(
        <div className="InstaServices">
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
                    <h5>Instagram Services</h5>
                   <Link to="/InstaFollower">
                    <div className="insta d-flex justify-content-start align-items-center">
                        <img src={Insta} />
                        <h6>Arab Mix Instagram Followers</h6>
                        <img className="arrow " src={Arrow} />
                    </div>
                   </Link>
                   <Link to="/InstaFollower">
                    <div className="insta d-flex justify-content-start align-items-center">
                        <img src={Insta} />
                        <h6>Arab Mix Instagram Followers</h6>
                        <img className="arrow " src={Arrow} />
                    </div>
                   </Link>
                   <Link to="/InstaFollower">
                    <div className="insta d-flex justify-content-start align-items-center">
                        <img src={Insta} />
                        <h6>Arab Mix Instagram Followers</h6>
                        <img className="arrow " src={Arrow} />
                    </div>
                   </Link>
                   <Link to="/InstaFollower">
                    <div className="insta d-flex justify-content-start align-items-center">
                        <img src={Insta} />
                        <h6>Arab Mix Instagram Followers</h6>
                        <img className="arrow " src={Arrow} />
                    </div>
                   </Link>
                </div>
            </div>
            {/*End Content */}
        </div>
    )
}
export default InstaServices;