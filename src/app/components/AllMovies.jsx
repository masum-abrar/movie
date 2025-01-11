'use client'
import React from 'react';
import { FaEye, FaEllipsisH, FaHeart } from 'react-icons/fa';
import Slider from 'react-slick'; // Importing react-slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const AllMovies = () => {
  const movies = [
    { id: 1, title: 'Nos Feratu', image: 'https://a.ltrbxd.com/resized/film-poster/3/5/9/5/0/5/359505-nosferatu-2024-0-300-0-450-crop.jpg?v=a12d4ad648', eyeCount: '990k', dotCount: '194k', heartCount: '366k' },
    { id: 2, title: 'The Brutalist', image: 'https://a.ltrbxd.com/resized/film-poster/4/7/8/4/2/8/478428-the-brutalist-0-300-0-450-crop.jpg?v=e23890665e', eyeCount: '890k', dotCount: '134k', heartCount: '456k' },
    { id: 3, title: 'The Count Cristo ', image: 'https://a.ltrbxd.com/resized/film-poster/9/7/7/8/3/5/977835-the-count-of-monte-cristo-2024-0-300-0-450-crop.jpg?v=f72dd77674', eyeCount: '750k', dotCount: '294k', heartCount: '266k' },
    { id: 4, title: 'Movie 4', image: 'https://a.ltrbxd.com/resized/film-poster/3/5/9/5/0/5/359505-nosferatu-2024-0-300-0-450-crop.jpg?v=a12d4ad648', eyeCount: '620k', dotCount: '394k', heartCount: '166k' },
  ];
   
  
  const settings = {
    dots: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    nextArrow: <div className="slick-arrow slick-next">→</div>, 
    prevArrow: <div className="slick-arrow slick-prev">←</div>, 
  };

  return (
    <div className="container max-w-5xl mx-auto mt-20 h-full p-3">
      {/* Section Header */}
      <div className="flex justify-between text-gray-400 mb-12">
        <h1 className="text-lg font-bold">POPULAR FILM THIS WEEK</h1>
        <p className="cursor-pointer hover:underline">More</p>
      </div>
      <hr className="bg-gray-400 mb-6" />

      {/* Card Slider */}
      <Slider {...settings}>
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="relative bg-[#2c3440] rounded-lg p-4 w-full h-full group overflow-hidden   transition-all duration-300 "
          >
            {/* Movie Image */}
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-full object-cover rounded-lg shadow-xl "
            />
             <div className="absolute top-[0px] left-1/2 w-full lg:w-[40%] transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs font-bold py-1 px-2 rounded-lg shadow-lg">
    {movie.title}
  </div>


           
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 sm:top-40">
  {/* Icons */}
  <div className="lg:flex justify-center gap-4 bg-stone-900 p-2 rounded-lg transform group-hover:scale-90 sm:group-hover:scale-100 transition-transform duration-300">
    <div className="lg:flex items-center text-white text-sm group-hover:text-xs sm:group-hover:text-sm">
      <FaEye className="mr-1 group-hover:text-xs sm:group-hover:text-sm" />
      <span className="group-hover:text-xs sm:group-hover:text-sm">
        {movie.eyeCount}
      </span>
    </div>
    <div className="flex items-center text-white text-sm group-hover:text-xs sm:group-hover:text-sm">
      <FaEllipsisH className="mr-1 group-hover:text-xs sm:group-hover:text-sm" />
      <span className="hidden sm:block group-hover:text-xs sm:group-hover:text-sm">
        {movie.dotCount}
      </span>
    </div>
    <div className="flex items-center text-white text-sm group-hover:text-xs sm:group-hover:text-sm">
      <FaHeart className="mr-1 group-hover:text-xs sm:group-hover:text-sm" />
      <span className="group-hover:text-xs sm:group-hover:text-sm">
        {movie.heartCount}
      </span>
    </div>
  </div>
</div>





           
            <div className="hidden lg:top-12 lg:left-0 lg:w-full lg:flex lg:justify-center lg:items-center px-2 text-base">
  <div className="flex items-center text-green-500 px-2 py-1 rounded">
    <FaEye className="mr-1" />
    <span className="">{movie.eyeCount}</span>
  </div>
  <div className="flex items-center text-blue-500 px-2 py-1 rounded">
    <FaEllipsisH className="mr-1" />
    <span className="">{movie.dotCount}</span>
  </div>
  <div className="flex items-center text-orange-500 px-2 py-1 rounded">
    <FaHeart className="mr-1" />
    <span className="">{movie.heartCount}</span>
  </div>
</div>


          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AllMovies;
