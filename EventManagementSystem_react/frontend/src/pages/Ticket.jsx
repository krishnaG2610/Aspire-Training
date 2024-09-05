import React, { useState } from 'react';
import '../css/ticket.css';
import Footer3 from '../components/footer3';

const Ticket = () => {
    const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsBookingConfirmed(true);
    };

    return (
        <div className="container">
            <div className="topRight">
                <a href="/book">Book</a>
                <a href="/login">Logout</a>
            </div>
            {!isBookingConfirmed ? (
                <div className="ticketCard">
                    <h1>Event Ticket Booking</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form">
                            <label htmlFor="event">Select Event:</label>
                            <select id="event" name="event">
                                <option value="u1_concert">U1 Concert</option>
                                <option value="chennai_marathon">Chennai Marathon</option>
                                <option value="standup_comedy">Standup Comedy Show</option>
                                <option value="f1_jaipur">F1 Jaipur</option>
                            </select>
                        </div>
                        <div className="form">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form">
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="text" id="phone" name="phone" required />
                        </div>
                        <div className="form">
                            <label htmlFor="location">Location:</label>
                            <input type="text" id="location" name="location" required />
                        </div>
                        <button type="submit" className="btttn">Book Now</button>
                    </form>
                </div>
            ) : (
                <div className="bookingCard">
                    <center>
                        <img src="/assets/UPI.webp" id="upi" alt="UPI" />
                        <h4>UPI Payments Accepted Here</h4>
                        <h1>Elegant Edge Events</h1>
                        <p>Scan QR Code below with your UPI App</p>
                        <div id="qr"><img src="/assets/qr.webp" alt="QR Code" /></div>
                        <p>Or</p>
                        <p>Pay to VPA</p>
                        <h4>krish@icici</h4>
                    </center>
                </div>
            )}
            <Footer3/>
        </div>
    );
};

export default Ticket;
