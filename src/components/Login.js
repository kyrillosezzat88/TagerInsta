import React from 'react';
import Logo from '../images/logo.png'
import {Link} from 'react-router-dom'
import Back from '../images/back_red_en.png'
import {Animated} from "react-animated-css";

const Login = ()=>{
    return(
        <div className="Login">
            <Link to='/Home' className="back"><img src={Back} /></Link>
            <div className="content d-flex justify-content-center align-items-center flex-column">
                <Animated  animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
                <img src={Logo}/>
                </Animated>
                <h5>Welcome Back</h5>
                <span>Login</span>
            <Animated animationIn="zoomIn" animationOut="zoomOut" isVisible={true}>
                <form className="d-flex justify-content-center align-items-center flex-column">
                    <div className="log">
                        <label htmlFor="username">Email or Username</label>
                        <input name="usernmae" type="text" placeholder='Email or Username'/>
                    </div>
                    <div className="log">
                        <label htmlFor="username">Password</label>
                        <input name="usernmae" type="password" placeholder='Password'/>
                    </div>
                    <Link to='/ForgetPass' >Forget Password</Link>
                    <button className="btn">Login</button>
                    <Link to='/CreateAccount'>Create New Account</Link>
                </form>
            </Animated>
            </div>
        </div>
    )
}
export default Login;