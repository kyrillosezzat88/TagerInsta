import React from 'react';
import Logo from '../images/logo.png'
import {Link} from 'react-router-dom'
const ForgetPass =()=>{
    return(
        <div className="ForgetPass">
            <div className="content d-flex justify-content-center align-items-center flex-column">
                <img src={Logo}/>
                <h5>Restore Password</h5>
                <p className="text-center">you will receive registration data for your e-mail after requesting a password recovery</p>
                <form className="d-flex justify-content-center align-items-center flex-column">
                    <div className="log">
                        <label htmlFor="email">Email</label>
                        <input name="email" type="email" placeholder='example@example.com'/>
                    </div>
                    <button className="btn">Rest</button>
                    <Link to='/Login'>Login</Link>
                </form>
            </div>
        </div>
    )
}
export default ForgetPass;