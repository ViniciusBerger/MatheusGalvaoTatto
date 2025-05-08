"use client"

import BulletList from "./bulletList"

export default function Content() {
    return (
        <div className="flex flex-col text-gray-800 pt-4 min-h-50 bg-gradient-to-r from-[#D9D9D9] via-[#F0F0F0] to-[#D9D9D9]">
        <h1 className="text-xl ml-0 font-bold mb-4">INSTRUÇÕES DE CUIDADOS PÓS-TATUAGEM</h1>



        <div className="w-full min-h-130 mb-8">
            <h2 className="text-lg font-semibold mb-2 border-b-1 border-[#F47700] lg:w-1/3 ml-3">SEGUNDA PELE</h2>
            <div className="w-full lg:grid lg:grid-cols-2 p-4 lg:gap-10 space-around">
            <div className="text-[#5B5A64] font-thin">
                <p className="md:text-lg text-justify lg:text-md">
                Após 8 a 24 horas, dependendo do acúmulo de sangue e plasma (se não houver acúmulo visível, não é necessário ou recomendado trocar o curativo), remova o primeiro curativo de segunda pele aplicado pelo artista. Para melhores resultados, remova lentamente no chuveiro/debaixo d'água. Em seguida, limpe suavemente a área com um sabão neutro e sem perfume e use uma toalha de papel para secar.
                </p>
                <p className="mt-2 md:text-lg text-justify lg:text-md">
                Depois que a tatuagem e a área ao redor estiverem limpas e completamente secas, remova cuidadosamente o papel de apoio branco de um novo pedaço de segunda pele. Certifique-se de que a área esteja em uma posição natural e relaxada e aplique o curativo. Depois que o novo curativo de segunda pele estiver aplicado e alisado, remova a parte superior rígida e brilhante.
                </p>
            </div>

            <div className="text-[#5B5A64] font-thin">
                <p className="md:text-lg text-justify lg:text-md">
                Os curativos de segunda pele podem ser usados por até 5 dias. Após esse período, continue a cicatrização com o creme pós-tatuagem Ohana aprovado pela Atticus Tattoo e siga as instruções até que sua tatuagem esteja 100% cicatrizada (aproximadamente 3 semanas). Aplique o Ohana conforme necessário (se estiver seco ou com coceira) 1 a 2 vezes ao dia com as mãos limpas. Uma tatuagem é uma ferida aberta; mantê-la limpa e protegida de bactérias é crucial.
                </p>
            </div>
            </div>

            <BulletList />
      </div>

      <div className="mt-10 min-h-60">
            <h2 className="text-lg font-semibold mb-2 border-b-1 border-[#F47700] lg:w-1/3 ml-3">CUIDADOS TRADICIONAIS</h2>
            <div className="w-full text-[#5B5A64] font-thin lg:grid lg:grid-cols-2 p-4 lg:gap-10 space-around">
                <p className="md:text-lg text-justify lg:text-md">
                Deixe o curativo tradicional aplicado por 3 a 5 horas ou conforme recomendado pelo artista. Imediatamente após remover o curativo, limpe suavemente a área com um sabão neutro e sem perfume e use uma toalha de papel para secar. Uma tatuagem é uma ferida aberta; mantê-la limpa e protegida de bactérias é crucial.
                </p>
                <p className="md:text-lg text-justify lg:text-md">
                Durante o processo de cicatrização, o creme pós-tatuagem pode ser aplicado conforme necessário (se estiver seco ou com coceira) 1 a 2 vezes ao dia com as mãos limpas. Siga as instruções até que sua tatuagem esteja 100% cicatrizada
                </p>
            </div>
      </div>
    </div>
    )
}