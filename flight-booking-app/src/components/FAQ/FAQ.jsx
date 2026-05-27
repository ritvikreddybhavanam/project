import { useState } from "react";
import "./Faq.css";
import Footer from "../Footer/Footer.jsx";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I change or cancel my flight?",
      answer:
        "You can manage your booking directly through the My Bookings section. Depending on your ticket type, changes may incur a fee plus any difference in fare.",
    },
    {
      question: "What is the checked baggage allowance?",
      answer:
        "Economy passengers typically have a 23kg limit, while Premium and Business classes enjoy 32kg per bag.",
    },
    {
      question: "How do I claim SkyPass points for a past flight?",
      answer:
        "Log in to your SkyPass account and navigate to Claim Missing Points.",
    },
    {
      question: "What items are prohibited in carry-on luggage?",
      answer:
        "Prohibited items include sharp objects, liquids over 100ml, and hazardous materials.",
    },
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2>Popular Articles & FAQs</h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <button
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>

                <span
                  className={`material-symbols-outlined faq-icon ${openIndex === index ? "rotate" : ""}`}
                >
                  expand_more
                </span>
              </button>

              <div
                className={`faq-answer ${openIndex === index ? "show" : ""}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
