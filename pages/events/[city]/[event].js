import EventComponent from "@/src/components/events/event-component";

const EventPage = ({ event }) => {

    return (
        <EventComponent event={event}/>
    )
}

export async function getStaticPaths() {
    const { allEvents } = await import('../../../data/data.json')
    const paths = allEvents.map(ev => {
        return {
            params:
                {
                    city: ev.city,
                    event: ev.id.toString()
                }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { allEvents } = await import('../../../data/data.json')
    const event = allEvents.find(ev => ev.id === context.params.event)
    console.log('event', event)

    return {
        props: {
            event
        }
    }
}

export default EventPage
