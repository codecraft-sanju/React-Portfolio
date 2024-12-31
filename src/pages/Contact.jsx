import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useDarkMode } from "../contexts/DarkModeContexte";
import { anim, enterPage, mouseEvents } from "../utils/animations";
import Container from "../components/Container";
import PageTransition from "../components/PageTransition";
import NavBar from "../components/NavBar";
import Svg from "../components/Svg";

function Contact({ updateMouseAnim }) {
    const form = useRef(null);
    const { darkMode } = useDarkMode();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);
    const currentYear = new Date().getFullYear();

    function emptyStates() {
        setUsername("");
        setEmail("");
        setMessage("");
        setSending(false);
    }

    function sendEmail(e) {
        e.preventDefault();
        setSending(true);

        if (
            username.trim() === "" ||
            email.trim() === "" ||
            message.trim() === ""
        ) {
            alert("Please fill in all fields");
            emptyStates();
            return;
        }
        emailjs
            .sendForm(
                "service_t3yztyg",
                "template_23xy5nq",
                form.current,
                "CXO_7BtFH0n7tAUzR",
            )
            .then(
                (result) => {
                    emptyStates();
                    alert("Message sent successfully!");
                },
                (err) => alert(err),
            );
    }

    return (
        <PageTransition>
            <motion.div
                {...anim(enterPage)}
                className="pointer-events-none fixed left-0 top-0 z-50 h-screen w-screen origin-bottom bg-black dark:bg-white"
            />
            <main className="bg-white pt-[165px] dark:bg-black">
                <NavBar updateMouseAnim={updateMouseAnim} />
                <Container>
                    <section className="space-y-40 text-center text-black dark:text-white">
                        <div className="space-y-10">
                                <div
                                    {...mouseEvents(updateMouseAnim)}
                                    className="relative inline-block uppercase"
                                >
                                    <h1 className="relative z-10 text-[60px] font-light sm:text-[75px] lg:text-xl 2xl:text-2xl">
                                        contact
                                    </h1>
                                    <h1 className="absolute left-10 top-5 w-full text-[60px] font-light text-brown-light dark:text-brown-dark sm:text-[75px] lg:top-10 lg:text-xl 2xl:left-20  2xl:text-2xl">
                                        contact
                                    </h1>
                                </div>
                            <form
                                {...mouseEvents(updateMouseAnim)}
                                onSubmit={sendEmail}
                                className="form space-y-20"
                                id="contact-form"
                                ref={form}
                            >
                                <div className="space-y-5">
                                    <h4 className="text-small font-bold lg:font-bold">
                                        let's have a chat!
                                    </h4>
                                    <p className="mx-auto text-smaller leading-[180%] lg:text-small">
                                        I'm currently open for new
                                        opportunities.
                                    </p>
                                </div>
                                <div className="inputBox">
                                    <input
                                        value={username}
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                        className="inputText"
                                        type="text"
                                        name="user_name"
                                        required
                                    />
                                    <span>FULL NAME</span>
                                </div>
                                <div className="inputBox">
                                    <input
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        className="inputText"
                                        type="email"
                                        name="user_email"
                                        required
                                    />
                                    <span>EMAIL</span>
                                </div>
                                <div className="inputBox">
                                    <textarea
                                        value={message}
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                        className="inputText msgArea"
                                        name="user_message"
                                        required
                                    />
                                    <span>MESSAGE</span>
                                </div>
                                <input
                                    type="submit"
                                    value={sending ? "sending..." : "send"}
                                    className="submitBox"
                                />
                            </form>
                        </div>
                        <div className="space-y-20">
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
                            <div {...mouseEvents(updateMouseAnim)}>
                                <p className="pb-5 text-smaller lg:text-small">
                                    &copy; {currentYear} sanjay Front-end
                                    Developer
                                </p>
                            </div>
                        </div>
                    </section>
                </Container>
            </main>
        </PageTransition>
    );
}

export default Contact;
