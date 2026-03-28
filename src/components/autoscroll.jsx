import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";

const brands = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png",
  "https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
  "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
];

function Autoscroll() {
  return (
    <div className="py-12 bg-gray-100">

      <h2 className="text-3xl font-bold text-center mb-10">
        Our Brands
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {brands.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
              
              <img
                src={logo}
                alt={`brand-${index}`}
                className="h-16 object-contain   hover:scale-110 transition duration-300"
              />

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Autoscroll;