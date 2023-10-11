
function Header() {
  return (
    <header className="h-[70px] p-[10px]">
      <div className="container">
        <div className="flex justify-between items-center py-[10px]">
          <div className="left">
            <a href="#" title="logo">
              <img src="/images/logo.png" alt="logo" className="w-[100px]" />
            </a>
          </div>
          <div className="right flex items-center gap-[25px]">
            <nav>
              <ul className="flex gap-[20px] text-white">
                <li>
                  <a href="#" className=" text-[18px] transition-colors duration-300 hover:text-slate-300">Residencies</a>
                </li>
                <li>
                  <a href="#" className=" text-[18px] transition-colors duration-300 hover:text-slate-300">Our Value</a>
                </li>
                <li>
                  <a href="#" className=" text-[18px] transition-colors duration-300 hover:text-slate-300">Contact Us</a>
                </li>
                <li>
                  <a href="#" className=" text-[18px] transition-colors duration-300 hover:text-slate-300">Get Started</a>
                </li>
              </ul>
            </nav>
            <button className="p-[5px_8px] text-[18px] text-white rounded-[10px] transition-transform duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-[1.1]">
              <a href="#">Contact</a>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;