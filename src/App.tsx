import React from 'react';
import styles from "./styles/App.module.css"
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import Services from './components/Services';
import Care from './components/Care';
import Price from './components/Price';
import Testimonials from './components/TestimonialsSection';
import BenefitsSection from './components/BenefitsSection';
import DiscountForm from './components/DiscountForm';
import Footer from './components/Footer';
import beauty_experts from './images/beauty_experts.png';
import quality_services from './images/quality_services.png';
import nature from './images/100%_nature.png'



const App: React.FC = () => {
  const images = [ beauty_experts, quality_services, nature ];
  const alttext = [ 'Beauty Experts', 'Quality Services', '100% Nature' ];
  const titles = [ 'Beauty Experts', 'Quality Services', '100% Nature' ];


  const name =  [ 
    'Deep Tissue', 
    'Body Scrub', 
    'Foot Massage', 
    'Scalp Treatments',
    'Fertility Massage',
    'Blemish Buster',
    'Oxygen Facial',
    'Lash Lift', 
  ]
  const description = [
    'A therapeutic massage that is used for relieving muscles.',
    'Perfect way to relieve all that unwanted stress in body.',
    'Get a relaxing massage focused on your feet and lower legs.',
    'Superior gray creates a rich, natural look with less fading.',
    'Help support reproductive health, the menstrual cycle.',
    'Deep cleansing facial rebalances to promote healthy skin.',
    'Hydrates, tones, lifts, and adds radiance to the skin.',
    'Treatment for natural lashes that can add curl and definition.',
  ]
  const price = [
    '$48.00', 
    '$18.00', 
    '$25.00', 
    '$15.00', 
    '$18.00', 
    '$40.00', 
    '$32.00', 
    '$45.00',
  ]





  return (
    <div className={styles.app_container}>
      <Header />
      <HeroBanner />
      <Services />
      <Care img={images} alttext={alttext} title={titles}/>
      <Price name={name} description={description} price={price} />
      <Testimonials />  
      <BenefitsSection />
      <DiscountForm />
      <Footer />
    </div>
  );
};

export default App;
