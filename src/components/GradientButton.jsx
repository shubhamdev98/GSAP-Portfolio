import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const GradientButton = ({
  text = "Click Me",
  link = "#",
  backgroundColor = "transparent",
  textColor = "#ffffff",
  borderColor = "#ffffff",
  hoverFlairColor = "#ffffff",
  hoverTextColor = "#000000",
}) => {
  const buttonRef = useRef(null);
  const flairRef = useRef(null);
  const labelRef = useRef(null);
  const xSet = useRef(null);
  const ySet = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const flair = flairRef.current;
    const label = labelRef.current;

    xSet.current = gsap.quickSetter(flair, "xPercent");
    ySet.current = gsap.quickSetter(flair, "yPercent");

    const getXY = (e) => {
      const { left, top, width, height } = button.getBoundingClientRect();
      const mapRange = gsap.utils.mapRange;
      const clamp = gsap.utils.clamp;

      const xTransformer = gsap.utils.pipe(mapRange(0, width, 0, 100), clamp(0, 100));
      const yTransformer = gsap.utils.pipe(mapRange(0, height, 0, 100), clamp(0, 100));

      return {
        x: xTransformer(e.clientX - left),
        y: yTransformer(e.clientY - top),
      };
    };

    const handleMouseEnter = (e) => {
      const { x, y } = getXY(e);
      xSet.current(x);
      ySet.current(y);

      gsap.to(flair, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });

      // Change text color to hoverTextColor
      gsap.to(label, {
        color: hoverTextColor,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = (e) => {
      const { x, y } = getXY(e);
      gsap.killTweensOf(flair);

      gsap.to(flair, {
        xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
        yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
        scale: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      // Reset text color to default
      gsap.to(label, {
        color: textColor,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseMove = (e) => {
      const { x, y } = getXY(e);
      gsap.to(flair, {
        xPercent: x,
        yPercent: y,
        duration: 0.4,
        ease: "power2",
      });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);
    button.addEventListener("mousemove", handleMouseMove);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      button.removeEventListener("mousemove", handleMouseMove);
    };
  }, [textColor, hoverTextColor]);

  return (
    <a
      href={link}
      ref={buttonRef}
      className="relative inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold overflow-hidden transition-colors duration-200"
      style={{
        backgroundColor,
        color: textColor,
        border: `2px solid ${borderColor}`,
      }}
    >
      {/* Flair animation circle */}
      <span
        ref={flairRef}
        className="absolute inset-0 rounded-full pointer-events-none scale-0"
      >
        <span
          className="absolute top-0 left-0 w-[170%] aspect-square rounded-full transform -translate-x-1/2 -translate-y-1/2"
          style={{ backgroundColor: hoverFlairColor }}
        ></span>
      </span>

      {/* Button text */}
      <span ref={labelRef} className="relative z-10 font-heading">
        {text}
      </span>
    </a>
  );
};

export default GradientButton;
