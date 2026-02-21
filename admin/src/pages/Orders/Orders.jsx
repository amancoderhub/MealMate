import React, { useEffect, useState } from 'react'
import './Orders.css'
import { toast } from 'react-toastify'
import axios from 'axios'
import { assets } from '../../assets/assets'

const Orders = ({ url }) => {

  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
    }
    else {
      toast.error("Error")
    }
  }

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value
    })
    if (response.data.success) {
      await fetchAllOrders();
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [])

  const filteredOrders = orders.filter(order => {
    const matchesStatus = filter === "All" || order.status === filter;
    const matchesSearch = (order.address.firstName + " " + order.address.lastName).toLowerCase().includes(searchTerm.toLowerCase()) ||
                          order.address.phone.includes(searchTerm);
    return matchesStatus && matchesSearch;
  })

  return (
    <div className='order add'>
      <div className="order-header">
        <h3>Order Page</h3>
        <input 
          type="text" 
          placeholder="Search by name or phone..." 
          className="order-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="order-filters">
          <button onClick={() => setFilter("All")} className={filter === "All" ? "active" : ""}>All ({orders.length})</button>
          <button onClick={() => setFilter("Food Processing")} className={filter === "Food Processing" ? "active" : ""}>Processing ({orders.filter(o => o.status === "Food Processing").length})</button>
          <button onClick={() => setFilter("Out for delivery")} className={filter === "Out for delivery" ? "active" : ""}>Out for delivery ({orders.filter(o => o.status === "Out for delivery").length})</button>
          <button onClick={() => setFilter("Delivered")} className={filter === "Delivered" ? "active" : ""}>Delivered ({orders.filter(o => o.status === "Delivered").length})</button>
        </div>
      </div>
      <div className="order-list">
        {filteredOrders.map((order, index) => (
          <div key={index} className='order-item'>
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className='order-item-food'>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity
                  }
                  else {
                    return item.name + " x " + item.quantity + ", "
                  }
                })}
              </p>
              <p className="order-item-name">{order.address.firstName + " " + order.address.lastName}</p>
              <div className='order-item-address'>
                <p>{order.address.street + ","}</p>
                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
              </div>
              <p className='order-item-phone'>{order.address.phone}</p>
            </div>
            <p>Items : {order.items.reduce((acc, item) => acc + item.quantity, 0)}</p>
            <p>${order.amount}</p>
            <select onChange={(event) => statusHandler(event, order._id)} value={order.status} className={order.status.replace(/\s+/g, '-').toLowerCase()}>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders