import ProjectItem from "./ProjectItem";

const projects = [
    {
        name: "MovieSpot",
        imgSrc: "movies-spot.jpg",
        description:
            "MovieSpot is a movie app that allows users to watch movies and TV shows",
        github: "https://github.com/codecraft-sanju",
        live: "https://interactive-phone-ui.vercel.app/",
        tech: ["HTML", "CSS", "SASS", "React", "Framer Motion"],
    },
    {
        name: "natours",
        imgSrc: "natours.jpg",
        description:
            "The Natours landing page is a beautiful, interactive website that promotes nature and adventure tours for nature and adventure lovers.",
        github: "https://github.com/codecraft-sanju",
        live: "https://interactive-phone-ui.vercel.app/",
        tech: ["HTML", "CSS", "SASS"],
    },
    {
        name: "nexter",
        imgSrc: "nexter.jpg",
        description:
            "nexter is a simple landing page for selling luxury homes.",
        github: "https://github.com/codecraft-sanju",
        live: "https://interactive-phone-ui.vercel.app/",
        tech: ["HTML", "CSS", "SASS"],
    },
    {
        name: "myBanki",
        imgSrc: "myBanki.jpg",
        description:
            "myBanki is a fun project that simulates an online banking platform. It consists of a static webpage providing bank information such as features and pricing, along with a user-friendly dashboard where users can view their balance and perform various actions.",
        github: "https://github.com/codecraft-sanju",
        live: "https://ninja-sketch-sepia.vercel.app/",
        tech: ["HTML", "CSS", "tailwindcss", "React", "Framer Motion"],
    },
    {
        name: "trillo",
        imgSrc: "trillo.jpg",
        description: "trillo is a simple one-page hotel booking landing page.",
        github: "https://github.com/codecraft-sanju",
        live: "https://anime-scene-gallary.vercel.app/",
        tech: ["HTML", "CSS", "SASS"],
    },
];

function ProjectList({ updateMouseAnim }) {
    return (
        <div className="grid grid-cols-1 gap-4 text-start text-black dark:text-white lg:grid-cols-2">
            {projects.map((project, i) => (
                <ProjectItem
                    project={project}
                    key={i}
                    updateMouseAnim={updateMouseAnim}
                />
            ))}
        </div>
    );
}

export default ProjectList;
