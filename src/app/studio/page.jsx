import Footer from '../_components/footer/footer';
import Header from '../_components/header/header';
import Background from './background';

export default function Page() {
    return (
        <div>
            <Header />
            <div className='flex flex-col min-h-full'>
                <div className='flex flex-col lg:flex-row min-h-screen bg-gradient-to-r from-[#D9D9D9] via-[#F0F0F0] to-[#D9D9D9] pb-10'>
                    <Background />
                    
                    <div className='flex flex-col w-full lg:w-2/3'>
                        <div className='bg-[#262628] text-white rounded-lg p-6 sm:p-8 shadow-lg m-4 sm:m-5'>
                            <p className='text-center text-lg sm:text-xl md:text-2xl lg:text-lg m-4 pb-4 text-justify'>
                                Nosso estúdio é um espaço dedicado à arte, onde cada detalhe foi pensado para proporcionar conforto e segurança aos nossos clientes. Com uma equipe de profissionais experientes e apaixonados pela arte, garantimos um atendimento personalizado e de qualidade. Venha nos visitar e descubra o que torna nosso estúdio tão especial!
                            </p>
                            <p className='text-right m-4 text-sm sm:text-base'> 09/10/2023</p>
                        </div>
                        
                        <div className='flex flex-col lg:mt-12 lg:flex-row lg:h-1/3'>
                            <div className='w-full sm:w-2/3 lg:w-1/2 h-64 sm:h-80 lg:h-full rounded-lg shadow-lg m-4 lg:m-5 overflow-hidden max-w-full'>
                                <iframe 
                                    className='w-full h-full' 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.3483157483693!2d-40.66491562513505!3d-20.368523552113075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9b51a5a14fb9b%3A0x8ac100977593c444!2sAv.%20Kurt%20Lewin%2C%20545%20-%20Carlos%20Schwambach%2C%20Domingos%20Martins%20-%20ES%2C%2029260-000%2C%20Brasil!5e0!3m2!1spt-BR!2sca!4v1743745585629!5m2!1spt-BR!2sca" 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>

                            <div className='bg-[#262628] text-white rounded-lg p-6 sm:p-8 shadow-lg m-4 lg:m-5 lg:h-full'>
                                <p className='text-center text-sm sm:text-base lg:text-lg'>
                                    Av. Kurt Lewin - Carlos Schwambach 545 Domingos Martins - ES
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer color="black" textcolor="white"/>
            </div>
        </div>
    )
}
