import  { useEffect, useState } from 'react';
import '../css/ShowEvent.css';

const ShowEvent = () => {
  const [events, setEvents] = useState([]);

  // Fetch events from the backend when the component mounts
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://aspire-training.onrender.com/auth/ShowEvent');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="profile">
          <img src="/assets/admin.jpg" alt="Profile" />
          <p>user</p>
        </div>
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/CreateEvent">Create Events</a></li>
          <li><a href="/ShowEvent">Show Events</a></li>
          <li><a href="/Book">Book tickets</a></li>
          <li><a href="/login">Logout</a></li>
        </ul>
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
      <footer>
        <p>&copy; 2024 Elegant Edge Events. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ShowEvent;
