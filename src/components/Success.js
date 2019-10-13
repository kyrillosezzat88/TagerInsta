import React from 'react';
import success from '../images/success_icon.png';
const Success = ()=>{
    return(
        <div className="modal" id="success" >
            <div className="modal-dialog d-flex justify-content-center align-items-center">
                <div className="modal-content">
                <div className="modal-header d-flex justify-content-center align-item-center">
                    <img className="model-title" src={success} width="50px"/>
                </div>
                <div className="modal-body sucessbody">
                <h6 className="text-center">Success Order Creared</h6>
                </div>
                <div className="modal-footer d-flex justify-content-center align-item-center flex-column">
                    <button>ok</button>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Success;