import { authErrorMessages } from "@/utilities/errorMessages";
import * as zod from "zod";

const {name , email , password , repassword , phone} = authErrorMessages

export const registerSchema = zod.object({
    name:zod.string(name.string).nonempty(name.required) ,
    email:zod.email(email.email).nonempty(email.required) ,
    password:zod.string(password.string).nonempty(password.required)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/ , password.notValid)   
     ,
    rePassword:zod.string(repassword.string).nonempty(repassword.required) ,
    phone:zod.string(phone.string).nonempty(phone.required).regex(/^01[0125][0-9]{8}$/ , phone.notValid)

}).refine(function (values) {
    console.log(values.password)
     console.log(values.rePassword)
    if (values.password != values.rePassword) {
        return false
    }
    return true;
},{message:repassword.notMatch , path:['rePassword']});

export type registerSchemaType = zod.infer<typeof registerSchema>;