"use client"
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
                
                {/* Text */}
                <div className="w-full lg:w-2/3">
                    <h1 className="text-gray-700 text-center lg:text-left text-xl sm:text-2xl md:text-3xl lg:text-5xl mb-4 pb-4 border-b-2 border-[#242424]">
                        CONHEÇA MATHEUS GALVÃO
                    </h1>
                    <div className="mt-8 lg:mt-16">
                        <p className="text-gray-700 mt-4 text-sm sm:text-base md:text-lg lg:text-xl lg:w-2/3 mx-auto lg:mx-0 text-justify">
                            Eu sou Matheus Galvão, tenho 22 anos e sou de Domingos Martins, Espírito Santo. Trabalho como tatuador há 2 anos e meio, com um foco especial no estilo de realismo em preto e cinza. Desde criança, a arte sempre fez parte da minha vida, e hoje eu tenho o privilégio de viver dela, criando tatuagens que contam histórias únicas.
                        </p>
                        <p className="text-[#242424] mt-4 text-sm sm:text-base lg:text-lg lg:w-1/2 mx-auto lg:mx-0 text-right">
                            09/07/2024
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
