"use client"

import { useRef } from 'react';
import styles from './FAQ.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is my eligibility to book a car?",
    answer: "You should be 18 years old above and you must possess a valid driving license."
  },
  {
    question: "Can I book for any period of time?",
    answer: "Yes, you can book a car for as long as you need."
  },
  {
    question: "Can I opt for a longer period?",
    answer: "Yes, longer booking periods are available with special rates."
  },
  {
    question: "Can I book a one-way trip?",
    answer: "One-way trips are available depending on the destination."
  },
  {
    question: "Is there a home delivery option available?",
    answer: "Yes, we offer home delivery services for car bookings."
  },
  {
    question: "How can I make the payment?",
    answer: "Payments can be made online via credit card, debit card, or other available options."
  }
];

const FAQ: React.FC = () => {
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleFAQ = (index: number) => {
    faqRefs.current.forEach((faq, i) => {
      if (faq) {
        const answer = faq.querySelector(`.${styles.faqAnswer}`) as HTMLDivElement;
        const toggle = faq.querySelector(`.${styles.faqToggle}`) as HTMLSpanElement;
        if (i === index) {
          const isOpen = answer.style.display === 'block';
          answer.style.display = isOpen ? 'none' : 'block';
          toggle.textContent = isOpen ? '+' : '×';
        } else {
          answer.style.display = 'none';
          toggle.textContent = '+';
        }
      }
    });
  };

  return (
    <section className={styles.FAQ}>
      <div className={styles.faqContainer}>
        <h2>Frequently asked questions</h2>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={styles.faqItem}
            ref={(el) => {
              faqRefs.current[index] = el;
            }}//FAQ dynamically adds here
          >
            <div className={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
              <span>{item.question}</span>
              <span className={styles.faqToggle}>+</span>
            </div>
            <div className={styles.faqAnswer} style={{ display: 'none' }}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
