import React from 'react';
import styles from '../styles/TestimonialsSection.module.css';
import Testimonial from './Testimonial';
import comments_1 from '../images/comments_1.png';
import comments_2 from '../images/comments_2.png'


const testimonialsData = [
  {
    image: comments_1,
    name: 'James Williams',
    location: 'United States',
    text: 'Made an appointment with Beautyness and it was the best experience in a salon I have ever had. They went above and beyond to make sure I got what I wanted, & patiently explained her process.',
    rating: 5,
  },
  {
    image: comments_2,
    name: 'Carolyn James',
    location: 'United Kingdom',
    text: 'I’ve been going to Beautyness they are always goes above and beyond my expectations and leaves my hair looking and feeling fantastic and looking exactly as I hoped, if not better.',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <p className={styles.title_p}> Testimonials</p>
      <h2 className={styles.title}>What our Customers says...</h2>
      <div className={styles.list}>
        {testimonialsData.map((testimonial, index) => (
          <Testimonial
            
            key={index}
            image={testimonial.image}
            name={testimonial.name}
            location={testimonial.location}
            text={testimonial.text}
            rating={testimonial.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
