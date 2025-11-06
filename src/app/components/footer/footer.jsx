"use client";
import Link from "next/link";
export default function Footer({color, textcolor}) {
    return (
        <footer className={`flex flex-col lg:flex-row lg:space-x-3 pb-20 pt-14 font-mono`} style={{ backgroundColor: color, color: textcolor }}>
            <div className="p-4 lg:mt-20 lg:ml-16 lg:w-1/3">
                <h2 className="text-xl font-bold mb-4 lg:mb-16">HORARIO DE FUNCIONAMENTO</h2>
                <div className="space-y-2">
                    <p className="flex justify-between items-center w-full sm:w-80 mb-2">
                        <span>Segunda-feira:</span> <span>10:00 - 19:00</span>
                    </p>
                    <p className="flex justify-between items-center w-full sm:w-80 mb-2">
                        <span>Terça-feira:</span> <span>10:00 - 19:00</span>
                    </p>
                    <p className="flex justify-between items-center w-full sm:w-80 mb-2">
                        <span>Quarta-feira:</span> <span>10:00 - 19:00</span>
                    </p>
                    <p className="flex justify-between items-center w-full sm:w-80 mb-2">
                        <span>Quinta-feira:</span> <span>10:00 - 19:00</span>
                    </p>
                    <p className="flex justify-between items-center w-full sm:w-80 mb-2">
                        <span>Sexta-feira:</span> <span>10:00 - 19:00</span>
                    </p>
                    <p className="flex justify-between items-center w-full sm:w-80 mb-2">
                        <span>Sábado:</span> <span>10:00 - 19:00</span>
                    </p>
                    <p className="flex justify-between items-center w-full sm:w-80 mb-2">
                        <span>Domingo:</span> <span>fechado</span>
                    </p>
                </div>
            </div>

            <div className="lg:w-1/3 lg:pl-5 lg:mt-20 p-4">
                <h2 className="text-xl font-bold mb-4 lg:mb-8 text-center">LOCATION</h2>
                <Link 
                    className="block mb-4 lg:ml-2 underline text-center lg:text-left" 
                    href={"https://www.google.com/maps?ll=-20.368529,-40.662341&z=15&t=m&hl=pt-BR&gl=CA&mapclient=embed&q=Av.+Kurt+Lewin,+545+-+Carlos+Schwambach+Domingos+Martins+-+ES+29260-000+Brasil"}>Av. Kurt Lewin - 545 Domingos Martins - ES</Link>

                <iframe 
                    className="w-full h-64 sm:h-80 lg:h-46 rounded-lg shadow-lg" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.3483157483693!2d-40.66491562513505!3d-20.368523552113075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9b51a5a14fb9b%3A0x8ac100977593c444!2sAv.%20Kurt%20Lewin%2C%20545%20-%20Carlos%20Schwambach%2C%20Domingos%20Martins%20-%20ES%2C%2029260-000%2C%20Brasil!5e0!3m2!1spt-BR!2sca!4v1743745585629!5m2!1spt-BR!2sca" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

            <div className="lg:w-1/3 text-center lg:mt-20 p-4">
                <h2 className="text-xl font-bold mb-4 lg:mb-20 text-center">REDES SOCIAIS</h2>
                <div className="flex flex-row items-center space-x-3 justify-center lg:justify-center space-between lg:mt-32">
                    <Link 
                        className="underline" 
                        href={"https://www.instagram.com/galvao_tattooart/"}><img className="w-8 h-8 rounded-lg" src="instagram.png" alt="instagram"></img></Link>
                    
                    <Link   
                        className="underline" 
                        target="blank"
                        href={"https://wa.me/+5527997631008"}><img className="w-8 h-8 rounded-lg" src="whatsapp.png" alt="whatsapp"></img></Link>
                    
                    <Link 
                        className="underline" 
                        href={"https://www.tiktok.com/@matheusgalvaotattoo"}><img className="w-8 h-8 rounded-lg" src="tiktok.png" alt="tiktok"></img></Link>
                </div>
            </div>
        </footer>
    );
}