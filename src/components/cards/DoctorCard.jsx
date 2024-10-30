import React, { useState } from 'react';
import { Calendar } from "@/components/ui/calendar"
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover"

import doctorImage from "@/assets/doctors/doctor_2.jpg"
import { Button } from '../ui/button';
<<<<<<< HEAD
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
=======
>>>>>>> 7cab6a3596c6f3fe4e1e94c978322079e392c0d8
const DoctorCard = ({ doctor }) => {
   const [date, setDate] = useState()

   return (
      <div className='primary-shadow  relative rounded-[8px] bg-white px-5 pt-4 pb-2'>
         <div className='flex gap-6 items-start'>
            <div className='w-32 h-28 '>
               <img src={doctorImage} className='w-32 h-28 rounded-[8px] object-cover' alt="doctor" />
            </div>
            <div>
               <h2 className='text-[20px] font-medium text-gray-800'>Dr. Tarikul Islam</h2>
               <p className='des-text max-w-sm font-normal text-base'>MBBSBCS (Health)
                  MPhil (Pathology). Pathologist Years of Experience: Coming Soon</p>
               <p className='title-text'>Years of Experience : <span>2 Years</span></p>


               <div className='flex flex-col lg:flex-row gap-6 items-start'>
                  <div className='w-full'>
                     <p className='text-gray-800'>Unity Aid Hospital Ltd.</p>
                     <p className='des-text text-base font-normal mt-5'>House #16, Road # 2, Dhanmondi R/A, 6, Dhanmondi, Dhaka-1205, Bangladesh</p>
                  </div>

                  <div className='w-full'>
                     <p>Availability</p>
                     <p className='mt-5'>Sat</p>
                  </div>
               </div>
            </div>
         </div>

         {/* expertise */}
         <div>

         </div>
         <button className='absolute right-0 py-2 flex items-center justify-center px-5 secondary-bg top-0'>Available Call</button>

<<<<<<< HEAD
         <hr className='mt-4' />

         <div className='mt-6  flex justify-end items-center gap-6'>
            <div className='flex items-center gap-2'>
               <p className='des-text text-base'>Book appointment for</p>
               <Popover>
                  <PopoverTrigger asChild>
                     <Button
                        variant={"outline"}
                        className={cn(
                           "w-[280px] justify-start text-left font-normal",
                           !date && "text-muted-foreground"
                        )}
                     >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                     </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                     <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                     />
                  </PopoverContent>
               </Popover>
            </div>
            <button className='primary-btn max-w-[180px] !py-2.5 whitespace-nowrap'>Book appointment</button>
=======
         <hr className='mt-6' />

         <div className='py-3 flex justify-end items-center mt-4'>
            <Button className='outline-btn max-w-[180px]'>Book appointment</Button>
>>>>>>> 7cab6a3596c6f3fe4e1e94c978322079e392c0d8
         </div>
      </div>
   );
};

export default DoctorCard;
