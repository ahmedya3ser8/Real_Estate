import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import sliderData from '../../db/slider.json';
import SliderButtons from './SliderButtons';

function Residencies() {
  const sliderSettings = {
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
      480: {
        slidesPerView: 1
      },
      600: {
        slidesPerView: 2
      },
      750: {
        slidesPerView: 3
      },
      1100: {
        slidesPerView: 4
      },
    }
  }

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container">
        <p>Best Choices</p>
        <h2 className='text-[35px] font-medium mb-[32px]'>Popular Residencies</h2>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {sliderData.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="card">
                <img src={card.image} alt="slider-img" className='w-[240px] rounded-[10px]' />
                <div className="card-content">
                  <span>{`$${card.price}`}</span>
                  <h3>{card.title}</h3>
                  <p>{card.detail}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Residencies;