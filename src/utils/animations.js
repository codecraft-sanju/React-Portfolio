export const anim = (variants) => {
    return {
        initial: "initial",
        animate: "animate",
        exit: "exit",
        variants,
    };
};

// Mouse animation
export const mouseEvents = (customFunction) => {
    return {
        onMouseEnter() {
            customFunction("in");
        },
        onMouseLeave() {
            customFunction("out");
        },
    };
};

// Header Component
export const expand = {
    initial: {
        height: 0,
    },
    animate: {
        height: "100%",
        transition: {
            duration: 2,
            ease: [0.68, -0.6, 0.32, 1.6],
            repeat: Infinity,
        },
    },
};

// Navbar Component
export const open = {
    initial: {
        width: 0,
        height: 0,
    },
    animate: {
        width: 170,
        height: 210,
        transition: {
            ease: [0.85, 0, 0.15, 1],
            duration: 0.7,
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    exit: {
        width: 0,
        height: 0,
        transition: {
            ease: [0.85, 0, 0.15, 1],
            duration: 0.7,
            staggerChildren: 0.1,
        },
    },
};

export const openChild = {
    initial: {
        x: "-30px",
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
    },
    exit: {
        x: "30px",
        opacity: 0,
    },
};

// Page transition
export const exitPage = {
    initial: {
        scaleY: 0,
    },
    animate: {
        scaleY: 0,
    },
    exit: {
        scaleY: 1,
        transition: {
            ease: [0.33, 1, 0.68, 1],
            duration: 0.6,
            delay: 0.5,
        },
    },
};

export const enterPage = {
    initial: {
        scaleY: 1,
    },
    animate: {
        scaleY: 0,
        transition: {
            ease: [0.33, 1, 0.68, 1],
            duration: 0.6,
            delay: 0.5,
        },
    },
};

// Reveal animation
export const revealAnim = {
    initial: {
        scaleX: 1,
    },
    animate: {
        scaleX: 0,
        transition: {
            // ease: [0.33, 1, 0.68, 1],
            ease: [0.85, 0, 0.15, 1],
            duration: 0.6,
        },
    },
    exit:{
        scaleX: 1,
        transition: {
            // ease: [0.33, 1, 0.68, 1],
            ease: [0.85, 0, 0.15, 1],
            duration: 0.6,
        },
    }
};