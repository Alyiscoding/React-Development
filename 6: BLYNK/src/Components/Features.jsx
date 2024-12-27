import React from 'react';
import bg_features from "../assets/bg features.png"; // Background image for section
import img1 from "../assets/features_img1.png"; // Example image 1
import img2 from "../assets/features_img2.png"; // Example image 2
import img3 from "../assets/features_img3.png"; // Example image 3
import features_btn from "../assets/features_btn.png"; // Central Button Image

const Features = () => {
    return (
        <div id="features" className="relative bg-cover bg-center min-h-screen pb-16 overflow-x-hidden" style={{ backgroundImage: `url(${bg_features})`, backgroundSize: 'cover' }}>


            {/* Features Button */}

            <div className="flex justify-center pt-16 overflow-hidden">
                {/* Button Container */}
                <button className="relative w-full max-w-[280px] h-[78px] rounded-[24px] flex items-center justify-center text-white custom-border-gradient border bg-gradient-to-b from-[#201931] to-[#290552] overflow-hidden">
                    {/* Text Container */}
                    <div className="flex items-center gap-4">
                        {/* Disc */}
                        <span className="w-5 h-5 bg-white rounded-full"></span>
                        {/* Text */}
                        <span className="text-xl">FEATURES</span>
                    </div>
                </button>
            </div>



            {/* Image and Text Sections */}
            <div className="container mx-auto mt-16 px-4">
                {/* Section 1 */}
                <div className="flex items-center mb-3 space-x-8">
                    {/* Left Side Text */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h3 className="text-3xl font-bold text-white mb-4 md:text-xl md:font-bold">
                            Linkedin Outreach at Scale
                        </h3>
                        <p className="pl-3 text-lg  text-left text-white list-inside list-disc items-center justify-center md:text-sm">
                            <span className="list-item">Automate any Linkedin steps you want - invites, messages, profile views, InMails, engagement.</span>
                            <br />
                            <span className="list-item">AI assistant to help you generate personalised messages</span>
                        </p>
                    </div>

                    {/* Custom Vertical Dotted Line with Circle */}
                    <div className="hidden lg:block relative w-[2px] h-[300px] border-l-4 border-dotted border-[#C7C7C7]">
                        {/* Circle in the middle of the line */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#00004D] border-2 border-white rounded-full"></div>
                    </div>

                    {/* Right Side Image */}
                    <div className="lg:w-1/2 flex justify-center">
                        <img src={img1} alt="Feature Image 1" className="w-full h-auto object-contain" />
                    </div>
                </div>

                {/* Section 2 */}
                <div className="flex items-center mb-3 space-x-8">
                    {/* Left Side Image */}
                    <div className="lg:w-1/2 flex justify-center">
                        <img src={img2} alt="Feature Image 2" className="w-full h-auto object-contain" />
                    </div>

                    {/* Custom Vertical Dotted Line with Circle */}
                    <div className="hidden lg:block relative w-[2px] h-[300px] border-l-4 border-dotted border-[#C7C7C7]">
                        {/* Circle in the middle of the line */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#00004D] border-2 border-white rounded-full"></div>
                    </div>

                    {/* Right Side Text */}
                    <div className="lg:w-1/2 text-right lg:text-right">
                        <h3 className="text-3xl font-bold text-white mb-4 md:text-xl md:font-bold">
                            Social Listening
                        </h3>
                        <p className="pl-3 text-lg  text-right text-white list-inside list-disc items-center justify-center md:text-sm">
                            <span className="list-item">Keep an eye on key accounts and influencers.</span>
                            <br />
                            <span className="list-item">Track competitor interactions to stay agile.</span>
                            <br />
                            <span className="list-item">Capture likes and comments from any user profile.</span>
                            <br />
                            <span className="list-item">Eliminate distractions and focus on your ideal customer.</span>
                        </p>
                    </div>
                </div>

                {/* Section 3 */}
                <div className="flex items-center mb-3 space-x-8">
                    {/* Left Side Text */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h3 className="text-3xl font-bold text-white mb-4 md:text-xl md:font-bold">
                            Smart Box
                        </h3>
                        <p className="pl-3 text-lg  text-left text-white list-inside list-disc items-center justify-center md:text-sm">
                            <span className="list-item">Smart filtering tool to filter out noise</span>
                            <br />
                            <span className="list-item">Segment all Incoming new prospects in your list</span>
                            <br />
                            <span className="list-item">Identify key accounts interacting with your profile.</span>
                        </p>
                    </div>
                    {/* Custom Vertical Dotted Line with Circle */}
                    <div className="hidden lg:block relative w-[2px] h-[300px] border-l-4 border-dotted border-[#C7C7C7]">
                        {/* Circle in the middle of the line */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#00004D] border-2 border-white rounded-full"></div>
                    </div>

                    {/* Right Side Image */}
                    <div className="lg:w-1/2 flex justify-center">
                        <img src={img3} alt="Feature Image 3" className="w-full h-auto object-contain" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Features;
