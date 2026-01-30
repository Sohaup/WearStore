import { registerSchemaType } from "@/schema/registerSchema";

export async function singUp(values:registerSchemaType) {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup" , {
        method:"POST" ,
        headers:{
            "Content-Type":"application/json"
        } ,
        body:JSON.stringify(values)
    });
    const data = await res.json();
    return data;
}