import { productType } from '@/types/productTypes'
import { ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function ProductCard({product , className}:{product:productType , className:string}) {
  return (
    <div >
        <div className="card-img relative rounded-lg">
            <Image src={product.imageCover} alt={product.title} width={200} height={200} className={`w-full  object-cover ${className}`}/>
            <div className="wrapper absolute inset-0 flex items-start justify-between p-5 bg-black/40 rounded-lg">
                <span className="badge bg-rose-800 text-white">50% Off</span>
                <span className='icon-border bg-white rounded-full  '>
                    <ShoppingBag/>
                </span>                
            </div>
        </div>
        <div className="texts">
            <h3>{product.title}</h3>
            <div className="group flex gap-2">
                <p className='text-xl font-semibold'>${product.price}</p>
                <p className='text-slate-500 line-through '>${product.price + 120}</p>
            </div>
        </div>
    </div>
  )
}
