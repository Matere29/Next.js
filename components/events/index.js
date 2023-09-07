import { getAllEvents } from '@/dummy-data'
import EventList from './event.list'
import EventSearch from './events-search'
import { Fragment, ReactFragment } from 'react'
import { useRouter } from 'next/router'

export default function AllEventsPage() {
  const events = getAllEvents()
  const router = useRouter()

  function findEventsHandler(year, month){
const fullPath = `/events/${year}/${month}`
router.push(fullPath);
  }
  return (

    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />

    </Fragment>
  )
}
