import "./ProjectsSection.css";
import TitleArea from "../TitleArea/TitleArea";
import ProjectCard from "./ProjectCard/ProjectCard";

export default function ProjectsSection() {
    return (
        <section className="projects">
            <div className="container">
                <TitleArea
                    sectionName="projects"
                    sectionTitle="Recent projects"
                />

                <div className="projects__grid">
                    <ProjectCard
                        projectTitle="linGrow Redesign (2023)"
                        shortDesc="A short description here about the project"
                        image="/src/assets/imgs/card-lingrow.png"
                    />

                    <ProjectCard
                        projectTitle="Apartment Forum"
                        shortDesc="Vanier Web Design Specialist ASC | Web Project 1"
                        image="/src/assets/imgs/web-project-1.png"
                    />

                    <ProjectCard
                        projectTitle="Mentorship Service"
                        shortDesc="Coursera Google UX Certificate | course project"
                        image="/src/assets/imgs/card-mentorship.png"
                    />
                </div>
            </div>
        </section>
    );
}