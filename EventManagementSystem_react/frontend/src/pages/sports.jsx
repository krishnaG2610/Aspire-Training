import { useEffect, useState } from 'react';
import '../css/sports.css'; 
import Footer2 from '../components/footer2';

const Sports = () => {
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
                <a href="/event">Home</a>
                <a href="/book">Book</a>
                <a href="/login">Logout</a>
            </div>
            <div className="top">
                <div className="slide">
                    <img className="myslide" src="/assets/s1.jpg" alt="Slide 1" />
                    <img className="myslide" src="/assets/s2.jpg" alt="Slide 2" />
                    <img className="myslide" src="/assets/s3.jpg" alt="Slide 3" />
                    <img className="myslide" src="/assets/s4.jpg" alt="Slide 4" />
                    <div className="head">
                        <h1 id="ttext">Sports Package</h1>
                    </div>
                </div>
            </div>
            <div className="details">
                <div className="pic1">
                    <img src="/assets/s5.jpg" alt="Practice Stage" />
                </div>
                <div className="text">
                    <h1 id="sptext1">Practice Stage</h1>
                </div>
                <div className="pic2">
                    <img src="/assets/s6.jpg" alt="Stadium" />
                </div>
                <div className="text2">
                    <h1 id="text2">Stadium</h1>
                </div>
                <div className="pic3">
                    <img src="/assets/s7.jpg" alt="Podium" />
                </div>
                <div className="text3">
                    <h1 id="text3"> Podium</h1>
                </div>
                <div className="pic4">
                    <img src="/assets/s8.jpg" alt="DJ Setup" />
                </div>
                <div className="text4">
                    <h1 id="text4">DJ Setup</h1>
                </div>
                 <div className="button">
        <a href="/final" className="bttn">Book Now</a>
    </div>
            </div>
            <Footer2/>
        </div>
    );
};

export default Sports;
