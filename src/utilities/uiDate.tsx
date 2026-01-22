import hoodieImg from "@/../public/Home/Categories/hoodie.jpg"
import dressImg from "@/../public/Home/Categories/dress.jpg"
import pantsImg from "@/../public/Home/Categories/pants.jpg"
import ShirtsImg from "@/../public/Home/Categories/shirts.jpg"
import shoesImg from "@/../public/Home/Categories/shoes.jpg"
import jeansImg from "@/../public/Home/Categories/jeans.jpg"
import min1Img from '@/../public/Home/Styles/min1.jpg'
import min2Img from '@/../public/Home/Styles/min2.jpg'
import min3Img from '@/../public/Home/Styles/min3.jpg'
import min4Img from '@/../public/Home/Styles/min6.jpg'

type categoryUiType = {
    img:string ,
    name:string ,
    id:number
}

type styleUiType = {
    id:number ,
    img:string ,    
}

export const categoriesArr:categoryUiType[] = [
    {img:hoodieImg.src , name:"Hoodie" , id:1} ,
    {img:dressImg.src , name:"Dress" , id:2} ,
    {img:ShirtsImg.src , name:"Shirts" , id:3} ,
    {img:shoesImg.src , name:"Shoes" , id:4} ,
    {img:pantsImg.src , name:"Pants" , id:5} ,
    {img:jeansImg.src , name:"Jeans" , id:6}
]

export const stylesArr:styleUiType[] = [
    {id:1 , img:min3Img.src} ,
    {id:2 , img:min1Img.src} ,
    {id:3 , img:min2Img.src} ,
    {id:4 , img:min4Img.src}
] 