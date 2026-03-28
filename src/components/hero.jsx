import React from "react";
import hero from "../assets/hero.jpg"
import Label1 from "./label1";

function Hero (){
    return(

        <>
        <div
  className="h-screen w-full bg-cover bg-center relative"
  style={{ backgroundImage: `url(${hero})` }}
>
 
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

    <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
      Shaping the Future of <br />
      <span className="text-[#FF5400]">Logistics</span>
    </h2>

    <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl font-medium">
      At Kappal, we’re combining advanced technology and logistical solutions
      to streamline your shipping journey like never before.
    </p>

    <div className="flex gap-6">
      <button className="bg-[#FF5400] hover:bg-[#f66922] text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-orange-500/50 hover:scale-105 transition cursor-pointer">
        SUBSCRIBE NOW
      </button>

      <button className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition cursor-pointer">
        OUR SOLUTION
      </button>
    </div>

  </div>
  
</div>
<Label1/>


   </>
    );
}
export default Hero