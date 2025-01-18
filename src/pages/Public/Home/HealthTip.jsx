import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Apple, Moon, Dumbbell } from 'lucide-react'
import SectionTitle from '@/components/titles/SectionTitle'

const HealthTips = () => {
   const tips = [
      { id: 1, title: "Heart Health", content: "Exercise regularly and maintain a balanced diet for a healthy heart.", icon: Heart },
      { id: 2, title: "Nutrition", content: "Eat a variety of fruits and vegetables to get essential vitamins and minerals.", icon: Apple },
      { id: 3, title: "Sleep Well", content: "Aim for 7-9 hours of sleep per night to improve overall health and well-being.", icon: Moon },
      { id: 4, title: "Stay Active", content: "Incorporate at least 30 minutes of physical activity into your daily routine.", icon: Dumbbell },
   ]

   return (
      <section className="my-16 main-container">
         <div className='flex items-center justify-center'>
            <SectionTitle title={"Health Tips"} />
         </div>

         <div className="grid gap-6 md:grid-cols-2 mt-6 lg:grid-cols-4">
            {tips.map((tip) => (
               <Card key={tip.id}>
                  <CardHeader>
                     <CardTitle className="flex items-center text-title gap-2">
                        <tip.icon className="h-5 w-5" />
                        {tip.title}
                     </CardTitle>
                  </CardHeader>
                  <CardContent>
                     <p className='text-des'>{tip.content}</p>
                  </CardContent>
               </Card>
            ))}
         </div>
      </section>
   )
}

export default HealthTips

