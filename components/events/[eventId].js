import { getEventById } from "@/dummy-data"
import { useRouter } from "next/router"
import { Fragment } from "react"

export default function EventDetailPage() {
    const router = useRouter()

    const eventId = router.query.eventId
    const event = getEventById(eventId)

    if (!event) {
        return <p>No event found!</p>
    }
    return (
        <Fragment>

        </Fragment>
    )
}