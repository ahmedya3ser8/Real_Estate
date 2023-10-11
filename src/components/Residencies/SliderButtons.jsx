import { useSwiper } from "swiper/react";

function SliderButtons() {
  const swiper = useSwiper();
  return (
    <div className="slider-btns absolute top-[-4rem] right-0 flex gap-4">
      <button onClick={() => swiper.slidePrev()} className="p-[0.2rem_0.6rem] bg-white text-[#00f] text-[1.2rem] border-none shadow-[0_3px_9px_2px_#00000040] rounded-[6px]">&lt;</button>
      <button onClick={() => swiper.slideNext()} className="p-[0.2rem_0.6rem] bg-white text-[#00f] text-[1.2rem] border-none shadow-[0_3px_9px_2px_#00000040] rounded-[6px]">&gt;</button>
    </div>
  )
}

export default SliderButtons;