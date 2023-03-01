import EventsByCityComponent from '../../../src/components/events/EventsByCityComponent'
import formatCityName from '../../helpers/formatCityName'

const EventsByCityPage = ({ cityEvents }) => {

    return (
        <EventsByCityComponent cityEvents={cityEvents}/>
    )
}

export async function getStaticPaths() {
    const { cities } = await import('../../../data/data.json')
    const cityNames = cities.map(city => formatCityName(city.name))
    const paths = cityNames.map(cityName => {
        return {
            params: { city: cityName }
        }
    })

    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const { allEvents } = await import('../../../data/data.json')
    const cityEvents = allEvents.filter(events => {
        return events.city.toLowerCase() === context.params.city.toLowerCase()
    })

    return {
        props: {
            cityEvents
        }
    }
}

export default EventsByCityPage
