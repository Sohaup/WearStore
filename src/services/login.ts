import { loginSchemaType } from "@/schema/loginSchema";

export async function logIn(values:loginSchemaType) {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
        method:"POST" ,
        headers:{
            "Content-Type":"application/json" 
        },
        body:JSON.stringify(values)
    });
    const data = await res.json();
    console.log(data);
    return data;
}