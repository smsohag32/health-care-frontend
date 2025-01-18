import React from 'react';
import { LucideHospital, LucideMapPin, LucidePhone, LucideClock, LucideStar } from 'lucide-react';

const hospitals = [
   {
      id: 1,
      name: 'Dhaka Medical College Hospital',
      address: 'Secretariat Road, Dhaka, Bangladesh',
      phone: '+880 2 55165088',
      timings: 'Open 24 Hours',
      rating: 4.5,
      services: ['Emergency Care', 'Cardiology', 'Neurology'],
   },
   {
      id: 2,
      name: 'Square Hospital',
      address: '18/F, Bir Uttam Qazi Nuruzzaman Sarak, Dhaka 1205, Bangladesh',
      phone: '+880 2 8144400',
      timings: '8:00 AM - 10:00 PM',
      rating: 4.8,
      services: ['Pediatrics', 'Orthopedics', 'Oncology'],
   },
   {
      id: 3,
      name: 'Evercare Hospital Dhaka',
      address: 'Plot 81, Block E, Bashundhara R/A, Dhaka 1229, Bangladesh',
      phone: '+880 9666 710606',
      timings: 'Open 24 Hours',
      rating: 4.7,
      services: ['General Surgery', 'Radiology', 'Dialysis'],
   },
   {
      id: 4,
      name: 'BIRDEM General Hospital',
      address: '122 Kazi Nazrul Islam Ave, Dhaka 1000, Bangladesh',
      phone: '+880 2 9661551',
      timings: 'Open 24 Hours',
      rating: 4.6,
      services: ['Diabetes Care', 'Endocrinology', 'Cardiology'],
   },
   {
      id: 5,
      name: 'United Hospital Limited',
      address: 'Plot 15, Road 71, Gulshan, Dhaka 1212, Bangladesh',
      phone: '+880 2 8836000',
      timings: 'Open 24 Hours',
      rating: 4.5,
      services: ['Cardiac Care', 'Nephrology', 'Oncology'],
   },
   {
      id: 6,
      name: 'Ibn Sina Hospital',
      address: 'House 48, Road 9/A, Dhanmondi, Dhaka 1209, Bangladesh',
      phone: '+880 2 9126625',
      timings: 'Open 24 Hours',
      rating: 4.4,
      services: ['General Medicine', 'Surgery', 'Pediatrics'],
   },
   {
      id: 7,
      name: 'Holy Family Red Crescent Medical College Hospital',
      address: 'Eskaton Garden Road, Dhaka 1000, Bangladesh',
      phone: '+880 2 8311721',
      timings: 'Open 24 Hours',
      rating: 4.3,
      services: ['General Surgery', 'Gynecology', 'Pediatrics'],
   },
   {
      id: 8,
      name: 'Ad-Din Hospital',
      address: '2 Bara Moghbazar, Dhaka 1217, Bangladesh',
      phone: '+880 2 9353391',
      timings: 'Open 24 Hours',
      rating: 4.2,
      services: ['Maternity Care', 'Pediatrics', 'General Surgery'],
   },
   {
      id: 9,
      name: 'National Institute of Cardiovascular Diseases',
      address: 'Sher-e-Bangla Nagar, Dhaka 1207, Bangladesh',
      phone: '+880 2 9122560',
      timings: 'Open 24 Hours',
      rating: 4.5,
      services: ['Cardiology', 'Cardiac Surgery'],
   },
   {
      id: 10,
      name: 'Bangabandhu Sheikh Mujib Medical University',
      address: 'Shahbag, Dhaka 1000, Bangladesh',
      phone: '+880 2 8614001',
      timings: 'Open 24 Hours',
      rating: 4.6,
      services: ['General Medicine', 'Surgery', 'Neurology'],
   },
   {
      id: 11,
      name: 'Kurmitola General Hospital',
      address: 'Dhaka Cantonment, Dhaka 1206, Bangladesh',
      phone: '+880 2 9870147',
      timings: 'Open 24 Hours',
      rating: 4.3,
      services: ['Emergency Care', 'General Surgery', 'Orthopedics'],
   },
   {
      id: 12,
      name: 'National Institute of Cancer Research & Hospital',
      address: 'Mohakhali, Dhaka 1212, Bangladesh',
      phone: '+880 2 9880078',
      timings: 'Open 24 Hours',
      rating: 4.4,
      services: ['Oncology', 'Radiotherapy'],
   },
   {
      id: 13,
      name: 'Chittagong Medical College Hospital',
      address: 'Chawkbazar, Chittagong, Bangladesh',
      phone: '+880 31 619400',
      timings: 'Open 24 Hours',
      rating: 4.5,
      services: ['General Medicine', 'Surgery', 'Pediatrics'],
   },
   {
      id: 14,
      name: 'Rajshahi Medical College Hospital',
      address: 'Rajshahi, Bangladesh',
      phone: '+880 721 772150',
      timings: 'Open 24 Hours',
      rating: 4.4,
      services: ['General Medicine', 'Surgery', 'Gynecology'],
   },
   {
      id: 15,
      name: 'Sylhet MAG Osmani Medical College Hospital',
      address: 'Sylhet, Bangladesh',
      phone: '+880 821 713667',
      timings: 'Open 24 Hours',
      rating: 4.3,
      services: ['General Medicine', 'Surgery', 'Orthopedics'],
   },
   {
      id: 16,
      name: 'Mymensingh Medical College Hospital',
      address: 'Mymensingh, Bangladesh',
      phone: '+880 91 66215',
      timings: 'Open 24 Hours',
      rating: 4.2,
      services: ['General Medicine', 'Surgery', 'Pediatrics'],
   },

];

const FindHospital = () => {
   return (
      <div className="min-h-screen main-container  flex flex-col items-center py-10">
         {/* Header */}
         <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
               Find a Hospital Near You
            </h1>
            <p className="text-gray-600 mt-2">
               Browse through the list of hospitals and get their contact details and available services.
            </p>
         </div>

         {/* Hospital List */}
         <div className="w-full grid lg:grid-cols-2 gap-4  space-y-6">
            {hospitals.map((hospital) => (
               <div
                  key={hospital.id}
                  className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
               >
                  <div className="flex items-center gap-4">
                     <div className="p-3 bg-blue-100 rounded-full">
                        <LucideHospital className="text-blue-500 w-6 h-6" />
                     </div>
                     <h2 className="text-lg font-semibold text-gray-800">
                        {hospital.name}
                     </h2>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                     <LucideMapPin className="w-5 h-5" />
                     <p>{hospital.address}</p>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                     <LucidePhone className="w-5 h-5" />
                     <p>{hospital.phone}</p>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                     <LucideClock className="w-5 h-5" />
                     <p>{hospital.timings}</p>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                     <LucideStar className="w-5 h-5 text-yellow-400" />
                     <p>{hospital.rating} / 5.0</p>
                  </div>

                  <div>
                     <h3 className="text-gray-800 font-semibold mb-2">Services:</h3>
                     <ul className="list-disc list-inside text-gray-600">
                        {hospital.services.map((service, index) => (
                           <li key={index}>{service}</li>
                        ))}
                     </ul>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default FindHospital;
