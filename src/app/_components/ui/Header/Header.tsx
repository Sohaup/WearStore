'use client'
import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Ellipsis, Heart, Lock, Search, User } from 'lucide-react'
import { NextFont, NextFontWithVariable } from 'next/dist/compiled/@next/font'


export default function Header({ fontFamily }: { fontFamily: NextFontWithVariable | NextFont }) {
    return (
        <header className='flex justify-between items-center cont fixed top-0 left-[5%] z-50 text-black  '>
            <div className="logo block lg:hidden">
                <p className={`text-3xl font-bold  `}>Wear</p>
            </div>
            <HeaderPrepictive fontFamily={fontFamily} className='hidden lg:flex'/>
            <DropdownMenu >
                <DropdownMenuTrigger className='flex lg:hidden '><Ellipsis/></DropdownMenuTrigger>
                <DropdownMenuContent>
                   <HeaderPrepictive fontFamily={fontFamily} className='flex flex-col gap-10 lg:hidden'/>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    )
}

function HeaderPrepictive({ fontFamily , className}: { fontFamily: NextFontWithVariable | NextFont , className:string }) {
    return ( 
        <div className={`flex justify-between items-center ${fontFamily.className} cont ${className}`}>
            <div className="logo">
                <p className={`text-3xl font-bold  `}>Wear</p>
            </div>
            <nav>
                <ul className="list flex flex-col lg:flex-row  gap-2 justify-center items-center">
                    <li><p>Home</p></li>
                    <li>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>
                                        <p className='text-[16px] font-[15px] text-black'>Store</p>
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className='flex flex-col lg:flex-row gap-1'>
                                        <NavigationMenuLink>Clothes</NavigationMenuLink>
                                        <NavigationMenuLink>News</NavigationMenuLink>
                                        <NavigationMenuLink>Blog</NavigationMenuLink>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </li>
                    <li><p>About Us</p></li>
                    <li><p>FAQ</p></li>
                    <li><p>Contact us</p></li>
                </ul>
            </nav>
            <div className="icons flex gap-2">
                <Search />
                <User />
                <Heart />
                <Lock />
            </div>
        </div>
    )
}
