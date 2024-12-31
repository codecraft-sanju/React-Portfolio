import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
    anim,
    expand,
    mouseEvents,
} from "../utils/animations";

import Container from "./Container";
import NavBar from "./NavBar";
import Reveal from "./Reveal";

const letters = ["front-end", "web-designer", "freelancer", "content-creator"];

function Header({ updateMouseAnim }) {
    const [currentLetter, setCurrentLetter] = useState(0);

    //  When the currentLetter is 4 it'll set immdediatly to 0,
    // Because of the condition of the useEffect()
    const letter = currentLetter === 4 ? letters[0] : letters[currentLetter];

    useEffect(() => {
        let set;

        // Once the currentLetter is set to 4 it will trigger this effect (currentLetter is in the dependency)
        // and immdeiatly will update the currentLetter state to 0 (it won't wait 5 seconds),
        if (currentLetter < letters.length) {
            set = setInterval(() => {
                setCurrentLetter((prev) => prev + 1);
            }, 5000);
        } else setCurrentLetter(0);
        return () => clearInterval(set);
    }, [currentLetter]);

    return (
        <header className="header overflow-hidden text-black dark:text-white">
            <NavBar updateMouseAnim={updateMouseAnim} />
            <Container className="relative h-full">
                <section className="flex h-full flex-col items-center justify-center text-center uppercase">
                    <div
                        {...mouseEvents(updateMouseAnim)}
                        className="space-y-20"
                    >
                        <div className="relative max-w-[350px] lg:max-w-[450px] 2xl:max-w-[1000px]">
                            <h1 className="relative z-10 font-light lg:text-xl 2xl:text-2xl">
                                <span>hey, i'm</span> <span>sanjay</span>
                            </h1>
                            <h1 className="absolute left-10 top-5 w-full font-light text-brown-light dark:text-brown-dark lg:top-10 lg:text-xl 2xl:left-20  2xl:text-2xl">
                                <span>hey, i'm</span> <span>sanjay</span>
                            </h1>
                        </div>
                        <div>
                            <AnimatePresence mode="wait">
                                <Reveal key={currentLetter}>
                                    <p className="overflow-hidden text-smaller font-medium tracking-[10px] lg:text-small">
                                        {letter}
                                    </p>
                                </Reveal>
                            </AnimatePresence>
                        </div>
                    </div>
                </section>
                <motion.div
                    {...mouseEvents(updateMouseAnim)}
                    className="scroll absolute bottom-15 right-[1rem] sm:right-[2rem] lg:right-[4rem] xl:right-[5rem] 2xl:right-[6rem]"
                >
                    <p className="text-smaller lg:text-small">
                        {"SCROLL".split("").map((char, i) => (
                            <span key={i} className="block rotate-90">
                                {char}
                            </span>
                        ))}
                    </p>
                    <motion.div
                        {...anim(expand)}
                        className="absolute -left-5 top-5 h-[80%] w-[.75px] bg-black dark:bg-white"
                    />
                </motion.div>
            </Container>
        </header>
    );
}

export default Header;
