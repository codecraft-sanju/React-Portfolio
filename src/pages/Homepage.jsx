import { motion } from "framer-motion";

import { anim, enterPage } from "../utils/animations";

import About from "../components/About";
import Header from "../components/Header";
import PageTransition from "../components/PageTransition";
import Footer from "../components/Footer";

function Homepage({ updateMouseAnim }) {
    return (
        <PageTransition>
            <motion.div
                {...anim(enterPage)}
                className="pointer-events-none fixed left-0 top-0 z-50 h-screen w-screen origin-bottom bg-black dark:bg-white"
            />
            <div className="bg-white dark:bg-black">
                <Header updateMouseAnim={updateMouseAnim} />
                <About updateMouseAnim={updateMouseAnim} />
                <Footer updateMouseAnim={updateMouseAnim} />
            </div>
        </PageTransition>
    );
}

export default Homepage;
