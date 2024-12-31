/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
            },
        },
        fontFamily: {
            body: ["Raleway"],
            title: ["Comfortaa"],
        },
        screens: {
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            fontSize: {
                xl: "100px",
                "2xl": "200px",
                small: "14px",
                smaller: "11px",
                smallest: "8px",
            },
            spacing: {
                5: "5px",
                10: "10px",
                15: "15px",
                20: "20px",
                30: "30px",
                35: "35px",
                40: "40px",
                50: "50px",
                60: "60px",
                65: "65px",
                90: "90px",
                120: "120px",
            },
            colors: {
                transparent: "transparent",
                black: "#0D0701",
                white: "#FEFAE0",
                brown: {
                    light: "#DDA15E",
                    dark: "#BC6C25",
                },
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
