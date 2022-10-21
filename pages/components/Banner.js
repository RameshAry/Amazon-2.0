import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <div className="relative ">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            laoding="lazy"
            src="https://links.papareact.com/gi1"
            alt="lazy"
          />
        </div>
        <div>
          <img
            laoding="lazy"
            src="https://links.papareact.com/6ff"
            alt="lazy"
          />
        </div>
        <div>
          <img
            laoding="lazy"
            src="https://links.papareact.com/7ma"
            alt="lazy"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
