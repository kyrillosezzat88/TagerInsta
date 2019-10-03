import React , {Component} from 'react'
import '../styles/home.css';
import {Link} from 'react-router-dom'
import Menu from '../images/menu.png'
import Balance from '../images/balance_money.png';
import AddBalance from '../images/addBalance.png';
import Service from '../images/portals.png'
import News from '../images/news.png'
import Support from '../images/support.png'
import Report from '../images/report.png'
import Logout from '../images/logout.png'
import userEdit from '../images/userEdit.png'
import paypal from '../images/paypal.png'
import visa from '../images/myFatorah.png'
import Close from '../images/close_payment_popup.png'

class Home extends Component{
    handelMenu = ()=>{
        let menu = document.getElementsByClassName('menu')[0];
        menu.style.left = '0%';
    }
    render(){
        return(
            <div className='Home'>
                {/* Start NavBar*/}
                <nav>
                    <div className='container'>
                       <div className=' d-flex justify-content-between align-items-center'>
                       <img src={Menu} alt='menu' onClick={this.handelMenu}/>
                        <p>Tager insta</p>
                        <div></div>
                       </div>
                      <div className='info d-flex justify-content-around align-items-center'>
                        <div className='memberName'>
                            <p>Test</p>
                            <Link to='/MemberUp'><button>Membership Upgrade</button></Link>
                        </div>
                        <div className='blance'>
                            <div className='d-flex justify-content-around align-items-center flex-column' data-toggle="modal" data-target="#myModal">
                                <img src ={Balance} alt='Balance'/>
                                <span>100 KWD</span>
                                <img src={AddBalance} alt='AddBalance' className="add" />
                            </div>
                        </div>
                      </div>
                    </div>

                </nav>
                {/* End NavBar*/}
                {/* Start Content Home Page */}
                <div className='content'>
                    <div className='container'>
                        <p className='text-center'><span>Tager insta </span>All Social Networking Services</p>
                        <div className='row'>
                            <div className='col-6'>
                                <Link>
                                    <div className='service d-flex justify-content-center align-items-center flex-column'>
                                        <img src={Service} alt ='Serive' />
                                        <p>Service</p>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-6'>
                                <Link>
                                    <div className='News d-flex justify-content-center align-items-center flex-column'>
                                        <img src={News} alt ='News' />
                                        <p>News</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <Link>
                                    <div className='Support d-flex justify-content-center align-items-center flex-column'>
                                        <img src={Report} alt ='Serive' />
                                        <p>Orders</p>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-6'>
                                <Link>
                                    <div className='Report d-flex justify-content-center align-items-center flex-column'>
                                        <img src={Support} alt ='News' />
                                        <p>Support</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Content Home Page */}
                {/* Start Menu */}
                <div className='menu'>
                    <div className='container'>
                            <p className='text-center'>Test</p>
                        <div className='logout d-flex justify-content-between align-items-center'>
                            <Link><div><img src={Logout} alt='logout'/> <p className='d-inline-block'>Logout</p></div></Link>
                            <Link> <img src={userEdit} alt='edit'/></Link>
                        </div>
                        <div className='balance d-flex justify-content-between align-items-center'>
                            <p>Balance</p>
                            <p>1000 KWD</p>
                           <Link><img src={AddBalance} data-toggle="modal" data-target="#myModal"  width="35px"/></Link>
                        </div>
                        <ul>
                            <li><Link>Services</Link></li>
                            <li><Link>Payment History</Link></li>
                            <li><Link>Order History</Link></li>
                            <li><Link>Share App</Link></li>
                            <li><Link>About App</Link></li>
                            <li><Link>Usage Police</Link></li>
                        </ul>
                    </div>
                </div>
                {/* End Menu */}
                {/* Start Pop up Payment */}
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                      
                        <div className="modal-header">
                            <h5 className="modal-title">Add balance</h5>
                            <button type="button" className="close" data-dismiss="modal"><img src={Close} width='20px'/></button>
                        </div>

                    
                        <div className="modal-body">
                           <h5>Choose Payment type</h5>
                           <div>
                               <input type='radio' name='payment' id='paypal'/>
                               <label htmlFor='paypal'><img src={paypal}  alt='paypal'/></label>
                           </div>
                           <div>
                               <input type='radio' name='payment' id='visa'/>
                               <label htmlFor='visa'><img src={visa} alt='visa'/></label>
                           </div>
                        </div>

                     
                        <div className="modal-footer d-flex justify-content-center align-item-center flex-column">
                            <h5>Input amount</h5>
                            <input type='text' placeholder='amount with KWD'/>
                            <p>Must amount biger than <span>10 KWD</span></p>
                            <button>pay</button>
                        </div>

                        </div>
                    </div>
                    </div>
                {/*End Pop up Payment */}
            </div>
        )
    }
}
export default Home;