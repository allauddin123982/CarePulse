"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form } from "@/components/ui/form"
import CustomFormField, { FormFieldType } from "../ui/CustomField"
import SubmitButton from "../ui/SubmitButton"
import { useState } from "react"
import { z } from "zod"
import { UserFormValidation } from "@/lib/validation"
import { useRouter } from "next/navigation"



const PatientForm = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false)
  // 1. Define your form.
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
    },
  });


 
  // 2. Define a submit handler.
  const onSubmit = async({fullName, email, phone}: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true);
    try {
        // const userData = {fullName, email, phone};
        // const user = await createUser(userData);
        // if(user) router.push(`/patients/${user.$id}/register`)
    } catch (error) {
        console.log(error);
        
    }
  }

  return (
    <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there 👋</h1>
          <p className="text-dark-700">Get started with appointments.</p>
        </section>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="johndoe@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />

        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone number"
          placeholder="+92 313 8227201"
        //   clName="input-phone"
        />

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
    </>
  )

}

export default PatientForm