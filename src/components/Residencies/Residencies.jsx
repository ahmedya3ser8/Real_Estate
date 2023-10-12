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
        <p className='text-[orange] text-[18px]'>Best Choices</p>
        <h2 className='text-[30px] mb-[32px] text-[#1f3e72]'>Popular Residencies</h2>
        <Swiper {...sliderSettings}>
          {sliderData.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="card">
                <img src={card.image} alt="slider-img" className='w-[240px] rounded-[10px]' />
                <div className="card-content">
                  <span>{`$${card.price}`}</span>
                  <h3 className='text-[#1f3e72] text-[25px]'>{card.title}</h3>
                  <p className='text-[14px] w-[240px] text-[#777]'>{card.detail}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SliderButtons />
        </Swiper>
      </div>
    </section>
  )
}

export default Residencies;