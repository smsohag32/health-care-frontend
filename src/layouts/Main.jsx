import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
   return (
      <div className="relative scroll-smooth overflow-hidden">
         <Header />
         <div className="min-h-[60vh] pt-20">
            <Outlet />
         </div>
         <Footer />
      </div>
   );
};

export default Main;
