import Main from "@/layouts/Main"
import Login from "@/pages/Authentication/Login/Login"
import Registration from "@/pages/Authentication/Registration/Registration"
import NotFound from "@/pages/NotFound/NotFound"
import FindAmbulance from "@/pages/Public/FindAmbulance.jsx/FindAmbulance"
import FindDoctors from "@/pages/Public/FindDoctors/FindDoctors"
import FindHospital from "@/pages/Public/FindHospital/FindHospital"
import HomePage from "@/pages/Public/Home/HomePage"
import { createBrowserRouter } from "react-router-dom"


export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      children: [
         {
            path: "/",
            element: <HomePage />
         },
         {
            path: "/find-doctors",
            element: <FindDoctors />
         },
         {
            path: "/find-hospital",
            element: <FindHospital />
         },
         {
            path: "/find-ambulance",
            element: <FindAmbulance />
         },
         {
            path: "/auth/login",
            element: <Login />
         },
         {
            path: "/auth/register",
            element: <Registration />
         }
      ]

   },
   {
      path: "*",
      element: <NotFound />
   }
])

