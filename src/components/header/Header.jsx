import React, { useState, useEffect } from 'react';
import logo from "@/assets/logo/logo.webp";
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Header = () => {
   const [isScrolled, setIsScrolled] = useState(false);

   const navItems = [
      { name: 'Home', path: '/' },
      { name: 'Find Doctors', path: '/find-doctors' },
      { name: 'Find Ambulance', path: '/find-ambulance' },
      { name: 'Find Hospital', path: '/find-hospital' },
   ];

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 50);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <div
         className={`fixed right-0 left-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
            }`}
      >
         <nav className='main-container flex items-center justify-between'>
            <div className='flex z-50 items-center lg:gap-16'>
               <Link to={'/'}>
                  <img className='w-[150px] lg:w-[180px]' src={logo} alt="logo" />
               </Link>
            </div>

            <div className='hidden lg:flex items-center gap-8'>
               <div className='hidden lg:flex items-center gap-6'>
                  {navItems.map(({ name, path }) => (
                     <NavLink
                        key={path}
                        to={path}
                        className={({ isActive }) =>
                           `py-4 relative transition-all text-base  duration-300 font-medium ${isActive ? 'text-skyblue ' : 'text-title'}`
                        }
                     >
                        {name}
                     </NavLink>
                  ))}
               </div>
            </div>

            <div className='lg:hidden z-50 block'>
               <button>
                  <Menu />
               </button>
            </div>
         </nav>
      </div>
   );
};

export default Header;
