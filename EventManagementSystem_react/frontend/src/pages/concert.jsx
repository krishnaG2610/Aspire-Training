import { useEffect, useState } from 'react';
import '../css/concert.css'; 
import Footer2 from '../components/footer2'; 

const Concert = () => {
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
                    <img className="myslide" src="/assets/c1.jpg" alt="Slide 1" />
                    <img className="myslide" src="/assets/c2.jpg" alt="Slide 2" />
                    <img className="myslide" src="/assets/c3.jpg" alt="Slide 3" />
                    <img className="myslide" src="/assets/c4.jpg" alt="Slide 4" />
                    <div className="head">
                        <h1 id="ttext">Concert Package</h1>
                    </div>
                </div>
            </div>
            <div className="details">
                <div className="pic1">
                    <img src="/assets/c5.jpg" alt="Stage" />
                </div>
                <div className="text">
                    <h1 id='context1'>Stage</h1>
                </div>
                <div className="pic2">
                    <img src="/assets/c6.jpg" alt="Stadium" />
                </div>
                <div className="text2">
                    <h1 id='text2'>Stadium</h1>
                </div>
                <div className="pic3">
                    <img src="/assets/c7.jpg" alt="Lighting and Smoke" />
                </div>
                <div className="text3">
                    <h1 id='context3'>Lighting and Smoke</h1>
                </div>
                <div className="pic4">
                    <img src="/assets/c8.jpg" alt="Food Stalls" />
                </div>
                <div className="text4">
                    <h1 id='context4'> Food Stalls</h1>
                </div>
                <div className="button">
        <a href="/final" className="bttn">Book Now</a>
    </div>
            </div>
            <Footer2 id="concertFooter" />
        </div>
    );
};

export default Concert;
