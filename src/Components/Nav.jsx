// Nav.js
import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import '../Styles/Nav.css'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu
  const [searchOpenMobile, setSearchOpenMobile] = useState(false); // mobile search toggle
  const mobileSearchRef = useRef(null);

  // إغلاق search على الموبايل عند الضغط خارجها
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        searchOpenMobile &&
        mobileSearchRef.current &&
        !mobileSearchRef.current.contains(e.target)
      ) {
        setSearchOpenMobile(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [searchOpenMobile]);

  return (
    <nav className="naving  bg-white ">
      <div className="">
        {/* main row */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* left: hamburger (mobile) + logo */}
          <div className="flex items-center gap-4">
            {/* hamburger for mobile */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen((s) => !s)}
              aria-label="toggle menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* logo */}
            <h1 className="navlogo flex-1 font-bold text-2xl tracking-wide">SHOP.CO</h1>
          </div>

          {/* center links (desktop only) */}
          <div className="hidden md:flex items-center gap-8 flex-2">
            <select className="navselect  ">
              <option>Shop</option>
              <option>Men</option>
              <option>Women</option>
              <option>Children</option>
            </select>

            <a href="/products" className="hover:text-gray-700">On Sale</a>
            <a href="/about" className="hover:text-gray-700">New Arrivals</a>
            <a href="/contact" className="hover:text-gray-700">Brands</a>
          </div>

          {/* right icons */}
          <div className="flex items-center gap-4  ">
            {/* DESKTOP: show input + icon */}
            <div className="hidden md:flex items-center gap-2">
              <div className="relative navsearch">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className=" rounded-md bg-gray-100 border border-gray-200 focus:outline-none"
                />
                <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-gray-600" />
              </div>
            </div>

            {/* MOBILE: only icon visible (md:hidden). clicking toggles input overlay */}
            <div className="md:hidden flex items-center">
              <button
                className="text-2xl"
                onClick={(e) => {
                  e.stopPropagation();
                  setSearchOpenMobile((s) => !s);
                }}
                aria-label="toggle search"
              >
                <FaSearch />
              </button>
            </div>

            {/* cart & user icons always visible */}
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-2xl cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faCircleUser}
              className="text-2xl cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Mobile search input (appears as overlay just under nav when searchOpenMobile true) */}
      <div
        ref={mobileSearchRef}
        className={`md:hidden w-full bg-white transition-all duration-300 overflow-hidden ${
          searchOpenMobile ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="w-11/12 mx-auto py-3">
          <input
            type="text"
            placeholder="Search for products..."
            autoFocus={searchOpenMobile}
            className="w-full py-2 pl-3 pr-3 rounded-md bg-gray-100 border border-gray-200 focus:outline-none"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                console.log("Search keyword:", e.currentTarget.value);
                // setSearchOpenMobile(false);
              }
            }}
          />
        </div>
      </div>

      {/* Mobile menu dropdown (slide) */}
      <div
        className={`md:hidden bg-white w-full transition-[max-height,opacity] duration-400 ease-in-out overflow-hidden shadow-md ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="w-11/12 mx-auto py-4 flex flex-col gap-3">
          <select className="w-full border rounded-md p-2">
            <option>Shop</option>
            <option>Men</option>
            <option>Women</option>
            <option>Children</option>
          </select>
          <a href="/products" className="py-2">On Sale</a>
          <a href="/about" className="py-2">New Arrivals</a>
          <a href="/contact" className="py-2">Brands</a>
        </div>
      </div>
    </nav>
  );
}
