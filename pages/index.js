import React from 'react'

import { getFeaturedEvents } from '@/dummy-data';
import EventList from '@/components/events/event.list';
export default function HomePage(props) {
    const { items } = props
    const featuredEvents = getFeaturedEvents();
    return (
        <div>
            <EventList items={featuredEvents} />
        </div>
    )
}
