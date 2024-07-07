"use client";
import gsap from "gsap";

const runAnimations = () => {
  const master = gsap.timeline();

  //set nav and footer initial state
  gsap.set("nav", {
    translateY: "-100%",
    opacity: 0,
  });
  gsap.set("footer", {
    translateY: "100%",
    opacity: 1,
  });

  // Preloader animation
  const preloaderAnimation = () => {
    return gsap
      .timeline()
      .to(".top_text", {
        duration: 1,
        opacity: 1,
        translateY: "-30px",
        ease: "power3.inOut",
      })
      .to(".bottom_text", {
        duration: 1,
        delay: 0.5,
        opacity: 1,
        translateY: "-30px",
        ease: "power3.inOut",
      })
      .to(".top_text ,.bottom_text", {
        duration: 1.5,
        rotate: "8deg",
        translate: "-800px -100px",
        opacity: 0,
        ease: "power3.inOut",
      })
      .to(".preloader", {
        duration: 0,
        css: { display: "none" },
      });
  };

  // NFT animation
  const nftAnimation = () => {
    return gsap
      .timeline()
      .to(".root", {
        duration: 0,
        display: "block",
      })

      .to(
        "nav",
        {
          duration: 2,
          translateY: "0",
          opacity: 1,
        },
        "trans_1"
      )
      .to(
        "footer",
        {
          duration: 2,
          translateY: "0",
          opacity: 1,
        },
        "trans_1"
      );
  };

  // Eclipse animation
  const eclipseAnimation = () => {
    return gsap.timeline().to(".container", {
      duration: 2,
      opacity: 1,
      ease: "power3.inOut",
    });
  };

  // Hero animation
  const heroAnimation = () => {
    return gsap
      .timeline()
      .to(
        ".top_heading",
        {
          duration: 1.5,
          translateY: "0",
          opacity: 1,
        },
        "trans_2"
      )
      .to(
        ".bottom_heading",
        {
          duration: 1.5,
          translateY: "0",
          opacity: 1,
        },
        "trans_2"
      );
  };

  // Chain animations sequentially
  master
    .add(preloaderAnimation())
    .add(nftAnimation())
    .add(eclipseAnimation())
    .add(heroAnimation());

  // Play the master timeline
  master.play();

  return master;
};

export { runAnimations };
