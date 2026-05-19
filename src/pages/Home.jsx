import About from "../components/About ";
import Consultation from "../components/Consultation";
import CoreValues from "../components/CoreValues";
import Footer from "../components/Footer";
import Hero from "../components/Hero"
import Method from "../components/Method";
import Navbar from "../components/Navbar"
import OurTeam from "../components/OurTeam";
import Services from "../components/Services";
import Story from "../components/Story";
import WhyMavin from "../components/WhyMavin";

const Home = () => {

    return (
        <div className=" min-h-screen bg-[#FAF9F5] antialiased">
            <Navbar/>
            <Hero/>
            <About/>
            <Services/>
            <Story/>
            <WhyMavin/>
            <Method/>
            <OurTeam/>
            <Consultation/>
            <Footer/>

        </div>

    )
}
export default Home;
