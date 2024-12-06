import React from 'react';

const SectionTitle = ({ title, description }) => {
   return (
      <div className='max-w-3xl'>
         <h1 className=' text-[24px] lg:text-[28px] font-normal text-title'>{title}</h1>
         <p className='text-des font-normal  text-[20px]'>{description}</p>
      </div>
   );
};

export default SectionTitle;
