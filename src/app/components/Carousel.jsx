import React from 'react'

const Carousel = () => {
  return (
    <div>
        <div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://a.ltrbxd.com/resized/sm/upload/l3/72/mx/b8/vqToPEywI1QzUNd5bJceldmrWUf-1200-1200-675-675-crop-000000.jpg?v=cdd95a78e1&quot"
      className="w-full mt-[-140px] " />
     
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      {/* <div className=""></div> */}
    <div className='text-center max-w-[720px] mx-auto'>
    <h1 className='text-white font-extrabold text-4xl  text-center mt-36'>Track films you’ve watched.
Save those you want to see.
Tell your friends what’s good.  </h1>
div
<button className='border-none text-white bg-[#00ac1c] font-bold mt-4 p-4 mr-20 rounded-md'>Get started — it‘s free!</button>
    </div>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
 
</div>

    </div>
  )
}

export default Carousel