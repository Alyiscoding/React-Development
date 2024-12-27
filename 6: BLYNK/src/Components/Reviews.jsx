import React, { useState } from 'react';
import bg_reviews from "../assets/bg why_blynk.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';
import xaviour from "../assets/xaviour.jpeg"
import ReviewCard from "../Components/ReviewCard"


const Reviews = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div id='reviews' className="relative bg-cover bg-center min-h-screen pb-16 overflow-x-hidden" style={{ backgroundImage: `url(${bg_reviews})`, backgroundSize: 'cover' }}>

            <div className="flex justify-center pt-16 overflow-hidden">
                {/* Button Container */}
                <button className="relative w-full max-w-[280px] h-[78px] rounded-[24px] flex items-center justify-center text-white custom-border-gradient border bg-gradient-to-b from-[#201931] to-[#290552] overflow-hidden">
                    {/* Text Container */}
                    <div className="flex items-center gap-4">
                        {/* Disc */}
                        <span className="w-5 h-5 bg-white rounded-full"></span>
                        {/* Text */}
                        <span className="text-xl">CUSTOMER REVIEW</span>
                    </div>
                </button>
            </div>

            <div className="text-center pt-16 px-4">
                <h2 className="text-4xl font-bold text-white lg:mb-[-120px] sm:mb-[-150px] md:mb-[-150px] mb-[-100px]">Testimonials</h2>
            </div>

            {/* Carousel */}
            <Carousel activeIndex={index} onSelect={handleSelect} interval={5000} >
                <Carousel.Item style={{ borderBottom: 'none' }}>
                    <div className="flex justify-center items-center min-h-screen px-4">
                        <ReviewCard
                            heading="“I will refer Startup to my Family.”"
                            description="“This is a really great site that has helped my business grow exponentially. Highly recommend to everyone looking for reliable services.”"
                            image={xaviour}
                            name="Syed Ali"
                            profession="CEO of ABC"
                            rating="5.0/5.0"
                            stars={1}
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="flex justify-center items-center min-h-screen px-4">
                        <ReviewCard
                            heading="“I will recomend it to my family.”"
                            description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum vel mauris sit amet molestie. Cras faucibus neque nisl, vel”"
                            image={xaviour}
                            name="John Deon"
                            profession="CEO of ABC"
                            rating="5.0/5.0"
                            stars={1}
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="flex justify-center items-center min-h-screen px-4">
                        <ReviewCard
                            heading="“I will recomend it to my family.”"
                            description="“This is a really great site that has helped my business grow exponentially. Highly recommend to everyone looking for reliable services.”"
                            image={xaviour}
                            name="Micheal Scofield"
                            profession="CEO of ABC"
                            rating="5.0/5.0"
                            stars={1}
                        />
                    </div>
                </Carousel.Item>

            </Carousel>

        </div>
    );
};

export default Reviews;
