"use client"

import { useState } from "react"
import SearchBox from "@/components/SearchBox/SearchBox"
import { doctors } from "@/utils/doctor"
import DoctorCard from "@/components/cards/DoctorCard"
import { Search, RefreshCw } from "lucide-react"

const FindDoctors = () => {
   const [searchTerm, setSearchTerm] = useState("")
   const [selectedCategory, setSelectedCategory] = useState("all")
   const [selectedGender, setSelectedGender] = useState("all")
   const [selectedSpecialty, setSelectedSpecialty] = useState("all")
   const [selectedCity, setSelectedCity] = useState("all")
   const [selectedDistance, setSelectedDistance] = useState("all")
   const [selectedConsultationType, setSelectedConsultationType] = useState("all")

   // Filter Doctors based on selected criteria
   const filteredDoctors = doctors.filter((doctor) => {
      return (
         (searchTerm === "" ||
            doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())) &&
         (selectedCategory === "all" || doctor.category === selectedCategory) &&
         (selectedGender === "all" || doctor.gender === selectedGender) &&
         (selectedSpecialty === "all" || doctor.specialization === selectedSpecialty) &&
         (selectedCity === "all" || doctor.city === selectedCity) &&
         (selectedConsultationType === "all" || doctor.consultationType === selectedConsultationType)
      )
   })

   const resetFilters = () => {
      setSearchTerm("")
      setSelectedCategory("all")
      setSelectedGender("all")
      setSelectedSpecialty("all")
      setSelectedCity("all")
      setSelectedDistance("all")
      setSelectedConsultationType("all")
   }

   return (
      <div className="main-container pb-10 relative z-10">
         <SearchBox
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedGender={selectedGender}
            setSelectedGender={setSelectedGender}
            selectedSpecialty={selectedSpecialty}
            setSelectedSpecialty={setSelectedSpecialty}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            selectedDistance={selectedDistance}
            setSelectedDistance={setSelectedDistance}
            selectedConsultationType={selectedConsultationType}
            setSelectedConsultationType={setSelectedConsultationType}
         />

         <div className="grid grid-cols-1 mt-6 gap-6">
            {filteredDoctors.length > 0 ? (
               filteredDoctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)
            ) : (
               <div className="flex flex-col items-center justify-center py-12 px-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <div className="bg-gray-50 p-4 rounded-full mb-4">
                     <Search className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No Doctors Found</h3>
                  <p className="text-gray-500 text-center max-w-md mb-6">
                     We couldn&apos;t find any doctors matching your search criteria. Please try adjusting your filters or search
                     terms.
                  </p>
                  <button
                     onClick={resetFilters}
                     className="primary-btn max-w-[180px]"
                  >
                     <RefreshCw className="h-4 w-4" />
                     Reset All Filters
                  </button>
               </div>
            )}
         </div>
      </div>
   )
}

export default FindDoctors

