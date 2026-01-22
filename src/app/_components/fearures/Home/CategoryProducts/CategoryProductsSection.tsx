'use client'
import { hocLoader } from '@/app/_components/ui/HOCLoader/HocLoader'
import ProductCard from '@/app/_components/ui/ProductCard/ProductCard';
import { Button } from '@/components/ui/button';
import { getCategoryData } from '@/store/slices/categorySlice';
import { getProductsData } from '@/store/slices/productSlice';
import { dispatchType, storeType } from '@/store/store';
import { categoryDataType } from '@/types/categoryTypes'
import { productType } from '@/types/productTypes';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import categryImg from "@/../public/Home/Categories/categoryImg.jpg"

const AsyncCategorySection = hocLoader(CategoryProductPrespictive);

export default function CategoryProductsSection() {
    const categoryState = useSelector((store:storeType)=> store.categoryReducer);
    const productsState = useSelector((store:storeType)=> store.productsReducer);
    const dispatch = useDispatch<dispatchType>();  

    useEffect(()=>{       
        dispatch(getCategoryData());
    }, []);
    
    return (
        <AsyncCategorySection isLoading={categoryState.isLoading} isError={categoryState.isError} category={categoryState.category} products={productsState.products} />
    )
}

function CategoryProductPrespictive({ isLoading, isError, category, products }: { isLoading?: boolean, isError?: boolean, category?: categoryDataType, products?: productType[] }) {
    useEffect(()=> {
        console.log(category?.image);
    }, [])
    return (
        <>
            {
                category ?
                    <section className='flex flex-col-reverse lg:flex-row  gap-5 py-20 cont '>
                        <div className="products  w-full  lg:w-1/2 space-y-5">
                            <div className="title flex justify-between ">
                                <h2 className='italic text-xl uppercase'>New Arrivals</h2>
                                <div className="badges space-x-3">
                                    <span className='badge'>All</span>
                                    <span className='badge'>Hoodie</span>
                                    <span className='badge'>Shoes</span>
                                    <span className='badge'>Pants</span>
                                </div>
                            </div>
                            <div className="main  grid grid-cols-1 md:grid-cols-2 gap-5 ">
                                {products ? products.slice(1 ,5).map((product) => <ProductCard key={product._id} product={product} className='h-120 lg:h-60 xl:h-80 2xl:h-100 ' />) : ""}
                            </div>
                        </div>
                        <div className="category w-full lg:w-1/2">
                            <div className="img relative min-h-full">
                                <Image  src={category.image ? category.image : categryImg } alt={category.name ? category.name : "dress image"} width={200} height={200} className='w-full h-full rounded-lg' />
                                <div className="wrapper absolute inset-0 p-5 flex flex-col items-center justify-between bg-black/40 rounded-lg ">
                                    <div className="title">
                                        <h4 className='text-7xl text-white'>Wear</h4>
                                    </div>
                                    <div className="group space-y-4 text-center">
                                        <div className="description space-y-4">
                                            <h4 className='text-6xl text-white'>Get Your Special Discount 50% For new member</h4>
                                            <p className='text-sm text-slate-300 font-semibold'>join today and enjoy stylish savings on your first purchase</p>
                                        </div>
                                        <div className="btn">
                                            <Button className='bg-white rounded-md px-8 py-6 font-black text-md text-black hover:bg-rose-400 hover:text-white duration-300'>Shop all products</Button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                    : ""
            }
        </>
    )
}
