import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import React, { useRef } from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Text fade effect
      SplitText.create('.about-text', {
        type: 'lines, chars',
        onSplit(self) {
          gsap.set(self.chars, { opacity: 0.25 }) // set initial opacity

          gsap.to(self.chars, {
            opacity: 1,
            stagger: 0.05,
            scrollTrigger: {
              trigger: aboutRef.current,
              start: 'top 70%',
              end: 'center center',
              scrub: 1,
            },
          })
        },
      })
    },
    { scope: aboutRef },
  )

  return (
    <>
      <div
        ref={aboutRef}
        className="h-screen bg-gray-200 rounded-tl-[40px] rounded-tr-[40px] relative z-10"
      >

        <div className="about-text main-container flex justify-center items-center h-full font-heading text-black text-2xl md:text-3xl xl:text-[40px] 2xl:text-5xl">
          I'm Shubham Panchal, a Full Stack Web Developer with 2.8 years of hands-on experience in
          building scalable applications and REST APIs using Node.js and React.js. My work focuses
          on creating efficient, user-centric, and high-performance web solutions. Skilled in
          microservices architecture, SQL & NoSQL databases, and modern frameworks like Nest.js and
          Next.js, I love combining clean design, smooth interactions, and functional precision to
          deliver impactful digital experiences.
        </div>
      </div>
    </>
  )
}

export default About
