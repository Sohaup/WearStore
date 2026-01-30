'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { registerSchema, registerSchemaType } from '@/schema/registerSchema';
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { singUp } from '@/services/register';
import {toast} from "react-hot-toast"
import { usePathname , useRouter } from 'next/navigation';

export default function RegisterForm({setSelected}:{setSelected: React.Dispatch<React.SetStateAction<string>>}) {
    const { handleSubmit, formState: { errors }, register, reset } = useForm<registerSchemaType>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            rePassword: "",
            phone: ""
        },
        mode: 'onChange',
        resolver: zodResolver(registerSchema)
    });
    const router = useRouter();
   async function onsubmit(values:registerSchemaType) {
       const res = await singUp(values);
       console.log(res);
       if (res.message == "success") {
            toast.success("registered successfuly");
            setSelected("login");
       } else {
         toast.error(res.message);
       }
   }
    return (
        <form className='w-3/4  lg:w-1/2 flex flex-col items-center gap-2 font-mono ' onSubmit={handleSubmit(onsubmit)}>
            <div className="input flex flex-col gap-2 ">
                <label className='text-2xl '>name</label>
                <input {...register("name")} name='name' className='bg-slate-400 py-1 w-full  text-2xl rounded-md focus:bg-white focus:ouline-2 focus:outline-rose-800 transition-all duration-300 shadow-none focus:shadow-none' />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>
            <div className="input flex flex-col gap-2">
                <label className='text-2xl '>email</label>
                <input {...register("email")} name='email' type='email' className='bg-slate-400  py-1 w-full  text-2xl rounded-md focus:bg-white focus:ouline-2 focus:outline-rose-800 transition-all duration-300 shadow-none focus:shadow-none' />
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>
            <div className="input flex flex-col gap-2">
                <label className='text-2xl '>password</label>
                <input {...register("password")} name='password' type='password' className='bg-slate-400 py-1 w-full  text-2xl rounded-md focus:bg-white focus:ouline-2 focus:outline-rose-800 transition-all duration-300 shadow-none focus:shadow-none' />
                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
            </div>
            <div className="input flex flex-col gap-2">
                <label className='text-2xl '>re password</label>
                <input {...register("rePassword")} name='rePassword' type='password' className='bg-slate-400 py-1 w-full text-2xl rounded-md focus:bg-white focus:ouline-2 focus:outline-rose-800 transition-all duration-300 shadow-none focus:shadow-none' />
                {errors.rePassword && <p className='text-red-500'>{errors.rePassword.message}</p>}
            </div>
            <div className="input flex flex-col gap-2">
                <label className='text-2xl '>phone</label>
                <input {...register("phone")} name='phone' className='bg-slate-400 w-full  text-2xl py-1 rounded-md focus:bg-white focus:ouline-2 focus:outline-rose-800 transition-all duration-300 shadow-none focus:shadow-none' />
                {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
            </div>
            <div className="btn mt-3 mx-auto ">
                <Button className='bg-white text-black lg:bg-rose-800 lg:text-white hover:bg-rose-900 duration-300 px-6 py-2'>
                    Register
                </Button>
            </div>
        </form>
    )
}

