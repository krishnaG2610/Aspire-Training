import { useEffect, useState, useRef } from 'react';
import '../css/birthday.css'; 
import Footer2 from '../components/footer2';

const Birthday = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const slidesRef = useRef([]);

    useEffect(() => {
        const maxSlides = slidesRef.current.length;
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
    }, []);

    useEffect(() => {
        slidesRef.current.forEach((slide, index) => {
            slide.style.display = index === slideIndex ? 'block' : 'none';
        });
    }, [slideIndex]);

    return (
        <div>
            <div className="topRight">
                <a href="/">Home</a>
                <a href="/book">Book</a>
                <a href="/login">Logout</a>
            </div>
            <div className="top">
                <div className="slide">
                    <img ref={el => slidesRef.current[0] = el} className="myslide" src="/assets/b1.jpg" alt="Slide 1" />
                    <img ref={el => slidesRef.current[1] = el} className="myslide" src="/assets/b2.jpg" alt="Slide 2" />
                    <img ref={el => slidesRef.current[2] = el} className="myslide" src="/assets/b3.jpg" alt="Slide 3" />
                    <img ref={el => slidesRef.current[3] = el} className="myslide" src="/assets/b4.jpg" alt="Slide 4" />
                    <div className="head">
                        <h1 id="ttext">Birthday Package</h1>
                    </div>
                </div>
            </div>
            <div className="details">
                <div className="pic1">
                    <img src="/assets/b5.jpg" alt="Cake Cutting Ceremony" />
                </div>
                <div className="text1">
                    <h1 id="text1">Cake Cutting</h1>
                    <center><h1 id="ceremony"><br />Ceremony</h1></center>
                </div>
                <div className="pic2">
                    <img src="/assets/b6.jpg" alt="Bouncy Castle" />
                </div>
                <div className="text2">
                    <h1 id="text2">Bouncy Castle</h1>
                </div>
                <div className="pic3">
                    <img src="/assets/b7.jpg" alt="Mimicry" />
                </div>
                <div className="text3">
                    <h1 id="text3">Mimicry</h1>
                </div>
                <div className="pic4">
                    <img src="/assets/b8.jpg" alt="Games" />
                </div>
                <div className="text4">
                    <h1 id="text4">Games</h1>
                </div>
                <div className="button">
                    <a href="/final" className="bttn">Book Now</a>
                </div>
            </div>
            <Footer2 />
        </div>
    );
};

export default Birthday;
