import AllMovies from "./components/AllMovies";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import PopularReviews from "./components/PopularReviews";
import Reviews from "./components/Reviews";


export default function Home() {
  return (
   <div className="bg-[#2c3440] h-full">
   <div className="bg-[#14181c]">  
   <Navbar />
   </div>
   <div>
    <Carousel/>
   </div>
   <div className="bg-[#2c3440]">
    <Category/>
   </div>
   <div>
    <AllMovies/>
   </div>
   <div>
    <Banner/>
   </div>
   <div>
    <Reviews/>
   </div>
   <div>
    <PopularReviews/>
   </div>
   </div>
  );
}
