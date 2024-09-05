import { useEffect, useState } from 'react';
import '../css/community.css'; 
import Footer2 from '../components/footer2';

const Community = () => {
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
                    <img className="myslide" src="/assets/co1.jpg" alt="Slide 1" />
                    <img className="myslide" src="/assets/co2.jpg" alt="Slide 2" />
                    <img className="myslide" src="/assets/co3.jpg" alt="Slide 3" />
                    <img className="myslide" src="/assets/co4.jpg" alt="Slide 4" />
                    <div className="head">
                        <h1 id="ttext">Community Package</h1>
                    </div>
                </div>
            </div>
            <div className="details">
                <div className="pic1">
                    <img src="/assets/co5.jpg" alt="Festivals" />
                </div>
                <div className="text1">
                    <h1 id="text1">Festivals</h1>
                </div>
                <div className="pic2">
                    <img src="/assets/co6.jpg" alt="Concert" />
                </div>
                <div className="text2">
                    <h1 id="text2">Concert</h1>
                </div>
                <div className="pic3">
                    <img src="/assets/co7.jpg" alt="Market" />
                </div>
                <div className="text3">
                    <h1 id="text3">Market</h1>
                </div>
                <div className="pic4">
                    <img src="/assets/co8.jpg" alt="Games" />
                </div>
                <div className="text4">
                    <h1 id="text4">Games</h1>
                </div>
                <div className="button">
                    <a href="/final" className="bttn">Book Now</a>
                </div>
            </div>

            <Footer2/>
        </div>
    );
};

export default Community;
