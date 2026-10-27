import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import AboutSection from "./components/AboutSection/AboutSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";

export function App() {
    return (
        <>
            <Navbar />

            <main>
                <Banner />
                <AboutSection />
                <ProjectsSection />
            </main>

            <Footer />
        </>
    );
}
