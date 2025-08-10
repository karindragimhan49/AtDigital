"use client"; 

import { useState } from 'react';

const faqData = [
  {
    question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
    answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
    answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
    answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
  }
];

const FaqItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-start text-left"
      >
        <h3 className="text-lg font-semibold text-[#4f46e5]">
          {item.question}
        </h3>
        <span className="text-2xl font-light text-[#4f46e5]">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 pr-8">
          <p className="text-gray-600">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
};


const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#4f46e5] text-center mb-12">
          Frequently asked questions
        </h2>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto bg-white p-4 sm:p-8 rounded-lg shadow-sm">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-indigo-50/50 p-4 rounded-lg mb-3"
            >
              <button onClick={() => handleToggle(index)} className="w-full flex justify-between items-center text-left gap-4">
                <span className="text-md md:text-lg font-semibold text-[#4f46e5]">
                  {item.question}
                </span>
                <span className="text-2xl text-[#4f46e5] font-light">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-3">
                  <p className="text-gray-600">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Faq;