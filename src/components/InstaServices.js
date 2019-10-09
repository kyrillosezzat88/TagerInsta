import React from 'react';
import {Link} from 'react-router-dom';
import Insta from '../images/insta.png';
import Arrow from '../images/arrow_en.png'
import Navbar from './Navbar'
const InstaServices = ()=>{
    return(
        <div className="InstaServices">
             {/*navbar  */}
                <Navbar  back={'/Services'}/>
            {/*Start Content */}
            <div className="content">
                <div className="container">
                    <h5>Instagram Services</h5>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <Link to="/InstaFollower">
                                <div className="insta d-flex justify-content-start align-items-center">
                                    <img src={Insta} />
                                    <h6>Arab Mix Instagram Followers</h6>
                                    <img className="arrow " src={Arrow} />
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 col-md-3">
                            <Link to="/InstaFollower">
                                <div className="insta d-flex justify-content-start align-items-center">
                                    <img src={Insta} />
                                    <h6>Arab Mix Instagram Followers</h6>
                                    <img className="arrow " src={Arrow} />
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 col-md-3">
                            <Link to="/InstaFollower">
                                <div className="insta d-flex justify-content-start align-items-center">
                                    <img src={Insta} />
                                    <h6>Arab Mix Instagram Followers</h6>
                                    <img className="arrow " src={Arrow} />
                                </div>
                            </Link>
                        </div>
                        <div className="col-12 col-md-3">
                            <Link to="/InstaFollower">
                                <div className="insta d-flex justify-content-start align-items-center">
                                    <img src={Insta} />
                                    <h6>Arab Mix Instagram Followers</h6>
                                    <img className="arrow " src={Arrow} />
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
export default InstaServices;