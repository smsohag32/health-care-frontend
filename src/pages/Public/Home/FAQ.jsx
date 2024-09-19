import React from 'react';
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from '@/components/titles/SectionTitle';

const FaqSection = () => {
   return (
      <div className="w-full main-container pb-16">
         <SectionTitle title={"Frequently ask questions."} />
         <Accordion type="single" collapsible className='mt-6'>
            {/* About Health Care */}
            <AccordionItem value="about-health-care" className="border px-5 bg-white ">
               <AccordionTrigger>What is Health Care?</AccordionTrigger>
               <AccordionContent>
                  Health Care is a platform that provides convenient healthcare services
                  in Bangladesh.
               </AccordionContent>
            </AccordionItem>

            {/* Services Offered */}
            <AccordionItem className="border px-5 bg-white " value="services-offered">
               <AccordionTrigger>What Services Does Health Care Offer?</AccordionTrigger>
               <AccordionContent>
                  <ul className='list-disc'>
                     <li>Doctor Appointments (in-person and Telemedicine)</li>
                     <li>Hospital and Diagnostic Information</li>
                     <li>Ambulance Services</li>
                     <li>Diagnostic Home Service</li>
                     <li>Domiciliary & Physiotherapy Services</li>
                     <li>Medical Instruments Rental</li>
                     <li>Sample collection for Diagnostics</li>
                     <li>Medical Tourism Services</li>
                  </ul>
               </AccordionContent>
            </AccordionItem>

            {/* Costs */}
            <AccordionItem className="border px-5 bg-white " value="costs">
               <AccordionTrigger>How Much Do Doctors&apos; Consultations Cost?</AccordionTrigger>
               <AccordionContent>
                  Doctor consultation fees vary depending on the doctor and their specialty.
                  Health Care itself does not charge extra, but you will pay the doctor directly.
               </AccordionContent>
            </AccordionItem>

            {/* Booking Appointments */}
            <AccordionItem className="border px-5 bg-white " value="booking-appointments">
               <AccordionTrigger>How to Book an Appointment?</AccordionTrigger>
               <AccordionContent>
                  You can book appointments online through the website or app. If you
                  need assistance, you can call Health care customer support.
               </AccordionContent>
            </AccordionItem>

            {/* Ambulance Services */}
            <AccordionItem className="border px-5 bg-white " value="ambulance-services">
               <AccordionTrigger>Do You Provide Ambulance Services Outside of Dhaka?</AccordionTrigger>
               <AccordionContent>
                  It&apos;s best to check with Health Care directly for their current coverage area.
                  They might have a contact number or information on their website.
               </AccordionContent>
            </AccordionItem>

            {/* Telemedicine */}
            <AccordionItem className="border px-5 bg-white " value="telemedicine">
               <AccordionTrigger>Is Telemedicine Right for Me?</AccordionTrigger>
               <AccordionContent>
                  Telemedicine is a good option for non-emergency consultations, follow-up
                  appointments, or if traveling to a doctor is difficult. Discuss your specific
                  needs with a doctor to see if it&apos;s suitable.
               </AccordionContent>
            </AccordionItem>

            {/* Sample Collection and Physiotherapy */}
            <AccordionItem className="border px-5 bg-white " value="sample-collection-and-physiotherapy">
               <AccordionTrigger>Do You Offer Home Sample Collection and Physiotherapy?</AccordionTrigger>
               <AccordionContent>
                  <ul>
                     <li>Health Care offers home sample collection for specific tests. Please check with them for details.</li>
                     <li>Yes, Health Care provides home physiotherapy services.</li>
                  </ul>
               </AccordionContent>
            </AccordionItem>

            {/* Benefits of Booking with Health Care */}
            <AccordionItem className="border px-5 bg-white " value="benefits-of-booking">
               <AccordionTrigger>What Are the Benefits of Booking with Health Care?</AccordionTrigger>
               <AccordionContent>
                  <div>

                     <ul className='list-item'>
                        <li>Convenient online booking</li>
                        <li>Wide range of doctors and specialists</li>
                        <li>Access to Telemedicine consultations</li>
                        <li>Potentially find cost-effective services</li>
                     </ul>
                  </div>

               </AccordionContent>
            </AccordionItem>
         </Accordion>
      </div>
   );
};

export default FaqSection;
