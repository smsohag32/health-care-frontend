import { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Phone } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import ambulance from "@/assets/hero/ambulance.svg"
import { Checkbox } from "@/components/ui/checkbox"

const emergencyTypes = [
   { id: "accident", label: "Accident" },
   { id: "heartAttack", label: "Heart Attack" },
   { id: "stroke", label: "Stroke" },
   { id: "respiratoryIssue", label: "Respiratory Issue" },
   { id: "other", label: "Other" },
]

// ✅ Validation Schema using yup
const schema = yup.object().shape({
   fullName: yup.string().required("Full Name is required").min(3, "Must be at least 3 characters"),
   phoneNumber: yup.string().matches(/^\d{10,15}$/, "Enter a valid phone number").required("Phone number is required"),
   address: yup.string().required("Address is required"),
   emergencyTypes: yup.array().min(1, "Select at least one emergency type"),
})

const FindAmbulance = () => {
   const [isLoading, setIsLoading] = useState(false)

   // ✅ React Hook Form setup
   const {
      register,
      handleSubmit,
      setValue,
      watch,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(schema),
      defaultValues: {
         fullName: "",
         phoneNumber: "",
         address: "",
         emergencyTypes: [],
      },
   })

   const selectedEmergencies = watch("emergencyTypes", [])

   // ✅ Handle checkbox selection
   const handleEmergencyTypeChange = (emergencyId) => {
      setValue(
         "emergencyTypes",
         selectedEmergencies.includes(emergencyId)
            ? selectedEmergencies.filter((id) => id !== emergencyId)
            : [...selectedEmergencies, emergencyId]
      )
   }

   const onSubmit = async (data) => {
      setIsLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsLoading(false)
      console.log("Form Submitted:", data)
   }

   return (
      <div className="min-h-screen bg-background">
         <div className="main-container pb-10">
            <section className="mb-10 flex items-center">
               <div className="flex-1">
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
               <div className="flex items-start">
                  <img src={ambulance} alt="Ambulance" className="max-w-sm" />
               </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
               <section className="lg:col-span-2">
                  <h2 className="text-2xl font-semibold text-title mb-4">Emergency Health Information</h2>
                  <div className="space-y-4">
                     {[
                        {
                           title: "What to Do in a Medical Emergency",
                           content:
                              "In a medical emergency, it is critical to remain calm and act swiftly. Call for emergency medical help, provide first aid if trained, and ensure the safety of the patient while waiting for professional assistance. Time is often critical in situations like heart attacks, strokes, and accidents, so knowing basic first aid can save lives.",
                        },
                        {
                           title: "Common Emergency Situations and How to Respond",
                           content:
                              "Emergencies can range from accidents to health conditions like cardiac arrest. Knowing the symptoms of common emergencies and the first steps to take can make all the difference. For instance, in case of a heart attack, calling an ambulance and administering CPR (if necessary) should be done immediately.",
                        },
                        {
                           title: "How to Recognize and Handle a Stroke",
                           content:
                              "Strokes are life-threatening and must be addressed as soon as possible. Remember the acronym FAST: Face drooping, Arm weakness, Speech difficulty, and Time to call emergency services. Immediate medical intervention can reduce long-term damage and increase the chances of recovery.",
                        },
                     ].map((article, index) => (
                        <Card key={index}>
                           <CardHeader>
                              <CardTitle>{article.title}</CardTitle>
                           </CardHeader>
                           <CardContent>
                              <p className="text-des font-normal text-base">{article.content}</p>
                           </CardContent>
                        </Card>
                     ))}
                  </div>
               </section>

               <section>
                  <h2 className="text-2xl font-semibold text-title mb-4">Request an Ambulance</h2>
                  <Card>
                     <CardContent className="py-4">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                           <div className="space-y-2">
                              <Label htmlFor="fullName">Full Name</Label>
                              <Input id="fullName" {...register("fullName")} placeholder="Enter your full name" />
                              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
                           </div>

                           <div className="space-y-2">
                              <Label htmlFor="phoneNumber">Phone Number</Label>
                              <Input id="phoneNumber" {...register("phoneNumber")} type="tel" placeholder="Enter your phone number" />
                              {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
                           </div>

                           <div className="space-y-2">
                              <Label htmlFor="address">Address</Label>
                              <Input id="address" {...register("address")} placeholder="Enter the address where the ambulance is needed" />
                              {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
                           </div>

                           <div className="space-y-2">
                              <Label className="">Type of Emergency</Label>
                              <div className="space-y-3 pt-2 pb-2">
                                 {emergencyTypes.map((type) => (
                                    <div key={type.id} className="flex items-center space-x-2">
                                       <Checkbox
                                          id={type.id}
                                          className="cursor-pointer"
                                          checked={selectedEmergencies.includes(type.id)}
                                          onCheckedChange={() => handleEmergencyTypeChange(type.id)}
                                       />
                                       <Label className="cursor-pointer" htmlFor={type.id}>
                                          {type.label}
                                       </Label>
                                    </div>
                                 ))}
                              </div>
                              {errors.emergencyTypes && <p className="text-red-500 text-sm">{errors.emergencyTypes.message}</p>}
                           </div>

                           <Button type="submit" className="w-full primary-btn" disabled={isLoading}>
                              {isLoading ? "Requesting..." : "Request Ambulance"}
                           </Button>
                        </form>
                     </CardContent>
                  </Card>
               </section>
            </div>
         </div>
      </div>
   )
}

export default FindAmbulance
