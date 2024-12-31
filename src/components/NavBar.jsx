import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { anim, open, openChild } from "../utils/animations";
import { mouseEvents } from "../utils/animations";

import Container from "./Container";

function NavBar({ updateMouseAnim }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container className="fixed left-1/2 top-0 z-40 -translate-x-1/2 bg-transparent backdrop-blur-sm">
            <nav className="flex w-full items-center justify-between py-20 text-black dark:text-white">
                <div {...mouseEvents(updateMouseAnim)}>
                    <h3 className="text-small">codecraft-sanju</h3>
                </div>
                <div {...mouseEvents(updateMouseAnim)} className="relative">
                    <div
                        onClick={() => setIsOpen((prev) => !prev)}
                        className={`menu ${isOpen === true ? "active" : ""} cursor-pointer`}
                    />
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                {...anim(open)}
                                className="links text-small capitalize"
                            >
                                <motion.div
                                    variants={openChild}
                                    className="cursor-auto"
                                >
                                    <NavLink
                                        to="/"
                                        onClick={() => setIsOpen(false)}
                                        className="cursor-pointer"
                                    >
                                        home
                                    </NavLink>
                                </motion.div>
                                <motion.div
                                    variants={openChild}
                                    className="cursor-auto"
                                >
                                    <NavLink
                                        to="/projects"
                                        onClick={() => setIsOpen(false)}
                                        className="cursor-pointer"
                                    >
                                        projects
                                    </NavLink>
                                </motion.div>
                                <motion.div
                                    variants={openChild}
                                    className="cursor-auto"
                                >
                                    <NavLink
                                        to="/contact"
                                        onClick={() => setIsOpen(false)}
                                        className="cursor-pointer"
                                    >
                                        contact
                                    </NavLink>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
        </Container>
    );
}

export default NavBar;
