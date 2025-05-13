"use client";
import Header from "../_components/header/header";
import { useState } from "react";


export default function Page() {

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [value, setValue] = useState("");


    const handleSubmit = async (event) => {
        event.preventDefault();
        
    }

    return (
        <div>
            <Header />
            <div className="flex bg-gradient-to-r from-[#D9D9D9] via-[#F0F0F0] to-[#D9D9D9] text-black justify-center text-5xl p-4 h-screen">
                
                
                <form className="border-3 border-black rounded-xl p-5 lg:p-20 lg:mt-40 lg:w-1/2 lg:h-1/2 text-[#262628] bg-[#262628]">
                    
                    <h2 className="text-white font-mono text-center text-5xl font-extrabold lg:mb-8">
                        ADICIONAR NOVA SESSAO
                    </h2>

                    <input 
                    className="p-2 mb-4 w-full rounded-lg bg-white text-black"
                    type="text" 
                    name="name"
                    placeholder="Nome do cliente"
                    value= { name }
                    onChange={(e) => setName(e.target.value)}
                    />

                    <input 
                    className={`p-2 mb-4 w-full rounded-lg bg-white text-black ${!date ? 'text-transparent' : ''}`}
                    type="date" 
                    name="date"
                    value= { date }
                    onChange={(e) => setDate(e.target.value)}
                    />

                    <input 
                    className="p-2 mb-4 w-full rounded-lg bg-white text-black"
                    type="number" 
                    name="value"
                    placeholder="Valor do serviço"
                    value= { value }
                    onChange={(e) => setValue(e.target.value)}
                    />

                    <div className="flex gap-4">

                        <input 
                        className={`p-2 mb-4 w-full rounded-lg bg-white text-black ${!startTime ? 'text-transparent' : ''}`}
                        type="time" 
                        name="startTime"
                        placeholder="start time"
                        value= { startTime }
                        onChange={(e) => setStartTime(e.target.value)}
                        />

                        <input 
                        className={`p-2 mb-4 w-full rounded-lg bg-white text-black ${!endTime ? 'text-transparent' : ''}`}
                        type="time" 
                        name="endTime"
                        placeholder="End time"
                        value= { endTime }
                        onChange={(e) => setEndTime(e.target.value)}
                        />
                        {endTime < startTime ? window.alert("End time must be greater than start time") : null}
                    </div>
        
                    <button  className="mx-1/2 mt-16 flex flex-col items-center justify-center border-2 border-black rounded-lg p-4 w-full lg:w-full hover:outline-none hover:shadow-xl bg-[#262628] text-white">
                        ADICIONAR
                    </button>
                    
                </form>

                



            </div>
        </div>
    )
}