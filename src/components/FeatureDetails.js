import React from 'react';
import Navbar from './Navbar'

const FeatureDetails = ()=>{
    return(
        <div className="FeatureD">
             {/*Start navbar  */}
           <Navbar back={'/InstaFollower'} />
            {/* end navbar */}
            {/*Start Content */}
            <div className="content">
                <div className="container">
                    <h5>Feature Details</h5>
                    <div className=" d-flex justify-content-center align-items-center">
                        <div className='info'>
                            <h5>Arab Mix Instagram Followers</h5>
                            <p>Inactive Followers (Real) 10 Day Refill</p>
                            <div className="d-flex justify-content-around align-items-center">
                                <span>Quantity</span>
                                <span>1K</span>
                            </div>
                            <div className="d-flex justify-content-around align-items-center">
                                <span>Price</span>
                                <span><span className="text-danger">10</span> KWD</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h6 className="text-center">Please Enter Input Email</h6>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className='pay'>
                                <label htmlFor="Email">Input Email here</label>
                                <input name="Email" type="text" placeholder='Email'/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h6 className="text-center">Please Enter Input Username</h6>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className='pay'>
                                <label htmlFor="username">Input username here</label>
                                <input name="usernmae" type="text" placeholder='Username'/>
                            </div>
                        </div>
                    </div>
                    <div className="btn d-flex justify-conetnt-center align-items-center flex-column">
                        <button data-toggle="modal" data-target="#success">Pay</button>
                        <h6 data-toggle="modal" data-target="#myModal">Add Balance</h6>
                    </div>
                </div>
            </div>
            {/*End Content*/}
        </div>
    )
}
export default FeatureDetails;