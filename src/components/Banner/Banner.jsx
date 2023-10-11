
function Banner() {
  return (
    <section className='bg-white py-10'>
      <div className="container">
        <div className="banner-wrapper flex justify-between items-center gap-5">
          <div className="banner-icons w-[145px]">
            <img src="/images/banner/equinix.png" alt="icons" className='object-cover' />
          </div>
          <div className="banner-icons w-[145px]">
            <img src="/images/banner/prologis.png" alt="icons" className='object-cover' />
          </div>
          <div className="banner-icons w-[145px]">
            <img src="/images/banner/realty.png" alt="icons" className='object-cover' />
          </div>
          <div className="banner-icons w-[145px]">
            <img src="/images/banner/tower.png" alt="icons" className='object-cover' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner;