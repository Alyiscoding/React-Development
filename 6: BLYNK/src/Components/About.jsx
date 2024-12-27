import React from 'react';
import bg_about from "../assets/bg why_blynk.png";
import btn from "../assets/why_section_btn.png"; // Assuming this image is for the right section
import tickIcon from "../assets/cross.png"; // Your tick icon image
import about_img from "../assets/why_section_img.png"

const About = () => {
    return (
        <div id='about' className="relative bg-cover bg-center min-h-screen pb-16" style={{ backgroundImage: `url(${bg_about})`, backgroundSize: 'cover' }}>
            {/* Features Button */}

            <div className="flex justify-center pt-16 overflow-hidden">
                {/* Button Container */}
                <button className="relative w-full max-w-[280px] h-[78px] rounded-[24px] flex items-center justify-center text-white custom-border-gradient border bg-gradient-to-b from-[#201931] to-[#290552] overflow-hidden">
                    {/* Text Container */}
                    <div className="flex items-center gap-4">
                        {/* Disc */}
                        <span className="w-5 h-5 bg-white rounded-full"></span>
                        {/* Text */}
                        <span className="text-xl">WHY BLYNK ?</span>
                    </div>
                </button>
            </div>


            <div className="container  mx-auto py-22 px-4 flex flex-col lg:flex-row items-center">
                {/* Left Section: Image */}
                <div className="lg:w-1/2 flex justify-center mt-20">
                    <img src={about_img} alt="About Image" className="w-[600px] h-[450px] object-contain" />
                </div>

                {/* Right Section: Text and Features */}
                <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
                    {/* Image above the heading */}

                    {/* Heading */}
                    <h2 className="text-3xl font-bold text-white mb-4">Among all AI-powered & personalisation outreach tool</h2>

                    {/* Features List */}
                    <div className="space-y-4 text-white">
                        <div className="flex items-center justify-start">
                            <p>Blynk sets you apart from competitors in this AI SDR era by capturing social signals on Linkedin.</p>
                        </div>
                        <div className="flex items-center justify-start space-x-3">
                            <img src={tickIcon} alt="tick" className="w-6 h-6 bg-white mt-[-12px] " />
                            <p>Personalization won't truly set you apart without unique data sources.</p>
                        </div>
                        <div className="flex items-center justify-start space-x-3">
                            <img src={tickIcon} alt="tick" className="w-6 h-6 bg-white mt-[-12px]" />
                            <p>Other AI tools can't transform your outreach from cold to warm.</p>
                        </div>
                        <div className="flex items-center justify-start space-x-3">
                            <img src={tickIcon} alt="tick" className="w-6 h-6 bg-white mt-[-12px]" />
                            <p>It won't work if you treat LinkedIn like just another email platform.</p>
                        </div>
                        <div className="flex items-center justify-start space-x-3">
                            <img src={tickIcon} alt="tick" className="w-6 h-6 bg-white mt-[-12px]" />
                            <p>Other AI tools can't help you capture high-intent buyers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
