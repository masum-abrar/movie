import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
   <div className="bg-[#2c3440] h-screen">
   <div className="bg-[#14181c]">  
   <Navbar />
   </div>
   <div>
    <Carousel/>
   </div>
   </div>
  );
}
