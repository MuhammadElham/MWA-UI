import React from "react";
import prd1 from "../assets/Component 2-images/product1-removebg.png";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Product = () => {
  return (
    <>
      <div className="main_container flex justify-center items-center w-full min-h-screen bg-gradient-to-r from-sky-200 to-blue-400">
        {/* Card container */}
        <div className="container w-full max-w-[90%] sm:max-w-[1250px] py-[30px] px-[25px] sm:py-[50px] sm:px-[45px] rounded-3xl border-none shadow-md bg-white">
          <div className="part_a">
            <h1 className="text-center md:text-left text-3xl font-bold ">
              <span className="underline decoration-red-400 decoration-[8px] underline-offset-8">
                Sh
              </span>
              opping Cart
            </h1>
          </div>
          {/* Details Section */}
          <div className="part_b hidden md:grid grid-cols-4 font-normal text-gray-500 pb-5 border-b my-8">
            <p>Product </p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total Price</p>
          </div>
          {/* Items Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 items-center my-8 md:my-0 gap-4 md:gap-0">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left justify-center md:justify-start">
              <img src={prd1} className="md:w-16 md:h-16" />
              <div>
                <p className="text-[24px] md:text-[16px]">Ruffled Tulle Top</p>
                <p className="text-[20px] md:text-[16px] text-gray-400">
                  Size: M
                </p>
              </div>
            </div>
            <p className="text-center md:text-left text-[22px] md:text-[16px]">
              $24.99
            </p>

            <div className="flex justify-center items-center border-[1px] rounded-3xl py-1 px-2 border-gray-400 mx-auto md:mx-0 md:w-fit">
              <FaMinus className="text-gray-400" />
              <p className="px-3 font-semibold">2</p>
              <FaPlus className="text-gray-400" />
            </div>

            <p className="text-center md:text-left text-[22px] md:text-[16px]">
              $49.98
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
