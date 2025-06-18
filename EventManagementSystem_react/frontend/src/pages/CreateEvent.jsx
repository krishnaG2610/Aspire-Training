import { useState } from 'react';
import '../css/CreateEvent.css'; 

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    eventDate: '',
    eventLocation: '',
    phoneNumber: '',
    eventType: '',
    eventDescription: '',
  });

  const [events, setEvents] = useState([]); // Initialize the events state
  const [message, setMessage] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://aspire-training.onrender.com/auth/CreateEvent', { // Update the URL to match your backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Event created successfully!');
        setEvents([...events, formData]); // Add new event to the list
        setFormData({ eventDate: '', eventLocation: '', phoneNumber: '', eventType: '', eventDescription: '' }); // Clear the form
      } else {
        setMessage(`Error: ${data.msg || 'An error occurred'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred while creating the event.');
    }
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="profile">
          <img src="/assets/admin.jpg" alt="Profile" />
          <p>user</p>
        </div>
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/createevent">Create Events</a></li>
          <li><a href="/showevent">Show Events</a></li>
          <li><a href="/book">Book tickets</a></li>
          <li><a href="/login">Logout</a></li>
        </ul>
      </div>
      <div className="eventcreation">
        <h1 id='cehead'>Elegant Edge Events!</h1>
        <div className="event-form-container">
          <div className="event-form-box">
            <h2>Create Event</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="eventDate">Date:</label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleInputChange}
                required
              /><br /><br />

              <label htmlFor="eventLocation">Location:</label>
              <input
                type="text"
                id="eventLocation"
                name="eventLocation"
                value={formData.eventLocation}
                onChange={handleInputChange}
                required
              /><br /><br />

              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              /><br /><br />

              <label htmlFor="eventType">Event Type:</label>
              <input
                type="text"
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleInputChange}
                required
              /><br /><br />

              <label htmlFor="eventDescription">Event Description:</label>
              <textarea
                id="eventDescription"
                name="eventDescription"
                value={formData.eventDescription}
                onChange={handleInputChange}
                required
              ></textarea><br /><br />

              <input type="submit" value="Submit" />
              {message && <center><p>{message}</p></center>}
            </form>
          </div>
        </div>
      </div>
      <div className="Table">
        <h1 id='yr'>Your Events</h1>
        <div className="EventList">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Location</th>
                <th>Phone Number</th>
                <th>Event Type</th>
                <th>Event Description</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={index}>
                  <td>{event.eventDate}</td>
                  <td>{event.eventLocation}</td>
                  <td>{event.phoneNumber}</td>
                  <td>{event.eventType}</td>
                  <td>{event.eventDescription}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <footer2/>
    </div>
  );
};

export default CreateEvent;
``
