import React from 'react';
import { Separator } from '../ui/separator';

import logo from "@/assets/icons/logo.png";
import { Link } from 'react-router-dom';
const Footer = () => {
   return (
      <footer className='bg-slate-800 pt-12 pb-8 text-[#ffffff]'>
         <div className='main-container grid grid-cols-1 items-start md:grid-cols-3 gap-8'>
            {/* About Us */}
            <div>
               <div className='flex z-50 items-center lg:gap-16'>
                  <Link to={'/'} className='flex items-center gap-2'>
                     <img className=' max-w-[35px]' src={logo} alt="logo" />
                     <p className='text-white text-[20px]'>HEALTH CARE</p>
                  </Link>
               </div>

               <p className='text-base font-normal text-gray-400 mt-4'>
                  HealthCare is a comprehensive hospital management system designed to
                  streamline operations, improve patient care, and enhance communication between
                  patients, doctors, and administrators. From appointment scheduling to administrative
                  control, HealthCare empowers hospitals with seamless efficiency.
               </p>
            </div>

            {/* Quick Links */}
            <div>
               <h3 className='text-lg font-medium mb-4'>Quick Links</h3>
               <ul className='space-y-2'>
                  <li><a href='#' className='hover:underline text-gray-400 hover:text-gray-100'>Home</a></li>
                  <li><a href='#' className='hover:underline text-gray-400 hover:text-gray-100'>Appointment Scheduling</a></li>
                  <li><a href='#' className='hover:underline text-gray-400 hover:text-gray-100'>Doctor Portal</a></li>
                  <li><a href='#' className='hover:underline text-gray-400 hover:text-gray-100'>Admin Control</a></li>
                  <li><a href='#' className='hover:underline text-gray-400 hover:text-gray-100'>Contact Us</a></li>
               </ul>
            </div>

            {/* Contact Information */}
            <div>
               <h3 className='text-lg font-medium mb-4'>Contact Us</h3>
               <p className='text-gray-100'>
                  <span className='block mb-2 text-gray-400 '>Phone: 999</span>
                  <span className='block mb-2 text-gray-400 '>Email: support@healthcare.com</span>
                  <span className='block mb-2 text-gray-400 '>Address: 1234 Hospital St, City, State</span>
               </p>
            </div>
         </div>

         <div className='main-container'>
            <Separator className="opacity-20 my-4" />
            <div className='flex justify-between items-center text-100 text-sm'>
               <p>© {new Date().getFullYear()} HealthCare. All rights reserved.</p>
               <p>
                  <a href='#' className='hover:underline pe-2 text-gray-400 '>Privacy Policy</a> |
                  <a href='#' className='hover:underline ml-2 text-gray-400'>Terms of Service</a>
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
