import React from 'react';
import Logo from '../images/logo.png';
import {Link} from 'react-router-dom';
import English from '../images/en.png'
import Arabic from '../images/ar.png'
const Welcome = ()=>{
    return(
        <div className='welcome'>
            <div className='h-100 d-flex justify-content-center align-items-center flex-column'>
                <img src={Logo} className='d-block' alt='logo'/>
                <div className='langs d-flex justify-content-center align-items-center'>
                    <Link  to='/Home' className='justify-content-center align-items-center'>
                        <img src={English} alt='English Lang'/>
                        <span>English</span>
                    </Link>                    
                    <Link  className='justify-content-center align-items-center'>
                        <span>عربي</span>
                        <img src={Arabic} alt='Arabic Lang'/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Welcome;