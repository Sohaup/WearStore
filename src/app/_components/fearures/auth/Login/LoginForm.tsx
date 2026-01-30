'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, loginSchemaType } from '@/schema/loginSchema'
import { Button } from '@/components/ui/button'
import {signIn} from "next-auth/react"
import { logIn } from '@/services/login'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'

export default function LoginForm() {
    const { handleSubmit, register, reset, formState: { errors } } = useForm(
        {
            defaultValues: {
                email: "",
                password: ""
            },
            mode: 'onChange',
            resolver: zodResolver(loginSchema)
        }
    );
 
    async function login(values:loginSchemaType) {
        const res = await signIn("credentials" , 
            {email:values.email , password:values.password , redirect:false}
        );
        if (res?.status == 200) {
            toast.success("login successfuly");
            window.location.href = "/";
        } else {
            toast.error(`${res?.error}`);
        }
    } 
    return (
       <form className='w-full lg:w-1/2 flex flex-col items-center gap-2 font-mono ' onSubmit={handleSubmit(login)}>
            
            <div className="input flex flex-col gap-2">
                <label className='text-2xl '>email</label>
                <input {...register("email")} name='email' type='email' className='bg-slate-400  py-1 w-full text-2xl rounded-md focus:bg-white focus:ouline-2 focus:outline-rose-800 transition-all duration-300 shadow-none focus:shadow-none' />
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>
            <div className="input flex flex-col gap-2">
                <label className='text-2xl '>password</label>
                <input {...register("password")} name='password' type='password' className='bg-slate-400 py-1 w-full lg:w-full text-2xl rounded-md focus:bg-white focus:ouline-2 focus:outline-rose-800 transition-all duration-300 shadow-none focus:shadow-none' />
                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
            </div>
            
            <div className="btn mt-3">
                <Button className='bg-white text-black lg:bg-rose-800 lg:text-white hover:bg-black  hover:text-white hover:lg:bg-rose-900  duration-300 px-6 py-2'>
                    login
                </Button>
            </div>
        </form>
    )
}
