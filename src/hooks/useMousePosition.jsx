import { useEffect, useState } from "react";

function useMousePosition() {
    const [mousePosition, setMousePosition] = useState([0, 0]);

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePos);

        function updateMousePos(e) {
            setMousePosition([e.clientX, e.clientY]);
        }

        return () => window.removeEventListener("mousemove", updateMousePos);
    }, []);

    return [...mousePosition];
}

export { useMousePosition };
