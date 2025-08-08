"use client"
import Footer from "../_components/footer/footer"
import Header from "../_components/header/header"
import Link from "next/link"
import {useRouter} from "next/navigation"
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../_utils/firebase";
import { useEffect } from "react"



export default function page() {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const router = useRouter()
    
    const logout = () => {
        auth.signOut()
        router.push("/")
    }


    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log("Form submitted")
        const email = event.target.email.value
        const password = event.target.password.value

        try {
            await signInWithEmailAndPassword(email, password)
        }
        catch (error) {
            console.error("Login failed", error)
        }
        
    }

    useEffect(() => {
        if (user) {
            router.push(`/login/${user.user.uid}`)
        } [user] })

    


    return (
        <div>
            <Header />
            <div className="bg-gradient-to-r from-[#D9D9D9] via-[#F0F0F0] to-[#D9D9D9] pb-10 flex flex-col items-center justify-center h-screen ">
            <form 
                onSubmit={handleSubmit} 
                className="border-3 border-black rounded-xl p-5 lg:p-20 lg:w-1/3 lg:mt-10 text-[#262628] bg-[#262628]"
            >
            <h2 className="text-white font-mono text-center text-5xl font-extrabold lg:mb-8">
                GALVAO TATTOART
            </h2>

            <div className="bg-white mt-5 flex flex-col items-center justify-center border-2 border-black rounded-lg p-4 w-full lg:w-auto hover:outline-none hover:shadow-lg hover:border-[#736356]">
                <label className="mb-2" htmlFor="EMAIL">EMAIL</label>
                <input
                className="w-full border-0 border-b border-gray-400 focus:outline-none focus:border-[#262628] focus:border-b-4 px-2"
                type="email"
                id="email"
                name="email"
                required
                />
            </div>

            <div className="bg-white mt-5 flex flex-col items-center justify-center border-2 border-black rounded-lg p-4 w-full lg:w-auto hover:outline-none hover:shadow-lg hover:border-[#736356]">
                <label className="mb-2" htmlFor="password">SENHA</label>
                <input
                className="w-full border-0 border-b border-gray-400 focus:outline-none focus:border-[#262628] focus:border-b-4 px-2 text-center"
                type="password"
                id="password"
                name="password"
                required
                />
            </div>

            <div className="mx-auto mt-6 flex flex-col items-center justify-center border-2 border-black rounded-lg p-4 w-full lg:w-2/3 hover:outline-none hover:shadow-lg hover:bg-gradient-to-r from-[#D9D9D9] via-[#F0F0F0] to-[#D9D9D9] bg-white">
                <button type="submit" className="w-full">LOGIN</button>
            </div>
            </form>

            </div>
            <Footer color="black" textcolor="white" />
        </div>
        )

    }

