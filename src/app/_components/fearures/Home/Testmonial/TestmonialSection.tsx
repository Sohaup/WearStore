'use client'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import avatarImg from "@/../public/Home/Testmonial/avatar.jpg";
import Image from 'next/image'
import React, { useRef } from 'react'
import InfinityScroll from '@/app/_components/ui/InfinityScroll/InfinityScroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';
export default function TestmonialSection() {   
    const swiperRef = useRef<SwiperType>(null);
    const swiperMdRef = useRef<SwiperType>(null);
    const swiperLgRef = useRef<SwiperType>(null);
    return (
        <section className='py-20 w-[95%] ms-auto'>
            <div className="title flex justify-between my-5 w-[98%] me-auto">
                <h2 className='text-3xl '>What our customers say</h2>
               <ArrowGroup swiperRef={swiperRef} className='flex md:hidden'/>
               <ArrowGroup swiperRef={swiperMdRef} className='hidden md:flex lg:hidden'/>
               <ArrowGroup swiperRef={swiperLgRef} className='hidden lg:flex'/>
            </div>
           <SwiperSlider swiperRef={swiperRef} className='flex md:hidden' slidesPerView={1}/>
           <SwiperSlider swiperRef={swiperMdRef} className='hidden md:flex lg:hidden' slidesPerView={2}/>
           <SwiperSlider swiperRef={swiperLgRef} className='hidden lg:flex' slidesPerView={4}/>

        </section>
    )
}

function TestmonailCard({ img }: { img: string }) {
    return (
        <div className="card space-y-5 bg-violet-200 rounded-lg p-5">
            <div className="avatar">
                <Image src={img} alt='women`s image avatar' width={200} height={200} className='w-20 h-20 rounded-full object-center' />
            </div>
            <Quote className='rotate-180 fill-black' />
            <div className="texts">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                debitis error quam eos odio commodi, dolor dicta,
                voluptatibus quaerat enim officiis quae reiciendis
                aliquam nemo illo eius soluta necessitatibus quisquam
                voluptatum dolorem autem, aut in cupiditate ipsum.
                Ullam minima explicabo velit nostrum beatae libero aliquid,
                sapiente praesentium porro corrupti quae?
            </div>
            <div className="foot space-y-3 ">
                <p>Dana ailen</p>
                <span className='text-rose-800 font-semibold'>Japan Tokyo</span>
            </div>
        </div>
    )
}

function ArrowGroup({ swiperRef, className }: { swiperRef: React.RefObject<SwiperType | null>, className: string }) {
    return (
        <div className={`group gap-2 text-rose-800 ${className} `}>
            <ArrowLeft onClick={() => swiperRef.current?.slidePrev()} className='transition-colors duration-300 hover:text-black' />
            <ArrowRight onClick={() => swiperRef.current?.slideNext()} className='transition-colors duration-300 hover:text-black' />
        </div>
    )
}

function SwiperSlider({ swiperRef, className , slidesPerView}: { swiperRef: React.RefObject<SwiperType | null>, className: string , slidesPerView:number }) {
     const slides = new Array(10);
    slides.fill(avatarImg.src, 0, 10);
    return (
        <div className={`parent ${className}`}>
            <div className="swiper " >
                <Swiper loop={true} slidesPerView={slidesPerView} spaceBetween={"10px"} onSwiper={(swiper) => swiperRef.current = swiper} >
                    {slides.map((slide, index) => <SwiperSlide key={index} className='hidden'><TestmonailCard img={slide} /></SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    )
}
