'use client'
import React, { useState } from 'react'
import RegisterForm from '../Register/Register'
import LoginForm from '../Login/LoginForm';

export default function AuthForms({ selectedAuth }: { selectedAuth: string }) {
    const [selected, setSelected] = useState(selectedAuth);
    return (
        <div className='text-white lg:text-black flex font-mono flex-col  justify-center items-center gap-5 lg:min-h-screen'>
            <div className="toggle flex justify-center  gap-5 w-full lg:1/2">
                <p onClick={() => setSelected('register')} className={`text-xl relative after:absolute after:left-1 after:right-1 after:-bottom-3 after:h-1 ${selected == 'register' ? ' after:bg-black after:lg:bg-rose-800 ' : 'after:bg-slate-200'}  after:rounded-[30px]`}>Register</p>
                <p onClick={() => setSelected('login')} className={`text-xl relative after:absolute after:left-1 after:right-1 after:-bottom-3 after:h-1 ${selected == 'login' ? 'after:bg-black after:lg:bg-rose-800' : 'after:bg-slate-200'}   after:rounded-[30px]`}>Login</p>
            </div>

            {
                selected == 'register' ? <RegisterForm setSelected={setSelected} /> : <LoginForm />
            }

        </div>
    )
}
