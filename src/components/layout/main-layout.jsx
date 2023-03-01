import Navbar from "@/src/components/navbar/Navbar";
import Footer from "@/src/components/footer/Footer";

const MainLayout = ({children}) => {

    return (
        <>
            <Navbar />
                {children}
            <Footer />
        </>
    )
}

export default MainLayout
