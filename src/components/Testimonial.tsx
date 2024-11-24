import React from 'react';
import '../styles/Testimonial.module.css';


interface TestimonialProps {
  image: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ image, name, location, text, rating }) => {
  return (
    <div className="testimonial-card">
      <div className='container_text'>
        <p className="testimonial-text">{`"${text}"`}</p>
      </div>
      <div className='contaner_footer' style={{ marginRight: '20px', backgroundColor: '#1E2C30', width: '600px', height: '123px'}}>
        <div className="test4" style={{ display: 'flex', paddingTop: '22px', paddingLeft: '30px' }}>
        <img src={image} alt={name} className="testimonial_image" style={{height: '75px'}} />
        <div className="testimonial-details" style={{paddingLeft: '20px'}}>
          <div className="testimonial-stars" style={{marginTop: '10px', color: 'white'}}>
            {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
          </div>
          <h4 className="testimonial-name" style={{marginTop: '0px',  marginBottom: '0px', color: 'white'}}>{name}</h4>
          <p className="testimonial-location" style={{color: 'white'}}>{location}</p>
        </div>
        </div>
      </div>  
    </div>
  );
};

export default Testimonial;
