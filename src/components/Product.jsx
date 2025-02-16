import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Product = ({ image, name, size, price, quantity, totalPrice }) => {
  return (
    <>
      {/* Items Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 items-center my-8 md:my-7 gap-4 md:gap-0">
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left justify-center md:justify-start">
          <img src={image} className="md:w-16 md:h-16" />
          <div>
            <p className="text-[24px] md:text-[16px]">{name}</p>
            <p className="text-[20px] md:text-[16px] text-gray-400">
              Size: {size}
            </p>
          </div>
        </div>
        <p className="text-center md:text-left text-[22px] md:text-[16px]">
          ${price}
        </p>

        <div className="flex justify-center items-center border-[1px] rounded-3xl py-1 px-2 border-gray-400 mx-auto md:mx-0 md:w-fit">
          <FaMinus className="text-gray-400 cursor-pointer" />
          <p className="px-3 font-semibold">{quantity}</p>
          <FaPlus className="text-gray-400 cursor-pointer" />
        </div>

        <p className="text-center md:text-left text-[22px] md:text-[16px]">
          ${totalPrice}
        </p>
      </div>
    </>
  );
};

export default Product;
