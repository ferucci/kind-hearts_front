import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
export const ConsultationFormSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  message: z.string().optional(),
  name: z.string().min(3).max(30),
})

export type ConsultationFormSchemaType = z.infer<typeof ConsultationFormSchema>

export const useFormHook = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ConsultationFormSchemaType>({
    defaultValues: { email: '', message: '', name: '' },
    resolver: zodResolver(ConsultationFormSchema),
  })

  const formRef = useRef<HTMLFormElement | null>(null)

  const submitHandler = () => {
    if (formRef.current) {
      emailjs
        .sendForm('service_59nrloi', 'template_ny0dukf', formRef.current, 'ZRpAqdMxMWVFZzQAv')
        .then(res => {
          if (res.status === 200) {
            reset()
            toast('Thank you! Your application has been successfully sent', { type: 'success' })
          }
        })
        .catch(error => {
          if (error.message) {
            toast('Check your internet connection', { type: 'error' })
          } else {
            toast("Something's gone wrong! Try again later", { type: 'error' })
          }
        })
    }
  }

  const submitFormHandler = handleSubmit(submitHandler)

  return { control, errors, formRef, submitFormHandler }
}
