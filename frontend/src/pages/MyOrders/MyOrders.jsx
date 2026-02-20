import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';

const MyOrders = () => {

    const { url, token } = useContext(StoreContext);
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
        setData(response.data.data || []);
    }

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token])

    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            <div className="container">
                {data && data.map((order, index) => {
                    return (
                        <div key={index} className='my-orders-order'>
                            <img src={assets.parcel_icon} alt="" />
                            <p>{order.items && order.items.map((item, index) => {
                                if (index === order.items.length - 1) {
                                    return item.name + " x " + item.quantity
                                }
                                else {
                                    return item.name + " x " + item.quantity + ", "
                                }
                            })}</p>
                            <p>${order.amount}.00</p>
                            <p>Items: {order.items ? order.items.reduce((acc, item) => acc + item.quantity, 0) : 0}</p>
                            <div className="status-timeline">
                                <p className="status-text"><span>&#x25cf;</span> <b>{order.status}</b></p>
                                <div className="timeline-steps">
                                    <div className={`status-step ${order.status === "Food Processing" || order.status === "Out for delivery" || order.status === "Delivered" ? "active" : ""}`}>
                                        <div className="status-dot"></div>
                                        <p>Processing</p>
                                    </div>
                                    <div className={`status-line ${order.status === "Out for delivery" || order.status === "Delivered" ? "active" : ""}`}></div>
                                    <div className={`status-step ${order.status === "Out for delivery" || order.status === "Delivered" ? "active" : ""}`}>
                                        <div className="status-dot"></div>
                                        <p>On the way</p>
                                    </div>
                                    <div className={`status-line ${order.status === "Delivered" ? "active" : ""}`}></div>
                                    <div className={`status-step ${order.status === "Delivered" ? "active" : ""}`}>
                                        <div className="status-dot"></div>
                                        <p>Delivered</p>
                                    </div>
                                </div>
                            </div>
                            <button onClick={fetchOrders}>Track Order</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MyOrders
