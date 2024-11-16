import React, { useEffect, useState, useRef } from 'react';
import './Accordion.css';
import arrowAccordionLight from '../assets/Accordion/chevron-down.svg';
import arrowAccordionDark from '../assets/Accordion/chevron-darkmode.svg';
import arrowUp from '../assets/Accordion/arrow-up.svg';

function Accordion({ isDarkMode }) {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Hämta FAQ från API
    fetch('https://win24-assignment.azurewebsites.net/api/faq')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch FAQ data');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setFaqs(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (isLoading) {
    return <div>Loading FAQs...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <div key={faq.id} className="myaccordion">
          <button
            className={`btn-faq ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleToggle(index)}
          >
            {faq.title}
            <img
              src={
                activeIndex === index 
                    ? arrowUp
                    : (isDarkMode ? arrowAccordionDark : arrowAccordionLight)}
              alt="arrow"
            />
          </button>
          <div
            className="faq"
            ref={(el) => {
              if (el && activeIndex === index) {
                el.style.height = `${el.scrollHeight}px`;
              } else if (el) {
                el.style.height = '0px';
              }
            }}
          >
            <div className="faq-content">
              <p>{faq.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
