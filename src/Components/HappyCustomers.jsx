import React from "react";
import { FaStar } from "react-icons/fa";
import '../Styles/HappyCustomers.css';

const reviews = [
  {
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from Shopco. Every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shopco. Their range of options is remarkable.",
  },
  {
    name: "James L.",
    text: "As someone always on the lookout for unique fashion pieces, I'm thrilled to have found Shopco. The collection is stylish and on-trend.",
  },
  {
    name: "James L.",
    text: "As someone always on the lookout for unique fashion pieces, I'm thrilled to have found Shopco. The collection is stylish and on-trend.",
  },
  {
    name: "James L.",
    text: "As someone always on the lookout for unique fashion pieces, I'm thrilled to have found Shopco. The collection is stylish and on-trend.",
  },
  {
    name: "James L.",
    text: "As someone always on the lookout for unique fashion pieces, I'm thrilled to have found Shopco. The collection is stylish and on-trend.",
  },
];

const HappyCustomers = () => {

  const scroll = (direction) => {
    const container = document.getElementById("reviewsContainer");
    const scrollAmount = 300;
    if (direction === "left") container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    else container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="HappyCustomers text-center relative max-w-10/12">
      <h2 className="text-2xl md:text-3xl font-extrabold ">
        OUR HAPPY CUSTOMERS
      </h2>

      {/* الأسهم */}
      <button 
        className="arrow-btn left-3 absolute top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full z-10"
        onClick={() => scroll("left")}
      >
        &#8592;
      </button>

      <div
        id="reviewsContainer"
        className="reviewsContainer flex gap-6 overflow-x-auto scroll-smooth  no-scrollbar justify-start"
      >
        {reviews.map((r, i) => (
          <div
            key={i}
            className="review bg-white shadow-lg rounded-2xl min-w-[300px] text-left hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="stars flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="font-bold">{r.name}</p>
            <p className="rtext text-gray-600 text-sm">{r.text}</p>
          </div>
        ))}
      </div>

      <button 
        className="arrow-btn right-3 absolute top-1/2 -translate-y-1/2 bg-black text-white  rounded-full z-10"
        onClick={() => scroll("right")}
      >
        &#8594;
      </button>
    </section>
  );
};

export default HappyCustomers;
