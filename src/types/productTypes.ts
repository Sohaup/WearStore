import { categoryType, subType } from "./categoryTypes"

export type productType = {
    sold:number ,
    images:string[] ,
    subcategory:categoryType[] ,
    ratingsQuantity:number ,
    _id:string ,
    title:string ,
    slug:string ,
    description:string ,
    quantity:number ,
    price:number ,
    imageCover:string ,
    category:subType ,
    brand:subType,
    ratingsAverage:number ,
    createdAt:string ,
    updatedAt:string ,
    id:string
}

export type productStateType = {
    isLoading:boolean ,
    isError:boolean ,
    products:productType[]
}