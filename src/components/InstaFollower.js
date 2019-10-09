import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar'

const InstaFollower = ()=>{
    return(
        <div className="InstaFollower">
            {/* navbar */}
            <Navbar  back={'/InstaServices'}/>
            {/*Start Content */}
            <div className="content">
                <div className="container">
                    <h5>Arab Mix Instagram Followers</h5>
                    <p>inactive followers (Real), 10 Day Refill</p>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="info">
                                <div className=" d-inline-block">
                                    <h6 className="d-inline-block">Quantity 1K</h6>
                                    <h6 className='blance d-inline-block'><span>10</span> KWD</h6>
                                </div>
                                <Link to='/FeatureDetails'><button className="btn">Select</button></Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="info">
                                <div className=" d-inline-block">
                                    <h6 className="d-inline-block">Quantity 1K</h6>
                                    <h6 className='blance d-inline-block'><span>10</span> KWD</h6>
                                </div>
                                <Link to='/FeatureDetails'><button className="btn">Select</button></Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="info">
                                <div className=" d-inline-block">
                                    <h6 className="d-inline-block">Quantity 1K</h6>
                                    <h6 className='blance d-inline-block'><span>10</span> KWD</h6>
                                </div>
                                <Link to='/FeatureDetails'><button className="btn">Select</button></Link>
                            </div>
                        </div>
                    </div>
                   <div className="note">
                        <h5>Note</h5>
                        <h6>24 hours start time</h6>
                        <h6>Make sure your account in public not private when you order servies</h6>
                        <h6>The maxmum per account its 3000 followers</h6>
                   </div>
                </div>
            </div>
            {/*End Content */}
        </div>
    )
}
export default InstaFollower;