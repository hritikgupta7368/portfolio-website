// useAnimationState.js
import { useState, useEffect } from "react";
import { isChildRoute } from "../utils/routeUtils";

export function useAnimationState() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const lastPath = sessionStorage.getItem("lastPath");
    const currentPath = window.location.pathname;

    if (currentPath === "/") {
      if (lastPath && !isChildRoute("/", lastPath)) {
        setShouldAnimate(true);
      } else {
        setShouldAnimate(false);
      }
    }

    sessionStorage.setItem("lastPath", currentPath);

    return () => {
      sessionStorage.setItem("lastPath", currentPath);
    };
  }, []);

  return shouldAnimate;
}
