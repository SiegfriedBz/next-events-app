const EventPage = (props) => {

    const { } = props

    return (
        <>
            <h1>Single Event</h1>
        </>
    )
}

export async function getStaticPaths() {
    const {  } = await import('../../../data/data.json')
    const paths =

}

export async function getStaticProps(context) {
    const {  } = await import('../../../data/data.json')
    console.log(context.params)

    return {
        props: {

        }
    }
}


export default EventPage
