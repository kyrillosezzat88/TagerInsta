import React from 'react';
import En from '../images/en.png';
import Ar from '../images/ar.png'
import Close from '../images/close_payment_popup.png'
const LangPopUp = ()=>{
    return(
        <div className="modal Currancy" id="Lang" >
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Change Language</h5>
                    <button type="button" className="close" data-dismiss="modal"><img src={Close} width='20px'/></button>
                </div>
                <div className="modal-body">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="ChCurrne d-flex justify-content-center align-items-center">
                            <img src={En} />
                            <button>English</button>
                        </div>
                        <div className="ChCurrne d-flex justify-content-center align-items-center">
                            <img src={Ar} />
                            <button>عربي</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
       </div>

    )
}
export default LangPopUp;