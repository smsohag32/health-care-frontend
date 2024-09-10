import SearchBox from '@/components/SearchBox/SearchBox';
import React from 'react';

const FindDoctors = () => {
   return (
      <div className='main-container'>



         <div className='py-16'>
            <SearchBox />
         </div>

         <div className='grid lg:grid-cols-6 gap-6'>
            <div className='primary-shadow primary-shadow min-h-[50vh] border bg-blue-50 rounded-[8px] lg:col-span-2'>

            </div>

            <div className=' lg:col-span-4 min-h-screen  '>

            </div>
         </div>
      </div>
   );
};

export default FindDoctors;
