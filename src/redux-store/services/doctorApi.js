import { apiSlice } from "../slice/apiSlice";

const doctorApi = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      getDoctors: builder.query({
         query: () => ({
            url: `/doctors`,
            
         }),
         providesTags: ["doctors"],
      }),
   }),
});

export const { useGetDoctorsQuery } = doctorApi;
