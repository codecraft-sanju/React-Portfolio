import { useState } from "react";

function useMouseAnimation() {
    const [mouseAnim, setMouseAnim] = useState("out");

    function updateMouseAnim(animation) {
        setMouseAnim(animation);
    }

    return { mouseAnim, updateMouseAnim };
}

export { useMouseAnimation };
