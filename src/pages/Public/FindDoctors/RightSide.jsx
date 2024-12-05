import CustomDropdown from '@/components/Dropdown/CustomDropdown';
import React, { useState } from 'react';

const RightSide = () => {
   const [selectedCategory, setSelectedCategory] = useState('all');
   const [selectedGender, setSelectedGender] = useState('all');
   const [selectedSpecialty, setSelectedSpecialty] = useState('all');
   const [selectedCity, setSelectedCity] = useState('all');
   const [selectedDistance, setSelectedDistance] = useState('all');
   const [selectedConsultationType, setSelectedConsultationType] = useState('all');

   return (
      <div className='rounded-[8px] p-4 w-full  bg-white primary-shadow  primary-shadow min-h-[50vh] border '>
         <div className='flex flex-col gap-3'>
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
   );
};

export default RightSide;
