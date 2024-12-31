import { motion } from "framer-motion";
import { anim, enterPage, mouseEvents } from "../utils/animations";

import Container from "../components/Container";
import NavBar from "../components/NavBar";
import PageTransition from "../components/PageTransition";
import ProjectList from "../components/ProjectList";
import Footer from "../components/Footer";

function Projects({ updateMouseAnim }) {
    return (
        <PageTransition>
            <motion.div
                {...anim(enterPage)}
                className="pointer-events-none fixed left-0 top-0 z-50 h-screen w-screen origin-bottom bg-black dark:bg-white"
            />
            <main className="bg-white pt-[165px] dark:bg-black">
                <NavBar updateMouseAnim={updateMouseAnim} />
                <Container>
                    <section className="min-h-screen space-y-40 text-center text-black dark:text-white">
                        <div className="space-y-10">
                            <div
                                {...mouseEvents(updateMouseAnim)}
                                className="relative inline-block uppercase"
                            >
                                <h1 className="relative z-10 text-[60px] font-light sm:text-[75px] lg:text-xl 2xl:text-2xl">
                                    my work
                                </h1>
                                <h1 className="absolute left-10 top-5 w-full text-[60px] font-light text-brown-light dark:text-brown-dark sm:text-[75px] lg:top-10 lg:text-xl 2xl:left-20  2xl:text-2xl">
                                    my work
                                </h1>
                            </div>
                            <div
                                {...mouseEvents(updateMouseAnim)}
                                className="mx-auto space-y-5 lg:max-w-[848px]"
                            >
                                <h4 className="text-small font-bold lg:font-bold">
                                    my awesome work
                                </h4>
                                <p className="mx-auto max-w-[400px]  text-smaller leading-[180%] lg:text-small">
                                    I make really cool stuff for people who want
                                    the best. If you like great stuff and hard
                                    work, you're in the right spot!
                                </p>
                            </div>
                        </div>
                        <ProjectList updateMouseAnim={updateMouseAnim} />
                    </section>
                    <Footer updateMouseAnim={updateMouseAnim} />
                </Container>
            </main>
        </PageTransition>
    );
}

export default Projects;
