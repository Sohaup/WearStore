import React from 'react'
import Seperator from '../Seperator/Seperator'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className='bg-black text-white py-20 relative w-full'>
        <div className="sep relative ">
            <Seperator sepClassName='bg-rose-800' className='text-2xl'/>
        </div>
        <div className="main flex flex-col lg:flex-row justify-between items-center cont py-5 gap-10 lg:gap-0">
            <div className="group w-full lg:w-1/4 space-y-3 text-center">
                <h2 className='text-4xl '>TimeLess style Every day comfert</h2>
                <p className='text-stone-400 text-sm max-w-3/4  mx-auto lg:max-w-full '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Numquam quia iusto laudantium unde sunt sapiente atque, vero voluptatibus? Sapiente,
                    neque!
                </p>
                <div className="input bg-white rounded-md flex gap-1  w-full md:w-1/2 lg:w-fit mt-5 mx-auto ">
                    <input placeholder='Your email ...' className='placeholder:text-violet-200 text-black   border-0 focus:border-0 focus:outline-0'/>
                    <Button className='rounded-md ms-auto '>Subscribe</Button>
                </div>
            </div>
            <div className="list">
                <ul className='flex gap-10'>
                <div className="group space-y-2 text-md text-stone-400">
                    <h3 className='text-lg font-bold text-white'>Company</h3>
                    <li>About us</li>
                    <li>Careers</li>
                    <li>Contact us</li>
                    <li>F&Q</li>
                </div>
                 <div className="group space-y-2 text-md text-stone-400">
                    <h3 className='text-lg font-bold text-white'>Products</h3>
                    <li>Hoodie Products</li>
                    <li>Dress Products</li>
                    <li>Shoes Products</li>
                    <li>Pants Products</li>
                </div>
                 <div className="group space-y-2 text-md text-stone-400">
                    <h3 className='text-lg font-bold text-white' >Services</h3>
                    <li>customer services</li>
                    <li>become inflouncer</li>
                    <li>legal adversory</li>
                    <li>Home Vauolation</li>
                </div>
                 <div className="group space-y-2 text-md text-stone-400 ">
                    <h3 className='text-lg font-bold text-white   '>Fllow us</h3>
                    <li className='underline'>Instegram</li>
                    <li className='underline'>Twitter</li>
                    <li className='underline'>LinkedIn</li>                       
                    <li className='underline'>FaceBook</li>    
                </div>
                </ul>
            </div>
        </div>
        <div className="sep absolute bottom-0 right-0 left-0 ">
            <Seperator sepClassName='bg-rose-800' className='text-6xl'/>
        </div>
    </footer>
  )
}
