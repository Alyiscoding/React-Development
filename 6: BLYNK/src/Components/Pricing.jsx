import React from 'react';
// import bg_pricing from "../assets/bg hero.png"; // Background image
import tickIcon from "../assets/tick.png"; // Example tick icon
import crossIcon from "../assets/cross_white.png"; // Example cross icon

const Pricing = () => {
    return (
        <div id="pricing" className="relative bg-cover bg-center min-h-screen pb-16 overflow-x-hidden" style={{ background: '#221D3C', backgroundSize: 'cover' }}>

            {/* Pricing Button */}
            
            <div className="flex justify-center pt-16 overflow-hidden">
                {/* Button Container */}
                <button className="relative w-full max-w-[280px] h-[78px] rounded-[24px] flex items-center justify-center text-white custom-border-gradient border bg-gradient-to-b from-[#201931] to-[#290552] overflow-hidden">
                    {/* Text Container */}
                    <div className="flex items-center gap-4">
                        {/* Disc */}
                        <span className="w-5 h-5 bg-white rounded-full"></span>
                        {/* Text */}
                        <span className="text-xl">OUR  PRICING</span>
                    </div>
                </button>
            </div>

            {/* Pricing Section Heading and Paragraph */}
                <div className="text-center pt-16 px-4">
                    <h2 className="text-4xl font-bold text-white mb-4">Start standing out from others</h2>
                    <p className="text-lg text-white max-w-3xl mx-auto">
                        While most competitors invest in email automation tools,
                        “Blynk empowers my team to truly stand out with its powerful social selling automation. It's an evergreen campaign, set up once for lasting impact.”</p>
                </div>

            {/* Pricing Boxes Section */}
            <div className="flex justify-center gap-8 mt-16 px-4 flex-wrap">
                {/* Starter Plan Box */}
                <div className="w-full sm:w-[45%] md:w-[30%]  border-[1px] border-[#C7C7C7] rounded-lg p-8 mb-8">
                    {/* Plan Information with Border */}
                    <div className="border border-[#C7C7C7] rounded-lg p-6 mb-6">
                        <div className="text-center">
                            <p className="text-lg  text-white mb-4">Starter</p>
                            <p className="text-6xl font-semibold text-white mb-4">$79</p>
                            <p className="text-lg text-white mb-2">Start free for the first 14 days</p>
                        </div>
                    </div>

                    {/* Features List */}
                    <div className="text-left">
                        <div className="flex items-center mb-3">
                            <img src={tickIcon} alt="tick" className="w-5 h-4 mr-2" />
                            <span className="text-white">All LinkedIn Actions</span>
                        </div>
                        <div className="flex items-center mb-3">
                            <img src={tickIcon} alt="tick" className="w-5 h-4 mr-2" />
                            <span className="text-white">AI Scrapers</span>
                        </div>
                        <div className="flex items-center mb-3">
                            <img src={tickIcon} alt="tick" className="w-5 h-4 mr-2" />
                            <span className="text-white">Limited social triggers</span>
                        </div>
                        <div className="flex items-center mb-3">
                            <img src={tickIcon} alt="tick" className="w-5 h-4 mr-2" />
                            <span className="text-white">Targetted message templates</span>
                        </div>
                        <div className="flex items-center mb-3">
                            <img src={tickIcon} alt="tick" className="w-5 h-4 mr-2" />
                            <span className="text-white">Cloud based Solutions</span>
                        </div>
                        <div className="flex items-center mb-3">
                            <img src={tickIcon} alt="tick" className="w-5 h-4 mr-2" />
                            <span className="text-white">Campaign design templates</span>
                        </div>

                        <div className="flex items-center mb-3 ">
                            <img src={crossIcon} alt="cross" className="w-5 h-4 mr-2 text-white" />
                            <span className="text-white">Unlited triggers </span>
                        </div>
                        <div className="flex items-center mb-3 ">
                            <img src={crossIcon} alt="cross" className="w-5 h-4 mr-2 text-white" />
                            <span className="text-white">AI signals</span>
                        </div>
                        <div className="flex items-center mb-3 ">
                            <img src={crossIcon} alt="cross" className="w-5 h-4 mr-2 text-white" />
                            <span className="text-white">Slack support</span>
                        </div>
                        <div className="flex items-center mb-3 ">
                            <img src={crossIcon} alt="cross" className="w-5 h-4 mr-2 text-white" />
                            <span className="text-white">Dedicated account managers</span>
                        </div>

                    </div>

                    {/* Get Started Button */}
                    <div className="mt-10">
                        <button className="w-full py-3  text-xl bg-white rounded-lg text-[#4C4C4C]">
                            Get Started
                        </button>
                    </div>
                </div>


                {/* Second Plan Box */}
                <div className="w-full sm:w-[45%] md:w-[30%]  border-2 border-[#C7C7C7] rounded-lg p-8 mb-8">
                    {/* Plan Information with Border */}
                    <div className="border border-[#C7C7C7] rounded-lg p-6 mb-6">
                        <div className="text-center">
                            <p className="text-lg  text-white mb-4">Pro</p>
                            <p className="text-6xl font-semibold text-white mb-4">$99</p>
                            <p className="text-lg text-white mb-2">Start free for the first 14 days</p>
                        </div>
                    </div>

                    {/* Features List */}
                    <div className="text-left">
                        <div className="flex items-center mb-3">
                            <img src={tickIcon} alt="tick" className="w-5 h-4 mr-2" />
                            <span className="text-white">All LinkedIn Actions</span>
                        </div>
                        <div className="flex items-center mb-3">
                            <img src={tickIcon} alt="tick" className="w-5 h-4 mr-2" />
                            <span className="text-white">AI Scrapers</span>
                        </div>
    
                        <div className="flex items-center mb-3">
                            <img src={tickIcon} alt="tick" className="w-5 h-4 mr-2" />
                            <span className="text-white">Targetted message templates</span>
                        </div>
                        <div className="flex items-center mb-3">
                            <img src={tickIcon} alt="tick" className="w-5 h-4 mr-2" />
                            <span className="text-white">Cloud based Solutions</span>
                        </div>
                        <div className="flex items-center mb-3">
                            <img src={tickIcon} alt="tick" className="w-5 h-4 mr-2" />
                            <span className="text-white">Campaign design templates</span>
                        </div>

                        <div className="flex items-center mb-3 ">
                            <img src={tickIcon} alt="cross" className="w-5 h-4 mr-2 text-white" />
                            <span className="text-white">Unlited triggers </span>
                        </div>
                        <div className="flex items-center mb-3 ">
                            <img src={tickIcon} alt="cross" className="w-5 h-4 mr-2 text-white" />
                            <span className="text-white">AI signals</span>
                        </div>
                        <div className="flex items-center mb-3 ">
                            <img src={tickIcon} alt="cross" className="w-5 h-4 mr-2 text-white" />
                            <span className="text-white">Slack support</span>
                        </div>
                        <div className="flex items-center mb-3 ">
                            <img src={tickIcon} alt="cross" className="w-5 h-4 mr-2 text-white" />
                            <span className="text-white">Dedicated account managers</span>
                        </div>
                        <div className="flex items-center mb-3 ">
                            <img src="" alt="" className="w-5 h-4 mr-2 text-white" />
                            <span className="text-white"></span>
                        </div>

                    </div>

                    {/* Get Started Button */}
                    <div className="mt-10">
                        <button className="w-full py-3  text-xl bg-white rounded-lg text-[#4C4C4C]">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Pricing;
