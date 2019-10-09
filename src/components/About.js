import React from 'react';
import Navbar from './Navbar';

const About = ()=>{
    return(
        <div className="About">
            <Navbar back={'/Home'} />
            <div className="content">
                <div className='container'>
                    <p>Tager insta is The first Application of its kind to provide all the services of social networking programs</p>
                    <p>we Provie all services instgrame, Twitter, Facebook our services run by 24-hour programmer </p>
                </div>
            </div>
        </div>
    )
}
export default About;