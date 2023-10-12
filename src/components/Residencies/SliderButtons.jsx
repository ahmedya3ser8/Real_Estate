import { useSwiper } from "swiper/react";

function SliderButtons() {
  const swiper = useSwiper();
  return (
    <div className="slider-btns">
      <button onClick={() => swiper.slidePrev()} className="absolute top-[30%] left-[-4px] p-[0.2rem_0.6rem] bg-[#1f3e72] text-white text-[1.2rem] border-none shadow-[0_3px_9px_2px_#00000040] rounded-[10px] z-10">&lt;</button>
      <button onClick={() => swiper.slideNext()} className="absolute top-[30%] right-0 p-[0.2rem_0.6rem] bg-[#1f3e72] text-white text-[1.2rem] border-none shadow-[0_3px_9px_2px_#00000040] rounded-[10px] z-10">&gt;</button>
    </div>
  )
}

export default SliderButtons;