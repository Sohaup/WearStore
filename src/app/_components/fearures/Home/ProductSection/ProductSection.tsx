'use client'
import { hocLoader } from '@/app/_components/ui/HOCLoader/HocLoader';
import { Button } from '@/components/ui/button';
import { getProductsData } from '@/store/slices/productSlice';
import { dispatchType, storeType } from '@/store/store'
import { productType } from '@/types/productTypes';
import { ArrowRight, Box, Earth, Heart, Icon, Info, LucideIcon, Scissors, ShoppingBasket } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';

const AsyncProductPrespictive = hocLoader(ProductsSectionPrepictive);

export default function ProductSection() {
  const productsState = useSelector((store: storeType) => store.productsReducer);
  const dispatch = useDispatch<dispatchType>();
  const swiperRef = useRef<SwiperType>(null);
   const imagesRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    dispatch(getProductsData());
  }, []);
  return (
    <AsyncProductPrespictive isLoading={productsState.isLoading} isError={productsState.isError} product={productsState.products[0]} swiperRef={swiperRef} imagesRef={imagesRef} />
  )
}

function ProductsSectionPrepictive({ isLoading, isError, product, swiperRef , imagesRef }: { isLoading?: boolean, isError?: boolean, product?: productType, swiperRef?: React.RefObject<SwiperType | null>  , imagesRef?: React.RefObject<HTMLDivElement | null>}) {
 
  return (
    <>
      {
        product ?
          <section className='cont flex flex-col lg:flex-row justify-between  gap-5 my-auto py-5'>
            < div className="product flex flex-col sm:flex-row-reverse  justify-between items-center gap-3 w-full lg:w-1/2" >
              <div className="img w-3/4 ">
                <Swiper loop={true} slidesPerView={1} className='max-h-200 ' onSwiper={(swiper) => swiperRef ?  swiperRef.current = swiper  : ""}>
                  {product.images.map((img) => <SwiperSlide key={img}><Image src={img} alt={product.title} width={200} height={200} className='w-full h-full rounded-lg' /></SwiperSlide>)}
                </Swiper>
              </div>
              <div className="sub-imgs grid grid-cols-4 sm:grid-cols-1  gap-4 my-auto w-full lg:w-40 self-start " ref={imagesRef}>
                {product.images.map((img, index) => <Image key={img} src={img} alt={product.title} width={200} height={200} className='w-40 h-40 rounded-lg sub-img' onClick={(e) => {
                  swiperRef?.current?.slideTo(index);
                  const imgs = imagesRef?.current?.querySelectorAll(".sub-img");                 
                  imgs?.forEach((subImg)=> {
                    if (subImg != e.currentTarget) {
                      console.log(`current ${subImg} target ${e.currentTarget}`)
                      subImg.classList.remove("border-5");
                      subImg.classList.remove("border-rose-700");
                      subImg.classList.remove("rounded-xl");
                    }
                  });
                  e.currentTarget.classList.toggle("border-5");
                  e.currentTarget.classList.toggle("border-rose-700");
                  e.currentTarget.classList.toggle("rounded-xl");                  
                }}
                />)}
              </div>
            </div > 
            <div className="details w-full lg:w-1/2 flex flex-col justify-center  gap-5 mt-5 lg:my-0">
              <div className="title flex flex-col gap-5">
                <h2 className='text-4xl  uppercase text-center lg:text-start'>{product.title}</h2>
                <div className="group flex items-center gap-8 ">
                  <div className="price relative">
                    <p className='text-slate-500 line-through absolute -top-5'>${product.price * 2}</p>
                    <p className='text-4xl'>${product.price}</p>
                  </div>
                  <div className="badges flex gap-2">
                    <span className="badge">50% off</span>
                    <span className="badge">free delivery</span>
                    <span className="badge">easy 14 day returns</span>
                  </div>

                </div>
                <div className="show-more flex gap-2 justify-between items-center bg-violet-200 py-4 px-5">
                  <div className="group flex gap-1">
                    <Info />
                    <p>see more info about this product</p>
                  </div>

                  <div className="group flex gap-1">
                    <p>Show More</p>
                    <ArrowRight />
                  </div>
                </div>
              </div>
              <div className="main flex flex-col gap-5">
                <div className="group flex flex-col gap-3 ">
                  <h3 className='font-semibold text-lg'>Select size</h3>

                  <div className="badges flex gap-2">
                    <div className="badge uppercase rounded-lg">
                      s
                    </div>
                    <div className="badge uppercase rounded-lg">
                      M
                    </div>
                    <div className="badge uppercase rounded-lg">
                      L
                    </div>
                    <div className="badge uppercase rounded-lg">
                      XL
                    </div>
                    <div className="badge uppercase rounded-lg">
                      XXL
                    </div>
                  </div>

                </div>
                <div className="texts">
                  <p className='text-slate-700'>{product.description}</p>
                </div>
              </div>
              <div className="foot flex flex-col  gap-3">
                <div className="made flex gap-2 justify-between">
                  <MadeCard Icon={Scissors} title='martial' text='pure cotton' />
                  <MadeCard Icon={Box} title='product by' text='louis ange' />
                  <MadeCard Icon={Earth} title='made in' text='Egypt' />
                </div>
                <div className="buy flex flex-col md:flex-row items-center gap-2">
                  <Button className='w-[90%] py-6 rounded-md'>Buy now</Button>
                  <div className="icons flex gap-2 justify-evenly md:justify-normal  w-full md:w-fit">
                    <span className='icon-border'><ShoppingBasket /></span>
                    <span className='icon-border'><Heart /></span>
                  </div>
                </div>
              </div>

            </div>
          </section >
          : ""
      }
    </>

  )
}

function MadeCard({ Icon, title, text }: { Icon: LucideIcon, title: string, text: string }) {
  return (
    <div className="card flex flex-col items-start justify-center gap-1  border-2 rounded-lg p-2 w-80 h-40 hover:bg-violet-300  transition-colors duration-300 ">
      <span className='bg-rose-800 flex justify-center items-center p-2 text-white rounded-full'><Icon /></span>
      <h4 className='text-slate-500 text-sm'>{title}</h4>
      <p className='text-xl font-semibold'>{text}</p>
    </div>
  )
} 
