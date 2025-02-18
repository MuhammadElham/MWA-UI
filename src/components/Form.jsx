import React from "react";

const Form = () => {
  return (
    <div className="main-container flex items-center justify-center w-full min-h-screen bg-gradient-to-r from-sky-200 to-blue-400 p-4">
      <div className="container w-full max-w-[500px] sm:max-w-[1250px] py-8 px-6 sm:px-12 bg-white rounded-3xl shadow-lg">
        {/* 1 */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <label htmlFor="name" className="font-semibold text-gray-700">
          Product Name:
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter product name"
            className="border border-sky-400 rounded-md outline-none py-2 px-3 w-full sm:w-auto"
          />
        </div>
        {/* 2 */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <label htmlFor="name" className="font-semibold text-gray-700">
          Product Description:
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter product description "
            className="border border-sky-400 rounded-md outline-none py-2 px-3 w-full sm:w-auto"
          />
        </div>
        {/* 3 */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <label htmlFor="name" className="font-semibold text-gray-700">
            Product Price:
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter product price"
            className="border border-sky-400 rounded-md outline-none py-2 px-3 w-full sm:w-auto"
          />
        </div>
        {/* 4 */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <label htmlFor="name" className="font-semibold text-gray-700">
            Product Category :
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter product category "
            className="border border-sky-400 rounded-md outline-none py-2 px-3 w-full sm:w-auto"
          />
        </div>
        {/* 5 */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <label htmlFor="name" className="font-semibold text-gray-700">
            Product Stock:
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter product stock"
            className="border border-sky-400 rounded-md outline-none py-2 px-3 w-full sm:w-auto"
          />
        </div>
        {/* 6 */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <label htmlFor="name" className="font-semibold text-gray-700">
            Product Image:
          </label>
          <input
            type="image"
            id="name"
            placeholder="Enter product image"
            className="border border-sky-400 rounded-md outline-none py-2 px-3 w-full sm:w-auto"
          />
        </div>
        {/* 3 */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <label htmlFor="name" className="font-semibold text-gray-700">
            Product Price:
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter product price"
            className="border border-sky-400 rounded-md outline-none py-2 px-3 w-full sm:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
