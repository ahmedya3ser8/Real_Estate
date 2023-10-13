
function Footer() {
  return (
    <footer className="py-6 bg-white">
      <div className="container">
        <div className="footer-content flex  flex-col md:flex-row justify-between items-center">
          <div className="left mr-auto md:m-0">
            <img src="/images/logo2.png" alt="logo" className="w-[120px] object-cover" />
            <p className="text-[14px]">Our vision is to make all people <br />
              the best place to live for them.
            </p>
          </div>
          <div className="right mr-auto md:m-0">
            <div className="footer-info">
              <h4 className="text-[#1f3e72] text-[25px] font-medium">Information</h4>
              <p className="text-[#777] text-[14px]">145 New York, FL 5467, USA</p>
            </div>
            <div className="footer-links">
              <ul className="flex gap-[15px]">
                <li>
                  <a href="#" className="text-[#1f3e72]">Property</a>
                </li>
                <li>
                  <a href="#" className="text-[#1f3e72]">Services</a>
                </li>
                <li>
                  <a href="#" className="text-[#1f3e72]">Product</a>
                </li>
                <li>
                  <a href="#" className="text-[#1f3e72]">About Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;