import React from 'react';

const SectionTitle = ({ title, description }) => {
   return (
      <div className='max-w-3xl'>
         <h1 className=' text-[26px] font-medium'>{title}</h1>
         <p className='des-title font-normal  text-lg'>{description}</p>
      </div>
   );
};

export default SectionTitle;
