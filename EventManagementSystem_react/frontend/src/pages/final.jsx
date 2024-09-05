import { useState } from 'react';
import '../css/final.css'; 
import Footer3 from '../components/footer3';

const Final = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        location: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/auth/final', { // Update the URL to your backend endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsFormSubmitted(true);
            } else {
                console.error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="background-container">
            <div className="topRight">
                <a href="/book">Book</a>
                <a href="/login">Logout</a>
            </div>
            <div className="final">
                <h2>Book Your Events</h2>
                {!isFormSubmitted ? (
                    <form id="booking" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number:</label>
                            <input 
                                type="text" 
                                id="phone" 
                                name="phone" 
                                value={formData.phone} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Location:</label>
                            <input 
                                type="text" 
                                id="location" 
                                name="location" 
                                value={formData.location} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <input type="submit" id="Sbtn" value="Book" />
                    </form>
                ) : (
                    <div className="message" id="message">
                        Our Staff will contact You
                    </div>
                )}
            </div>
            <Footer3 />
        </div>
    );
};

export default Final;
