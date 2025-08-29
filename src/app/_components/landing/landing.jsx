"use client";

import Link from "next/link";

export default function Landing() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white pt-16 md:pt-32 px-4 pb-10">
        
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl p-3 font-extrabold text-center leading-tight">
          <span className="text-white stroke-black"> MATHEUS</span>
          <span className="text-[#242424] stroke-black"> GALVAO</span>
          <span className="text-white stroke-white"> TATTOO</span>
          <span className="text-[#242424] stroke-black"> ART</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl mt-3 text-center max-w-xl leading-snug">
          O conforto e a <span className="text-[#242424]">satisfação</span> dos nossos clientes são a nossa{" "}
          <span className="text-[#242424]">maior prioridade</span>
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col md:flex-row items-center w-full max-w-md space-y-4 md:space-y-0 md:space-x-4">
          <Link target="_blank" href="https://wa.me/+5527997631008" className="w-full">
            <button className="bg-[#242424] w-full px-6 py-4 rounded-lg">
              AGENTE SEU HORÁRIO
            </button>
          </Link>

          <Link href="/studio" className="w-full">
            <button className="bg-[#242424] w-full px-6 py-4 rounded-lg">
              CONHEÇA NOSSO ESTÚDIO
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
