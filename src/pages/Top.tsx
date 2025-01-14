import React from 'react';

const offers = [
  {
    id: 1,
    title: 'Wrogn, UCB...',
    discount: '60-80% Off',
    imageUrl: 'https://rukminim2.flixcart.com/image/210/210/xif0q/shirt/n/g/t/m-24a5splcq038i-united-colors-of-benetton-original-imah82phsjfmjbfk.jpeg?q=90',
    link: '/clo/~cs-s6wopulp39/pr',
  },
  {
    id: 2,
    title: 'Ethnic Shoes',
    discount: 'Min. 70% Off',
    imageUrl: 'https://rukminim2.flixcart.com/image/210/210/xif0q/shoe/l/o/n/7-peshawari-stylelure-brown-original-imagraawy7veyyre.jpeg?q=90',
    link: '/mens-footwear/mens-ethnic-shoes/pr',
  },
  {
    id: 3,
    title: 'Kurta Sets',
    discount: 'Min. 70% Off',
    imageUrl: 'https://rukminim2.flixcart.com/image/210/210/xif0q/ethnic-set/y/b/t/xl-hpuvyzwszc-gosriki-original-imahy9kraxh3qcvt.jpeg?q=90',
    link: '/clothing-and-accessories/kurtas-ethnic-sets-and-bottoms',
  },
  {
    id: 4,
    title: 'Suitcases',
    discount: 'From ₹2,499',
    imageUrl: 'https://rukminim2.flixcart.com/image/210/210/xif0q/suitcase/v/9/x/-original-imagt756hjyf3bdk.jpeg?q=90',
    link: '/bags-wallets-belts/luggage-travel/suitcases',
  },
  {
    id: 5,
    title: "Women's Shoes",
    discount: 'Min. 50% Off',
    imageUrl: 'https://rukminim2.flixcart.com/image/210/210/xif0q/shoe/l/f/w/5-jm-25-shoetopia-white-original-imagyg9wkmyhf7cc.jpeg?q=90',
    link: '/womens-footwear/~sports-casual-shoes',
  },
  {
    id: 6,
    title: 'FortCollins',
    discount: 'Under ₹499',
    imageUrl: 'https://rukminim1.flixcart.com/image/170/170/xif0q/thermal/q/n/e/s-1-cott-lad-black-top-fsv-1pc-lux-cottswool-original-imah6k5gs8ffhhum.jpeg?q=90',
    link: '/clothing-and-accessories/winter-wear',
  },
];

const Top = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex flex-col items-stretch w-full max-w-7xl lg:w-4/5">
        <a
          href="/offers-list/top-offers"
          className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg mb-6 hover:scale-105 transform transition duration-300 ease-in-out shadow-lg"
        >
          <div className="flex flex-col">
            <span className="text-xl font-bold">Top Offers</span>
          </div>
          <div className="flex items-center justify-center w-12 h-12 bg-indigo-700 rounded-full">
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 17 17"
            >
              <path
                d="m6.627 3.749 5 5-5 5"
                stroke="#FFFFFF"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </a>

        <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white border rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out h-44 lg:h-72 md:h-48 w-full p-4"
            >
              <a
                href={offer.link}
                className="flex flex-col items-center h-full"
              >
                <img
                  src={offer.imageUrl}
                  alt={offer.title}
                  className="w-full h-28 lg:h-44 md:h-40 object-cover rounded-md "
                />
                <div className="text-center m-0 md:m-2 lg:m-4">
                  <h3 className="font-semibold text-xs lg:text-lg md:text-sm">{offer.title}</h3>
                  <p className="text-gray-600 text-sm">{offer.discount}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Top;
