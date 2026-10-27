import "./AboutSection.css";
import TitleArea from "../TitleArea/TitleArea";

export default function AboutSection() {
    return (
        <section className="about">
            <div className="container">
                <TitleArea 
                    sectionName="about"
                    sectionTitle="About Me"
                />

                <div className="card card__about">
                    <div className="card-flex">
                        <div className="card-flex__left">
                            <p> Through my older sister, I developed a deep curiosity for the human experience. I pursued this curiosity and earned a First-Class Honors Degree in Psychology with Distinction and a minor in anthropology. </p>

                            <p> My position at the Scleroderma Patient-centered Intervention Network (SPIN) ignited my interest in product development and research application. </p>

                            <p> Thereafter, I pursued a master's degree under Dr. MacLeod and Dr. Rezzonico. I discovered a passion for impactful research. Diving into UX design through courses and the linGrow project in Dr. MacLeod's lab, I found the perfect fusion of research and design, sparking my unwavering commitment to a career in UX and design. </p>
                            
                            <p> Acknowledging where my experience and learnings were lacking, I applied to and started the Web Design Specialist ACS program at Vanier College. </p>
                        </div>
    
                        <div className="card-flex__right"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}