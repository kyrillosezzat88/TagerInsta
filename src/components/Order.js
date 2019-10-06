import React from 'react';
import Navbar from './Navbar';
import '../styles/Order.css';
import {Link} from 'react-router-dom';
const Order = ()=>{
    return(
        <div className="Order">
            <Navbar back={'/Home'} />
            {/*Start  Content  */}
            <div className="content">
                <div className="container">
                    <h5>Orders History</h5>
                    <Link to='/Services'><button className="btn btn-primary">New Order</button></Link>
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
            {/*End  Content  */}
        </div>
    )
}
export default Order;