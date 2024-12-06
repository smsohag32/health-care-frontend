import React, { useState } from 'react';
import { Calendar } from "@/components/ui/calendar"
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover"
import doctorImage from "@/assets/doctors/doctor_2.jpg"
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { Badge } from '../ui/badge';
const DoctorCard = ({ doctor }) => {
   const [date, setDate] = useState()

   return (
      <div className='primary-shadow rounded-[8px] relative bg-white px-5 pt-4 pb-2'>
         <div className='flex gap-6 items-start'>
            <div className='w-32 h-28 '>
               <img src={doctorImage} className='w-32 h-28 rounded-[8px] object-cover' alt="doctor" />
            </div>
            <div>
               <h2 className='text-[20px] font-medium text-title'>Dr. Tarikul Islam</h2>
               <p className='text-des max-w-sm  font-normal text-base'>MBBSBCS (Health)
                  MPhil (Pathology). Pathologist</p>
               <p className='text-title font-medium'>Years of Experience : <span>2 Years</span></p>


               <div className='flex flex-col lg:flex-row gap-6 items-start'>
                  <div className='w-full'>
                     <p className='text-title font-normal'>Unity Aid Hospital Ltd.</p>
                     <p className='text-des text-sm font-normal mt-5'>House #16, Road # 2, Dhanmondi R/A, 6, Dhanmondi, Dhaka-1205, Bangladesh</p>
                  </div>

                  <div className='w-full'>
                     <p className='text-base font-medium text-title'>Availability</p>
                     <div className='mt-4 space-x-3'>
                        <Badge className='' variant={"outline"}>Sat</Badge>
                        <Badge className='' variant={"outline"}>Sun</Badge>
                        <Badge className='' variant={"outline"}>Mon</Badge>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* expertise */}
         <div className='mt-4'>
            <Badge variant={"secondary"}>Cardiology</Badge>
         </div>
         <button className='absolute right-0 py-2 flex items-center justify-center px-5 secondary-bg top-0'>Available Call</button>

         <hr className='mt-6' />

         <div className='py-3 flex justify-end gap-6 items-center mt-4'>
            <Popover>
               <PopoverTrigger asChild>
                  <Button
                     variant={"outline"}
                     className={cn(
                        "w-[280px] justify-start items-center gap-2 text-left font-normal",
                        !date && "text-muted-foreground"
                     )}
                  >
                     <CalendarIcon size={16} />
                     {date ? format(date, "PPP") : <span>Select a date</span>}
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
            <button className=' primary-btn max-w-[180px]'>Book appointment</button>
         </div>
      </div>
   );
};

export default DoctorCard;
