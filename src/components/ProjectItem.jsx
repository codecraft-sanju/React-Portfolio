import { mouseEvents } from "../utils/animations";
import TechList from "./TechList";

function ProjectItem({ project, updateMouseAnim }) {
    const { imgSrc, name, description, github, live, tech } = project;
    return (
        <div
            {...mouseEvents(updateMouseAnim)}
            className="space-y-20 rounded-md p-10"
        >
            <img src={imgSrc} alt="project picutre" className="rounded-sm" />
            <div className="space-y-5">
                <h4>{name}</h4>
                <p className="text-small leading-[180%]">{description}</p>
                <TechList tech={tech} justify="start" />
            </div>
            <div className="flex items-center space-x-15">
                <a
                    href={live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-[35px] w-auto cursor-pointer items-center justify-center rounded-sm bg-brown-light px-15  text-white dark:bg-brown-dark"
                >
                    go live
                </a>
                <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-[35px] w-auto cursor-pointer items-center justify-center rounded-sm border-2 border-brown-light px-15  text-brown-light dark:border-brown-dark dark:text-brown-dark"
                >
                    see code
                </a>
            </div>
        </div>
    );
}

export default ProjectItem;
