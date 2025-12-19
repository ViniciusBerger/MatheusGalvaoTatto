"use client"

import Link from "next/link";

export default function MeetArtist() {
    return (
        <section className="bg-gradient-to-r from-[#D9D9D9] via-[#F0F0F0] to-[#D9D9D9] px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
                
                {/* Image */}
                <img 
                    className="rounded-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto"
                    src="/profilepic.png" 
                    alt="profile picture" 
                />
                
               <div className="w-full lg:w-2/3 mx-auto text-center">
                    <h1 className="text-gray-700 text-center mx-auto text-xl sm:text-2xl md:text-3xl lg:text-5xl mb-4 pb-4 border-b-2 border-[#242424]">
                        CONHEÇA MATHEUS GALVÃO
                    </h1>

                    <p className="text-gray-700 mt-4 text-sm sm:text-base md:text-lg lg:text-xl mx-auto text-justify">
                        Eu sou Matheus Galvão, tenho 24 anos e sou de Domingos Martins, Espírito Santo. Trabalho como tatuador há 4 anos e meio, acumulando mais de 28.000 horas de experiência. Meu foco principal é o estilo de <span className="underline text-black">realismo</span> em preto e cinza. Desde a infância, a arte sempre esteve presente na minha vida e, hoje, tenho o privilégio de transformá-la em profissão, criando tatuagens que registram histórias únicas na pele.
                    </p>

                    <div className="w-full flex justify-center mt-8">
                        <Link
                        target="_blank"
                        href="https://pay.hotmart.com/W102551346J?bid=1762222082920"
                        className="inline-block px-6 py-3 bg-black/60 text-white font-medium rounded-lg shadow-md backdrop-blur-sm border border-white/40 hover:bg-black/80 hover:border-yellow-400 hover:shadow-lg transition-all duration-200"
                        >
                        🛒 Compre aqui: Os segredos do realismo
                        </Link>
                    </div>
                    </div>
            </div>
        </section>
    );
}
