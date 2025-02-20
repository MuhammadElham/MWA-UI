import React, { useRef, useState } from "react";

const Form = () => {
  const nameRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();
  const categRef = useRef();
  const stockRef = useRef();
  const quantRef = useRef();

  const [submit, setSubmit] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const entry = {
      name: nameRef.current.value,
      description: descRef.current.value,
      price: priceRef.current.value,
      category: categRef.current.value,
      stock: stockRef.current.value,
      quantity: quantRef.current.value,
    };
    setSubmit((submit) => {
      const updateArray = [...submit, entry];
      console.log("Update Array = ", updateArray);
      return updateArray;
    });
  }

  return (
    <div className="main-container flex items-center justify-center w-full min-h-screen bg-gradient-to-r from-sky-200 to-blue-400 p-4">
      <form
        onSubmit={handleSubmit}
        className="container w-full max-w-[500px] sm:max-w-[600px] py-8 px-6 sm:px-12 bg-white rounded-3xl shadow-lg"
      >
        {/* 1 */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center gap-2 mb-2 sm:mb-4">
          <label htmlFor="name" className="font-semibold text-gray-700">
            Product Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            ref={nameRef}
            placeholder="Enter product name"
            className="border border-sky-400 rounded-md outline-none py-2 px-3 w-full flex-1"
          />
        </div>
        {/* 2 */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center gap-2 mb-2 sm:mb-4">
          <label htmlFor="name" className="font-semibold text-gray-700">
            Product Description:
          </label>
          <input
            type="text"
            id="name"
            name="description"
            ref={descRef}
            placeholder="Enter product description "
            className="border border-sky-400 rounded-md outline-none py-2 px-3 w-full flex-1"
          />
        </div>
        {/* 3 */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center gap-2 mb-2 sm:mb-4">
          <label htmlFor="name" className="font-semibold text-gray-700">
            Product Price:
          </label>
          <input
            type="text"
            id="name"
            name="price"
            ref={priceRef}
            placeholder="Enter product price"
            className="border border-sky-400 rounded-md outline-none py-2 px-3 w-full  flex-1"
          />
        </div>
        {/* 4 */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center gap-2 mb-2 sm:mb-4">
          <label htmlFor="name" className="font-semibold text-gray-700">
            Product Category :
          </label>
          <input
            type="text"
            id="name"
            name="category"
            ref={categRef}
            placeholder="Enter product category "
            className="border border-sky-400 rounded-md outline-none py-2 px-3 w-full  flex-1"
          />
        </div>
        {/* 5 */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center gap-2 mb-2 sm:mb-4">
          <label htmlFor="name" className="font-semibold text-gray-700">
            Product Stock:
          </label>
          <input
            type="text"
            id="name"
            name="stock"
            ref={stockRef}
            placeholder="Enter product stock"
            className="border border-sky-400 rounded-md outline-none py-2 px-3 w-full flex-1"
          />
        </div>
        {/* 6 */}
        {/* <div className="w-full flex flex-col sm:flex-row sm:items-center gap-2 mb-2 sm:mb-4">
          <label htmlFor="name" className="font-semibold text-gray-700">
            Product Image:
          </label>
          <input
            type="image"
            id="name"
            placeholder="Enter product image"
            className="border border-sky-400 rounded-md outline-none py-2 px-3 w-full flex-1"
          />
        </div> */}
        {/* 7 */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center gap-2 sm:mb-4">
          <label htmlFor="name" className="font-semibold text-gray-700">
            Product Quantity:
          </label>
          <input
            type="text"
            id="name"
            name="quantity"
            ref={quantRef}
            placeholder="Enter product quantity"
            className="border border-sky-400 rounded-md outline-none py-2 px-3 w-full flex-1"
          />
        </div>
        {/* Button */}
        <button className="text-lg bg-blue-400 text-white py-1 px-3 rounded hover:bg-blue-500 duration-150 mt-4 w-full sm:mt-0 sm:text-xl sm:w-auto">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
