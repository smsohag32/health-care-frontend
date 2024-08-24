import { ServiceCard } from "@/components/cards/ServiceCard";
import * as React from "react";

const ServiceSection = () => {
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 main-container lg:grid-cols-5 gap-6 py-20">
         <ServiceCard
            title="Video Consultancy"
            description="Consult with best doctors through video call."
            icon={
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-indigo-600"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M15 10l4.553-3.364A1 1 0 0121 7.507v8.986a1 1 0 01-1.447.87L15 14M4 6h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
                  />
               </svg>
            }
         />
         <ServiceCard
            title="Chamber Appointment"
            description="Book your appointment easily with few clicks."
            icon={
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-indigo-600"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
               </svg>
            }
         />
         <ServiceCard
            title="Doctor At Your Home"
            description="Book a doctor to visit you at home."
            icon={
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-indigo-600"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M12 8c-3.9 0-7 2.14-7 4.774 0 1.53 1.283 2.872 3.242 3.618l-.492 3.14c-.089.573.423 1.034.968.865l4.563-1.425a.615.615 0 01.373 0l4.563 1.425c.545.17 1.057-.292.968-.865l-.492-3.14C17.717 15.646 19 14.305 19 12.774 19 10.14 15.9 8 12 8z"
                  />
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M12 8V6m0-3h.01M9 3v3m6-3v3"
                  />
               </svg>
            }
         />
         <ServiceCard
            title="Ambulance Service"
            description="24/7 Emergency Ambulance Service."
            icon={
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-indigo-600"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M16 7h-1V3H9v4H8l-5 5v5h1a3 3 0 003 3 3 3 0 003-3h4a3 3 0 003 3 3 3 0 003-3h1v-5l-5-5zM3 12h16M9 22h0M15 22h0"
                  />
               </svg>
            }
         />
         <ServiceCard
            title="Domiciliary Service"
            description="Physiotherapy and Nurse service at home."
            icon={
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-indigo-600"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M19.5 9.5l-7 7-4-4M13.5 8.5L11 6l-6 6v5.5H10M13.5 8.5h4.5v4.5"
                  />
               </svg>
            }
         />
      </div>
   );
}


export default ServiceSection
