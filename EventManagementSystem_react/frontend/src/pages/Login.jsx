import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import '../css/style.css'; 

const Login = () => {
  const [msg, setMsg] = useState('');
  const [msgType, setMsgType] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log('Submitting:', { email, password }); // Debugging line

    try {
      const response = await fetch('https://aspire-training.onrender.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      console.log('Response Data:', data); // Debugging line

      if (response.ok) {
        setMsg(data.msg);
        setMsgType(data.msg_type);
        navigate('/dashboard'); 
      } else {
        setMsg(data.msg);
        setMsgType(data.msg_type);
      }
    } catch (error) {
      console.error('Error:', error);
      setMsg('Internal server error');
      setMsgType('error');
    }
  };

  return (
    <div className="auth-background">
      <div className="glass login">
        <h1>Login</h1>
        {msg && <p className={msgType}>{msg}</p>}
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            required 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            required 
          />
          <button type="submit" className="login-btn">Login</button>
          <p>Not a member? <Link to="/register">Signup</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
