'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { categoriesArr } from '@/utilities/uiDate';
import { Progress } from '@radix-ui/react-progress';
import { Swiper as SwiperType } from 'swiper/types'

export default function InfinityScroll({ slides, Card, progress, setProgress, swiperRef }: { slides: Array<object>, Card: React.ComponentType, setProgress: React.Dispatch<React.SetStateAction<number>>, progress: number, swiperRef: React.RefObject<SwiperType | null> }) {
    return (
        <Swiper
            loop={true}
            slidesPerView={4}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            onSwiper={(swiper)=> swiperRef.current = swiper}
            onSlideChange={(Swiper) => {
                setProgress((Swiper.realIndex * 20));
            }}>
            {slides.map((slide) => (
                <SwiperSlide className='mx-3' >
                    <Card {...slide} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
