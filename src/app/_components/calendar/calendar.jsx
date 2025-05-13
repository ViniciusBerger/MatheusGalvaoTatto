import FullCalendar  from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'



export default function Calendar() {

    return (
        <div>
           <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,dayGridWeek,dayGridDay'
                }}
                events={[
                    //DATE FORMAT: YYYY-MM-DD
                    { title: 'Event 1', start: '2025-05-05' },
                    { title: 'Event 2', start: '2023-10-05', end: '2023-10-07' }
                ]}
            />
        </div>
        )
}