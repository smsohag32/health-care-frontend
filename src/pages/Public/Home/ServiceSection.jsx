import { ServiceCard } from "@/components/cards/ServiceCard";
import { Ambulance, Home, Hospital, House } from "lucide-react";
import * as React from "react";

const ServiceSection = () => {
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:-mt-10 md:grid-cols-3 main-container lg:grid-cols-3 gap-6 pb-16">
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
                  className="w-12 h-12 text-skyblue"
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
                  className="w-12 h-12 text-skyblue"
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
               <House className="" size={48} />
            }
         />
         <ServiceCard
            title="Ambulance Service"
            description="24/7 Emergency Ambulance Service."
            icon={
               <Ambulance size={48} />
            }
         />
         <ServiceCard
            title="Domiciliary Service"
            description="Physiotherapy and Nurse service at home."
            icon={
               <Hospital size={48} />
            }
         />
         <ServiceCard
            title="Domiciliary Service"
            description="Physiotherapy and Nurse service at home."
            icon={
               <Hospital size={48} />
            }
         />
      </div>
   );
}


export default ServiceSection
