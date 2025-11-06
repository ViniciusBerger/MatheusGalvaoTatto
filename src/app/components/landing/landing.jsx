"use client";

import Link from 'next/link';

export default function Landing() {
  return (
    <div className="relative w-full h-screen overflow-hidden ">
    <video
      className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
      autoPlay
      loop
      muted
    >
      <source src="/background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 flex flex-col items-center justify-start text-white pt-24 md:pt-48 px-4">
      <div>
      <h1 className="text-4xl md:text-6xl p-3 font-extrabold font-w-800 text-center">
        <span className="text-white stroke-black"> MATHEUS</span>
        <span className="text-[#242424] stroke-black"> GALVAO</span>
        <span className="text-white stroke-white"> TATTOO</span>
        <span className="text-[#242424] stroke-black"> ART</span>
      </h1>
      </div>

      <div>
      <p className="text-lg md:text-xl mt-3 text-center">
        O conforto e a <span className='text-[#242424]'>satisfação</span> dos nossos clientes são a nossa <span className='text-[#242424]'>maior prioridade</span>
      </p>
      </div>

      <div className="mt-10 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <button className="bg-[#242424] px-6 py-4 rounded-lg">
          <Link target="blank" href="https://wa.me/+5527997631008">Agende seu horario</Link>
        </button>
        <button className="bg-[#242424] px-6 ml-2 py-4 rounded-lg">
          <Link target='blank' href="https://pay.hotmart.com/W102551346J?bid=1762222082920">Segredos do realismo</Link>
        </button>
        <button className="bg-[#242424] px-6 ml-2 py-4 rounded-lg">
          <Link href="/studio">Conheça nosso estúdio</Link>
        </button>
        
      </div>
    </div>
    </div>
  );
}