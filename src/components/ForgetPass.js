import React from 'react';
import Logo from '../images/logo.png'
import {Link} from 'react-router-dom'
import Back from '../images/back_red_en.png'
import {Animated} from "react-animated-css";

const ForgetPass =()=>{
    return(
        <div className="ForgetPass">
            <Link to='/Home' className="back"><img src={Back} /></Link>
            <div className="content d-flex justify-content-center align-items-center flex-column">
                <img src={Logo}/>
                <h5>Restore Password</h5>
                <p className="text-center">you will receive registration data for your e-mail after requesting a password recovery</p>
                <Animated animationIn='zoomIn' animationOut='zoomOut'>
                    <form className="d-flex justify-content-center align-items-center flex-column">
                        <div className="log">
                            <label htmlFor="email">Email</label>
                            <input name="email" type="email" placeholder='example@example.com'/>
                        </div>
                        <button className="btn">Rest</button>
                        <Link to='/Login'>Login</Link>
                    </form>
                </Animated>
            </div>
        </div>
    )
}
export default ForgetPass;