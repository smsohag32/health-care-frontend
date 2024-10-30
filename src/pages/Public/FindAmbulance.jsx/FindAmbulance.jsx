import { Button } from '@/components/ui/button';
import React from 'react';

const FindAmbulance = () => {
   return (
      <div className="bg-gray-100 min-h-screen py-8">
         <div className="main-container">
            <div className=" mb-10">
               <h1 className="text-4xl font-bold text-gray-800">Ambulance Service</h1>
               <p className="text-lg text-gray-600 mt-2">
                  Fast and reliable ambulance service available 24/7 for emergency situations.
               </p>
               <h2 className="text-2xl font-semibold text-red-700 mt-4">Emergency Hotline</h2>
               <p className="text-xl mt-2">📞 <span className="font-bold">123-456-7890</span> - Call Now</p>
               <p className="text-sm text-gray-600 mt-1">For immediate emergency assistance, please call our hotline.</p>
            </div>



            <div className='grid grid-cols-1 h-auto items-start lg:grid-cols-3  gap-6' >
               <div className='lg:col-span-2 h-full'>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Emergency Health Information</h3>

                  <div className="space-y-4">
                     {/* Article 1 */}
                     <div className="bg-white p-4 rounded-lg shadow-md">
                        <h4 className="text-xl font-bold text-gray-800">What to Do in a Medical Emergency</h4>
                        <p className="text-gray-600 mt-2">
                           In a medical emergency, it is critical to remain calm and act swiftly. Call for emergency medical help,
                           provide first aid if trained, and ensure the safety of the patient while waiting for professional assistance.
                           Time is often critical in situations like heart attacks, strokes, and accidents, so knowing basic first aid
                           can save lives.
                        </p>
                     </div>

                     {/* Article 2 */}
                     <div className="bg-white p-4 rounded-lg shadow-md">
                        <h4 className="text-xl font-bold text-gray-800">Common Emergency Situations and How to Respond</h4>
                        <p className="text-gray-600 mt-2">
                           Emergencies can range from accidents to health conditions like cardiac arrest. Knowing the symptoms of common
                           emergencies and the first steps to take can make all the difference. For instance, in case of a heart attack,
                           calling an ambulance and administering CPR (if necessary) should be done immediately.
                        </p>
                     </div>

                     {/* Article 3 */}
                     <div className="bg-white p-4 rounded-lg shadow-md">
                        <h4 className="text-xl font-bold text-gray-800">How to Recognize and Handle a Stroke</h4>
                        <p className="text-gray-600 mt-2">
                           Strokes are life-threatening and must be addressed as soon as possible. Remember the acronym FAST: Face drooping,
                           Arm weakness, Speech difficulty, and Time to call emergency services. Immediate medical intervention can reduce
                           long-term damage and increase the chances of recovery.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="h-full">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Request an Ambulance</h3>
                  <form className="space-y-4 bg-white p-6 rounded-lg shadow-md mb-8">
                     {/* Name */}
                     <div>
                        <label className="block text-gray-700">Full Name</label>
                        <input
                           type="text"
                           className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                           placeholder="Enter your full name"
                           required
                        />
                     </div>

                     {/* Phone Number */}
                     <div>
                        <label className="block text-gray-700">Phone Number</label>
                        <input
                           type="tel"
                           className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                           placeholder="Enter your phone number"
                           required
                        />
                     </div>

                     {/* Address */}
                     <div>
                        <label className="block text-gray-700">Address</label>
                        <input
                           type="text"
                           className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                           placeholder="Enter the address where the ambulance is needed"
                           required
                        />
                     </div>

                     {/* Type of Emergency */}
                     <div>
                        <label className="block text-gray-700">Type of Emergency</label>
                        <select
                           className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                           required
                        >
                           <option value="">Select Emergency Type</option>
                           <option value="Accident">Accident</option>
                           <option value="Heart Attack">Heart Attack</option>
                           <option value="Stroke">Stroke</option>
                           <option value="Respiratory Issue">Respiratory Issue</option>
                           <option value="Other">Other</option>
                        </select>
                     </div>

                     {/* Submit Button */}
                     <div className="text-center mt-4">
                        <Button
                           type="submit"
                           className="w-full"
                        >
                           Request Ambulance
                        </Button>
                     </div>
                  </form>
               </div>

               {/* Articles Section */}

            </div>

         </div>
      </div>
   );
};

export default FindAmbulance;
