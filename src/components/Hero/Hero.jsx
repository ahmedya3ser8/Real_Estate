import { HiLocationMarker } from 'react-icons/hi';
import {BsPlus} from 'react-icons/bs';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="py-12 text-white overflow-hidden">
      <div className="container">
        <div className="flex justify-around items-center flex-col md:flex-row gap-[50px]">
          <div className="left flex flex-col gap-[40px]">
            <div className="hero-title relative before:content-[''] before:absolute before:w-8 before:h-8 before:rounded-full before:bg-[#ffb978] before:right-[50%] before:top-[4px] before:z-[-1]">
              <motion.h1 
                initial = {{y: '2rem', opacity: 0}}
                animate = {{y: 0, opacity: 1}}
                transition={{
                  duration: 2,
                  type: 'spring'
                }}
                className='text-[40px] font-bold leading-[1.3]'>
                  Discover <br/>
                  Most Suitable <br/>
                  Property
              </motion.h1>
            </div>
            <div className="hero-info">
              <p className='mb-[5px] text-[#8c8b8b] text-[14px]'>Find a variety of properties that suit you very easily</p>
              <p className='text-[#8c8b8b] text-[14px]'>Forget all difficulties in finding a residence for you</p>
            </div>
            <div className="hero-input h-[50px] p-[10px] bg-[#ddd] rounded-[10px] flex justify-between items-center gap-5">
              <HiLocationMarker className='text-[22px] text-[#4066ff]' />
              <input type="text" id='hero-input' name='hero-input' className='bg-transparent text-black outline-none' />
              <button className='p-[5px_8px] bg-[#4066ff] rounded-[10px]'>Search</button>
            </div>
            <div className="hero-counter flex gap-5">
              <div className="count-info">
                <div className="count flex items-center">
                  <span className='text-[25px]'>9000</span>
                  <BsPlus className='text-[#ffb978] text-[25px] font-medium' />
                </div>
                <span className='text-[#8c8b8b] text-[14px]'>Premium Product</span>
              </div>
              <div className="count-info">
                <div className="count flex items-center">
                  <span className='text-[25px]'>2000</span>
                  <BsPlus className='text-[#ffb978] text-[25px] font-medium' />
                </div>
                <span className='text-[#8c8b8b] text-[14px]'>Happy Customer</span>
              </div>
              <div className="count-info">
                <div className="count flex items-center">
                  <span className='text-[25px]'>18</span>
                  <BsPlus className='text-[#ffb978] text-[25px] font-medium' />
                </div>
                <span className='text-[#8c8b8b] text-[14px]'>Awards Winning</span>
              </div>
            </div>
          </div>
          <div className="right">
            <motion.div
              initial = {{x: '7rem', opacity: 0}}
              animate = {{x: 0, opacity: 1}}
              transition={{
                duration: 2,
                type: 'spring'
              }}
              className="hero-img w-[350px] lg:w-[500px] h-[390px] lg:h-[560px] rounded-[240px_240px_0_0] overflow-hidden border-4 border-solid border-[#ffffff1f]">
              <img src="/images/hero.png" alt="hero-img" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;