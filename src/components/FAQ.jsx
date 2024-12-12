import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is this product?',
      answer: 'This is an analytics platform that helps businesses grow smarter by providing detailed insights into their data.'
    },
    {
      question: 'How does the demo work?',
      answer: 'You can try our demo to get a feel of the product without signing up. It gives you a glimpse of the main features and functionalities.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, we offer a 14-day free trial for new users. You can explore the product with all features enabled during this period.'
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel your subscription at any time before the renewal period, and you will not be charged further.'
    },
    {
      question: 'How do I contact support?',
      answer: 'You can reach our support team through the contact form or by emailing support@untitledui.com.'
    }
  ];

  return (
    <section className="faq">
      <h2 className="faq__title">Frequently Asked Questions</h2>
      <div className="faq__items">
        {faqData.map((faq, index) => (
          <div className="faq__item" key={index}>
            <div
              className="faq__question"
              onClick={() => toggleAnswer(index)}
            >
              <span>{faq.question}</span>
              <span className={`faq__toggle ${activeIndex === index ? 'active' : ''}`}>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq__answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
