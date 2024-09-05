
import { useEffect, useState } from 'react';
import '../css/book.css'; 

const BookPage = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const slides = document.getElementsByClassName("myslide");

    useEffect(() => {
        const maxSlides = slides.length;
        const slideInterval = setInterval(() => {
            setSlideIndex(prevIndex => {
                let newIndex = prevIndex + 1;
                if (newIndex >= maxSlides) {
                    newIndex = 0;
                }
                return newIndex;
            });
        }, 2000);

        return () => clearInterval(slideInterval);
    }, [slides.length]);

    useEffect(() => {
        Array.from(slides).forEach((slide, index) => {
            slide.style.display = index === slideIndex ? 'block' : 'none';
        });
    }, [slideIndex, slides]);

    const scrollToActivity = () => {
        const scrollactivity = document.querySelector(".activity");
        if (scrollactivity) {
            scrollactivity.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <div className="top">
                <div className="navbar">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/book">Book Now</a></li>
                        <li><a href="/profile">Profile</a></li>
                        <li><a href="/login">Logout</a></li>
                    </ul>
                </div>
                <div className="slide1">
                    <img className="myslide" src="/assets/f10.jpg" alt="Event 1" />
                    <div className="text">
                        <h1 id='heading'>Upcoming Events</h1>
                    </div>
                </div>
                <div className="slide2">
                    <img className="myslide" src="/assets/ma.jpg" alt="Event 2" />
                    <div className="text"></div>
                </div>
                <div className="slide3">
                    <img className="myslide" src="/assets/u1.png" alt="Event 3" />
                    <div className="text"></div>
                </div>
                <div className="slide4">
                    <img className="myslide" src="/assets/sc.jpg" alt="Event 4" />
                    <div className="text"></div>
                </div>
                <div className="button">
                    <a href="/ticket" className="btn">Book Tickets</a>
                </div>
            </div>
            <div className="activity">
                <img src="/assets/f1.jpg" alt="Activity" />
                <div className="text1">
                    <h1>Experience Better</h1>
                </div>
            </div>
            <div className="grid">
                <div className="box">
                    <img src="/assets/birthday.jpg" alt="Birthday Celebration" />
                    <h3>Birthday Celebration</h3>
                    <p>Both indoor and outdoor available at affordable price</p>
                    <a href="/birthday" className="btn">Book Now</a>
                </div>
                <div className="box">
                    <img src="/assets/gat.jpg" alt="Special Event & Meet Up" />
                    <h3>Special Event & Meet Up</h3>
                    <p>Gathering for family, friends, alumni, corporate meet up</p>
                    <a href="meetup" className="btn">Book Now</a>
                </div>
                <div className="box">
                    <img src="/assets/concert.jpg" alt="Concert" />
                    <h3>Concert</h3>
                    <p>All concerts from indoor stage to outdoor stadium</p>
                    <a href="/concert" className="btn">Book Now</a>
                </div>
                <div className="box">
                    <img src="/assets/box.jpg" alt="Sports" />
                    <h3>Sports</h3>
                    <p>Sports like boxing, martial arts, athletic competitions</p>
                    <a href="/sports" className="btn">Book Now</a>
                </div>
                <div className="box">
                    <img src="/assets/com.jpg" alt="Community Events" />
                    <h3>Community Events</h3>
                    <p>Events like community yoga, discussions</p>
                    <a href="/community" className="btn">Book Now</a>
                </div>
                <div className="box">
                    <img src="/assets/f11.jpg" alt="Track Events" />
                    <h3>Track Events</h3>
                    <p>Formula 2 and 3, bike stunts</p>
                    <a href="/track" className="btn">Book Now</a>
                </div>
            </div>
            <div className="join">
                <div className="left">
                    <div className="grid2">
                        <div className="pic">
                            <img src="/assets/1.jpg" alt="Pic 1" />
                        </div>
                        <div className="pic">
                            <img src="/assets/2.jpg" alt="Pic 2" />
                        </div>
                        <div className="pic">
                            <img src="/assets/3.jpg" alt="Pic 3" />
                        </div>
                        <div className="pic">
                            <img src="/assets/4.jpg" alt="Pic 4" />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <h3>Lets Build a Community</h3>
                    <center><button onClick={scrollToActivity}>Join Us</button></center>
                </div>
            </div>
            <div className="bfooter">
                <p>&copy; 2024 Elegant Edge Events. All rights reserved.</p>
            </div>
        </div>
    );
};

export default BookPage;
