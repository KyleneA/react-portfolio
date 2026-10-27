import "./ProjectCard.css";

type ProjectCardProps = {
    projectTitle: string;
    shortDesc: string;
    image: string;
}

export default function ProjectCard({projectTitle, shortDesc, image}: ProjectCardProps) {
    return (
        // add tags for UX, web design, research, etc
        <article className="grid__card">
            <div className="grid-card__left">
                <img src={image} alt={`${projectTitle} thumbnail`} />
            </div>
            <div className="grid-card__right">
                <h3 className="card__title">{projectTitle}</h3>
                <p className="card__desc">{shortDesc}</p>
            </div>
        </article>
    );
}