import React from 'react';
import Navbar from './Navbar';
import '../styles/PaymentHis.css';
const PaymentHist = ()=>{
    return(
        <div className='PaymentHis'>
            <Navbar back={'/Home'}/>
            <div className='content'>
                <div className="container">
                    <h5>Payment History</h5>
                    <button className="btnn" data-toggle="modal" data-target="#myModal">Add Money</button>
                <div className="data">
                <table>
                    <tr>
                        <th>Order ID</th>
                        <th>username</th>
                        <th>service</th>
                        <th>package</th>
                        <th>price KWD</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>name</td>
                        <td>instgram</td>
                        <td>1k</td>
                        <td>10</td>
                        <td>pending</td>
                        <td>15/5/2018</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>name</td>
                        <td>instgram</td>
                        <td>1k</td>
                        <td>10</td>
                        <td>pending</td>
                        <td>15/5/2018</td>
                    </tr>
                </table>
                </div>

                </div>
            </div>
        </div>
    )
}
export default PaymentHist;