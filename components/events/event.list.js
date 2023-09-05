import React from 'react'
import EventItem from './event-item';

export default function EventList(props) {
    const { items } = props;
    return (
        <ul>
            {items.map(event => (<EventItem
                key={event.id}
                id={event.id}
                location={event.location}
                date={event.date}
                image={event.image} />
                ))}
        </ul>
    )
}
