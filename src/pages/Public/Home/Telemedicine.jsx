import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Video, MessageCircle, Calendar } from 'lucide-react'
import SectionTitle from '@/components/titles/SectionTitle'

const Telemedicine = () => {
   return (
      <section className="my-16 main-container">
         <div className='flex items-center justify-center'>
            <SectionTitle title={"Telemedicine Services"} />
         </div>


         <div className="grid gap-6 md:grid-cols-3 mt-6">
            <Card>
               <CardHeader>
                  <CardTitle className="flex items-center text-xl font-normal  gap-2">
                     <Video className="h-5 w-5 text-skyblue" />
                     Video Consultation
                  </CardTitle>
               </CardHeader>
               <CardContent>
                  <p className="mb-4">Connect with a doctor face-to-face through our secure video platform.</p>
                  <Button className="w-full">Start Video Call</Button>
               </CardContent>
            </Card>
            <Card>
               <CardHeader>
                  <CardTitle className="flex items-center text-xl font-normal gap-2">
                     <MessageCircle className="h-5 w-5 text-skyblue" />
                     Chat with a Doctor
                  </CardTitle>
               </CardHeader>
               <CardContent>
                  <p className="mb-4">Get quick medical advice through our chat service with licensed physicians.</p>
                  <Button className="w-full">Start Chat</Button>
               </CardContent>
            </Card>
            <Card>
               <CardHeader>
                  <CardTitle className="flex items-center text-xl font-normal gap-2">
                     <Calendar className="h-5 w-5 text-skyblue" />
                     Schedule Telemedicine
                  </CardTitle>
               </CardHeader>
               <CardContent>
                  <p className="mb-4">Book a future telemedicine appointment with your preferred doctor.</p>
                  <Button className="w-full">Schedule Now</Button>
               </CardContent>
            </Card>
         </div>
      </section>
   )
}

export default Telemedicine

