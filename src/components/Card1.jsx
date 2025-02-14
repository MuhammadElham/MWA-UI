import React from "react";
import product_1 from "../assets/Component 1/product-1.jpg";
import { FaMinus, FaPlus } from "react-icons/fa";

const Card1 = () => {
  return (
    <>
      <div className="main_container flex justify-center items-center w-full h-screen">
        <div className="container w-full max-w-[500px] p-[20px] rounded-lg border-none shadow-md">
          <div className="part_1">
            <h2 className="font-bold text-2xl">Your shopping cart</h2>
            <p className="text-base">ID: 548856</p>
          </div>

          <div className="part_2 md:flex items-center gap-8">
            <div className="product1_img flex justify-center items-center my-6">
              <img
                className="w-[220px] md:h-[130px]"
                src={product_1}
              />
            </div>
            <div>
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
          <div className="part_3"></div>
        </div>
      </div>
    </>
  );
};

export default Card1;
