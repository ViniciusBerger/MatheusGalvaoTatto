'use client'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
import { auth } from '@/app/_utils/firebase'
import Header from '@/app/_components/header/header'
import Calendar from '@/app/_components/calendar/calendar'
import Footer from '@/app/_components/footer/footer'
import Bookings from '@/app/_components/bookings/bookings'

export default function ClientPage({ id }) {
  const [user, loading] = useAuthState(auth)

  const [calendar, setCalendar] = useState(false)
  const [agendamento, setAgendamentos] = useState(false)
  

   

  useEffect(() => {
    if (!loading && (!user || user.uid !== id)) {
      router.push('/login')
    }
  }, [user])

  if (loading || !user) return <p className='text-center text-3xl items-center'>Loading...</p>

  return (
  <div>
    <Header />

    <div className="flex bg-gradient-to-r from-[#D9D9D9] via-[#F0F0F0] to-[#D9D9D9] text-black justify-center text-5xl p-4">
      
      
      <div className="bg-white flex w-full h-screen m-30 shadow-2xl">
        
        
        <div className='flex flex-col min-w-1/5 max-w-1/5 bg-black h-screen text-white'> 
          <h1 className='mt-16 mx-auto'>Overview</h1>

            <div className='flex flex-col mt-64 mx-auto text-2xl font-light gap-6'>
              <button onClick={()=>{agendamento? setAgendamentos(false): setAgendamentos(true)}}  className='border-b-2 border-r-2 border-white p-5 hover:shadow-lg shadow-gray-500'>
                agendamentos
              </button>

              <button onClick={()=>{calendar? setCalendar(false) : setCalendar(true)}} className='border-b-2 border-r-2 border-white p-5 hover:shadow-lg shadow-gray-500'>
                calendario
              </button>

              <button className='border-b-2 border-r-2 border-white p-5 hover:shadow-lg shadow-gray-500'>
                faturamento
              </button>


            </div>
            <Link className=' mt-80 mx-auto border-2 border-white p-5 hover:shadow-lg shadow-gray-500 rounded-2xl' href={`/login`}>
                <button >logout</button>
            </Link>
      </div>

      <div className='flex-col overflow-hidden'>
          {calendar && ( 
            <>
            {agendamento && setAgendamentos(false)}
            <Calendar />
            </>
        )}
          {agendamento &&  (
            <>
              <Bookings />
              {calendar && setCalendar(false)}
            </>
          )}
        </div>


    </div>

      
    </div>

    <Footer />

  </div>
)
}


