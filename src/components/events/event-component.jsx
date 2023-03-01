import Image from "next/image";
import formatCityName from "@/pages/helpers/formatCityName";

const EventComponent = ({ event }) => {
    const { title, description, city, image,emails_registered } = event
    const cityName = formatCityName(city)

    return (
        <div>
            <h1>{title}</h1>
            <h2>{cityName}</h2>
            <p>{description}</p>
            <Image
                width={400}
                height={400}
                src={image}
                alt={title}
            />
            {emails_registered &&
                <ul>
                    {emails_registered.map((email, index) => {
                        return <li key={index}>{email}</li>
                    })
                    }
                </ul>
            }
        </div>
    )
}

export default EventComponent
