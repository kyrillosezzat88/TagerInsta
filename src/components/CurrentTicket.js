import React from 'react';
import Navbar from './Navbar';
import '../styles/CurrentTicket.css'
const CurrentTicket = ()=>{
    return(
        <div className='CurrentTicket'>
            <Navbar back ={'/Support'} />
            {/*Start Content */}
            <div className="content">
                <div className="container">
                    <h5>Current Ticket</h5>
                    <div className="Mes d-flex jsutify-content-center align-items-center flex-column">
                        <textarea placeholder='New Message Here'></textarea>
                        <button>Send</button>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className='preMes'>
                                <div className="head d-flex justify-content-between align-items-center">
                                    <p>test</p>
                                    <p className='date'>2019-10-05 13:13:55</p>
                                </div>
                                <div className='body'>Test</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className='preMes'>
                                <div className="head d-flex justify-content-between align-items-center">
                                    <p>test</p>
                                    <p className='date'>2019-10-05 13:13:55</p>
                                </div>
                                <div className='body'>Test</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className='preMes'>
                                <div className="head d-flex justify-content-between align-items-center">
                                    <p>test</p>
                                    <p className='date'>2019-10-05 13:13:55</p>
                                </div>
                                <div className='body'>Test</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*End Content */}
        </div>
    )
}
export default CurrentTicket;