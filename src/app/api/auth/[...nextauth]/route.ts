import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { AuthOptions as AuthOptionsType } from "next-auth";
import { loginSchemaType } from "@/schema/loginSchema";
import { logIn } from "@/services/login";

export const AuthOptions: AuthOptionsType = {
    pages: {
        signIn: "/auth" 
    },
    providers: [
        CredentialsProvider({
            name: "login_credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const credentialsValues: loginSchemaType = {
                    email: credentials?.email || "",
                    password: credentials?.password || ""
                };

                const res = await logIn(credentialsValues);

               
                if (res && res.message === "success") {
                   
                    return { ...res.user, token: res.token };
                }
                
               
                return null;
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            // يتم استدعاء هذا الجزء عند تسجيل الدخول لأول مرة
            // نقوم بنقل بيانات المستخدم والتوكن من كائن user إلى الـ token
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({ session, token }) {
            // هنا نجعل البيانات المخزنة في الـ token متاحة في الـ session (Client-side)
            if (token.user) {
                session.user = token.user as any;
            }
            return session;
        }
    },
    // يفضل إضافة secret لزيادة الأمان في التشفير
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(AuthOptions);
export { handler as GET, handler as POST };