import AuthForms from '@/app/_components/fearures/auth/AuthForms/AuthForms'
import RegisterForm from '@/app/_components/fearures/auth/Register/Register'
import React from 'react'

export default function page() {
  return (
    <section className=' min-h-screen'>
     
     <AuthForms selectedAuth='register'/>
    </section>
    
  )
}


