import React from 'react';
import CustomDropdown from '../Dropdown/CustomDropdown';

const SearchBox = ({
   searchTerm, setSearchTerm,
   selectedCategory, setSelectedCategory,
   selectedGender, setSelectedGender,
   selectedSpecialty, setSelectedSpecialty,
   selectedCity, setSelectedCity,
   selectedDistance, setSelectedDistance,
   selectedConsultationType, setSelectedConsultationType
}) => {
   return (
      <div className='w-full'>
         <div className='py-10 footer- bg-primaryBlue px-14 rounded-[8px]'>
            <div className='lg:flex hidden items-center justify-between gap-6'>
               <CustomDropdown
                  options={[{ label: "All", value: "all" }, { label: "Male", value: "male" }, { label: "Female", value: "female" }]}
                  placeholder={"Gender"}
                  onSelect={setSelectedGender}
                  selectedValue={selectedGender}
               />
               <CustomDropdown
                  options={[
                     { label: "All", value: "all" },
                     { label: "Cardiologist", value: "cardiologist" },
                     { label: "Dentist", value: "dentist" },
                     { label: "Neurologist", value: "neurologist" },
                     { label: "Pediatrician", value: "pediatrician" },
                  ]}
                  placeholder={"Specialties"}
                  onSelect={setSelectedSpecialty}
                  selectedValue={selectedSpecialty}
               />
               <CustomDropdown
                  options={[
                     { label: "All", value: "all" },
                     { label: "New York", value: "new_york" },
                     { label: "Los Angeles", value: "los_angeles" },
                     { label: "Chicago", value: "chicago" },
                     { label: "Houston", value: "houston" },
                  ]}
                  placeholder={"Cities"}
                  onSelect={setSelectedCity}
                  selectedValue={selectedCity}
               />
               <CustomDropdown
                  options={[
                     { label: "All", value: "all" },
                     { label: "Within 5 miles", value: "5_miles" },
                     { label: "Within 10 miles", value: "10_miles" },
                     { label: "Within 20 miles", value: "20_miles" },
                     { label: "Within 50 miles", value: "50_miles" },
                  ]}
                  placeholder={"Distance"}
                  onSelect={setSelectedDistance}
                  selectedValue={selectedDistance}
               />
               <CustomDropdown
                  options={[
                     { label: "All", value: "all" },
                     { label: "In-Person", value: "in_person" },
                     { label: "Online", value: "online" },
                  ]}
                  placeholder={"Consultation Type"}
                  onSelect={setSelectedConsultationType}
                  selectedValue={selectedConsultationType}
               />
            </div>
            <div className='flex items-center mt-4 flex-col md:flex-row gap-6'>
               <div className='w-full flex items-center gap-4 max-w-[150px]'>
                  <CustomDropdown
                     options={[
                        { label: "All", value: "all" },
                        { label: "Doctors", value: "doctors" },
                        { label: "Hospitals", value: "hospitals" },
                        { label: "Ambulance", value: "ambulance" },
                     ]}
                     placeholder={"Category"}
                     onSelect={setSelectedCategory}
                     selectedValue={selectedCategory}
                  />
               </div>
               <div className='relative w-full'>
                  <input
                     type="text"
                     placeholder='Search doctors, hospitals, ambulance'
                     className='outline-none py-2.5 rounded-[8px] pe-6 ps-12 border border-gray-300 w-full'
                     value={searchTerm}
                     onChange={(e) => setSearchTerm(e.target.value)}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default SearchBox;
