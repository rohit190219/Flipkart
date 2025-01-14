import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css"; // Import slick-carousel CSS
import "slick-carousel/slick/slick-theme.css";

const carouselData = [
  {
    id: 1,
    imageUrl: "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/aa7d5b58b26ff5d8.jpg?q=80",
    link: "/kitchen-cookware-serveware/gas-stove-accessories",
  },
  {
    id: 2,
    imageUrl: "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/54f94d29aa080c9c.jpg?q=80",
    link: "/monumental-sale1-store?param=2778",
  },
  {
    id: 3,
    imageUrl: "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/991c1edb19970044.jpg?q=80",
    link: "/home-kitchen/kitchen-appliances/mixer-juicer-grinder/~cs-wh5x3mv18g/pr?sid=j9e,m38,7ek",
  },
  {
    id: 4,
    imageUrl: "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/327e2f5c78d2380e.jpg?q=80",
    link: "/audio-video/speakers/pr?sid=0pm%2C0o7",
  },
  {
    id: 5,
    imageUrl: "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/8f41f8ef02fdff08.jpg?q=80",
    link: "https://www.flipkart.com/travel/flights?param=TravelDT-HPW-RD-Airindia-express",
  },
];

const Carousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="carousel-container max-w-[90%] mx-auto px-2 sm:px-4 lg:px-6 py-6">
      <Slider {...settings}>
        {carouselData.map((item) => (
          <div key={item.id} className="relative w-full">
            <a href={item.link} rel="noopener noreferrer">
              <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96">
                <Image
                  src={item.imageUrl}
                  alt={`Product ${item.id}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  priority={true}
                />
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
