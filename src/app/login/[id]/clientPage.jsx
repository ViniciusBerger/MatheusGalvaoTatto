'use client'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useEffect } from 'react'
import { auth } from '@/app/_utils/firebase'
import Header from '@/app/_components/header/header'
import Agenda from '@/app/_components/calendar/calendar'
import Calendar from '@/app/_components/calendar/calendar'

export default function ClientPage({ id }) {
  const [user, loading] = useAuthState(auth)

   

  useEffect(() => {
    if (!loading && (!user || user.uid !== id)) {
      router.push('/login')
    }
  }, [user])

  if (loading || !user) return <p>Loading...</p>

  return (
  <div>
    <Header />


    <div className="bg-gradient-to-r from-[#D9D9D9] via-[#F0F0F0] to-[#D9D9D9] text-black text-5xl p-4 ">
      <h1 className='mt-24 mx-8 mb-8 border-b-3'>Bem vindo ao dashboard</h1>
    </div>


    <div className="m-0 bg-gradient-to-r from-[#D9D9D9] via-[#F0F0F0] to-[#D9D9D9] text-black h-screen/2 flex justify-center items-center">
      
      <div className="flex w-11/12 mt-16  gap-4 ">  
        
        <div className="flex-1 m-8 mt-0 bg-white rounded-lg p-10 h-1/2 ">
          
          
          <Calendar
            className="rounded-xl"
            height="100%"
            width="100%"
          />

          <div className="flex justify-around items-center mt-12">
            
            <button className="bg-[#262628] text-white rounded-lg px-16 py-6 text-2xl"> <Link href={"/addEvent"}> Adicionar</Link></button>
            <button className="bg-[#262628] text-white rounded-lg px-16 py-6 text-2xl"> <Link href={"/"}> Remover </Link></button>
            <button className="bg-[#262628] text-white rounded-lg px-16 py-6 text-2xl"> <Link href={"/"}> Editar</Link></button>

             </div>
        </div>


        <button className="flex-1 bg-[#262628] text-white rounded-lg px-10 py-24 text-2xl">
          Faturamento
        </button>
      </div>
      
    </div>
  </div>
)
}

