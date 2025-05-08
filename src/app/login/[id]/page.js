import Header from "../_components/header/header";

export default function page({params}){
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Header />
            <h1 className="text-3xl font-bold mb-4">Tatuagem {params.id}</h1>
            <img src={`/${params.id}.jpg`} alt={`Tatuagem ${params.id}`} className="w-1/2 h-auto rounded-lg shadow-lg" />
        </div>
    )
}