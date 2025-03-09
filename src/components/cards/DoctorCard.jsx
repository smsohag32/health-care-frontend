import React, { useState } from 'react';
import { Calendar } from "@/components/ui/calendar"
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, MapPin, Phone, Star, Clock } from 'lucide-react';
import { cn } from "@/lib/utils"
import { format } from "date-fns"



const DoctorCard = ({ doctor }) => {
   const [date, setDate] = useState()

   return (
      <Card className="w-full overflow-hidden">
         <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
               <div className="w-full md:w-1/4 h-48 md:h-auto bg-gray-200">
                  {doctor.image ? (
                     <img
                        src={"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="}
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                     />
                  ) : (
                     <div className="w-full h-full flex items-center justify-center text-gray-500">
                        No Image Available
                     </div>
                  )}
               </div>
               <div className="w-full md:w-3/4 p-6">
                  <div className="flex justify-between items-start mb-4">
                     <div>
                        <h2 className="text-2xl font-bold text-gray-800">{doctor.name}</h2>
                        <p className="text-gray-600">{doctor.qualification}</p>
                     </div>
                     <Badge variant="secondary" className="text-lg py-1 px-3">
                        {doctor.specialization}
                     </Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                     <div className="flex items-center">
                        <MapPin className="mr-2 text-gray-500" size={18} />
                        <span className="text-sm text-gray-700">{doctor.hospital}</span>
                     </div>
                     <div className="flex items-center">
                        <Clock className="mr-2 text-gray-500" size={18} />
                        <span className="text-sm text-gray-700">{doctor.experience} years experience</span>
                     </div>
                     <div className="flex items-center">
                        <Phone className="mr-2 text-gray-500" size={18} />
                        <span className="text-sm text-gray-700">{doctor.phone}</span>
                     </div>
                     <div className="flex items-center">
                        <Star className="mr-2 text-yellow-500" size={18} />
                        <span className="text-sm text-gray-700">{doctor.rating} Rating</span>
                     </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{doctor.address}</p>
                  <div className="mb-4">
                     <p className="font-semibold mb-2">Availability:</p>
                     <div className="flex flex-wrap gap-2">
                        {doctor.availability.map((day, index) => (
                           <Badge key={index} variant="outline">{day}</Badge>
                        ))}
                     </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                     <Popover>
                        <PopoverTrigger asChild>
                           <Button
                              variant="outline"
                              className={cn(
                                 "w-full sm:w-[240px] justify-start text-left font-normal",
                                 !date && "text-muted-foreground"
                              )}
                           >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : <span>Pick an appointment date</span>}
                           </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                           <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                           />
                        </PopoverContent>
                     </Popover>
                     <button className="w-full sm:w-auto primary-btn">Book Appointment</button>
                  </div>
               </div>
            </div>
         </CardContent>
      </Card>
   );
};

export default DoctorCard;
