import React from 'react'
import notFound from "@/assets/icons/404.svg"
import { Link } from 'react-router-dom'
import { handleBack } from '@/utils/utils'
import { Button } from '@/components/ui/button'
export default function NotFound() {

   return (
      <div className='min-h-screen flex items-center justify-center'>

         <div className='flex p-6 items-center text-center flex-col  '>
            <img src={notFound} alt="" />

            <div>
               <p className='title-text text-center text-[28px] font-medium'>Oops, page not found</p>
               <p className='mt-1  text-base  des-text font-medium max-w-md'>The page you are looking for might have been not found, had its name changed, or is temporarily unavailable.</p>

               <div className='mt-6  w-full flex items-center gap-6 flex-col lg:flex-row justify-center'>
                  <button onClick={handleBack} className='outline-btn  max-w-[180px]'>
                     Go Back
                  </button>
                  <Link to={"/"} className='primary-btn max-w-[180px]'>Take me home</Link>
               </div>
            </div>
         </div>

      </div>
   )
}
