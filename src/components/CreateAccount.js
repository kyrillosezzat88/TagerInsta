import React from 'react';
import Logo from '../images/logo.png'
import {Link} from 'react-router-dom'
const CreateAccount = ()=>{
    return(
        <div className="CreateAccount">
            <div className="content d-flex justify-content-center align-items-center flex-column">
                <img src={Logo}/>
                <h5>Create your new account</h5>
                <p>you have one step to join us</p>
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
            </div>
        </div>
    )
}
export default CreateAccount;
