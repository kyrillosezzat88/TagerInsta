import React from 'react';
import Logo from '../images/logo.png'
import Back from '../images/back_red_en.png'
import {Link} from 'react-router-dom'
import {Animated} from "react-animated-css";

const CreateAccount = ()=>{
    return(
        <div className="CreateAccount">
            <Link to='/Home' className="back"><img src={Back} /></Link>
            <div className="content d-flex justify-content-center align-items-center flex-column">
                <img src={Logo}/>
                <h5>Create your new account</h5>
                <p>you have one step to join us</p>
                <Animated animationIn="zoomIn" animationOut="zoomOut">
                <form className="d-flex justify-content-center align-items-center flex-column">
                    <div className="log">
                        <label htmlFor="username">Username</label>
                        <input name="usernmae" type="text" placeholder='Username'/>
                    </div>
                    <div className="log">
                        <label htmlFor="Email">Email</label>
                        <input name="Email" type="Email" placeholder='Example@example.com'/>
                    </div>
                    <div className="log">
                        <label htmlFor="Phone">Phone</label>
                        <input name="Phone" type="text" placeholder='00000000000'/>
                    </div>
                    <div className="log">
                        <label htmlFor="password">Password</label>
                        <input name="password" type="password" placeholder='Password'/>
                    </div>
                    <div className="log">
                        <label htmlFor="password">Password Confirm</label>
                        <input name="password" type="password" placeholder='type your password again'/>
                    </div>
                    <button className="btn">Register</button>
                    <Link to='/Login'>Login</Link>
                </form>

                </Animated>
            </div>
        </div>
    )
}
export default CreateAccount;
