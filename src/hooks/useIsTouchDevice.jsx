import { useEffect, useState } from "react";

function useIsTouchDevice() {
    const [isTouchDevice, setIsTouchDevice] = useState(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(hover: none)");

        const updateIsTouchDevice = (event) => {
            setIsTouchDevice(event.matches);
        };

        // Set the initial value
        setIsTouchDevice(mediaQuery.matches);

        // Listen for changes to the media query
        mediaQuery.addEventListener("change", updateIsTouchDevice);

        return () => {
            mediaQuery.removeEventListener("change", updateIsTouchDevice);
        };
    }, []);

    return isTouchDevice;
}

export { useIsTouchDevice };
