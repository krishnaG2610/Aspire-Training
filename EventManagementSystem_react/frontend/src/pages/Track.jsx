import { useEffect, useState } from 'react';
import '../css/track.css'; 
import Footer2 from '../components/footer2';

const Track = () => {
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
                    <img className="myslide" src="/assets/t1.jpg" alt="Track 1" />
                    <img className="myslide" src="/assets/t2.jpg" alt="Track 2" />
                    <img className="myslide" src="/assets/t3.jpg" alt="Track 3" />
                    <img className="myslide" src="/assets/t4.jpg" alt="Track 4" />
                    <div className="head">
                        <h1 id="ttext">Tracks Package</h1>
                    </div>
                </div>
            </div>
            <div className="details">
                <div className="pic1">
                    <img src="/assets/t5.jpg" alt="Offroading" />
                </div>
                <div className="text">
                    <h1 id="trtext1">Offroading</h1>
                </div>
                <div className="pic2">
                    <img src="/assets/t6.jpg" alt="Stunts" />
                </div>
                <div className="text2">
                    <h1 id="text2">Stunts</h1>
                </div>
                <div className="pic3">
                    <img src="/assets/t7.jpg" alt="Mud Race" />
                </div>
                <div className="text3">
                    <h1 id="trtext3">Mud Race</h1>
                </div>
                <div className="pic4">
                    <img src="/assets/t8.jpg" alt="Charity Shows" />
                </div>
                <div className="text4">
                    <h1 id="text4">Charity Shows</h1>
                </div>
                <div className="button">
        <a href="/final" className="bttn">Book Now</a>
    </div>
            </div>
            <Footer2/>
        </div>
    );
};

export default Track;
