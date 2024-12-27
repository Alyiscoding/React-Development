import React, { useState } from "react";

const Faqs = () => {
  // FAQ Data
  const faqData = [
    {
      question: "How is Blynk different than the other LinkedIn outreach tools?",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis dolore facere ex, debitis quam quaerat rem velit ipsa quas numquam.",
    },
    {
      question: "What's the benefit combining social listening and social selling in your outreach campaign?",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis dolore facere ex, debitis quam quaerat rem velit ipsa quas numquam.",
    },
    {
      question: "Who should I monitor with Blynk's social selling feature?",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis dolore facere ex, debitis quam quaerat rem velit ipsa quas numquam.",
    },
    {
      question: "Do I need a LinkedIn Sales Navigator subscription?",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis dolore facere ex, debitis quam quaerat rem velit ipsa quas numquam.",
    },
    {
      question: "What is the limit of invitation requests on LinkedIn?",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis dolore facere ex, debitis quam quaerat rem velit ipsa quas numquam.",
    },
  ];

  // State to manage the currently open FAQ
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle FAQ visibility
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="faqs"
      className="relative bg-cover bg-center min-h-screen pb-16 overflow-x-hidden"
      style={{ background: "#221D3C", backgroundSize: "cover" }}
    >
 
      {/* FAQ Section Header */}
      <div className="flex justify-center pt-16 overflow-hidden">
        <button className="relative w-full lg:max-w-[380px] max-w-[350px] h-[78px] rounded-[18px] flex items-center justify-center text-white custom-border-gradient border bg-gradient-to-b from-[#201931] to-[#290552] overflow-hidden">
          <div className="flex items-center gap-4">
            <span className="w-5 h-5 bg-white rounded-full"></span>
            <span className="sm:text-lg md:text-lg lg:text-xl uppercase">Frequently Asked Questions</span>
          </div>
        </button>
      </div>
      <div className="text-center pt-12 px-4">
        <h2 className="text-4xl font-bold text-white mb-8">Still Hesitate?</h2>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto px-6 space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg cursor-pointer transition-colors duration-300 bg-gradient-to-r from-[#070322cc] to-[#ffffff33] ${
              openIndex === index ? "shadow-md" : "shadow-sm"
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-semibold  text-white">{faq.question}</h3>
              <span
                className={`text-xl font-bold text-white transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-4 text-white text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
