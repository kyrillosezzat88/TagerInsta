import React from 'react';
import Navbar from './Navbar';
import '../styles/Policy.css'
const Policy = ()=>{
    return(
        <div className="Policy">
            <Navbar back={'/Home'} />
            {/*Start Content */}
            <div className='content'>
                <div className="container">
                    <h5>Terms of Conditions</h5>
                    <div className="conditions">
                        <p>1. Executing services within 24 hours of the order. Follow the status of your order in orders Reports Section.</p>
                        <p>2. Upon your request of any service,please make sure that status of your account is "Public" and not "Private".</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Policy;