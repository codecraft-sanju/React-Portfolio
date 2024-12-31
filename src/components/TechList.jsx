import TechItem from "./TechItem";

function TechList({ tech, justify = 'center' }) {
    return (
        <div className={`flex flex-wrap items-center justify-${justify} gap-5`}>
            {tech.map((tech, i) => (
                <TechItem key={i} tech={tech} />
            ))}
        </div>
    );
}

export default TechList;
