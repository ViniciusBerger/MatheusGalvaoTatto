"use client"
export default function MeetArtist() {
    return (
        <div className="flex flex-col lg:flex-row bg-gradient-to-r from-[#D9D9D9] via-[#F0F0F0] to-[#D9D9D9] p-4 min-h-80">
            <img 
                className="ml-5 lg:ml-10 rounded-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto mt-10" 
                src="/profilepic.png" 
                alt="profile picture" 
            />
            
            <div className="ml-0 lg:ml-10 mt-14 lg:mt-0 w-full lg:w-2/3">
                <h1 className="text-gray-700 text-center text-xl sm:text-2xl md:text-3xl lg:text-5xl lg:mt-16 mb-4 pb-4 border-b-2 border-[#242424]">
                    CONHEÇA MATHEUS GALVÃO
                </h1>
                <div className="lg:mt-24">
                    <p className="text-gray-700 mt-4 text-sm sm:text-base md:text-lg lg:text-xl lg:w-2/3 mx-auto lg:mx-30 text-justify">
                        Eu sou Matheus Galvão, tenho 22 anos e sou de Domingos Martins, Espírito Santo. Trabalho como tatuador há 2 anos e meio, com um foco especial no estilo de realismo em preto e cinza. Desde criança, a arte sempre fez parte da minha vida, e hoje eu tenho o privilégio de viver dela, criando tatuagens que contam histórias únicas.
                    </p>
                    <p className="text-[#242424] mt-4 text-sm sm:text-base lg:text-lg lg:w-1/2 mx-auto lg:mx-0 text-right">
                        09/07/2024
                    </p>
                </div>
            </div>
        </div>
    );
}
