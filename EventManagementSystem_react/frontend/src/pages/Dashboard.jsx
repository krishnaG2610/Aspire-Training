import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../css/Dashboard.css';

function Dashboard() {
    useEffect(() => {
        // Initialize the map
        const map = L.map('map').setView([13.039791966673011, 80.21169995354566], 10);

        // Add a tile layer to the map
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Use Leaflet's default icon for testing
        const defaultIcon = L.icon({
            iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34]
        });

        // Add a marker with the default icon
        const marker = L.marker([13.039791966673011, 80.21169995354566], { icon: defaultIcon }).addTo(map);
        marker.bindPopup("<b>U1 Concert</b><br>Nehru Stadium").openPopup();

        // Clean up on component unmount
        return () => {
            map.remove();
        };
    }, []);

    return (
        <div className="dashboard">
            <div className="sidebar">
                <div className="profile">
                    <img src="/assets/admin.jpg" alt="User" />
                    <p>User</p>
                </div>
                <ul>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/CreateEvent">Create Events</a></li>
                    <li><a href="/ShowEvent">Show Events</a></li>
                    <li><a href="/Book">Book Tickets</a></li>
                    <li><a href="/login">Logout</a></li>
                </ul>
            </div>
            <div className="side">
                <header>
                    Elegant Edge Events!
                </header>
                <div className="main">
                    <div className="events">
                        <h2>UPCOMING OTHER EVENTS</h2>
                        <table className="eventstable">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Event</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>April 20, 2024</td>
                                    <td>Concert</td>
                                    <td>Chennai</td>
                                </tr>
                                <tr>
                                    <td>April 21, 2024</td>
                                    <td>Birthday</td>
                                    <td>Pondy</td>
                                </tr>
                                <tr>
                                    <td>April 22, 2024</td>
                                    <td>Community Yoga</td>
                                    <td>Pondy</td>
                                </tr>
                                <tr>
                                    <td>April 23, 2024</td>
                                    <td>F1 Car</td>
                                    <td>Chennai</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="map"></div>
                </div>
            </div>
            <footer>
                <p>&copy; 2024 Elegant Edge Events. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Dashboard;
