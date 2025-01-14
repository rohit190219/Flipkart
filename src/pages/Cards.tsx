import React from "react";

const Cards = () => {
  const cardData = [
    { title: "Top Offers", imgSrc: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/6a99be02898b225d.jpg?q=100", link: "/monumental-sale1-store" },
    { title: "Mobiles & Tablets", imgSrc: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/6c22d4999cdb4144.jpg?q=100", link: "/mobile-phones-store" },
    { title: "TVs & Appliances", imgSrc: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/4a5fb0c8e0461335.jpg?q=100", link: "/tvs-and-appliances-new-clp-store" },
    { title: "Electronics", imgSrc: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/2e30d5fac47eff64.jpg?q=100", link: "/ce-big-saving-days-jan25-desktop-sale-store" },
    { title: "Fashion", imgSrc: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/46de73feaefc28cd.jpg?q=100", link: "/bbdh-jan25-fashion-store" },
    { title: "Beauty, Food..", imgSrc: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/800e00a6322c6985.jpg?q=100", link: "/sale25-repbgm-store" },
    { title: "Home & Kitchen", imgSrc: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/8538d487cd2bc8b7.jpg?q=100", link: "/hnf-rd-sale-25-at-store" },
    { title: "Furniture", imgSrc: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/e7947cc0cc4a6b7c.jpg?q=100", link: "/republicdayssale2-at-store" },
    { title: "Travel", imgSrc: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/49f31863cc17d101.jpg?q=100", link: "/travel/flights" },
    { title: "Grocery", imgSrc: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/1400d6186b839cde.jpg?q=100", link: "/grocery-supermart-store" }
  ];

  return (
    <div className="flex overflow-x-auto space-x-6 p-4 snap-x snap-mandatory lg:pt-8">
      {cardData.map((card, index) => (
        <a
          href={card.link}
          key={index}
          className="flex flex-col items-center justify-center text-center border p-2 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-44 md:w-56 bg-white hover:bg-gray-100 ring-2 ring-transparent hover:ring-gray-300 hover:ring-4"
        >
          <img
            src={card.imgSrc}
            alt={card.title}
            className="w-24 h-24 object-contain mb-2 transition-all duration-200 hover:opacity-90"
          />
          <span className="font-semibold text-sm sm:text-base text-gray-800">{card.title}</span>
        </a>
      ))}
    </div>
  );
};

export default Cards;
