import CaseStudies from "./CaseStudies"
import Contact from "./Contact"
import Header from "./Header"
import Page4 from "./Page4"
import Served from "./Served"
import Services from "./Services"
import Team from "./Team"
import Testimonials from "./Testimonials"
import Welcome from "./Welcome"

const Home = () => {
    return(
        <>
        <Header />
        <Welcome />
        
        <Services />
        <Page4 />
        <Team />
        <Served />
        <CaseStudies />
        <Testimonials />
        <Contact />
        </>
    )
}

export default Home;