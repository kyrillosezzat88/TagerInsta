import React from 'react';
import '../styles/Services.css';
import Home from '../images/home.png'
import Back from '../images/back_en.png'
import {Link} from 'react-router-dom'
import Insta from '../images/insta.png';
import Twitter from '../images/twitter.png';
import Youtube from '../images/youtube.png';
import facebook from '../images/facebook.png'
const Services = ()=>{
    return(
        <div className="Services">
             {/*Start navbar  */}
             <nav>
                <div className='container'>
                    <div className=' d-flex justify-content-between align-items-center'>
                      <Link  to='/Home'><img className='backimg' src={Back} alt='back'/></Link>
                        <p>Tager insta</p>
                        <Link to='/Home'><img src={Home} alt='home'/></Link>
                    </div>
                </div>
            </nav>
            {/* end navbar */}
            {/*Start Content */}
            <div className='content'>
                <div className='container'>
                    <h5>Services</h5>
                    <div className='row'>
                        <div className="col-6">
                           <Link to="/InstaServices">
                                <div className="insta d-flex justify-content-center align-items-center flex-column">
                                    <img src={Insta}/>
                                    <p>Instagram Services</p>
                                </div>
                           </Link>
                        </div>
                        <div className="col-6">
                           <Link to="/TwitterServices">
                            <div className="insta d-flex justify-content-center align-items-center flex-column">
                                    <img src={Twitter}/>
                                    <p>tWitter Services</p>
                                </div>
                           </Link>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-6">
                           <Link to="/FacebookServices">
                                <div className="insta d-flex justify-content-center align-items-center flex-column">
                                    <img src={facebook}/>
                                    <p>Facebook Services</p>
                                </div>
                           </Link>
                        </div>
                        <div className="col-6">
                           <Link to='/YoutubeServices'>
                            <div className="insta d-flex justify-content-center align-items-center flex-column">
                                    <img src={Youtube}/>
                                    <p>Youtube Services</p>
                                </div>
                           </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/*End Content */}
        </div>
    )
}
export default Services;