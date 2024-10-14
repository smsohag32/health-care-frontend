import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => {
      console.log(data);
   };

   return (
      <div className="min-h-screen flex items-center justify-center bg-primary-blue-100">
         <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-[24px] font-medium text-center mb-6">Login</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
               {/* Email Input */}
               <div>
                  <label className="block text-base font-medium text-gray-700">Email</label>
                  <input
                     type="email"
                     placeholder='Enter your email.'
                     className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-[8px] shadow-sm focus:outline-none focus:ring-primary-blue-500 focus:border-primary-blue-500 sm:text-base ${errors.email ? 'border-red-500' : ''
                        }`}
                     {...register('email', { required: 'Email is required' })}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
               </div>

               {/* Password Input */}
               <div>
                  <label className="block text-base font-medium text-gray-700">Password</label>
                  <input
                     type="password"
                     placeholder='*******'
                     className={`mt-1 block w-full px-3 py-3 border border-gray-300 rounded-[8px] shadow-sm focus:outline-none focus:ring-primary-blue-500 focus:border-primary-blue-500 sm:text-base ${errors.password ? 'border-red-500' : ''
                        }`}
                     {...register('password', { required: 'Password is required' })}
                  />
                  {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
               </div>

               {/* Submit Button */}
               <button className='primary-btn'>Sing in</button>

               {/* Forgot Password */}
               <div className="text-base text-center mt-4">
                  <Link className="text-primary-blue-600 hover:text-primary-blue-500">
                     Forgot your password?
                  </Link>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Login;
