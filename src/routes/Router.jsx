import Main from "@/layouts/Main"
import Login from "@/pages/Authentication/Login/Login"
import Registration from "@/pages/Authentication/Registration/Registration"
import NotFound from "@/pages/NotFound/NotFound"
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

