import React from 'react'


export default function PrimaryButton({ children, ...props }) {
   return (
      <button {...props} className='py-3.5 px-7 rounded-[8px] font-medium text-sm primary-bg text-white flex items-center justify-center gap-2  w-full max-w-sm'>{children}</button>
   )
}
