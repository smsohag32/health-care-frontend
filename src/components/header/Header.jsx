import React, { useState } from 'react';
import logo from "@/assets/logo/logo.webp";
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   const closeMenu = () => {
      setIsMenuOpen(false);
   };

   return (
      <div className='w-full '>
         <div className='py-4 sticky top-0 right-0 left-0 z-50 border-[0.5px] bg-opacity-90 body-bg border-b-gray-200'>
            <nav className='main-container  flex items-center justify-between'>
               <div className='flex z-50 items-center lg:gap-16'>
                  <Link to={'/'}>
                     <img className='w-[150px] lg:w-[180px]' src={logo} alt="logo" />
                  </Link>

                  {/* large device*/}
                  <div className='hidden lg:flex items-center gap-6'>
                     <NavLink
                        to="/find-doctors"
                        className={({ isActive }) =>
                           isActive ? 'text-blue-600 font-semibold' : 'text-gray-600'
                        }
                     >
                        Find Doctors
                     </NavLink>
                     <NavLink
                        to="/find-hospital"
                        className={({ isActive }) =>
                           isActive ? 'text-blue-600 font-semibold' : 'text-gray-600'
                        }
                     >
                        Find Hospital
                     </NavLink>
                     <NavLink
                        to="/find-ambulance"
                        className={({ isActive }) =>
                           isActive ? 'text-blue-600 font-semibold' : 'text-gray-600'
                        }
                     >
                        Find Ambulance
                     </NavLink>
                  </div>
               </div>
               {/* user authentication  */}
               <div className='hidden lg:block'>
                  <Link className='primary-btn !py-3' to={'/auth/login'}>Login / Register</Link>
               </div>


               {/* toggle button */}

               <div className='lg:hidden z-50 block'>
                  <button onClick={toggleMenu} className='title-text'><svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M3 12H21M3 6H21M9 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  </button>
               </div>
               {/* small device  */}


               <div className={`lg:hidden border pt-20 mt-[80px] fixed inset-0 body-bg p-6 z-40 w-full flex flex-col items-center gap-6 overflow-hidden transition-transform duration-500  ease-in-out ${isMenuOpen ? 'transform duration-500 translate-y-0  opacity-100' : 'transform -translate-y-full opacity-0'}`}>
                  <NavLink
                     to="/find-doctors"
                     onClick={closeMenu}
                     className={({ isActive }) =>
                        isActive ? 'text-blue-600 font-semibold' : 'text-gray-600'
                     }
                  >
                     Find Doctors
                  </NavLink>
                  <NavLink
                     to="/find-hospital"
                     onClick={closeMenu}
                     className={({ isActive }) =>
                        isActive ? 'text-blue-600 font-semibold' : 'text-gray-600'
                     }
                  >
                     Find Hospital
                  </NavLink>
                  <NavLink
                     to="/find-ambulance"
                     onClick={closeMenu}
                     className={({ isActive }) =>
                        isActive ? 'text-blue-600 font-semibold' : 'text-gray-600'
                     }
                  >
                     Find Ambulance
                  </NavLink>

                  {/* user authentication  */}
                  <div className='lg:hidden mt-10'>
                     <Link onClick={closeMenu} className='outline-btn' to={'/auth/login'}>Login / Register</Link>
                  </div>
               </div>

            </nav>
         </div>
      </div>
   );
};

export default Header;
