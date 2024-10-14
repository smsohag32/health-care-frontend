import React from 'react';
import { Separator } from '../ui/separator';
import logo from "@/assets/logo/logo.webp";
const Footer = () => {
   return (
      <footer className='footer-bg pt-12 pb-8 text-white'>
         <div className='main-container grid grid-cols-1 items-start md:grid-cols-3 gap-8'>
            {/* About Us */}
            <div>
               <h2 className='text-[28px] font-medium'>HealthCare</h2>
               <p className='text-base font-normal text-gray-100 mt-4'>
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
                  <li><a href='#' className='hover:underline text-gray-300'>Home</a></li>
                  <li><a href='#' className='hover:underline text-gray-300'>Appointment Scheduling</a></li>
                  <li><a href='#' className='hover:underline text-gray-300'>Doctor Portal</a></li>
                  <li><a href='#' className='hover:underline text-gray-300'>Admin Control</a></li>
                  <li><a href='#' className='hover:underline text-gray-300'>Contact Us</a></li>
               </ul>
            </div>

            {/* Contact Information */}
            <div>
               <h3 className='text-lg font-medium mb-4'>Contact Us</h3>
               <p className='text-gray-300'>
                  <span className='block mb-2'>Phone: (123) 456-7890</span>
                  <span className='block mb-2'>Email: support@healthcare.com</span>
                  <span className='block mb-2'>Address: 1234 Hospital St, City, State</span>
               </p>
            </div>
         </div>

         {/* Bottom Section */}
         <div className='main-container'>
            <Separator className="my-4" />
            <div className='flex justify-between items-center text-gray-200 text-sm'>
               <p>© {new Date().getFullYear()} HealthCare. All rights reserved.</p>
               <p>
                  <a href='#' className='hover:underline pe-2 '>Privacy Policy</a> |
                  <a href='#' className='hover:underline ml-2'>Terms of Service</a>
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
