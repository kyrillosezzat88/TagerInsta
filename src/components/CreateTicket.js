import React from 'react';
import Navbar from './Navbar';

const CreateTicket = ()=>{
    return(
        <div className="CreateTicket">
            <Navbar back={'/Support'} />
            <div className="content">
                <div className='container d-flex justify-content-center align-items-center flex-column'>
                    <h5 className="align-self-start">New Ticket!</h5>
                    <input className="form-control" type="text" placeholder="Order Id" />
                    <textarea placeholder="New Message Here"></textarea>
                    <button>Send</button>
                </div>
            </div>

        </div>
    )
}
export default CreateTicket;