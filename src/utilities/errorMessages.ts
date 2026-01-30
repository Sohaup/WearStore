export const authErrorMessages = {
    name : {
        string:"name must be string" ,
        required:"name is required" 
    } ,
    email:{
        required:"email is required" ,
        email:"unvalid email"
    } ,
    password:{
        string:"password must be string" ,
        required:"password is required",
        notValid:"password is not valid"
    } ,
    repassword:{
        string:"re password must be string" ,
        required:"re password is required" ,
        notMatch:"re password must match password"
    } ,
    phone:{
        string:"phone must be string" ,
        required:"phone is required" ,
        notValid:"not valid phone number"
    }
}