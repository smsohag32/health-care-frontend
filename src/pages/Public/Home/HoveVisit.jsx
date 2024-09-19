import React from "react";
import doctorImage from "@/assets/doctor.webp"
const HomeVisit = () => {
   return (
      <section className=" bg-gradient-to-l from-blue-950 via-[#19016e] pt-10 mb-24">
         <div className="main-container flex items-center flex-col-reverse lg:flex-row gap-10">
            <div className="w-full pe-10 lg:pe-0">
               <img src={doctorImage} alt="" className="" />
            </div>
            <div className="w-full pb-10 flex flex-col justify-center tex lg:text-start">
               <div><p className="text-gray-100 text-[32px] mb-4">Do you need any expert suggestion about your health condition?
               </p>
                  <p className="text-gray-100 text-[20px] font-normal ">We have a dedicated team of experienced doctors to give you suggestion when you are at a critical health condition or you are confused.</p></div>

               <div>
                  <button className="text-white text-base hover:bg-[#1340a7] transition-all duration-300  font-medium px-12 py-4 rounded-[8px]  whitespace-nowrap primary-bg  mt-10">
                     Request for suggestion
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default HomeVisit;
