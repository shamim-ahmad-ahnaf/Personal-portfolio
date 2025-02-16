import React from "react";
import tomato from "../../public/tomato.png"
import student from "../../public/student.png"
import clock from "../../public/clock.png"
import animation from "../../public/animation.png"
import tailwind from "../../public/tomato.png"

export default function Projects() {
    const projects = [

        {
            title: "E-commerce 'Tomato'",
            description: "An online store with shopping cart and payment integration. you can buy any food from here.",
            link: "https://tomato-one-ebon.vercel.app/",
            github: "https://github.com/shamim-ahmad-ahnaf/Tomato",
            image: tomato
        },

        {
            title: "Student Counter",
            description: "An online store. where you can count the students to list whit phone number. and it will always be saved as well as you can calculate the present and absence.",
            link: "https://student-counter-chi.vercel.app/",
            github: "https://github.com/shamim-ahmad-ahnaf/Student-Counter",
            image: student
        },

        {
            title: "Analog Clock",
            description: "A Clock create by JavaScript.",
            link: "https://analog-clock-kohl-xi.vercel.app/",
            github: "https://github.com/shamim-ahmad-ahnaf/Analog-Clock",
            image: clock
        },

        
        {
            title: "Animation work",
            description: "A animation project create by react.js.",
            link: "https://shamim-ahmad-ahnaf.github.io/Tailwind-Full/",
            github: "https://github.com/shamim-ahmad-ahnaf/Animation-Project",
            image: animation
        },

        {
            title: "First Tailwind",
            description: "This is my first tailwind project from myself.",
            link: "https://shamim-ahmad-ahnaf.github.io/Tailwind-Full/",
            github: "https://github.com/shamim-ahmad-ahnaf/Tailwind-Full",
            image: tailwind
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
