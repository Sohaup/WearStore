export type categoryType = {
    _id:string ,
    name:string ,
    slug:string ,
    category:string
}

export type subType = {
    _id:string ,
    name:string ,
    slug:string ,
    image:string
}

export type categoryDataType = {
    _id:string ,
    name:string,
    slug:string ,
    image:string ,
    createdAt:string,
    updatedAt:string ,
    __v:number 
}

export type categoryDataStateType = {
    isLoading:boolean ,
    isError:boolean ,
    category:categoryDataType|{}
}