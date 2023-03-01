// import styles from '@/styles/Home.module.scss'
import EventsComponent from '../../src/components/events/EventsComponent'

const EventsPage = ({ cities }) => {

    return (
        <EventsComponent cities={cities} />
    )
}

export async function getStaticProps() {
    const { cities } = await import('/data/data.json')
    return {
        props: {
            cities
        }
    }
}

export default EventsPage
