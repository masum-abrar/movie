import React from 'react'

const Carousel = () => {
  return (
    <div>
        <div className="carousel w-full ">
        <div id="slide1" className="carousel-item relative w-full">
  {/* Background Image */}
  <img
    src="https://a.ltrbxd.com/resized/sm/upload/l3/72/mx/b8/vqToPEywI1QzUNd5bJceldmrWUf-1200-1200-675-675-crop-000000.jpg?v=cdd95a78e1&quot"
    className="w-full h-[60vh] lg:h-[80vh] object-cover"
  />
  
  {/* Content in the Center */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center lg:mt-48">
    <h1 className="text-white font-extrabold text-xs  md:text-xl lg:text-3xl px-4">
      Track films you’ve watched.
      <br />
      Save those you want to see.
      <br />
      Tell your friends what’s good.
    </h1>
    <button className="border-none text-white bg-[#00ac1c] font-bold mt-4 px-4 py-2 text-sm md:px-8 md:py-3 md:text-base rounded-md">
  Get started — it‘s free!
</button>

  </div>

  {/* Navigation Arrows */}
  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2  transform justify-between">
    <a href="#slide4" className="btn btn-circle ">❮</a>
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