import React from "react";
import product_1 from "../assets/Component 1/product-1.jpg";
import { FaMinus, FaPlus } from "react-icons/fa";

const Card1 = () => {
  return (
    <>
      <div className="main_container flex justify-center items-center w-full min-h-screen bg-gradient-to-r from-sky-200 to-blue-400">
        {/* Card container */}
        <div className="container w-full max-w-[90%] sm:max-w-[500px] py-[30px] px-[25px] sm:py-[50px] sm:px-[45px] rounded-3xl border-none shadow-md bg-white">
          {/* Part 1 */}
          <div className="part_1">
            <h2 className="font-bold text-xl sm:text-2xl">Your shopping cart</h2>
            <p className="text-sm sm:text-base mt-1">ID: 548856</p>
          </div>
          {/* Part 2 */}
          <div className="part_2 md:flex items-start gap-8 my-6">
            <div className="product1_img flex justify-center items-center">
              <img className="w-[140px] sm:w-[140px] h-auto" src={product_1} />
            </div>
            <div className="mt-6 md:mt-0">
              <p className="font-semibold">
                Ecovacs Deebot OZMO N8 + robot vacuum cleaner W125978483
              </p>
              <button className="text-white bg-[rgb(125,196,38)] py-1 px-4 rounded-2xl mt-2 mb-7 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[rgb(105,176,28)]">
                In stock
              </button>

              <div className="flex items-center">
                <FaMinus className="cursor-pointer bg-sky-100 p-2 text-3xl rounded-md transition-all duration-300 ease-in-out hover:scale-110 hover:bg-sky-200 active:scale-90" />
                <p className="cursor-default border-gray-100 border-2 rounded-md px-2 py-[2px] mx-2">
                  1
                </p>
                <FaPlus className="cursor-pointer bg-sky-100 p-2 text-3xl rounded-md transition-all duration-300 ease-in-out hover:scale-110 hover:bg-sky-200 active:scale-90" />
              </div>
            </div>
          </div>
          <hr className="border-[1px]" />
          {/* Part 3 */}
          <div className="part_3">
            <div className="flex items-center justify-between mt-6">
              <p className="tracking-wide">Standard package</p>
              <p className="font-semibold">FREE</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="tracking-wide">Total VAT</p>
              <p className="font-semibold">879,-</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="tracking-wide font-semibold">Total NOK</p>
              <p className="font-semibold">4395,-</p>
            </div>
            <p className="mt-4 text-sky-600 underline">
              Got a gift card or a promotional code?
            </p>
            <button className="text-white bg-blue-500 w-full text-center mt-6 rounded-3xl px-4 py-3 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-600">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card1;
