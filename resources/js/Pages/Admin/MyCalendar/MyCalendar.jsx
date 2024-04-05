import MiniDrawerAuthLayout from '@/Layouts/MiniDrawerAuthLayout'
import React from 'react'
// https://fullcalendar.io/
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import DemoCalendar from './DemoCalendar'

export default function MyCalendar({auth}) {
  return (
    <MiniDrawerAuthLayout user={auth.user}>


      <h1>Calendar</h1>

  <DemoCalendar />
    </MiniDrawerAuthLayout>
  )
}
