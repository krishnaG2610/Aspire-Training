import { useState } from 'react';
import axios from 'axios';
import '../css/style.css';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone_number: '',  // Updated to match backend field
        location: '',
        password: '',
    });

    const [msg, setMsg] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/auth/register', formData);
            if (response.status === 201) {
                setMsg('Sign Up Successful!');
            } else {
                setMsg(response.data.message || 'An error occurred');
            }
        } catch (error) {
            console.error('Error during registration:', error.response || error);
            setMsg(error.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <div className="auth-background">
            <div className="glass">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        id="phone-number"
                        name="phone_number"  // Updated to match backend field
                        placeholder="Phone number"
                        value={formData.phone_number}  // Updated to match backend field
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder="Location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Sign Up</button>
                    {msg && <center><p>{msg}</p></center>}
                    <p>Already have an account?<a href="/login"> Login</a></p>
                </form>
            </div>
        </div>
    );
};

export default Register;
