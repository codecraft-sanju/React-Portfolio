function TechItem({ tech }) {
    return (
        <div
            className={`tech flex h-[34px] min-w-[118px] flex-1 items-center justify-center rounded-sm border border-black px-5 text-small dark:border-white lg:flex-none`}
        >
            {tech}
        </div>
    );
}

export default TechItem;
