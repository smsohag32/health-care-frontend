import SectionTitle from '@/components/titles/SectionTitle';
import React from 'react';
import { motion } from 'framer-motion'
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';
const doctors = [

   {
      name: "Medicine Specialist",
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a2.5 2.5 0 100 5h-6a2.5 2.5 0 100-5H8V9.5A1.5 1.5 0 019.5 8h5A1.5 1.5 0 0116 9.5V12h-1zM5 8h14v1H5V8zm0 10h14v1H5v-1z" />
         </svg>
      ),
   },
   {
      name: "Cardiologist",
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
         </svg>
      ),
   },
   {
      name: "Pediatrician",
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 6.5a2 2 0 11-4 0 2 2 0 014 0zM12 14.25a4.5 4.5 0 014.5-4.5h3a4.5 4.5 0 014.5 4.5v3a4.5 4.5 0 01-4.5 4.5h-3a4.5 4.5 0 01-4.5-4.5v-3zM6 9a3 3 0 100-6 3 3 0 000 6zM6 12a6 6 0 00-6 6v4.5A1.5 1.5 0 001.5 24h9A1.5 1.5 0 0012 22.5V18a6 6 0 00-6-6z" />
         </svg>
      ),
   },
   {
      name: "General Surgeon",
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5V3a1.5 1.5 0 00-3 0v1.5m3 0a3 3 0 01-6 0M9 4.5h6M9 4.5V21m6-16.5V21M3 11.5v4M21 11.5v4M3 13.5h18m-6 4H9m0 0v2m6-2v2" />
         </svg>
      ),
   },
   {
      name: "Dental Surgeon",
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5V3a1.5 1.5 0 00-3 0v1.5m3 0a3 3 0 01-6 0M9 4.5h6M9 4.5V21m6-16.5V21M3 11.5v4M21 11.5v4M3 13.5h18m-6 4H9m0 0v2m6-2v2" />
         </svg>
      ),
   },
   {
      name: "Otolaryngologists (ENT)",
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.5a4.5 4.5 0 00-9 0v1.25h9V8.5zM8 8.5a3.5 3.5 0 017 0v1.25h-7V8.5zM12 21v-4.5m-6.5-6v-2A6.5 6.5 0 0112 2.5a6.5 6.5 0 016.5 6.5v2m-13 0v6.5A2.5 2.5 0 007.5 21H12M12 21h4.5a2.5 2.5 0 002.5-2.5V10.5h-13z" />
         </svg>
      ),
   },
];

const TopSpecialized = () => {
   return (
      <div className='main-container mb-20'>
         <div className='flex items-center flex-col justify-between lg:flex-row gap-6'>
            <SectionTitle title={"Consult our top specialized doctors"} description={"Our doctors are ready to serve you 24/7"} />
            <button className='title-text font-semibold flex items-center'>
               View all
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </button>
         </div>

         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
            {doctors.map((doctor, index) => (
               <motion.div
                  key={index}
                  className="bg-white p-6 rounded-sm border hover:shadow-none transition-shadow duration-300 flex flex-col items-center"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
               >
                  <div className="flex items-center flex-col justify-center w-full">
                     <div className="text-4xl bg-bluelight text-primary p-6 rounded-full mb-4">
                        {doctor.icon || <User className="w-8 h-8" />}
                     </div>
                     <h3 className="text-xl font-semibold text-gray-800 mb-2">{doctor.name}</h3>
                     <p className="text-sm text-gray-600">{doctor.specialty}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-center text-center w-full">
                     <Link to={"/find-doctors"} className="rounded-[4px] w-full text-center justify-center font-normal border-[#fffff] border text-sm flex bg-primaryBlue px-4 py-2 text-white items-center gap-2">
                        Book Appointment
                     </Link>
                  </div>
               </motion.div>
            ))}
         </div>
      </div>
   );
};

export default TopSpecialized;
