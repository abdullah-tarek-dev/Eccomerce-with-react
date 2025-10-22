import React from "react";
import "../Styles/DressStyle.css";

const dressStyles = [
  {
    title: "Casual",
    img: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Formal",
img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Party",
img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Gym",
img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=900&q=80"
  },
];

const DressStyle = () => {
  return (
    <section className="DressStyle bg-gray-100 rounded-3xl text-center w-3/4">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide ">
        BROWSE BY DRESS STYLE
      </h2>

      <div className="collectrow flex flex-col md:grid md:grid-cols-3  gap-6 ">
        {/* الصف الأول */}
        <div className="md:col-span-1 ">
          <Card {...dressStyles[0]} height="h-64" />
        </div>

        <div className="md:col-span-2">
          <Card {...dressStyles[1]} height="h-64" />
        </div>

        {/* الصف الثاني */}
        <div className="md:col-span-2">
          <Card {...dressStyles[2]} height="h-64" />
        </div>

        <div className="md:col-span-1">
          <Card {...dressStyles[3]} height="h-64" />
        </div>
      </div>
    </section>
  );
};

const Card = ({ title, img, height }) => (
  <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-transform duration-300 cursor-pointer group">
    <img
      src={img}
      alt={title}
      className={`w-full ${height} object-cover group-hover:scale-105 transition-transform duration-500`}
    />
    <h3 className="absolute top-3 left-4 text-lg font-bold bg-white/80 px-4 py-1 rounded-md shadow-sm">
      {title}
    </h3>
  </div>
);

export default DressStyle;
