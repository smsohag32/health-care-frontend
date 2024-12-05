import SearchBox from '@/components/SearchBox/SearchBox';
import React from 'react';
import SideFilter from './RightSide';
import Doctors from './Doctors';

const FindDoctors = () => {
   return (
      <div className='main-container pb-10  relative z-10'>
         <div className=''>
            <SearchBox />
         </div>

         <div className='grid mt-6 lg:grid-cols-6 gap-6'>
            <div className=' lg:col-span-4 relative min-h-screen  '>
               <Doctors />
            </div>
            <div className='w-full lg:col-span-2'>
               <SideFilter />
            </div>
         </div>
      </div>
   );
};

export default FindDoctors;
