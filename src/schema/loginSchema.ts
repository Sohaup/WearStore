import { authErrorMessages } from "@/utilities/errorMessages";
import * as zod from "zod";

const { name, email, password, repassword, phone } = authErrorMessages

export const loginSchema = zod.object({
    email: zod.email(email.email).nonempty(email.required),
    password: zod.string(password.string).nonempty(password.required)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/, password.notValid)
      
});

export type loginSchemaType = zod.infer<typeof loginSchema>;