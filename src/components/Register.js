import React from 'react';
import '../styles/Register.css';
import Home from '../images/home.png'
import Back from '../images/back_en.png'
import {Link} from 'react-router-dom'
import paypal from '../images/paypal.png'
import visa from '../images/myFatorah.png'

const Register = ()=>{
    return(
        <div className="Register">
            {/*Start Navbar  */}
            <nav>
                <div className='container'>
                    <div className=' d-flex justify-content-between align-items-center'>
                      <Link  to='/MemberUp'><img className='backimg' src={Back} alt='back'/></Link>
                        <p>Tager insta</p>
                        <Link to='/Home'><img src={Home} alt='home'/></Link>
                    </div>
                </div>
            </nav>
            {/*End Navbar  */}
            {/*Start Content  */}
            <div className="content">
                <div className="container">
                    <div className="head">
                        <h5>Membership Upgrade</h5>
                        <p>you will recice a note to your email within 24 hours with the details of membership activation and login to the site</p>
                    </div>
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Usernmae</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Usernmae"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Email</label>
                            <input type="email" className="form-control" id="exampleInputPassword1" placeholder="email@domin.com"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Phone</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="000000000"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="your password"/>
                        </div>
                        <div className='payment'>
                            <h5>Choose Payment Type</h5>
                            <div>
                               <input type='radio' name='payment' id='paypal'/>
                               <label htmlFor='paypal'><img src={paypal} width="110px" alt='paypal'/></label>
                               <span className="checkmark"></span>
                           </div>
                           <div>
                               <input type='radio' name='payment' id='visa'/>
                               <label htmlFor='visa'><img src={visa} width="110px" alt='visa'/></label>
                               <span className="checkmark"></span>
                           </div>
                        </div>
                        <Link className="d-flex justify-content-center flex-column align-items-center"><p><span>30</span>KWD</p><button type="submit" className="btn">Pay</button></Link>
                    </form>
                </div>
            </div>
            {/*End Content  */}
        </div>
    )
}
export default Register;