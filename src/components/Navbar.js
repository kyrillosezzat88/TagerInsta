import React , {Component}from 'react';
import {Link} from 'react-router-dom'
import Home from '../images/home.png'
import Back from '../images/back_en.png'
import '../styles/Navbar.css'

class Navbar extends Component{
    render(){
        return(
            <nav>
              <div className='container'>
                  <div className=' d-flex justify-content-between align-items-center'>
                    <Link  to={this.props.back}><img className='backimg' src={Back} alt='back'/></Link>
                      <p>Tager insta</p>
                      <Link to='/Home'><img src={Home} alt='home'/></Link>
                  </div>
              </div>
          </nav>
        )
    
    }
}

export default Navbar;