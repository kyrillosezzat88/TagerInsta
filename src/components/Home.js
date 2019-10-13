import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import Menu from '../images/menu.png'
import Balance from '../images/balance_money.png';
import AddBalance from '../images/addBalance.png';
import Service from '../images/portals.png'
import News from '../images/news.png'
import Support from '../images/support.png'
import Report from '../images/report.png'
import Logout from '../images/logout.png'
import userEdit from '../images/userEdit.png'
class Home extends Component{
    //Function to open menu and when click on it will prevent body function
    handelMenu = ()=>{
        let menu = document.getElementsByClassName('menu')[0];
        menu.style.left = '0%';
        let overlay = document.getElementsByClassName('overlay')[0];
        overlay.style.display = 'block';
    }
     //Function To close side menu when click on any part of page
    componentDidMount(){
        document.body.onclick = (e)=>{
            document.getElementsByClassName('menu')[0].style.left = '-100%';
            let overlay = document.getElementsByClassName('overlay')[0];
            overlay.style.display = 'none';
        }
    }
    componentWillUnmount(){
        document.body.onclick = ()=>{
           return null;
        }
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
                      <div className='info d-flex justify-content-between align-items-center'>
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
                <div className="overlay"></div>
                {/* Start Content Home Page */}
                <div className='content'>
                    <div className='container'>
                        <p className='text-center'><span>Tager insta </span>All Social Networking Services</p>
                        <div className='row'>
                            <div className='col-6 col-md-3'>
                                <div className="des">
                                    <Link to='/Services'>
                                        <div className='service d-flex justify-content-center align-items-center flex-column'>
                                            <div className='img d-flex justify-content-center align-items-center'><img src={Service} alt ='Serive' /></div>
                                            <p>Service</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-6 col-md-3'>
                               <div className="des">
                                    <Link to="/News">
                                    <span>1</span>
                                        <div className=' d-flex justify-content-center align-items-center flex-column'>
                                        <div className="img d-flex justify-content-center align-items-center"> <img src={News} alt ='News' /></div>
                                            <p>News</p>
                                        </div>
                                    </Link>
                               </div>
                            </div>
                            <div className='col-6 col-md-3'>
                                <div className="des">
                                    <Link to='/Order'>
                                        <div className='Support d-flex justify-content-center align-items-center flex-column'>
                                        <div className="img d-flex justify-content-center align-items-center"> <img src={Report} alt ='Serive' /></div>
                                            <p>Orders</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-6 col-md-3'>
                               <div className="des">
                                    <Link to='/Support'>
                                        <span>1</span>
                                        <div className='Report d-flex justify-content-center align-items-center flex-column'>
                                        <div className='img d-flex justify-content-center align-items-center'> <img src={Support} alt ='News' /></div>
                                            <p>Support</p>
                                        </div>
                                    </Link>
                               </div>
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
                            <Link to="/Login"><div><img src={Logout} alt='logout'/> <p className='d-inline-block'>Logout</p></div></Link>
                            <Link to='/EditProfile'> <img src={userEdit} alt='edit'/></Link>
                        </div>
                        <div className='balance d-flex justify-content-between align-items-center'>
                            <p>Balance</p>
                           <Link className="d-flex justify-content-center align-items-center"><p>1000 KWD</p><img src={AddBalance} data-toggle="modal" data-target="#myModal"  width="35px"/></Link>
                        </div>
                        <ul>
                            <li><Link to="/Services">Services</Link></li>
                            <li><Link to='/PaymentHist'>Payment History</Link></li>
                            <li><Link to='/Order'>Order History</Link></li>
                            <li><Link>Share App</Link></li>
                            <li><Link to='/About'>About App</Link></li>
                            <li><Link to='Policy'>Usage Police</Link></li>
                        </ul>
                    </div>
                </div>
                {/* End Menu */}
            </div>
        )
    }
}
export default Home;