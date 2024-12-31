import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { anim, mouseEvents } from "../utils/animations";

import { useDarkMode } from "../contexts/DarkModeContexte";

import Container from "./Container";
import TechList from "./TechList";
import Svg from "./Svg";

const p_skills = [
    "HTML",
    "CSS",
    "SASS",
    "tailwindcss",
    "JavaScript",
    "React",
    "Framer Motion",
    "GSAP",
];
const d_skills = ["Figma"];

function About({ updateMouseAnim }) {
    const [isOpen, setIsOpen] = useState(false);
    const { darkMode } = useDarkMode();

    const openSM = {
        initial: { height: 40 },
        animate: { height: isOpen ? 160 : 40 },
    };

    const rotate = {
        initial: { rotate: 0 },
        animate: {
            rotate: isOpen ? "45deg" : "0deg",
        },
    };

    const showSMParent = {
        initial: { x: 0 },
        amimate: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 1,
            },
        },
    };

    const showSMChildren = {
        initial: { x: 100, opacity: 0 },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                ease: [0.33, 1, 0.68, 1],
                duration: 0.4,
            },
        },
        exit: {
            x: -100,
            opacity: 0,
            transition: {
                ease: [0.33, 1, 0.68, 1],
                duration: 0.6,
            },
        },
    };

    return (
        <main>
            <Container>
                <section className="flex h-screen flex-col items-center justify-center space-y-40 text-center text-black dark:text-white">
                    <div className="space-y-20">
                        <div
                            {...mouseEvents(updateMouseAnim)}
                            className="relative inline-block uppercase"
                        >
                            <h1 className="relative z-10 text-[60px] font-light sm:text-[75px] lg:text-xl 2xl:text-2xl">
                                who am i
                            </h1>
                            <h1 className="absolute left-10 top-5 w-full text-[60px] font-light text-brown-light dark:text-brown-dark sm:text-[75px] lg:top-10 lg:text-xl 2xl:left-20  2xl:text-2xl">
                                who am i
                            </h1>
                        </div>

                        <div
                            {...mouseEvents(updateMouseAnim)}
                            className="mx-auto lg:max-w-[848px]"
                        >
                            <p className="font-light leading-[180%]">
                                Hello, I'm Sanjay, a full-stack developer and technology enthusiast. I specialize in building modern and efficient web applications, dynamic front-end interfaces, and robust back-end systems for businesses worldwide. If you're looking for a cutting-edge and impactful digital solution, feel free to email me. If we are a good fit, I'll provide a time and cost estimate for your project.
                            </p>
                        </div>
                    </div>
                    <div
                        {...mouseEvents(updateMouseAnim)}
                        className={`flex ${isOpen ? "items-start" : "items-center"} gap-30 text-brown-light dark:text-brown-dark`}
                    >
                        <button className="multiBtn h-[55px] w-[155px] bg-black dark:bg-white">
                            <Link to="/projects" className="cursor-pointer p-5">
                                see my work
                            </Link>
                        </button>
                        <motion.div
                            {...anim(openSM)}
                            className="h-40 w-40 rounded-full border-2 border-black text-[23px] dark:border-white"
                        >
                            <motion.span
                                onClick={() => setIsOpen((pre) => !pre)}
                                {...anim(rotate)}
                                className="cursor-pointer p-5"
                            >
                                +
                            </motion.span>
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        className="space-y-10 overflow-hidden"
                                        {...anim(showSMParent)}
                                    >
                                        <motion.a
                                            {...anim(showSMChildren)}
                                            className="mx-auto inline-block cursor-pointer"
                                            href="mailto:mounirwebdevcode@gmail.com"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <Svg
                                                color={
                                                    darkMode
                                                        ? "#FEFAE0"
                                                        : "#0D0701"
                                                }
                                                type="mail"
                                                className="size-20 cursor-pointer"
                                            />
                                        </motion.a>
                                        <motion.a
                                            {...anim(showSMChildren)}
                                            className="mx-auto inline-block cursor-pointer"
                                            href="https://www.instagram.com/mounir.codes"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <Svg
                                                color={
                                                    darkMode
                                                        ? "#FEFAE0"
                                                        : "#0D0701"
                                                }
                                                type="instagram"
                                                className="size-20 cursor-pointer"
                                            />
                                        </motion.a>
                                        <motion.a
                                            {...anim(showSMChildren)}
                                            className="mx-auto inline-block cursor-pointer"
                                            href="https://github.com/mounirabcire"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <Svg
                                                color={
                                                    darkMode
                                                        ? "#FEFAE0"
                                                        : "#0D0701"
                                                }
                                                type="github"
                                                className="size-20 cursor-pointer"
                                            />
                                        </motion.a>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </section>
                <section className="flex min-h-screen flex-col items-center justify-center space-y-40 text-center text-black dark:text-white">
                    <div className="space-y-20">
                        <div
                            {...mouseEvents(updateMouseAnim)}
                            className="relative inline-block uppercase"
                        >
                            <h1 className="relative z-10 text-[60px] font-light sm:text-[75px] lg:text-xl 2xl:text-2xl">
                                what i do
                            </h1>
                            <h1 className="absolute left-10 top-5 w-full text-[60px] font-light text-brown-light dark:text-brown-dark sm:text-[75px] lg:top-10 lg:text-xl 2xl:left-20  2xl:text-2xl">
                                what i do
                            </h1>
                        </div>

                        <div
                            {...mouseEvents(updateMouseAnim)}
                            className="space-y-40"
                        >
                            <div className="mx-auto space-y-10 lg:max-w-[848px]">
                                <h4 className="subHead inline-block capitalize">
                                    web design
                                </h4>

                                <p className="font-light leading-[180%]">
                                    I design beautiful and powerful websites for
                                    modern businesses. Any business today needs
                                    a website that wins customers’ trust and
                                    helps you do your business well. I make sure
                                    your website is up to that standard.
                                </p>
                                <div className="inline-block">
                                    <TechList tech={d_skills} />
                                </div>
                            </div>
                            <div
                                {...mouseEvents(updateMouseAnim)}
                                className="mx-auto space-y-10 lg:max-w-[848px]"
                            >
                                <h4 className="subHead inline-block capitalize">
                                    front-end development
                                </h4>

                                <p className="font-light leading-[180%]">
                                    I create websites from scratch, making them
                                    responsive, powerful, and completely unique.
                                    My goal is to ensure everything looks
                                    fantastic and operates seamlessly, so you
                                    can enjoy using your websites without any
                                    problems!
                                </p>

                                <div className="flex items-center justify-center">
                                    <TechList tech={p_skills} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </main>
    );
}

export default About;
