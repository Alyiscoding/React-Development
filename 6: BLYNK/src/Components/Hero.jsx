import React from 'react';
import bg from "../assets/bg hero.png"
// import bg_btn from "../assets/hero_btn.png"
import crousel from "../assets/hero_slider.png"



const Hero = () => {
    return (
        <div id='home'
            className="relative bg-cover bg-center min-h-screen pb-16"
            style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
            {/* Overlay to darken the background */}
            {/* <div className="absolute inset-0 bg-black opacity-10"></div> */}


            <div className=" pt-[150px] container mx-auto h-full flex flex-col justify-center text-center text-white px-4 max-w-full ">
                <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold leading-tight h-[100px] ]">
                    10X Your LinkedIn <br />Outreach with Automation &<br />Social Listening
                </h1>
                <p className="pt-[130px] text-xsm sm:text-xl md:text-2xl max-w-lg mx-auto mb-20">
                    Make LinkedIn your #1 acquisition channel by automating social listening and social selling, all in one platform.
                </p>
                <div className="container mx-auto px-4">
                    {/* Button with responsive sizing */}
                    <button className="w-full max-w-[325px] py-4 px-6 text-xl bg-white rounded-lg text-[#00004D]  ">
                        Start Blynk For Free
                    </button>


                    {/* Image with responsive scaling */}
                    <div className="relative w-full overflow-hidden mt-6 pt-3">
                        <img
                            src={crousel}
                            height={200}
                            width={200}
                            alt="Crousel"
                            className="pt-5 pb-5 w-full h-auto object-cover bg-gradient-to-l from-purple-900 to-purple-1000"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

