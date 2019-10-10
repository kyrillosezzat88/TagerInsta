import React from 'react';
import Close from '../images/close_payment_popup.png'
import En from '../images/en.png';
import Ar from '../images/ar.png'
const Currancy = ()=>{
    return(
        <div className="modal Currancy" id="Currancy" >
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Change Currancy</h5>
                <button type="button" className="close" data-dismiss="modal"><img src={Close} width='20px'/></button>
            </div>
            <div className="modal-body">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="ChCurrne d-flex justify-content-center align-items-center">
                        <img src={Ar} />
                        <button>KWD</button>
                    </div>
                    <div className="ChCurrne d-flex justify-content-center align-items-center">
                        <img src={En} />
                        <button>USA</button>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="ChCurrne d-flex justify-content-center align-items-center">
                        <img src={Ar} />
                        <button>KWD</button>
                    </div>
                    <div className="ChCurrne d-flex justify-content-center align-items-center">
                        <img src={En} />
                        <button>USA</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
       </div>
    )
}
export default Currancy;