import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


const BannerNew = () => {
  return (
    <div className="relative w-full bg-cover bg-center rounded-md">
      <Swiper
        modules={[Navigation, Pagination , Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
          }}
          speed={1000}
        className="h-[500px] rounded-b-md"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-[500px] w-full flex flex-col justify-center items-center text-white text-center bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/carousel pic1.webp')`,
            }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Explore Majestic Forests
            </h1>
            <p className="text-lg md:text-xl mb-6 hidden sm:block">
              Venture deep into lush, pristine forests, uncovering their secrets
              and beauty while ensuring environmental sustainability.
            </p>
            <button className="bg-green-700 hover:bg-green-600 hover:text-black text-white font-semibold px-6 py-3 rounded-md">
              About Us
            </button>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-full w-full flex flex-col justify-center items-center text-white text-center bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/carosel pic 3.jpg')`,
            }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Discover Hidden Paradises
            </h1>
            <p className="text-lg md:text-xl mb-6 hidden sm:block">
              Immerse yourself in the beauty of untouched nature and connect
              with the wild in the most sustainable way.
            </p>
            <button className="bg-green-700 hover:bg-green-600 hover:text-black text-white font-semibold px-6 py-3 rounded-md">
              Explore Now
            </button>
          </div>
        </SwiperSlide>
         {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="h-full w-full flex flex-col justify-center items-center text-white text-center bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/banner type image-2.jpg')`,
            }}
          >
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover the Heart of the Jungle
            </h1>
            <p className="text-lg md:text-xl mb-6 hidden sm:block">
            Dive into the vibrant wilderness of lush jungles, teeming with life and secrets, while championing efforts to protect their fragile ecosystems.
            </p>
            <button className="bg-green-700 hover:bg-green-600 hover:text-black text-white font-semibold px-6 py-3 rounded-md">
              Explore Now
            </button>
          </div>
        </SwiperSlide> {/* Slide 4 */}
        <SwiperSlide>
          <div
            className="h-full w-full flex flex-col justify-center items-center text-gray-300 text-center bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/banner type image-3.jpeg')`,

            }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Wander Through Enchanted Woods
            </h1>
            <p className="text-lg md:text-xl mb-6 hidden sm:block">
            Step into ancient forests filled with towering trees, hidden wildlife, and the serene whispers of nature, preserving these wonders for generations to come.
            </p>
            <button className="bg-green-700 hover:bg-green-600 hover:text-black text-white font-semibold px-6 py-3 rounded-md">
              Explore Now
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerNew;
