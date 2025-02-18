import Product from "./components/Product";
import prd1 from "./assets/Component 2-images/product1-removebg.png";
import prd2 from "./assets/Component 2-images/handBag-removebg.png";
import prd3 from "./assets/Component 2-images/Sandle-removebg-preview.png";

const products = [
  {
    id: 1,
    image: prd1,
    name: "Ruffled Tulle Top",
    size: "M",
    price: 24.99,
    quantity: 2,
    totalPrice: 54.99,
  },
  {
    id: 2,
    image: prd2,
    name: "Quilted Crossbody Bag",
    size: "S",
    price: 47.99,
    quantity: 1,
    totalPrice:85.21,
  },
  {
    id: 3,
    image: prd3,
    name: "Heel Sandal",
    size: "S",
    price: 79.71,
    quantity: 3,
    totalPrice: 106.99,
  },
];
function App() {
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
          {products.map((item) => (
            <Product
              key={item.id}
              image={item.image}
              name={item.name}
              size={item.size}
              price={item.price}
              quantity={item.quantity}
              totalPrice={item.totalPrice}
            />
          ))}
        </div>
      </div>
      elham
    </>
  );
}

export default App;
