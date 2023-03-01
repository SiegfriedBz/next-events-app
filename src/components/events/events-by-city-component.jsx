import Link from "next/link";
import Image from "next/image";
import formatCityName from "@/pages/helpers/formatCityName";

const EventsByCityComponent = ({ cityEvents }) => {
    const cityName = formatCityName(cityEvents[0].city)

    return (
        <div>
            <h1>Events in {cityName}</h1>
            <div>
                {cityEvents &&
                    cityEvents.map(ev => {
                        return (
                            <Link
                                key={ev.id}
                                href={`/events/${ev.city}/${ev.id}`}>
                                <Image
                                    width={200}
                                    height={200}
                                    src={ev.image}
                                    alt=""/>
                                <h4>{ev.title}</h4>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default EventsByCityComponent
