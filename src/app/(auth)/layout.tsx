import type { Metadata } from "next";
import { Geist, Geist_Mono, Courgette } from "next/font/google";
import "../globals.css";
import AuthAside from "../_components/fearures/auth/AuthAside/AuthAside";
import {Toaster} from "react-hot-toast"

export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const corgeteFont = Courgette({
    weight: "400",
    subsets: ['latin']
})

export const metadata: Metadata = {
    title: "Wear store ",
    description: "Wear store for women`s clothes ",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${corgeteFont.className} antialiased bg-rose-800 flex flex-col lg:flex-row gap-5 items-center `}           >
                <AuthAside/>  
                <main className="text-white lg:text-black bg-transparent lg:bg-white w-full lg:w-[80%] min-h-screen">
                    <Toaster position="top-center"/>
                    {children}
                </main>
            </body>
        </html>
    );
}
