import React, { useState, useRef, useEffect } from "react";

const useClickOutside = (handler) => {
   const domNode = useRef(null);

   useEffect(() => {
      const maybeHandler = (event) => {
         if (domNode.current && !domNode.current.contains(event.target)) {
            handler();
         }
      };

      document.addEventListener("mousedown", maybeHandler);

      return () => {
         document.removeEventListener("mousedown", maybeHandler);
      };
   }, [handler]);

   return domNode;
};

const CustomDropdown = ({ options, title, onSelect, ...props }) => {
   const [dropdownOpen, setDropdownOpen] = useState(false);
   const [selectedLanguage, setSelectedLanguage] = useState(null);
   const domNode = useClickOutside(() => setDropdownOpen(false));

   const handleSelect = (value) => {
      const selectedLang = options.find((lang) => lang.value === value);
      setSelectedLanguage(selectedLang);
      setDropdownOpen(false);
      onSelect && onSelect(value);
   };

   const style = {
      boxShadow: "2px 2px 8.5px 1px #143C771A",
   };

   return (
      <div {...props} className="flex items-center z-40  w-full space-x-2" ref={domNode}>
         <div className="relative inline-block w-full text-left">
            <button
               {...props}
               type="button"
               onClick={() => setDropdownOpen(!dropdownOpen)}
               className="text-base flex items-center w-full justify-between font-normal outline-none rounded-[4px] px-3 py-2 gap-3 min-w-[150px]  placeholder:text-[16px] bg-white  border-[1.5px]  placeholder:font-[400] placeholder:text-[#6C6C6C]">
               <p className="flex items-center text-base font-normal gap-2">
                  {selectedLanguage?.icon}
                  <span className="mt-[2px] lg:block">
                     {selectedLanguage?.label || title}
                  </span>
               </p>
               <span className="flex items-center justify-center">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="13"
                     height="8"
                     viewBox="0 0 13 8"
                     fill="none">
                     <path
                        d="M11.5 1.50012L6.5 6.50012L1.5 1.50012"
                        stroke="#111111"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                  </svg>
               </span>
            </button>
            <div
               style={style}
               className={`bg-white  text-[16px]  font-[400] shadow-1 !z-50 absolute left-0 mt-2 w-full rounded-[4px] py-[10px] transition-all ${dropdownOpen ? "top-full opacity-100 visible" : "top-[110%] invisible opacity-0"
                  }`}>
               {options?.map((option, index) => (
                  <div
                     key={index}
                     onClick={() => handleSelect(option.value)}
                     className="cursor-pointer py-2 px-5 text-[16px] font-[400] text-[#383838] hover:bg-gray-200">
                     {option.label}
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default CustomDropdown;
