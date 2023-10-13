import { useState } from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import {AiOutlineMenu} from 'react-icons/ai';

function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <header className="h-[70px] p-[10px]">
      <div className="container">
        <div className="flex justify-between items-center py-[10px]">
          <div className="left">
            <a href="#" title="logo">
              <img src="/images/logo.png" alt="logo" className="w-[100px]" />
            </a>
          </div>
          <div className="right flex items-center">
            <nav className='flex items-center gap-5'>
              <ul className={menu ? 'absolute left-[7%] top-[70px] w-[85%] h-[180px] bg-white p-[10px] z-[3]' : "hidden md:flex gap-[20px] text-white"}>
                <li className='p-[5px] mb-[5px] border-b-[1px] border-solid border-[#ccc] md:border-none'>
                  <a href="#residencies" className=" text-[18px] block w-full transition-all duration-300 hover:text-slate-300 hover:pl-4 hover:md:pl-0">Residencies</a>
                </li>
                <li className='p-[5px] mb-[5px] border-b-[1px] border-solid border-[#ccc] md:border-none'>
                  <a href="#value" className=" text-[18px] block w-full transition-all duration-300 hover:text-slate-300 hover:pl-4 hover:md:pl-0">Our Value</a>
                </li>
                <li className='p-[5px] mb-[5px] border-b-[1px] border-solid border-[#ccc] md:border-none'>
                  <a href="#contact" className=" text-[18px] block w-full transition-all duration-300 hover:text-slate-300 hover:pl-4 hover:md:pl-0">Contact Us</a>
                </li>
                <li className='p-[5px]'>
                  <a href="#getstarted" className=" text-[18px] block w-full transition-all duration-300 hover:text-slate-300 hover:pl-4 hover:md:pl-0">Get Started</a>
                </li>
              </ul>
              <button className="hidden md:block p-[5px_8px] text-[18px] text-white rounded-[10px] transition-transform duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-[1.1]">
                <a href="#contact">Contact</a>
              </button>
            </nav>
            <div className="header-icon text-[22px] text-white md:hidden" onClick={() => setMenu(!menu)}>
              {menu ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;