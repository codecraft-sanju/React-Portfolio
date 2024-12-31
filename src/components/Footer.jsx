import { Link } from "react-router-dom";
import { mouseEvents } from "../utils/animations";
import { useDarkMode } from "../contexts/DarkModeContexte";
import Container from "./Container";
import Svg from "./Svg";

function Footer({ updateMouseAnim }) {
    const { darkMode } = useDarkMode();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-[60px] text-center text-black dark:text-white">
            <Container className="space-y-20">
                <div className="space-y-10">
                    <div
                        {...mouseEvents(updateMouseAnim)}
                        className="flex items-center justify-center gap-10"
                    >
                        <a
                            className="cursor-pointer"
                            href="https://github.com/codecraft-sanju"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Svg
                                color={darkMode ? "#FEFAE0" : "#0D0701"}
                                type="github"
                                className="size-20 cursor-pointer"
                            />
                        </a>
                        <a
                            className="cursor-pointer"
                            href="https://www.instagram.com/sanjuuu_x18"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Svg
                                color={darkMode ? "#FEFAE0" : "#0D0701"}
                                type="instagram"
                                className="size-20 cursor-pointer"
                            />
                        </a>
                        <a
                            className="cursor-pointer"
                            href="mailto:sanjaychoudhury693@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Svg
                                color={darkMode ? "#FEFAE0" : "#0D0701"}
                                type="mail"
                                className="size-20 cursor-pointer"
                            />
                        </a>
                    </div>
                </div>
                <div {...mouseEvents(updateMouseAnim)} className="space-y-5">
                    <p className="text-small">
                        want to send a message from{" "}
                        <Link
                            to="/contact"
                            className="cursor-pointer underline"
                        >
                            here
                        </Link>
                        ?
                    </p>
                    <p className="pb-5 text-smaller lg:text-small">
                        &copy; {currentYear} codecraft-sanju Front-end Developer
                    </p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
