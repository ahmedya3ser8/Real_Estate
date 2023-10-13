import {MdCall} from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {HiMiniChatBubbleBottomCenter} from 'react-icons/hi2';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <section className="bg-white py-12" id='contact'>
      <div className="container">
        <div className="contact flex justify-between flex-col lg:flex-row gap-5">
          <motion.div
            initial = {{x: '-4rem', opacity: 0}}
            animate = {{x: 0, opacity: 1}}
            transition={{
              duration: 2,
              type: 'spring'
            }}
            className="right w-full lg:w-[65%] lg:p-[20px]">
            <div className="contact-head mb-8 md:p-[20px] lg:p-0">
              <span className="block text-[18px] text-[#ffa500] mb-[5px] font-medium">Our Value</span>
              <h3 className="text-[30px] text-[#1f3e72] mb-[5px] font-bold">Value We Give to You</h3>
              <p className="text-[#777]">We always ready to help by providing the best services for you.
                We believe a good place to live can make your life better
              </p>
            </div>
            <div className="contact-content grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="contact-box p-[20px] border-[1px] border-solid border-[#ccc] rounded-[6px]">
                <div className="contact-info flex items-center gap-3 mb-[10px]">
                  <div className="contact-icon p-[5px] bg-[#eeeeff] rounded-[6px]">
                    <MdCall  className='text-[20px] text-blue-500'/>
                  </div>
                  <div className='flex flex-col gap-[5px]'>
                    <span className='text-[#1f3e72] text-[18px] font-medium'>Call</span>
                    <span className='text-[#777] text-[14px]'>021 123 145 14</span>
                  </div>
                </div>
                <a href="#" className='block w-full text-center p-[10px] bg-[#eeeeff] text-blue-500 rounded-[10px]'>Call Now</a>
              </div>
              <div className="contact-box p-[20px] border-[1px] border-solid border-[#ccc] rounded-[6px]">
                <div className="contact-info flex items-center gap-3 mb-[10px]">
                  <div className="contact-icon p-[5px] bg-[#eeeeff] rounded-[6px]">
                    <BsFillChatDotsFill className='text-[20px] text-blue-500' />
                  </div>
                  <div className='flex flex-col gap-[5px]'>
                    <span className='text-[#1f3e72] text-[18px] font-medium'>Chat</span>
                    <span className='text-[#777] text-[14px]'>021 123 145 14</span>
                  </div>
                </div>
                <a href="#" className='block w-full text-center p-[10px] bg-[#eeeeff] text-blue-500 rounded-[10px]'>Chat Now</a>
              </div>
              <div className="contact-box p-[20px] border-[1px] border-solid border-[#ccc] rounded-[6px]">
                <div className="contact-info flex items-center gap-3 mb-[10px]">
                  <div className="contact-icon p-[5px] bg-[#eeeeff] rounded-[6px]">
                  <BsFillChatDotsFill className='text-[20px] text-blue-500' />
                  </div>
                  <div className='flex flex-col gap-[5px]'>
                    <span className='text-[#1f3e72] text-[18px] font-medium'>Video Call</span>
                    <span className='text-[#777] text-[14px]'>021 123 145 14</span>
                  </div>
                </div>
                <a href="#" className='block w-full text-center p-[10px] bg-[#eeeeff] text-blue-500 rounded-[10px]'>Call Now</a>
              </div>
              <div className="contact-box p-[20px] border-[1px] border-solid border-[#ccc] rounded-[6px]">
                <div className="contact-info flex items-center gap-3 mb-[10px]">
                  <div className="contact-icon p-[5px] bg-[#eeeeff] rounded-[6px]">
                  <HiMiniChatBubbleBottomCenter className='text-[20px] text-blue-500' />
                  </div>
                  <div className='flex flex-col gap-[5px]'>
                    <span className='text-[#1f3e72] text-[18px] font-medium'>Message</span>
                    <span className='text-[#777] text-[14px]'>021 123 145 14</span>
                  </div>
                </div>
                <a href="#" className='block w-full text-center p-[10px] bg-[#eeeeff] text-blue-500 rounded-[10px]'>Message Now</a>
              </div>
            </div>
          </motion.div>
          <div className="left">
            <motion.div
              initial = {{x: '7rem', opacity: 0}}
              animate = {{x: 0, opacity: 1}}
              transition={{
                duration: 2,
                type: 'spring'
              }}
              className="w-[70%] m-auto lg:w-[420px] h-[500px] rounded-[240px_240px_0_0] overflow-hidden border-4 border-solid border-[#ffffff1f] lg:m-0">
              <img src="/images/contact.jpg" alt="contact" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;