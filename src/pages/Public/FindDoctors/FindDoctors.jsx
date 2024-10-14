import SearchBox from '@/components/SearchBox/SearchBox';
import React from 'react';
import SideFilter from './SideFilter';
import Doctors from './Doctors';

const FindDoctors = () => {
   return (
      <div className='main-container pb-10 relative'>



         <div className='py-10 sticky top-0'>
            <SearchBox />
         </div>

         <div className='grid lg:grid-cols-6 gap-6'>

            <div className='w-full lg:col-span-2'>
               <SideFilter />
            </div>

            <div className=' lg:col-span-4 min-h-screen  '>
               <Doctors />
            </div>
         </div>
      </div>
   );
};

export default FindDoctors;
