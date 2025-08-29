import Footer from '../_components/footer/footer';
import Header from '../_components/header/header';
import Background from './background';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <Header />
      <div className="flex flex-col min-h-screen overflow-x-hidden">

        <div className="flex flex-col lg:flex-row bg-gradient-to-r from-[#D9D9D9] via-[#F0F0F0] to-[#D9D9D9] pb-10">
          
          {/* Video */}
          <Background />

          {/* Right Section */}
          <div className="flex flex-col w-full lg:w-2/3">
            
            {/* Text Block */}
            <div className="bg-[#262628] text-white rounded-lg p-6 sm:p-8 shadow-lg m-4 sm:m-5">
              <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-lg m-4 pb-4 text-justify">
                Nosso estúdio é um espaço dedicado à arte, onde cada detalhe foi pensado para proporcionar conforto e segurança aos nossos clientes. Com uma equipe de profissionais experientes e apaixonados pela arte, garantimos um atendimento personalizado e de qualidade. Venha nos visitar e descubra o que torna nosso estúdio tão especial!
              </p>
              <p className="text-right m-4 text-sm sm:text-base">09/10/2023</p>
            </div>

            {/* Map + Address */}
            <div className="group mb-8">
                <h2 className="text-xl font-bold mb-2 text-center cursor-pointer">Domingos Martins</h2>
                <div className="text-white rounded-lg sm:p-8 shadow-lg m-4 lg:m-5 flex items-center justify-center">
                <iframe
                    className="w-full h-64 sm:h-80 lg:h-46 rounded-lg shadow-lg mt-2"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3384.9920930710405!2d-40.65958786010742!3d-20.360694885253906!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9b51387a012e1%3A0x336b98ffa4a8e76f!2sR.%20Adolfo%20Hulle%2C%2050%20-%20Domingos%20Martins%2C%20ES%2C%2029260-000%2C%20Brazil!5e1!3m2!1sen!2sca!4v1756424202621!5m2!1sen!2sca"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>


              {/* Address */}
              <div className="bg-[#262628] text-white rounded-lg p-6 sm:p-8 shadow-lg m-4 lg:m-5 flex items-center justify-center">
                <p>
                Rua Adolpho Hülle 50, Domingos Martins ES, Brazil
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer color="black" textcolor="white" />
      </div>
    </div>
  );
}
