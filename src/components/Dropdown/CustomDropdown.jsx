// CustomDropdown.jsx

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const CustomDropdown = ({
   placeholder = "Select an option",
   options = [],
   isDatePicker = false,
   selectedValue,
   triggerClassName,
   onSelect,
   icon
}) => {
   const [date, setDate] = useState(selectedValue || new Date());

   const formatDate = (date) => {
      return date.toLocaleDateString("en-US", {
         month: "2-digit",
         day: "2-digit",
         year: "numeric",
      });
   };

   const handleSelect = (value) => {
      if (isDatePicker) {
         setDate(value);
         onSelect(value);
      } else {
         onSelect(value);
      }
   };

   return (
      <Select>
         <SelectTrigger className={`${triggerClassName} w-full text-sm gap-2 `}>
            {icon}
            <SelectValue placeholder={isDatePicker ? formatDate(date) : placeholder} />
         </SelectTrigger>
         <SelectContent>
            {isDatePicker ? (
               <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleSelect}
                  className="rounded-md border"
               />
            ) : (
               options.map((option, index) => (
                  <SelectItem key={index} value={option?.value}>
                     {option?.label}
                  </SelectItem>
               ))
            )}
         </SelectContent>
      </Select>
   );
};

export default CustomDropdown;
