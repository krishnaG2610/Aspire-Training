import { useEffect, useState } from 'react';
import '../css/meetup.css'; 
import Footer2 from '../components/footer2'; 

const Meetup = () => {
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

    return (
        <div>
            <div className="topRight">
                <a href="/">Home</a>
                <a href="/book">Book</a>
                <a href="/login">Logout</a>
            </div>
            <div className="top">
                <div className="slide">
                    <img className="myslide" src="/assets/m1.jpg" alt="Slide 1" />
                    <img className="myslide" src="/assets/m2.jpg" alt="Slide 2" />
                    <img className="myslide" src="/assets/m3.jpg" alt="Slide 3" />
                    <img className="myslide" src="/assets/m4.jpg" alt="Slide 4" />
                    <div className="head">
                        <h1 id="meettext">Special Event and <br /> Meetup </h1>
                    </div>
                </div>
            </div>
            <div className="details">
                <div className="pic1">
                    <img src="/assets/m5.jpg" alt="Standup and Singing" />
                </div>
                <div className="text">
                    <h1 id="meetext1">Standup and</h1>
                    <h1 id="meeceremony">Singing</h1>
                </div>
                <div className="pic2">
                    <img src="/assets/m6.jpg" alt="Dinning" />
                </div>
                <div className="text2">
                    <h1 id="text2">Dinning</h1>
                </div>
                <div className="pic3">
                    <img src="/assets/m7.jpg" alt="Stage for Discussion" />
                </div>
                <div className="text3">
                    <h1 id="text3">Stage for Discussion</h1>
                </div>
                <div className="pic4">
                    <img src="/assets/m8.jpg" alt="Photography" />
                </div>
                <div className="text4">
                    <h1 id="text4">Photography</h1>
                </div>
                <div className="button">
        <a href="/final" className="bttn">Book Now</a>
    </div>
            </div>
            <Footer2 />
        </div>
    );
};

export default Meetup;
