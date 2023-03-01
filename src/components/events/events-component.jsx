import Link from "next/link";
import Image from "next/image";
import formatCityName from "@/pages/helpers/formatCityName";

const EventsComponent = ({ cities }) => {

    return (
        <div>
            <h1>Events Page</h1>
            {cities &&
                cities.map(city => {
                    return (
                        <div key={city.id}>
                            <Link
                                className='d-flex flex-column'
                                href={`/events/${formatCityName(city.name)}`}>
                                <Image
                                    width={250}
                                    height={250}
                                    src={city.image}
                                    alt={city.name}
                                />
                                {city.title}
                            </Link>
                        </div>
                    )
                })}
        </div>
    )
}

export default EventsComponent
