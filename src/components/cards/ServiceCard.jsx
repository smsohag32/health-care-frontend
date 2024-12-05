import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ServiceCard({ title, description, icon }) {
   return (
      <Card className="w-full  p-6 bg-[#ffffff] border border-gray-200 hover:shadow-lg transition-shadow duration-300 ease-in-out">
         <CardHeader className="p-4 flex items-center justify-center">
            <div className="flex items-center justify-center  p-8 primary-text bg-lightbg rounded-full">
               {icon}
            </div>
         </CardHeader>
         <CardContent className="p-4 text-center">
            <CardTitle className="text-[20px] font-medium title-text">
               {title}
            </CardTitle>
            <p className="des-text text-sm mt-2">{description}</p>
         </CardContent>
         <div className="p-4 flex justify-center">
            <Button className="" variant="secondary">
               Learn More
            </Button>
         </div>
      </Card>
   );
}
