import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import womenImg from '@/../public/Home/Landing/imageLandingPink.jpg'
import { geistSans } from '@/app/(main)/layout'
import Seperator from '@/app/_components/ui/Seperator/Seperator'

export default function LandingSection() {
  return (
    <section className={`relative w-screen min-h-screen landingImg bg-gredient flex items-center lg:items-end justify-center  text-black `}>
        <div className="content cont flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-0 py-30">
            <div className="title flex flex-col justify-center items-center gap-3 ">
                <h1 className='text-4xl uppercase '>DisCouver Your Style</h1>
                <Button className='bg-white text-black hover:bg-black hover:text-white px-6 py-2 duration-300'>Shop now</Button>
            </div>
            <div className="img">
                <Image src={womenImg} alt='women`s image' width={200} height={200} className='rounded-lg'/>
            </div>
            <div className="texts w-3/4 md:max-w-1/2 lg:max-w-1/4 text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Veniam ab nesciunt aperiam aliquam aut laborum sequi,
                 error dignissimos numquam libero.
            </div>
        </div>
        <Seperator/>
    </section>
  )
}
