import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className='newsletter' id='newsletter'>
            <div className='newsletter-container'>
                <h2>Join our food lovers' club!</h2>
                <p>Subscribe to our newsletter and get 20% off your first order.</p>
                <form className='newsletter-form' onSubmit={(e)=>e.preventDefault()}>
                    <input type="email" placeholder='Enter your email' required />
                    <button type='submit'>Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default Newsletter
