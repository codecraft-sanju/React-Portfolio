import { motion } from "framer-motion";

import { revealAnim } from "../utils/animations";

function Reveal({ children }) {
    return (
        <div className="relative mx-auto overflow-hidden">
            <motion.div
                className="absolute left-0 top-0 z-20 h-full w-full origin-left bg-black dark:bg-white"
                variants={revealAnim}
                initial="initial"
                animate="animate"
                exit="exit"
            />

            {children}
        </div>
    );
}

export default Reveal;
