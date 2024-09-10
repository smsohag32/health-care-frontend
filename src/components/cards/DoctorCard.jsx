import React from 'react';
import doctorImage from "@/assets/doctors/doctor_2.jpg"
const DoctorCard = ({ doctor }) => {
   return (
      <div className='primary-shadow  relative rounded-[8px] bg-white p-6'>
         <div className='flex gap-6 items-start'>
            <div className='w-32 h-28 '>
               <img src={doctorImage} className='w-32 h-28 rounded-[8px] object-cover' alt="doctor" />
            </div>
            <div>
               <h2 className='text-[20px] font-medium text-gray-800'>Dr. Tahmina Begum</h2>
               <p className='des-text max-w-sm font-normal text-base'>MBBSBCS (Health)
                  MPhil (Pathology). Pathologist Years of Experience: Coming Soon</p>
               <p className='title-text'>Years of Experience : <span>2 Years</span></p>


               <div className='flex flex-col lg:flex-row gap-6 items-start'>
                  <div className='w-full'>
                     <p className='text-gray-800'>Unity Aid Hospital Ltd.</p>
                     <p className='des-text text-base font-normal mt-5'>House #16, Road # 2, Dhanmondi R/A, 6, Dhanmondi, Dhaka-1205, Bangladesh</p>
                  </div>

                  <div className='w-full'>
                     <p>Availability</p>
                     <p className='mt-5'>Sat</p>
                  </div>
               </div>
            </div>
         </div>

         {/* expertise */}
         <div>

         </div>
         <button className='absolute right-0 py-2 flex items-center justify-center px-5 secondary-bg top-0'>Available Call</button>

         <hr />

         <div className='py-3 flex justify-end items-center'>
            <div className='flex items-center gap-2'>
               <p className='des-text text-base'>Book appointment for</p>
            </div>
            <button className='outline-btn max-w-[180px]'>Book appointment</button>
         </div>
      </div>
   );
};

export default DoctorCard;
