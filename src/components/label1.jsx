import React from "react";
import person from '../assets/person.png'
import home from '../assets/home.png'
import location from '../assets/location.png'
import dervily from '../assets/package.png'

function Label1 (){
return(
    <div className="h-95 ">
        <div className="text-center mt-40 ">
            <h2 className="font-bold text-4xl">Fast. Flexible. Future-Ready.</h2>
            <div className="flex gap-50 justify-center mt-30 ">
                <div className="flex flex-col gap-1 justify-items-center ">
                    <img src={dervily} alt="" className="w-25 h-20 ml-7 "/>
                    <h3 className="text-2xl font-bold ">1 Billion+</h3>
                    <p className="text-1xl opacity-45 font-bold">Parcels Delivered</p>
                </div>
                <div  className="flex flex-col gap-1 justify-items-center">
                    <img src={person} alt="" className="w-25 h-20 ml-12 "/>
                    <h3 className="text-2xl font-bold ">2.5 Lakhs+</h3>
                    <p className="text-1xl opacity-45 font-bold">Quarterly Delivery Partners</p>
                </div>
                <div  className="flex flex-col gap-1 justify-items-center">
                    <img src={home} alt="" className="w-25 h-20 ml-16 " />
                    <h3 className="text-2xl font-bold ">4.5 Million+</h3>
                    <p className="text-1xl opacity-45 font-bold">Sq. Ft. of OPERATIONAL SPACE</p>
                </div>
                <div  className="flex flex-col gap-1 justify-items-center mt-1">
                    <img src={location} alt="" className="w-25 h-20 ml-2 " />
                    <h3 className="text-2xl font-bold ">15,100+</h3>
                    <p className="text-1xl opacity-45 font-bold">PIN Codes</p>
                </div>
            </div>
        </div>

    </div>
)
}

export default Label1