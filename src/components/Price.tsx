import React from "react";
import "../styles/Price.scss";
import price_1 from "../images/price_1.png";
import price_3 from "../images/price_3.png";
import price_2 from "../images/price_2.png";

interface ServiceProps {
	name: string[];
	description: string[];
	price: string[];
}

const ServicesSection: React.FC<ServiceProps> = ({ name, description, price }) => (
	<section className='services-section'>
		<div className='services-header'>
			<h6>OUR SERVICES</h6>
			<h2>Creative excellence and the unparalleled hospitality</h2>
		</div>
		<div className='services-content'>
			<div className='img_list'>
				{/* Левая часть с изображениями */}
				<div className='services-images'>
					<img src={price_1} alt='price_1' className='image-1' />
					<img src={price_3} alt='price_3' className='test' />
				</div>
				{/* Правая часть с описанием услуг */}
				<div className='services-list'>
					<div className='service-item'>
						<h3>
							{name[0]} <span className='prices'>{price[0]}</span>
						</h3>
						<hr />
						<p className="description_1">{description[0]}</p>
						<hr className='end' />
					</div>

					<div className='service-item'>
						<h3>
							{name[1]} <span className='prices'>{price[1]}</span>
						</h3>
						<hr />
						<p className="description_1">{description[1]}</p>
						<hr className='end' />
					</div>

					<div className='service-item'>
						<h3>
							{name[2]} <span className='prices'>{price[3]}</span>
						</h3>
						<hr />
						<p className="description_1">{description[2]}</p>
						<hr className='end' />
					</div>

					<div className='service-item'>
						<h3>
							{name[3]} <span className='prices'>{price[3]}</span>
						</h3>
						<hr />
						<p className="description_1">{description[3]}</p>
						<hr className='end' />
					</div>

					<button className='appointment-button'>GET AN APPOINTMENT</button>
				</div>
			</div>
		</div>
		<div className='servise-content_2'>
			<div className='list_img'>
				<div className='services-list_2'>
				<div className='service-item'>
					<h3>
						{name[0]} <span className='prices'>{price[0]}</span>
					</h3>
					<hr />
					<p>{description[0]}</p>
					<hr className='end' />
				</div>

				<div className='service-item'>
					<h3>
						{name[1]} <span className='prices'>{price[1]}</span>
					</h3>
					<hr />
					<p>{description[1]}</p>
					<hr className='end' />
				</div>

				<div className='service-item'>
					<h3>
						{name[2]} <span className='prices'>{price[3]}</span>
					</h3>
					<hr />
					<p>{description[2]}</p>
					<hr className='end' />
				</div>

				<div className='service-item'>
					<h3>
						{name[3]} <span className='prices'>{price[3]}</span>
					</h3>
					<hr />
					<p>{description[3]}</p>
					<hr className='end' />
				</div>

				<button className='appointment-button'>GET AN APPOINTMENT</button>
				</div>
				<div className='services-images'>
				<img src={price_2} alt='price_1' className='image-1' />
				<img src={price_3} alt='price_3' className='test_2' />
				</div>
		  </div>		
		</div>
	</section>
);

export default ServicesSection;
