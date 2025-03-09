import React, { useState, useEffect } from 'react';
import logo from "@/assets/icons/logo.png";
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import HeaderLoginModal from './HeaderLoginModal';

const Header = () => {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

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
         className={`fixed right-0 left-0 top-0 py-2 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm border border-b-slate-100' : 'bg-transparent'
            }`}
      >
         <nav className='main-container flex items-center justify-between'>
            <div className='flex z-50 items-center lg:gap-16'>
               <Link to={'/'} className='flex items-center gap-2'>
                  <img className=' max-w-[35px]' src={logo} alt="logo" />
                  <p className='text-title text-[20px]'>HEALTH CARE</p>
               </Link>
            </div>

            <div className='hidden lg:flex items-center gap-8'>
               <div className='hidden lg:flex items-center gap-6'>
                  {navItems.map(({ name, path }) => (
                     <NavLink
                        key={path}
                        to={path}
                        className={({ isActive }) =>
                           `py-3 relative transition-all text-base  duration-300 font-medium ${isActive ? 'text-primaryBlue ' : 'text-title'}`
                        }
                     >
                        {name}
                     </NavLink>
                  ))}
                  <button
                     onClick={() => setIsLoginModalOpen(true)}
                     className="rounded-[4px] font-normal border-[#fffff] border text-base flex bg-primaryBlue px-4 py-2 text-white items-center gap-2 hover:bg-primaryBlue/90 transition-colors"
                  >
                     Sign in
                  </button>
                  {/* <Link to={"https://healthcare-administrator.web.app/"} className="rounded-[4px] font-normal border-[#fffff] border text-base flex bg-primaryBlue px-4 py-2 text-white items-center gap-2">Sing in</Link> */}
               </div>
            </div>

            <div className='lg:hidden z-50 block'>
               <button>
                  <Menu />
               </button>
            </div>
         </nav>
         <HeaderLoginModal isOpen={isLoginModalOpen} onClose={setIsLoginModalOpen} />
      </div>
   );
};

export default Header;
