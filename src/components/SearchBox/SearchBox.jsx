import React, { useState } from 'react';
import CustomDropdown from '../Dropdown/CustomDropdown';

const SearchBox = () => {
   const [selectedCategory, setSelectedCategory] = useState('all');
   const [selectedGender, setSelectedGender] = useState('all');
   const [selectedSpecialty, setSelectedSpecialty] = useState('all');
   const [selectedCity, setSelectedCity] = useState('all');
   const [selectedDistance, setSelectedDistance] = useState('all');
   const [selectedConsultationType, setSelectedConsultationType] = useState('all');

   return (
      <div className='w-full'>
         <div className='bg-white p-10  rounded-[8px] '>
            <div className='flex items-center gap-6'>
               <div className='w-full max-w-[150px]'>
                  <CustomDropdown
                     options={[
                        { label: "All", value: "all" },
                        { label: "Doctors", value: "doctors" },
                        { label: "Hospitals", value: "hospitals" },
                        { label: "Ambulance", value: "ambulance" },
                     ]}
                     title={"All"}
                     onSelect={setSelectedCategory}
                  />
               </div>
               <div className='relative w-full '>
                  <input
                     type="text"
                     placeholder='Search doctors, hospitals, ambulance'
                     className='outline-none py-2.5 rounded-[8px] px-6 border border-gray-300 w-full'
                  />
               </div>
               <button className='primary-btn max-w-[180px]'>Search</button>
            </div>
            <div className='flex mt-4 items-center justify-between gap-6'>
               <CustomDropdown
                  options={[
                     { label: "All", value: "all" },
                     { label: "Male", value: "male" },
                     { label: "Female", value: "female" },
                  ]}
                  title={"Gender"}
                  onSelect={setSelectedGender}
               />
               <CustomDropdown
                  options={[
                     { label: "All", value: "all" },
                     { label: "Cardiologist", value: "cardiologist" },
                     { label: "Dentist", value: "dentist" },
                     { label: "Neurologist", value: "neurologist" },
                     { label: "Pediatrician", value: "pediatrician" },
                  ]}
                  title={"Specialties"}
                  onSelect={setSelectedSpecialty}
               />
               <CustomDropdown
                  options={[
                     { label: "All", value: "all" },
                     { label: "New York", value: "new_york" },
                     { label: "Los Angeles", value: "los_angeles" },
                     { label: "Chicago", value: "chicago" },
                     { label: "Houston", value: "houston" },
                  ]}
                  title={"Cities"}
                  onSelect={setSelectedCity}
               />
               <CustomDropdown
                  options={[
                     { label: "All", value: "all" },
                     { label: "Within 5 miles", value: "5_miles" },
                     { label: "Within 10 miles", value: "10_miles" },
                     { label: "Within 20 miles", value: "20_miles" },
                     { label: "Within 50 miles", value: "50_miles" },
                  ]}
                  title={"Distance"}
                  onSelect={setSelectedDistance}
               />
               <CustomDropdown
                  options={[
                     { label: "All", value: "all" },
                     { label: "In-Person", value: "in_person" },
                     { label: "Online", value: "online" },
                  ]}
                  title={"Consultation Type"}
                  onSelect={setSelectedConsultationType}
               />
            </div>
         </div>
      </div>
   );
};

export default SearchBox;
