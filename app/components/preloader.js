"use client";
import "../styles/preloader.css";
import { useEffect } from "react";
import { runAnimations } from "../animations/preloader_animation";
import { useAnimationState } from "../hooks/animate-hook";

const Preloader = () => {
  const shouldAnimate = useAnimationState();
  useEffect(() => {
    if (shouldAnimate) {
      runAnimations();
    }
  }, [shouldAnimate]);
  return (
    <main className="preloader">
      <div className="circle">
        <div className="top_text">Hello,</div>
        <div className="bottom_text">world</div>
      </div>
    </main>
  );
};

export default Preloader;
