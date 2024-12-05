import React from "react";
import doctorImage from "@/assets/doctor.webp"
const HomeVisit = () => {
   return (
      <section className=" bg-[#ffffff] rounded-t-[24px] pt-10 mb-24">
         <div className="main-container flex items-center flex-col-reverse lg:flex-row gap-10">

            <div className="w-full pb-10 flex flex-col justify-center tex lg:text-start">
               <div><p className="text-title text-[32px] mb-4">Do you need any expert suggestion about your health condition?
               </p>
                  <p className="text-des text-[20px] font-normal ">We have a dedicated team of experienced doctors to give you suggestion when you are at a critical health condition or you are confused.</p></div>

               <div>
                  <button className="mt-10 primary-btn max-w-sm">
                     Request for suggestion
                  </button>
               </div>
            </div>
            <div className="w-full pe-10 lg:pe-0">
               <img src={doctorImage} alt="" className="" />
            </div>

         </div>
      </section>
   );
};

export default HomeVisit;
