import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Ambulance, BadgeIcon as Police, FireExtinguisher } from 'lucide-react'
import SectionTitle from '@/components/titles/SectionTitle'

const EmergencyContacts = () => {
   const contacts = [
      { id: 1, name: "Emergency Hotline", number: "911", icon: Phone },
      { id: 2, name: "Ambulance", number: "912", icon: Ambulance },
      { id: 3, name: "Police", number: "913", icon: Police },
      { id: 4, name: "Fire Department", number: "914", icon: FireExtinguisher },
   ]

   return (
      <section className="my-16 main-container">
         <div className='flex items-center justify-center'>
            <SectionTitle title={"Emergency Contacts"} />
         </div>

         <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4">
            {contacts.map((contact) => (
               <Card key={contact.id}>
                  <CardHeader>
                     <CardTitle className="flex items-center text-title font-normal gap-2">
                        <contact.icon className="h-5 text-skyblue w-5" />
                        {contact.name}
                     </CardTitle>
                  </CardHeader>
                  <CardContent>
                     <p className="text-2xl font-bold text-center text-des">{contact.number}</p>
                  </CardContent>
               </Card>
            ))}
         </div>
      </section>
   )
}

export default EmergencyContacts
