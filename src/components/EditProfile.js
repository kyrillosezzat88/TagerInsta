import React from 'react';
import Navbar from './Navbar'
const EditProfile = ()=>{
    return(
        <div className="EditProfile">
            <Navbar back={'/Home'} />
            <div className="content">
                <div className="container">
                    <h5>Setting</h5>
                    <form className="d-flex justify-content-center align-items-center flex-column">
                        <div className="form-group w-100">
                            <label htmlFor="username">Username</label>
                            <input className="form-control" type="text" value="test"/>
                        </div>
                        <div className="form-group w-100">
                            <label htmlFor="Email">Email</label>
                            <input className="form-control" type="email" value="test@Test.com"/>
                        </div>
                        <div className="form-group w-100">
                            <label htmlFor="phone">Phone</label>
                            <input className="form-control" type="text" value="0000000"/>
                        </div>
                        <div className="form-group w-100">
                            <label htmlFor="password">Password</label>
                            <input className="form-control" type="password" placeholder="Enter New pass if you need to change it"/>
                        </div>
                        <div className="w-100 btns d-flex justify-content-center align-items-center">
                            <button data-toggle="modal" data-target="#Currancy">New Curancey <span>KWD</span></button>
                            <button data-toggle="modal" data-target="#Lang">English</button>
                        </div>
                        <button className="btn">Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default EditProfile;