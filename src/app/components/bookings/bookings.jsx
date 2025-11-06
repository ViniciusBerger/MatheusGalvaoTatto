export default function Bookings() {

    return (
        <div>
            <div className="w-xl h-screen m-0 mx-auto p-4 bg-[#262628] text-white">  
                
                <div className="flex flex-col items-center justify-center  mt-86 gap-4"> 
                    <button className='border-b-2 border-r-2 border-black p-5 hover:shadow-lg shadow-gray-500 '>
                        ADICIONAR
                    </button>

                    <button className='border-b-2 border-r-2 border-white p-5 hover:shadow-lg shadow-brown-500'>
                        EDITAR
                    </button>

                    <button className='border-b-2 border-r-2 border-white p-5 hover:shadow-lg shadow-brown-500'>
                        REMOVER
                    </button>
                </div>
            </div>
        </div>
    )
}