import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
   return (
      <div>
         <Header />
         <div className="min-h-[60vh]">
            <Outlet />
         </div>
         <Footer />
      </div>
   );
};

export default Main;
