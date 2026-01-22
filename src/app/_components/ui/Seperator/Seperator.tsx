import React from 'react'
import { geistSans } from '@/app/(main)/layout'

export default function Seperator({sepClassName , className}:{sepClassName?:string , className?:string}) {
    const words: Array<string> = ["Stylis", "Elegent", "Adorable", "modish", "stylish" , "Elegent", "Adorable", "modish", "stylish"]
    return (
        <div className='w-full bg-black flex gap-2  items-center justify-center absolute bottom-0 py-3'>
            {words.map((word , index) => (
                <div className='text-white flex items-center  gap-1' key={(String(index) + word)}>
                    <SeperatorPattern className={sepClassName ? sepClassName : "bg-rose-800"}/>
                    <p className={` ${className ? className : "text-lg "}`}>{word}</p>
                </div>
            ))}
        </div>
    )
}

function SeperatorPattern({className}:{className?:string}) {
    return (
        <div className='flex  '>
            <div className={`w-8 h-8 rounded-full ${className ? className : 'bg-rose-800'} `}></div>
            <div className={`w-16 h-8 rounded-[30px] ${className ? className : 'bg-rose-800'}`}></div>
            <div className={`w-8 h-8 rounded-full ${className ? className : 'bg-rose-800'}`}></div>
        </div>
    )
}