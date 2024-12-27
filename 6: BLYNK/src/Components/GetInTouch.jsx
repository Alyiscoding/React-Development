import React from 'react';
import bg_getInTouch from "../assets/bg features.png"; // Ensure the correct file path
import dashBoard from "../assets/get_in_touch.png";

const GetInTouch = () => {
    return (
        <div
            id="getInTouch"
            className="relative bg-cover bg-center min-h-screen pb-16 overflow-x-hidden"
            style={{ backgroundImage: `url(${bg_getInTouch})`, backgroundSize: "cover" }}
        >
            {/* Center Content */}
            <div className="flex flex-col items-center justify-center min-h-screen mt-[-170px] space-y-12 px-4">
                {/* Button Container */}
                <button className="relative w-full max-w-[280px] h-[80px] rounded-[24px] flex items-center justify-center text-white custom-border-gradient border bg-gradient-to-b from-[#201931] to-[#290552] overflow-hidden">
                    {/* Text Container */}
                    <div className="flex items-center gap-4">
                        {/* Disc */}
                        <span className="w-5 h-5 bg-white rounded-full "></span>
                        {/* Text */}
                        <span className="text-xl">GET IN TOUCH</span>
                    </div>
                </button>

                <h2 className="text-4xl font-semibold text-white text-center">
                    Try Blynk for free!
                </h2>

                <button className="w-full max-w-[325px] py-4 px-6 text-xl bg-white rounded-lg text-[#4C4C4C]  ">
                    Get Started
                </button>
            </div>

            {/* Centered Image */}
            <div className="flex justify-center items-center mt-[-92px] ">
                <img
                    src={dashBoard} // Replace with your image
                    alt="Centered Illustration"
                    className="w-auto h-auto max-w-[90%] sm:max-w-[80%] md:max-w-[602px]" // Adjust the size as needed
                    height={554}
                    width={602}
                />
            </div>
        </div>
    );
};

export default GetInTouch;
