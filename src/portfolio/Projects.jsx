import React from "react";
import tomato from "../../public/tomato.png"

export default function Projects() {
    const projects = [

        {
            title: "E-commerce Store",
            description: "An online store with shopping cart and payment integration.",
            link: "https://tomato-one-ebon.vercel.app/",
            github: "https://github.com/shamim-ahmad-ahnaf/Tomato",
            image: tomato
        },

        {
            title: "E-commerce Store",
            description: "An online store with shopping cart and payment integration.",
            link: "https://store.example.com",
            github: "https://github.com/your-username/e-commerce-store",
            image: "https://cdn.pixabay.com/photo/2017/03/27/12/50/flower-2178507_640.jpg",
        },
    ];

    return (
        <section className="projects-section" id="projects">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <img src={project.image} alt={project.title} />
                            <div className="content">
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                                <div className="buttons">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn">
                                        GitHub
                                    </a>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="live-btn">
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
