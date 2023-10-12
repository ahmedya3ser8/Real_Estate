import { useState } from "react";
import { HiShieldCheck } from "react-icons/hi";
import { MdCancel, MdAnalytics } from "react-icons/md";
import {IoMdArrowDropdown} from 'react-icons/io';

function Accordion() {
  const [accordionOne, setAccordionOne] = useState(false);
  const [accordionTwo, setAccordionTwo] = useState(false);
  const [accordionThree, setAccordionThree] = useState(false);
  return (
    <section className="bg-white py-12">
      <div className="container">
        <div className="accordion flex justify-between flex-col lg:flex-row">
          <div className="left">
            <div className="w-[70%] m-auto lg:w-[420px] h-[500px] rounded-[240px_240px_0_0] overflow-hidden border-4 border-solid border-[#ffffff1f] lg:m-0">
              <img src="/images/value.png" alt="accordion" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="right w-full lg:w-[65%] lg:p-[20px]">
            <div className="accordion-info mb-8 md:p-[20px] lg:p-0">
              <span className="block text-[18px] text-[#ffa500] mb-[5px] font-medium">Our Value</span>
              <h3 className="text-[30px] text-[#1f3e72] mb-[5px] font-bold">Value We Give to You</h3>
              <p className="text-[#777]">We always ready to help by providing the best services for you.
                We believe a good place to live can make your life better
              </p>
            </div>
            <div className="accordion-content p-[20px]">
              <div className="accordion-box p-[10px] md:p-[20px] border-[1px] border-solid border-[#ccc] rounded-[10px] mb-[20px]">
                <button onClick={() => setAccordionOne(!accordionOne)} className="w-full flex justify-between items-center">
                  <HiShieldCheck style={{fontSize: '20px', backgroundColor: '#eeeeff', color: 'blue'}}/>
                  <span className="text-[#1f3e72]">Best interest rates on the market</span>
                  <IoMdArrowDropdown style={{fontSize: '20px', backgroundColor: '#eeeeff', color: 'blue'}} />
                </button>
                <p className={accordionOne ? 'hidden' : 'block mt-[5px] p-[5px] text-[14px] text-[#777]'}>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</p>
              </div>
              <div className="accordion-box p-[10px] md:p-[20px] border-[1px] border-solid border-[#ccc] rounded-[10px] mb-[20px]">
                <button onClick={() => setAccordionTwo(!accordionTwo)} className="w-full flex justify-between items-center">
                  <MdCancel style={{fontSize: '20px', backgroundColor: '#eeeeff', color: 'blue'}} />
                  <span className="text-[#1f3e72]">Prevent unstable prices</span>
                  <IoMdArrowDropdown style={{fontSize: '20px', backgroundColor: '#eeeeff', color: 'blue'}} />
                </button>
                <p className={accordionTwo ? 'block mt-[5px] p-[5px] text-[14px] text-[#777]' : 'hidden'}>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</p>
              </div>
              <div className="accordion-box p-[10px] md:p-[20px] border-[1px] border-solid border-[#ccc] rounded-[10px]">
                <button onClick={() => setAccordionThree(!accordionThree)} className="w-full flex justify-between items-center">
                  <MdAnalytics style={{fontSize: '20px', backgroundColor: '#eeeeff', color: 'blue'}} />
                  <span className="text-[#1f3e72]">Best price on the market</span>
                  <IoMdArrowDropdown style={{fontSize: '20px', backgroundColor: '#eeeeff', color: 'blue'}} />
                </button>
                <p className={accordionThree ? 'block mt-[5px] p-[5px] text-[14px] text-[#777]' : 'hidden'}>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Accordion;