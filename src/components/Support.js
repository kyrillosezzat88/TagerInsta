import React from 'react';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import '../styles/Support.css'
const Support = ()=>{
    return(
        <div className="Support">
            <Navbar back={'/Home'} />
            {/*Start Conten */}
            <div className="content">
                <div className="container">
                    <h5>Technical Support</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Link to="/CreateTicket"><button className="Ctiket btn btn-primary">Create Ticket</button></Link>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className='info d-flex justify-content-between align-items-center'>
                                <div>Order Id <span className="font-weight-bold">500</span></div>
                                <div className='date d-flex justify-content-center align-items-center'>
                                    <p className="text-center">2019-10-02 <br/>13-12-12</p>
                                    <Link to='/CurrentTicket'><button className='btn btn-primary'>Ticket</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className='info d-flex justify-content-between align-items-center'>
                                <div>Order Id <span className="font-weight-bold">500</span></div>
                                <div className='date d-flex justify-content-center align-items-center'>
                                    <p className="text-center">2019-10-02 <br/>13-12-12</p>
                                    <Link to='/CurrentTicket'><button className='btn btn-primary'>Ticket</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className='info d-flex justify-content-between align-items-center'>
                                <div>Order Id <span className="font-weight-bold">500</span></div>
                                <div className='date d-flex justify-content-center align-items-center'>
                                    <p className="text-center">2019-10-02 <br/>13-12-12</p>
                                    <Link to='/CurrentTicket'><button className='btn btn-primary'>Ticket</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*End Conten */}
        </div>
    )
}
export default Support;