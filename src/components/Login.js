import React from 'react';
import Logo from '../images/logo.png'
import {Link} from 'react-router-dom'
const Login = ()=>{
    return(
        <div className="Login">
            <div className="content d-flex justify-content-center align-items-center flex-column">
                <img src={Logo}/>
                <h5>Welcome Back</h5>
                <span>Login</span>
                <form className="d-flex justify-content-center align-items-center flex-column">
                    <div className="log">
                        <label htmlFor="username">Email or Username</label>
                        <input name="usernmae" type="text" placeholder='Email or Username'/>
                    </div>
                    <div className="log">
                        <label htmlFor="username">Password</label>
                        <input name="usernmae" type="password" placeholder='Password'/>
                    </div>
                    <Link to='/ForgetPass'>Forget Password</Link>
                    <button className="btn">Login</button>
                    <Link to='/CreateAccount'>Create New Account</Link>
                </form>
            </div>
        </div>
    )
}
export default Login;