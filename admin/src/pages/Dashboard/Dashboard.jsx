import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import axios from 'axios'

const Dashboard = ({ url }) => {
    const [data, setData] = useState({
        totalRevenue: 0,
        totalOrders: 0,
        totalItems: 0,
        recentOrders: []
    })

    const fetchDashboardData = async () => {
        try {
            const [foodResponse, orderResponse] = await Promise.all([
                axios.get(`${url}/api/food/list`),
                axios.get(`${url}/api/order/list`)
            ]);

            if (foodResponse.data.success && orderResponse.data.success) {
                const orders = orderResponse.data.data;
                const totalRevenue = orders.reduce((acc, order) => acc + order.amount, 0);
                
                setData({
                    totalRevenue,
                    totalOrders: orders.length,
                    totalItems: foodResponse.data.data.length,
                    recentOrders: orders.slice(-5).reverse()
                });
            }
        } catch (error) {
            console.error("Dashboard fetch error:", error);
        }
    }

    useEffect(() => {
        fetchDashboardData();
    }, [])

    return (
        <div className='dashboard flex-col'>
            <h2>Dashboard Overview</h2>
            <div className="dashboard-stats">
                <div className="stat-card">
                    <p>Total Revenue</p>
                    <h3>${data.totalRevenue.toFixed(2)}</h3>
                </div>
                <div className="stat-card">
                    <p>Total Orders</p>
                    <h3>{data.totalOrders}</h3>
                </div>
                <div className="stat-card">
                    <p>Food Items</p>
                    <h3>{data.totalItems}</h3>
                </div>
            </div>

            <div className="dashboard-recent">
                <h3>Recent Orders</h3>
                <div className="recent-list">
                    <div className="recent-header">
                        <b>Customer</b>
                        <b>Items</b>
                        <b>Amount</b>
                        <b>Status</b>
                    </div>
                    {data.recentOrders.map((order, index) => (
                        <div key={index} className="recent-item">
                            <p>{order.address.firstName} {order.address.lastName}</p>
                            <p>{order.items.length} items</p>
                            <p>${order.amount}</p>
                            <p className={`status-pill ${order.status.replace(/\s+/g, '-').toLowerCase()}`}>
                                {order.status}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
