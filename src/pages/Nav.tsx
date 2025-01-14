import React from 'react';
import Image from 'next/image';
import { IoLogIn } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

const navItems = [
  { label: "New customer? Sign Up", href: "/account/login?signup=true&ret=/" },
  { label: "My Profile", href: "/account/?rd=0&link=home_account" },
  { label: "Flipkart Plus Zone", href: "/plus" },
  { label: "Orders", href: "/account/orders?link=home_orders" },
  { label: "Wishlist", href: "/wishlist?link=home_wishlist" },
];

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-20 transition-all duration-300 ease-in-out hover:shadow-xl">
      <div className="max-w-screen-lg mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo and Name */}
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <Image
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
              alt="Flipkart"
              width={120}
              height={30}
              className="transition-transform duration-300 ease-in-out hover:scale-105 md:w-[160px] md:h-[40px]"
            />
          </a>
        </div>

        {/* Mobile Icons */}
        <div className="flex md:hidden space-x-4">
          <a href="/Account/Login" className="transition-transform duration-300 ease-in-out hover:scale-110">
            <IoLogIn className="text-blue-600 text-2xl" />
          </a>
          <a href="" className="transition-transform duration-300 ease-in-out hover:scale-110">
            <FaCartArrowDown className="text-blue-600 text-2xl" />
          </a>
          <a href="/account" className="transition-transform duration-300 ease-in-out hover:scale-110">
            <MdAccountCircle className="text-blue-600 text-2xl" />
          </a>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-grow mx-4 relative">
          <form action="/search" method="GET" className="flex w-full">
            <input
              type="text"
              name="q"
              placeholder="Search for Products, Brands, and More"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none transition duration-300 ease-in-out hover:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 rounded-r-md flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </form>
        </div>

        {/* Right - Login & Options */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="/Account/Login"
            className="transition-all duration-300 ease-in-out hover:text-blue-600 hover:scale-110"
          >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center space-x-2">
              <IoLogIn className="text-lg" />
              <span>Login</span>
            </button>
          </a>

          {/* Cart */}
          <a
            href=""
            className="transition-all duration-300 ease-in-out hover:text-blue-600 hover:scale-110"
          >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center space-x-2">
              <FaCartArrowDown className="text-lg" />
              <span>Cart</span>
            </button>
          </a>

          {/* Profile Dropdown */}
          <div className="relative group">
            <a href="/account" className="flex items-center transition-transform duration-300 ease-in-out hover:scale-110">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center space-x-2">
                <MdAccountCircle className="text-xl" />
                <span>Account</span>
              </button>
            </a>

            <div className="absolute top-full right-0 bg-white shadow-md p-4 w-64 hidden group-hover:block transition-all duration-300 ease-in-out transform scale-95 group-hover:scale-100">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-2 hover:text-blue-500 transition duration-300 ease-in-out">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 py-2">
        <form action="/search" method="GET" className="flex">
          <input
            type="text"
            name="q"
            placeholder="Search for Products, Brands, and More"
            className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none transition duration-300 ease-in-out hover:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 rounded-r-md flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
