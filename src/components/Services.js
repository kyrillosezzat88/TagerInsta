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
                            <div className='col-6 col-md-3'>
                                <div className="des">
                                    <Link to='/InstaServices'>
                                        <div className='service d-flex justify-content-center align-items-center flex-column'>
                                            <div className='img d-flex justify-content-center align-items-center flex-column'><img src={Insta} alt ='Serive' /><p>Instgram Services</p></div>
                                            
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-6 col-md-3'>
                               <div className="des">
                                    <Link>
                                        <div className=' d-flex justify-content-center align-items-center flex-column'>
                                        <div className="img d-flex justify-content-center align-items-center flex-column"> <img src={Twitter} alt ='News' /><p>Twitter Services</p></div>
                                            
                                        </div>
                                    </Link>
                               </div>
                            </div>
                            <div className='col-6 col-md-3'>
                                <div className="des">
                                    <Link>
                                        <div className=' d-flex justify-content-center align-items-center flex-column'>
                                        <div className="img d-flex justify-content-center align-items-center flex-column"> <img src={facebook} alt ='Serive' /><p>Facebook Services</p></div>
                                            
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-6 col-md-3'>
                               <div className="des">
                                    <Link >
                                        <div className='Report d-flex justify-content-center align-items-center flex-column'>
                                        <div className='img d-flex justify-content-center align-items-center flex-column flex-column'> <img src={Youtube} alt ='News' />  <p>Youtube Services</p></div>
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