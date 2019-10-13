import React from 'react';
import {Link} from 'react-router-dom'
import Insta from '../images/insta.png';
import Twitter from '../images/twitter.png';
import Youtube from '../images/youtube.png';
import facebook from '../images/facebook.png'
import Navbar from '../components/Navbar'
const Services = ()=>{
    return(
        <div className="Services">
             {/*Start navbar  */}
             <Navbar back={'/Home'}/>
            {/*Start Content */}
            <div className='content'>
                <div className='container'>
                    <h5>Services</h5>
                    <div className='row'>
                        <div className="col-6 col-md-3">
                           <div className='des'>
                                <Link to="/InstaServices">
                                        <div className="insta d-flex justify-content-center align-items-center flex-column">
                                        <div className="img d-flex justify-content-center align-items-center"> <img src={Insta}/></div>
                                            <p>Instagram Services</p>
                                        </div>
                                </Link>
                           </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className='des'>
                                <Link>
                                    <div className="insta d-flex justify-content-center align-items-center flex-column">
                                        <div className="img d-flex justify-content-center align-items-center">  <img src={Twitter}/></div>
                                        <p>Twitter Services</p>
                                    </div>
                                </Link>  
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className='des'>
                                <Link>
                                    <div className="insta d-flex justify-content-center align-items-center flex-column">
                                    <div className="img d-flex justify-content-center align-items-center"> <img src={facebook}/></div>
                                        <p>Facebook Services</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                           <div className="des">
                                <Link>
                                    <div className="insta d-flex justify-content-center align-items-center flex-column">
                                        <div className="img d-flex justify-content-center align-items-center"> <img src={Youtube}/></div>
                                            <p>Youtube Services</p>
                                        </div>
                                </Link>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*End Content */}
        </div>
    )
}
export default Services;