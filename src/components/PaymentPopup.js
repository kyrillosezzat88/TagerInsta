import React from 'react';
import paypal from '../images/paypal.png'
import visa from '../images/myFatorah.png'
import Close from '../images/close_payment_popup.png'
import '../styles/PaymentPopup.css'
const PaymentPopUp = ()=>{
    return(
         
           <div className="modal" id="myModal" >
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Add balance</h5>
                    <button type="button" className="close" data-dismiss="modal"><img src={Close} width='20px'/></button>
                </div>
                <div className="modal-body">
                    <h5>Choose Payment type</h5>
                    <div>
                        <input type='radio' name='payment' id='paypal'/>
                        <label htmlFor='paypal'><img src={paypal}  alt='paypal'/></label>
                        <span className="checkmark"></span>
                    </div>
                    <div>
                        <input type='radio' name='payment' id='visa'/>
                        <label htmlFor='visa'><img src={visa} alt='visa'/></label>
                        <span className="checkmark"></span>
                    </div>
                </div>
                <div className="modal-footer d-flex justify-content-center align-item-center flex-column">
                    <h5>Input amount</h5>
                    <input type='text' placeholder='amount with KWD'/>
                    <p>Must amount biger than <span>10 KWD</span></p>
                    <button>pay</button>
                </div>

                </div>
            </div>
           </div>
      
    )
}
export default PaymentPopUp;