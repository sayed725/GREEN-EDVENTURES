import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    quote:
      "My travel experience with ECO EDVENTURE surpassed all expectations and left an indelible mark on my heart. They have set the bar incredibly high, and I cannot wait to embark on my next adventure with them.",
    name: "John Doe",
    position: "Managing Director",
    image: "/random person 1.jpg",
  },
  {
    quote:
      "Traveling with this agency was an unforgettable experience. From planning to execution, everything was seamless. I highly recommend them to anyone looking for amazing travel adventures.",
    name: "Jane Smith",
    position: "Explorer",
    image: "/random-person 2.jpg",
  },
  {
    quote:
      "The team ensured every part of the trip was perfect, and their commitment to sustainability is truly inspiring. I am already planning my next trip!",
    name: "Robert Brown",
    position: "Travel Enthusiast",
    image: "/random-person3.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#184E68] to-[#57CA85] text-white py-10 lg:px-[200px] rounded-md">
      <div className="">
        {/* Section Header */}
      <div className="flex flex-col gap-5 pb-10 mb-10 justify-center items-center">
      <h3 className="text-sm uppercase tracking-wide text-gray-300 ">
          — Testimonials
        </h3>
        <h2 className="text-4xl font-bold">What our clients say</h2>

      </div>
        {/* Swiper Slider */}
        <Swiper
          navigation
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000, // Delay between slides in milliseconds
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          className="mb-12 lg:w-3/4"
          speed={1000}
          spaceBetween={50}
          slidesPerView={1}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center">
                <p className="text-lg italic mb-10 px-10">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white"
                  />
                  <div>
                    <h4 className="text-xl font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-300">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-4xl font-bold">1,000+</h3>
            <p className="text-gray-300">Trips and Tours</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">30+</h3>
            <p className="text-gray-300">Outdoor Activities</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">10+</h3>
            <p className="text-gray-300">Countries</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">25K+</h3>
            <p className="text-gray-300">Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
