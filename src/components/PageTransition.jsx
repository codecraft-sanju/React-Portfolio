import { motion } from "framer-motion";
import { anim, exitPage } from "../utils/animations";

function PageTransition({ children }) {
    return (
        <>
            <motion.div
                {...anim(exitPage)}
                className="pointer-events-none fixed left-0 top-0 z-50 h-screen w-screen origin-top bg-black dark:bg-white"
            />
            {children}
        </>
    );
}

export default PageTransition;
