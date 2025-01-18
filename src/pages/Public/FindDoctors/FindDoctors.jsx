import SearchBox from '@/components/SearchBox/SearchBox';
import React, { useState } from 'react';

import Doctors from './Doctors';
import { doctors } from '@/utils/doctor';
import DoctorCard from '@/components/cards/DoctorCard';

const FindDoctors = () => {
   const [searchTerm, setSearchTerm] = useState("")
   const filteredDoctors = doctors.filter(doctor =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
   );

   return (
      <div className='main-container pb-10  relative z-10'>
         <div className=''>
            <SearchBox />
         </div>

         <div className="grid grid-cols-1 mt-6 gap-6">
            {filteredDoctors.map(doctor => (
               <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
         </div>
      </div>
   );
};

export default FindDoctors;
