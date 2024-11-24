import React from 'react';
import '../styles/Care.scss';

import careimg from '../images/careimg.png'



interface ImageProps {
  img: string[];
  alttext: string[];
  title: string[];
}




const CareSection: React.FC<ImageProps> = ({img, alttext, title}) => {
  
  
  return (
    <section className="care-section">
      <div className="care-content">
        <h6>TAKE YOUR CARE</h6>
        <h2>
          Elevate Your Lifestyle by <br />
          Bring Balance and Well Being Into Your Life
        </h2>
        <p>
          Designed to allow you to unwind and feel confident that you’re in good, caring hands.
          Our first priority is cleanliness. We have a full-time staff whose job is to ensure that
          the environment at Beautyness remains.
        </p>
        <div className="container">
          
          
            <div className="care-icons" >
              <div className="icon-card">
                <div className="img">
                <img src={img[0]} alt={alttext[0]} />
                </div>
                <p className='icons_title'>{title[0]}</p>
              </div>
            </div>

            <div className="care-icons">
              <div className="icon-card">
                <div className="img">
                  <img src={img[1]} alt={alttext[1]} />
                </div>
                <p className='icons_title'>{title[1]}</p>
               </div>
            </div>
          
          
          
          <div className="care-icons">
            <div className="icon-card">
              <img src={img[2]} alt={alttext[2]} />
              <p className='icons_title'>{title[2]}</p>
            </div>
          </div>
          
        </div>

        
      </div>

      <div className="image-container">
        <img src={careimg} alt="Background" className="background-image" />
      </div>
    </section>
  );
};

export default CareSection;
