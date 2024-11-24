import React from 'react';
import '../styles/Services.scss';
import spa_massage from '../images/spa_massage.png';
import hair_beauty from '../images/hair_beauty.png';
import treatments from '../images/treatments.png';


const Services: React.FC = () => {
  const services = [
    { title: 'Spa & Massage', 
      description: 'Your wellness goals and the areas of preference, then unwind with a customized massage experience.', 
      image: spa_massage, 
    },
    { title: 'Hair & Beauty', 
      description: 'Combining skin-type-specific cleansing & toning, exfoliation, deep-pore cleansing extractions customized treatment.', 
      image: hair_beauty, 
    },
    { title: 'Body Treatments', 
      description: 'Offers therapeutic benefits such as relief of muscle tension and increased circulation to the areas worked.', 
      image: treatments,
    },
  ];

  return (
    <section className="services">
      {/* <div className="container"> */}
        <div className="service-cards">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className='service-image-container'>
                <img src={service.image} alt={service.title} />
              </div>
              
              <p className='title'>{service.title}</p>
              <p className='description'>{service.description}</p>
              <button className="cta-button">READ MORE</button>
            </div>
          ))}
        </div>
      {/* </div> */}
    </section>
  );
};

export default Services;
