import React, { useState } from 'react';
import CustomDropdown from '../Dropdown/CustomDropdown';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
   const [selectedCategory, setSelectedCategory] = useState('all');
   const [selectedGender, setSelectedGender] = useState('all');
   const [selectedSpecialty, setSelectedSpecialty] = useState('all');
   const [selectedCity, setSelectedCity] = useState('all');
   const [selectedDistance, setSelectedDistance] = useState('all');
   const [selectedConsultationType, setSelectedConsultationType] = useState('all');
   const navigate = useNavigate()



   // search function
   const handleSearch = () => {
      navigate('/find-doctors')
   }
   return (
   <div className='w-full bg-transparent' >
         <div className=' py-10 footer-bg px-14  rounded-[8px] '>
            <div className='flex items-center flex-col md:flex-row gap-6'>
               <div className='w-full flex items-center gap-4 max-w-[150px]'>
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
                  <div className='lg:hidden'>
                     <button className='title-text'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.38589 5.66687C2.62955 4.82155 2.25138 4.39889 2.23712 4.03968C2.22473 3.72764 2.35882 3.42772 2.59963 3.22889C2.87684 3 3.44399 3 4.57828 3H19.4212C20.5555 3 21.1227 3 21.3999 3.22889C21.6407 3.42772 21.7748 3.72764 21.7624 4.03968C21.7481 4.39889 21.3699 4.82155 20.6136 5.66687L14.9074 12.0444C14.7566 12.2129 14.6812 12.2972 14.6275 12.3931C14.5798 12.4781 14.5448 12.5697 14.5236 12.6648C14.4997 12.7721 14.4997 12.8852 14.4997 13.1113V18.4584C14.4997 18.6539 14.4997 18.7517 14.4682 18.8363C14.4403 18.911 14.395 18.9779 14.336 19.0315C14.2692 19.0922 14.1784 19.1285 13.9969 19.2012L10.5969 20.5612C10.2293 20.7082 10.0455 20.7817 9.89802 20.751C9.76901 20.7242 9.6558 20.6476 9.583 20.5377C9.49975 20.4122 9.49975 20.2142 9.49975 19.8184V13.1113C9.49975 12.8852 9.49975 12.7721 9.47587 12.6648C9.45469 12.5697 9.41971 12.4781 9.37204 12.3931C9.31828 12.2972 9.2429 12.2129 9.09213 12.0444L3.38589 5.66687Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     </svg></button>
                  </div>
               </div>
               <div className='relative w-full '>
                  <input
                     type="text"
                     placeholder='Search doctors, hospitals, ambulance'
                     className='outline-none py-2.5 rounded-[8px] pe-6 ps-12 border border-gray-300 w-full'
                  />
                  <span className='absolute opacity-70 top-1/2 left-3 transform -translate-y-1/2 title-text'><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg></span>
               </div>
               <button onClick={handleSearch} className='text-white text-base hover:bg-[#174cc5] transition-all duration-300  font-medium px-12 py-3 rounded-[8px]  whitespace-nowrap primary-bg  max-w-[180px]'>Search</button>
            </div>
            <div className='lg:flex hidden mt-4 items-center justify-between gap-6'>
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
