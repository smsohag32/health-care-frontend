import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Phone } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import ambulance from "@/assets/hero/ambulance.svg"
import { Checkbox } from '@/components/ui/checkbox'
const emergencyTypes = [
   { id: "accident", label: "Accident" },
   { id: "heartAttack", label: "Heart Attack" },
   { id: "stroke", label: "Stroke" },
   { id: "respiratoryIssue", label: "Respiratory Issue" },
   { id: "other", label: "Other" },
]
const FindAmbulance = () => {
   const [isLoading, setIsLoading] = useState(false)
   const [selectedEmergencies, setSelectedEmergencies] = useState([])

   const handleEmergencyTypeChange = (emergencyId) => {
      setSelectedEmergencies((prev) =>
         prev.includes(emergencyId)
            ? prev.filter((id) => id !== emergencyId)
            : [...prev, emergencyId]
      )
   }
   const handleSubmit = async (event) => {
      event.preventDefault()
      setIsLoading(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsLoading(false)
      // Handle form submission logic here
   }


   return (
      <div className="min-h-screen  bg-background">
         <div className="main-container pb-10">
            <section className="mb-10 flex items-center">
               <div className='flex-1'>
                  <h1 className="text-4xl font-bold text-title">Ambulance Service</h1>
                  <p className="text-xl text-muted-foreground mt-2">
                     Fast and reliable ambulance service available 24/7 for emergency situations.
                  </p>
                  <Alert variant="destructive" className="mt-14">
                     <AlertCircle className="h-4 w-4" />
                     <AlertTitle>Emergency Hotline</AlertTitle>
                     <AlertDescription>
                        <a href="tel:999" className="text-xl font-bold flex items-center">
                           <Phone className="mr-2" />
                           999 - Call Now
                        </a>
                        <p className="text-sm">For immediate emergency assistance, please call our hotline.</p>
                     </AlertDescription>
                  </Alert>
               </div>
               <div className='flex items-start'>
                  <img src={ambulance} alt="Ambulance" className='max-w-sm' />
               </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
               <section className="lg:col-span-2">
                  <h2 className="text-2xl font-semibold text-title mb-4">Emergency Health Information</h2>
                  <div className="space-y-4">
                     {[
                        {
                           title: "What to Do in a Medical Emergency",
                           content: "In a medical emergency, it is critical to remain calm and act swiftly. Call for emergency medical help, provide first aid if trained, and ensure the safety of the patient while waiting for professional assistance. Time is often critical in situations like heart attacks, strokes, and accidents, so knowing basic first aid can save lives."
                        },
                        {
                           title: "Common Emergency Situations and How to Respond",
                           content: "Emergencies can range from accidents to health conditions like cardiac arrest. Knowing the symptoms of common emergencies and the first steps to take can make all the difference. For instance, in case of a heart attack, calling an ambulance and administering CPR (if necessary) should be done immediately."
                        },
                        {
                           title: "How to Recognize and Handle a Stroke",
                           content: "Strokes are life-threatening and must be addressed as soon as possible. Remember the acronym FAST: Face drooping, Arm weakness, Speech difficulty, and Time to call emergency services. Immediate medical intervention can reduce long-term damage and increase the chances of recovery."
                        }
                     ].map((article, index) => (
                        <Card key={index}>
                           <CardHeader>
                              <CardTitle>{article.title}</CardTitle>
                           </CardHeader>
                           <CardContent>
                              <p className='text-des font-normal text-base'>{article.content}</p>
                           </CardContent>
                        </Card>
                     ))}
                  </div>
               </section>

               <section>
                  <h2 className="text-2xl font-semibold text-title mb-4">Request an Ambulance</h2>
                  <Card>
                     <CardContent className="py-4">
                        <form onSubmit={handleSubmit} className="space-y-4">
                           <div className="space-y-2">
                              <Label htmlFor="fullName">Full Name</Label>
                              <Input id="fullName" placeholder="Enter your full name" required />
                           </div>

                           <div className="space-y-2">
                              <Label htmlFor="phoneNumber">Phone Number</Label>
                              <Input id="phoneNumber" type="tel" placeholder="Enter your phone number" required />
                           </div>

                           <div className="space-y-2">
                              <Label htmlFor="address">Address</Label>
                              <Input id="address" placeholder="Enter the address where the ambulance is needed" required />
                           </div>

                           <div className="space-y-2">
                              <Label htmlFor="emergencyType" className="">Type of Emergency</Label>
                              <div className="space-y-3 pt-2 pb-2">
                                 {emergencyTypes.map((type) => (
                                    <div key={type.id} className="flex items-center space-x-2">
                                       <Checkbox
                                          id={type.id}
                                          className="cursor-pointer"
                                          checked={selectedEmergencies.includes(type.id)}
                                          onCheckedChange={() => handleEmergencyTypeChange(type.id)}
                                       />
                                       <Label className="cursor-pointer" htmlFor={type.id}>{type.label}</Label>
                                    </div>
                                 ))}
                              </div>
                           </div>

                           <button type="submit" className="w-full primary-btn" disabled={isLoading}>
                              {isLoading ? "Requesting..." : "Request Ambulance"}
                           </button>
                        </form>
                     </CardContent>
                  </Card>
               </section>
            </div>
         </div>
      </div>
   );
};

export default FindAmbulance;
