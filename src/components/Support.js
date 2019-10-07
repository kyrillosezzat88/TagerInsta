import React from 'react';
import Navbar from './Navbar';
import '../styles/Support.css'
const Support = ()=>{
    return(
        <div className="Support">
            <Navbar back={'/Home'} />
            <div className="content">
                <div className="container">
                    <h5>Technical Support</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="btn btn-primary">Create Ticket</button>
                   <div>
                       
                   </div>
                </div>
            </div>
        </div>
    )
}
export default Support;