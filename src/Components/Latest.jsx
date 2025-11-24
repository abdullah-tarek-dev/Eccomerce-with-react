import React from 'react'
import '../Styles/Latest.css'

function Latest() {
  return (
    <section className="sectionlatest w-full flex justify-center">
      <div className="divone bg-black text-white rounded-3xl w-11/12 md:w-10/12 lg:w-8/12  flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Text */}
        <h2 className="text-3xl md:text-4xl font-extrabold leading-snug text-center md:text-left">
          STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
        </h2>

        {/* Right Side Inputs */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full  rounded-full outline-none text-black bg-white"
          />

          <button className="w-full text-2xl bg-white text-black font-semibold  rounded-full hover:bg-black cursor-pointer hover:text-amber-50 transition border-2 border-white ">
            Subscribe to Newsletter
          </button>

        </div>

      </div>
    </section>
  )
}


export default Latest;