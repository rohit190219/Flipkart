import React from "react";
import Nav from "./Nav";
import Cards from "./Cards";
import Carousel from "./Carousel";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <div />
      <div className="px-0 pt-16 max-w-screen-xl mx-auto hidden sm:block">
        <Cards />
      </div>
      <div>
        <Carousel />
      </div>
      <Footer />
    </div>
  );
};

export default App;
