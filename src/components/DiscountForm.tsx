import React from 'react';
import styles from '../styles/DiscountForm.module.css';

const DiscountForm: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.tagline}>FLAT DISCOUNT</p>
        <h2 className={styles.title}>
          Claim upto 50% offer on the most popular services...
        </h2>
        <p className={styles.description}>
          Our Retreat is not meant to be an occasional treat, but rather a part
          of your routine that restores balance to your daily life.
        </p>
        <div className={styles.discountCard}>
          <div className={styles.contact}>
            <p><strong>MAIL US:</strong> info@beautyness.com</p>
            <p><strong>CALL US:</strong> (+1) 235 890 12</p>
          </div>
          <div className={styles.discount}>
            <p className={styles.getflat}>- GET FLAT -</p>
            <h3 className={styles.percentage}>50%</h3>
            <p className={styles.discounts}>Discount</p>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <form className={styles.form}>
          <input type="text" placeholder="Your Name" className={styles.input} />
          <input type="email" placeholder="Your Email" className={styles.input} />
          <input type="tel" placeholder="Your Phone" className={styles.input} />
          <textarea placeholder="Your Message" className={styles.textarea} />
          <button type="submit" className={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default DiscountForm;
