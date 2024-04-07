import React from "react";
import "./Home.css";
import MultiItemCarousel from "./MultiItemCarousel";
import RestaurantCard from "../restaurant/RestaurantCard";

const Home = () => {
    const restaurant = [1,1,1,1,1,1,1,1]
  return (
    <div className="pb-10">
        {/* banner start */}
        <section className="banner -z-50 relative flex flex-col justify-center items-center">
            <div className="w-[50vw] z-10 text-center">
            <p className="text-2xl lg:text-6xl font-bold z-10 py-5">
                Online Food
            </p>
            <p className="text-xl lg:text-4xl z-10 text-gray-300">
                Taste the convenience: Food, Fast and Delivered
            </p>
            </div>

            <div className="cover absolute top-0 left-0 right-0"></div>

            <div className="fadout"></div>
        </section>
        {/* banner end */}

        {/* top meals carousel start */}
        <section className="p-10 lg:py-10 lg:px-20">
            <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">
                Top Meals
            </p>
            <MultiItemCarousel />
        </section>
        {/* top meals carousel end */}

        {/* restaurant card start */} 
        <section className="px-5 lg:px-20 pt-10">

            <h1 className="text-2xl font-semibold text-gray-400 pb-8">
                Order From Our Handpicked Favorites
            </h1>

            <div className="flex flex-wrap items-center justify-around gap-3">
                {restaurant.map((item) => <RestaurantCard />)}
            </div>
        </section>  
        {/* restaurant card end */} 

    </div>
  );
};

export default Home;
