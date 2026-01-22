'use client'
import InfinityScroll from '@/app/_components/ui/InfinityScroll/InfinityScroll'
import { Progress } from '@/components/ui/progress'
import { categoriesArr } from '@/utilities/uiDate'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { Swiper as SwiperType } from 'swiper/types'

export default function CategoriesSection() {
    const [progress, setProgress] = useState<number>(0);
    const swiperRef = useRef<SwiperType | null>(null);
    return (
        <section className='space-y-5 py-20 cont'>
            <div className="title flex justify-between items-center">
                <h2 className='text-3xl lg:text-4xl uppercase font-semibold ps-8'>Find Your Flawes OutFit</h2>
                <div className="btns  gap-8 hidden lg:flex">
                    <ArrowLeft onClick={() => swiperRef.current?.slidePrev()} className='text-rose-800 hover:text-black transition-colors duration-300' />
                    <ArrowRight onClick={() => swiperRef.current?.slideNext()} className='text-rose-800 hover:text-black transition-colors duration-300' />
                </div>
            </div>

            <div className="group  flex-col gap-5 hidden lg:flex">
                <div className="categories  w-screen  gap-5 hidden lg:flex">
                    <InfinityScroll Card={CategoryCard} slides={categoriesArr} progress={progress} setProgress={setProgress} swiperRef={swiperRef} />
                </div>
                <div className="progress cont mx-auto">
                    <Progress value={progress}   className='bg-black' />
                </div>

            </div>


            <div className="categories   mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:hidden">
                {categoriesArr.map((category) => (
                    <CategoryCard key={category.id}  {...category} />
                ))}
            </div>

        </section>
    )
}

function CategoryCard({ name, img }: { name?: string, img?: string }) {
    return (
        <div className="card relative w-full  rounded-lg ">
            <div className="card-img rounded-lg relative after:absolute after:inset-0 after:bg-black/40 after:rounded-lg">
                <Image src={img ? img : ""} alt={name ? name : ""} width={200} height={200} className='w-full h-150 rounded-xl' />
            </div>
            <div className="card-foot absolute bottom-0 w-full flex justify-between bg-black text-white text-lg px-5 py-5 rounded-bl-xl rounded-br-xl">
                <h3>{name}</h3>
                <ArrowRight />
            </div>
        </div>
    )
}
