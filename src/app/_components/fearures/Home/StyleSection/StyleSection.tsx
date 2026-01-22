import { stylesArr } from '@/utilities/uiDate'
import Image from 'next/image'
import React from 'react'
import mainImg from '@/../public/Home/Styles/main2.jpg';
import { Button } from '@/components/ui/button';


export default function StyleSection() {
    return (
        <section className='cont flex flex-col-reverse md:flex-row justify-between items-center gap-20 py-5 '>
            <div className="min-imgs flex flex-col gap-3 w-full md:max-w-1/2">
                <div className="title space-y-3 ">
                    <h2 className='text-3xl font-bold text-center'>TimeLess Style Every day Comfort</h2>
                    <p className='text-stone-700 text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Commodi esse, id sit quibusdam odio quia, ullam magnam
                        soluta in ipsum eos voluptatem voluptatibus ex neque,
                        at doloremque maiores quidem modi?
                    </p>
                </div>
                <div className="imgs grid grid-cols-2 gap-5 ">
                    {stylesArr.map((style) => (
                        <div key={style.id} className='relative after:absolute after:inset-0 after:rounded-lg after:bg-black/40'>
                            <Image  src={style.img} alt='women style image' width={200} height={200} className='w-full h-full rounded-lg ' />
                        </div>
                    ))}
                </div>
                <div className="foot space-y-3 text-center">
                    <p className='text-stone-700'>
                        Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Aliquam, nihil.
                        Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet.
                    </p>
                    <Button className='w-full py-4 rounded-md'>
                        Explore the Products
                    </Button>
                </div>
            </div>
            <div className="main-img w-full md:w-1/2 relative after:absolute after:inset-0 after:rounded-lg after:bg-black/40 ">
                <Image src={mainImg} alt='women style image' width={200} height={200} className='w-full h-220 md:h-150 lg:h-200 xl:h-220 rounded-lg' />
            </div>
        </section>
    )
}
