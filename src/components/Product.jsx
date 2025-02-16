import React from "react";

const Product = () => {
  return (
    <>
      <div className="main_container flex justify-center items-center w-full min-h-screen bg-gradient-to-r from-sky-200 to-blue-400">
        {/* Card container */}
        <div className="container w-full max-w-[90%] sm:max-w-[500px] py-[30px] px-[25px] sm:py-[50px] sm:px-[45px] rounded-3xl border-none shadow-md bg-white">
          <div className="part_a">
            <h1 className="text-3xl font-bold ">
              <span className="underline decoration-red-400 decoration-[8px] underline-offset-8">
                Sh
              </span>
              opping Cart
            </h1>
          </div>
          <div className="part_b"></div>
        </div>
      </div>
    </>
  );
};

export default Product;
