import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
    return (
    <div className='app-download' id='app-download'>
        <div className="app-download-stats">
            <div className="stat-item">
                <h3>50k+</h3>
                <p>Happy Customers</p>
            </div>
            <div className="stat-item">
                <h3>100+</h3>
                <p>Professional Chefs</p>
            </div>
            <div className="stat-item">
                <h3>500+</h3>
                <p>Tasty Varieties</p>
            </div>
        </div>
        <p>For Better Experience Download <br/>Mealmate </p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
    )
}

export default AppDownload