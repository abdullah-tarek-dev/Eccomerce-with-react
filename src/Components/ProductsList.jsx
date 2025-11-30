import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import '../Styles/productlist.css';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8); 

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 4); 
  };

  return (
    <div className="productlistcontainer flex flex-col items-center bg-white">
      <div className="productlist flex flex-wrap justify-center gap-6">
        {products.slice(0, visibleCount).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {visibleCount < products.length && (
        <button
          onClick={handleViewMore}
          className=" bg-white text-black border-2 border-black rounded-full  hover:bg-black hover:text-white transition-all cursor-pointer"
        >
          View More
        </button>
      )}
    </div>
  );
};

export default ProductsList;
