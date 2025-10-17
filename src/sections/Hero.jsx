import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import GradientButton from "../components/GradientButton";
import profile from "../assets/profile.png";

const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const img = imageRef.current;
    const button = buttonRef.current;

    // Make the image slightly rounded (10%) and initially hidden
    gsap.set(img, {
      opacity: 0,
      scale: 0.6,
      borderRadius: "10%",
      clipPath: "inset(0 round 10%)",
    });

    // Cursor follow logic
    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(img, {
        x,
        y,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const handleMouseEnter = () => {
      gsap.to(img, { opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" });
    };

    const handleMouseLeave = () => {
      gsap.to(img, { opacity: 0, scale: 0.6, duration: 0.3, ease: "power2.in" });
    };

    // Button hover hide/show
    const handleButtonEnter = () => {
      gsap.to(img, {
        opacity: 0,
        scale: 0.4,
        duration: 0.3,
        ease: "power2.in",
      });
    };

    const handleButtonLeave = () => {
      gsap.to(img, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseenter", handleMouseEnter);
    hero.addEventListener("mouseleave", handleMouseLeave);
    button.addEventListener("mouseenter", handleButtonEnter);
    button.addEventListener("mouseleave", handleButtonLeave);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseenter", handleMouseEnter);
      hero.removeEventListener("mouseleave", handleMouseLeave);
      button.removeEventListener("mouseenter", handleButtonEnter);
      button.removeEventListener("mouseleave", handleButtonLeave);
    };
  }, []);

  return (
    <div ref={heroRef} className="relative overflow-hidden cursor-none">
      <div className="main-container flex flex-col lg:justify-center h-screen lg:py-12 items-start max-lg:pt-40">
        <h1 className="text-3xl lg:text-[3.2vw] uppercase font-heading font-semibold">
          Shubham Panchal
        </h1>
        <h2 className="text-6xl lg:text-[8vw] font-heading font-bold leading-[1] tracking-tight mt-3 mb-6 text-[#ffd439]">
          Full Stack Developer <br /> &{" "}
          <span className="text-stroke">Web Designer</span>
        </h2>

        {/* Button with ref for hover control */}
        <div ref={buttonRef}>
          <GradientButton
            text="Explore All"
            link="/projects"
            backgroundColor="transparent"
            textColor="#ffffff"
            borderColor="#ffffff"
            hoverFlairColor="#ffffff"
            hoverTextColor="#000000"
          />
        </div>
      </div>

      {/* Floating image following the cursor */}
      <img
        ref={imageRef}
        src={profile}
        alt="Cursor Follow"
        className="absolute top-0 left-0 w-32 h-32 pointer-events-none select-none object-cover"
        style={{
          transform: "translate(-50%, -50%)",
          borderRadius: "10%",
        }}
      />

      {/* Star SVG */}
      <div className="marquee-star1 star absolute -z-1 top-80 lg:top-32 right-[-35%] lg:right-[-12%] opacity-80">
        <svg
          className="h-[48vh] lg:h-[80vh]"
          width="100%"
          height="100%"
          viewBox="0 0 653 631"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M290.361 1.55611L333.686 284.91L333.88 286.179L334.595 285.114L496.712 43.7172L530.894 66.1542L354.53 298.39L353.719 299.458L355.031 299.182L644.761 238.164L651.694 276.116L359.086 321.398L357.759 321.603L358.897 322.315L605.849 476.828L581.885 510.336L344.939 341.783L343.894 341.039L344.16 342.294L403.733 622.683L363.139 630.092L319.819 346.737L319.626 345.469L318.911 346.534L156.783 587.928L122.522 565.048L298.964 333.261L299.777 332.192L298.463 332.469L8.73045 393.474L1.564 354.212L294.405 310.247L295.74 310.046L294.596 309.329L47.5646 154.375L71.6092 121.305L308.567 289.864L309.612 290.609L309.345 289.353L249.767 8.96559L290.361 1.55611Z"
            stroke="url(#paint0_linear_custom)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_custom"
              x1="4.77595"
              y1="374.593"
              x2="648.724"
              y2="257.056"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ffd439" />
              <stop offset="1" stopColor="#171717" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
