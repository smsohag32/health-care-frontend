import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { ShieldCheck, User, X } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

const HeaderLoginModal = ({ isOpen, onClose }) => {
   const navigate = useNavigate()
   return (
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
         <DialogContent className="sm:max-w-xl">
            <DialogHeader>
               <DialogTitle className="text-center text-2xl font-bold  text-des">Sign In</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 gap-6 py-4 md:grid-cols-2">
               <Card className="cursor-pointer transition-all hover:border-primaryBlue hover:shadow-md">
                  <CardHeader className="pb-2 text-center">
                     <User className="mx-auto h-12 w-12 text-primaryBlue" />
                     <CardTitle className="mt-2">Patient</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                     <p>Access your medical records, appointments, and prescriptions</p>
                  </CardContent>
                  <CardFooter>
                     <Button onClick={() => navigate("/login")} className="w-full bg-primaryBlue hover:bg-primaryBlue/90">Login as Patient</Button>
                  </CardFooter>
               </Card>

               <Card className="cursor-pointer transition-all hover:border-primaryBlue hover:shadow-md">
                  <CardHeader className="pb-2 text-center">
                     <ShieldCheck className="mx-auto h-12 w-12 text-primaryBlue" />
                     <CardTitle className="mt-2">Administrator</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-sm text-muted-foreground">
                     <p>Manage healthcare services, staff, and patient information</p>
                  </CardContent>
                  <CardFooter>
                     <Button
                        onClick={() => window.open("https://healthcare-administrator.web.app", "_blank")}
                        className="w-full bg-primaryBlue hover:bg-primaryBlue/90"
                     >
                        Login as Admin
                     </Button>
                  </CardFooter>

               </Card>
            </div>
         </DialogContent>
      </Dialog>
   );
};

export default HeaderLoginModal;
