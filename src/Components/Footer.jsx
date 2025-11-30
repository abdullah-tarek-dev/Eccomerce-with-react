import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import '../Styles/Footer.css';

export default function Footer() {
  return (
    <footer className="bg-gray-100 ">
      <div className="container  w-11/12 lg:w-10/12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Logo + Text + Social Icons */}
          <div className="md:col-span-2">
            <h1 className="text-6xl font-bold">SHOP.CO</h1>
            <p className="text text-gray-600  leading-relaxed w-10/12">
              We have clothes that suits your style and which you're proud to wear.
              From women to men.
            </p>

            {/* Social Icons */}
            <div className=" social flex gap-4 ">
              <a className="w-10 h-10 flex items-center justify-center rounded-full border bg-white hover:bg-black hover:text-white transition cursor-pointer">
                <FaTwitter size={18} />
              </a>
              <a className="w-10 h-10 flex items-center justify-center rounded-full border bg-white  hover:bg-black hover:text-white transition cursor-pointer">
                <FaFacebookF size={18} />
              </a>
              <a className="w-10 h-10 flex items-center justify-center rounded-full border bg-white  hover:bg-black hover:text-white transition cursor-pointer">
                <FaInstagram size={18} />
              </a>
              <a className="w-10 h-10 flex items-center justify-center rounded-full border bg-white  hover:bg-black hover:text-white transition cursor-pointer">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className=" Links font-semibold text-xl">COMPANY</h3>
            <ul className="text-gray-600 space-y-2">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>

          <div>
            <h3 className="Links font-semibold text-xl">HELP</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="Links font-semibold text-xl">FAQ</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>

          <div>
            <h3 className=" Links font-semibold text-xl">RESOURCES</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <hr className="divider " />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-600">
            Shop.co © 2000-2023, All Rights Reserved
          </p>

          {/* Payment Icons */}
          <div className="flex gap-4">
            <img src="/assets/Badge (1).png" className="w-16" alt="Paypal" />
            <img src="/assets/Badge (2).png" className="w-14" alt="ApplePay" />
            <img src="/assets/Badge (3).png" className="w-14" alt="GPay" />
            <img src="/assets/Badge (4).png" className="w-14" alt="MasterCard" />
          </div>

        </div>

      </div>
    </footer>
  );
}
