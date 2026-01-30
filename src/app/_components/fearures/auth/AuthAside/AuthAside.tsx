import Image from 'next/image'
import React from 'react'
import mainIcon from "@/../public/Home/icon.svg";

export default function AuthAside() {
    return (
        <aside className='min-h-screen flex flex-col items-center justify-center gap-10 p-5 text-white'>
            <div className="img">
                <Image src={mainIcon} alt='wear store main icon' width={200} height={200} className='w-80 h-80 rounded-lg' />
            </div>
            <div className="texts text-center space-y-5">
                <h1 className='text-6xl font-bold italic '>Join us </h1>
                <p className='font-mono'>
                    You can join us to enjoy sttlish clothes and special offers
                </p>
            </div>
        </aside>
    )
}
