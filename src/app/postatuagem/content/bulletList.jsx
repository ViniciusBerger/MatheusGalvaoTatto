"use client"
export default function BulletList() {
    return (
        <div className=" bg-[#D9D9D9] min-h-100 mt-5 mb-5 p-4 lg:ml-30 mt-4 lg:w-5/6 shadow-xl ">
            <h3 className="flex text-lg font-semibold mb-2 border-b-1 border-[#F47700] lg:w-1/3 ml-3 mt-10">NÃO FAÇA</h3>
            <ul className="list-disc text-[#5B5A64] list-inside mb-4">
            <li>Não coce, mexa ou arranque as crostas.</li>
            <li>Não hidrate excessivamente a tatuagem com creme pós-tatuagem ou loções sem perfume.</li>
            <li>Não aplique loções perfumadas ou pomadas medicamentosas, como Polysporin, durante a cicatrização.</li>
            <li>Não use uma toalha de banho para secar a tatuagem após a limpeza (bactérias).</li>
            <li>Não nade, use banheira de hidromassagem ou mergulhe a tatuagem por pelo menos <span className="text-[#f47700]">três semanas</span>.</li>
            <li>Não faça exercícios que causem acúmulo de suor enquanto estiver usando o curativo de segunda pele.</li>
            <li>Não aplique nenhum curativo adicional após o processo de segunda pele ter sido concluído.</li>
            <li>Não se exponha ao sol ou à luz solar direta até que a tatuagem esteja totalmente cicatrizada.</li>
            <li>Não use roupas apertadas que possam irritar a tatuagem durante a cicatrização.</li>
            <li>Recomendamos fortemente o uso de protetor solar em tatuagens <span className="text-[#F47700]">CICATRIZADAS</span> para evitar desbotamento.</li>
            </ul>
            </div>
    )
}