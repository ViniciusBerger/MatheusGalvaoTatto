
import Footer from "../_components/footer/footer"
import Header from "../_components/header/header"
import Link from "next/link"
import { auth } from "../_utils/firebase"


export default function page() {
    return (
        <div>
            <Header />
            <div className="bg-gradient-to-r from-[#D9D9D9] via-[#F0F0F0] to-[#D9D9D9] pb-10 flex flex-col items-center justify-center h-screen ">
            <form 
                className="border-3 border-black rounded-xl lg:p-20 lg:w-1/3 lg:h-screen lg:mt-10 text-[#262628]  bg-[#262628]" 
            >
                <h2 className="text-white font-mono text-center text-5xl m-0 font-extrabold lg:mb-8">GALVAO TATTOART</h2>
                <div className="bg-white m-5 flex flex-col items-center justify-center border-2 border-black rounded-lg p-2 hover:outline-none hover:shadow-lg hover:border-[#736356] ">
                    <label className="m-5" htmlFor="EMAIL">EMAIL </label>
                    <input className="border-0 border-b border-gray-400 focus:outline-none focus:border-[#262628] focus:border-b-3" type="email" id="EMAIL" name="EMAIL" placeholder="" required></input>
                </div>

                <div className="bg-white m-5 flex flex-col items-center justify-center border-2 border-black rounded-lg p-2 hover:outline-none hover:shadow-lg hover:border-[#736356]">
                    <label className="m-5 " htmlFor="password">SENHA</label>
                    <input className="border-0 border-b border-gray-400 focus:outline-none focus:border-[#262628] focus:border-b-3 text-center " type="password" id="password" name="password" placeholder="" required></input>
                </div>

                <div className="m-auto lg:mt-10 flex flex-col items-center justify-center border-2 border-black rounded-lg p-5 lg:w-2/3 hover:outline-none hover:shadow-lg hover:bg-gradient-to-r from-[#D9D9D9] via-[#F0F0F0] to-[#D9D9D9] bg-white">
                    <button type="submit">LOGIN</button>
                </div>
            </form>
            </div>
            <Footer color="black" textcolor="white" />
        </div>
        )
}