import styles from "@/styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";
import formatCityName from "@/pages/helpers/formatCityName";

const HomeComponent = ({ cities }) => {
    return (
        <main className={styles.main}>
            <h1>Events By City</h1>
            {cities &&
                cities.map(city => {
                    return (
                        <Link
                            key={city.id}
                            href={`/events/${formatCityName(city.name)}`}>
                            <div className={`card ${styles.main_card}`}>
                                <Image
                                    width={200}
                                    height={200}
                                    // fill
                                    className="main_card_image"
                                    src={city.image}
                                    alt={city.id} />
                                <div className="card-body">
                                    <h3 className="card-title">{city.title}</h3>
                                    <p className="card-text">
                                        {city.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
        </main>
    )
}

export default HomeComponent
