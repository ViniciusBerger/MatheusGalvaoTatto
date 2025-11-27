"use client";
import Link from "next/link";

export default function Footer({ color, textcolor }) {
  return (
    <footer
      style={{ backgroundColor: color, color: textcolor }}
      className="font-mono"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:gap-6 pb-20 pt-14 px-4">
        {/* Horário */}
        <div className="p-4 md:mt-10 md:ml-4 md:w-1/3">
          <h2 className="text-xl font-bold mb-4 md:mb-10">
            HORARIO DE FUNCIONAMENTO
          </h2>
          <div className="space-y-2">
            {[
              ["Segunda-feira:", "12:00 - 19:00"],
              ["Terça-feira:", "12:00 - 19:00"],
              ["Quarta-feira:", "12:00 - 19:00"],
              ["Quinta-feira:", "12:00 - 19:00"],
              ["Sexta-feira:", "12:00 - 19:00"],
              ["Sábado:", "12:00 - 19:00"],
              ["Domingo:", "fechado"],
            ].map(([day, time]) => (
              <p
                key={day}
                className="flex justify-between items-center w-full sm:w-80 mb-2"
              >
                <span>{day}</span>
                <span>{time}</span>
              </p>
            ))}
          </div>
        </div>

        {/* Endereços + mapas */}
        <div className="md:w-1/3 md:pl-5 md:mt-10 p-4">
          <div className="group mb-8">
            <h2 className="text-xl font-bold mb-2 text-center cursor-pointer">
              Domingos Martins
            </h2>
            <Link
              className="block mb-2 underline text-center md:text-left"
              href="https://www.google.com/maps?ll=-20.368529,-40.662341&z=15&t=m&hl=pt-BR&gl=CA&mapclient=embed&q=Av.+Kurt+Lewin,+545+-+Carlos+Schwambach+Domingos+Martins+-+ES+29260-000+Brasil"
            >
              Rua Adolpho Hülle 50, Domingos Martins ES, Brazil
            </Link>

            <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-500">
              <iframe
                className="w-full h-64 sm:h-80 rounded-lg shadow-lg mt-2"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3384.9920930710405!2d-40.65958786010742!3d-20.360694885253906!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb9b51387a012e1%3A0x336b98ffa4a8e76f!2sR.%20Adolfo%20Hulle%2C%2050%20-%20Domingos%20Martins%2C%20ES%2C%2029260-000%2C%20Brazil!5e1!3m2!1sen!2sca!4v1756424202621!5m2!1sen!2sca"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="group">
            <h2 className="text-xl font-bold mb-2 text-center cursor-pointer">
              Vila Velha
            </h2>
            <Link
              className="block mb-2 underline text-center md:text-left"
              href="https://www.google.com/maps?ll=-20.368529,-40.662341&z=15&t=m&hl=pt-BR&gl=CA&mapclient=embed&q=Av.+Kurt+Lewin,+545+-+Carlos+Schwambach+Domingos+Martins+-+ES+29260-000+Brasil"
            >
              R. Pará, n° 40 - loja 3 e 4 - Praia da Costa, Vila Velha - ES,
              Brazil
            </Link>

            <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-500">
              <iframe
                className="w-full h-64 sm:h-80 rounded-lg shadow-lg mt-2"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.943321625602!2d-40.28956382231624!3d-20.34396000267822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb817a56d056549%3A0x3dd6e95b1afa233d!2sStudio%20%C3%82ncora%20tattoo!5e0!3m2!1sen!2sca!4v1756425117011!5m2!1sen!2sca"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Redes sociais */}
        <div className="md:w-1/3 text-center md:mt-10 p-4">
          <h2 className="text-xl font-bold mb-4 md:mb-10 text-center">
            REDES SOCIAIS
          </h2>
          <div className="flex flex-row items-center space-x-3 justify-center md:mt-16">
            <Link href="https://www.instagram.com/galvao_tattooart/">
              <img
                className="w-8 h-8 rounded-lg"
                src="instagram.png"
                alt="instagram"
              />
            </Link>

            <Link href="https://wa.me/+5527997631008" target="_blank">
              <img
                className="w-8 h-8 rounded-lg"
                src="whatsapp.png"
                alt="whatsapp"
              />
            </Link>

            <Link href="https://www.tiktok.com/@matheusgalvaotattoo">
              <img
                className="w-8 h-8 rounded-lg"
                src="tiktok.png"
                alt="tiktok"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
