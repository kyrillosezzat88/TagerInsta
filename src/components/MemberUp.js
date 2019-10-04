import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/MemberUp.css';
import Home from '../images/home.png'
import Back from '../images/back_en.png'
import Gold from '../images/gold.png'
import True from '../images/true.png'
const MemberUp = ()=>{
    return(
        <div className='MemberUp'>
            {/*Start navbar  */}
            <nav>
                <div className='container'>
                    <div className=' d-flex justify-content-between align-items-center'>
                      <Link  to='/Home'><img className='backimg' src={Back} alt='back'/></Link>
                        <p>Tager insta</p>
                        <Link to='/Home'><img src={Home} alt='home'/></Link>
                    </div>
                </div>
            </nav>
            {/* end navbar  */}
            {/*Start Conetnt Page */}
            <div className="content">
                <div className='container'>
                    <div className='head'>
                        <h4><img width="40px" src={Gold}/> Membership Upgrade</h4>
                        <p>subtitle for distibutions adn ongoing applications for best price</p>
                    </div>
                    <div className='info'>
                        <div className="top d-flex justify-content-start align-items-center"><img src={True} width="20px"/> <p>Get Membership for life on your website and enjoy the following upgrades</p></div>
                        <div className="d-flex justify-content-start align-items-center"><img src={True} width="20px"/> <p>powerful control panal for social  services</p></div>
                        <div className="d-flex justify-content-start align-items-center"><img src={True} width="20px"/> <p>powerful control panal for social  services</p></div>
                        <div className="d-flex justify-content-start align-items-center"><img src={True} width="20px"/> <p>powerful control panal for social  services</p></div>
                        <div className="d-flex justify-content-start align-items-center"><img src={True} width="20px"/> <p>powerful control panal for social  services</p></div>
                    </div>
                </div>
                <div className=" d-flex justify-content-center align-items-center"><Link to='/Register'><button>Register Now</button></Link></div>
            </div>
            {/*End Conetnt Page */}
        </div>
    )
}
export default MemberUp;