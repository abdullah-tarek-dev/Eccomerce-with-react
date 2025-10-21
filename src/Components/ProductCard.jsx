import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import '../Styles/ProductCard.css';

const ProductCard = ({ product }) => {
  // دالة تعرض النجوم حسب التقييم
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) stars.push(<FaStar key={i} className="text-yellow-400" />);
      else if (rating >= i - 0.5)
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      else stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
    return stars;
  };

  return (
    <div className="productcard bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-all  w-[260px]">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="rounded-xl w-full h-52 object-cover"
      />
      <h3 className=" font-semibold text-gray-800 text-sm truncate">
        {product.title}
      </h3>

      <div className="rating flex items-center text-sm ">
        <div className="flex">{renderStars(product.rating)}</div>
        <span className="text-gray-500  text-xs">{product.rating}</span>
      </div>

      <p className=" font-bold text-lg">${product.price}</p>
    </div>
  );
};

export default ProductCard;
