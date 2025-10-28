import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'

import GradientButton from '../components/GradientButton'
import projects from '../data/ProjectData'

import { Project } from '@/types'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Work: React.FC = () => {
  const workRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!projectsRef.current) {
        return
      }

      // Horizontal scroll
      const projectsWidth = projectsRef.current.scrollWidth
      const scrollDistance = projectsWidth - window.innerWidth

      gsap.to(projectsRef.current, {
        x: -scrollDistance,
        ease: 'linear',
        scrollTrigger: {
          trigger: workRef.current,
          start: 'center center',
          end: () => `+=${projectsWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1, // prevents flicker on fast scroll
          invalidateOnRefresh: true,
        },
      })
    },
    { scope: workRef },
  )

  return (
    <>
      <div
        ref={workRef}
        className="min-h-screen bg-green-300 text-black py-24 lg:py-40 overflow-hidden"
      >
        {/* Title Wrapper */}
        <div className="main-container pb-8 lg:pb-12 flex max-md:flex-col gap-6 justify-between items-start md:items-end">
          <div className="max-w-xl">
            <h3 className="mb-3">Selected Work</h3>
            <p className="text-lg lg:text-xl">
              A showcase of my selected projects—designed to inspire, engage, and deliver real
              results.
            </p>
          </div>
          <GradientButton
            text="Explore All"
            link="/projects"
            backgroundColor="transparent"
            textColor="#000000"
            borderColor="#000000"
            hoverFlairColor="#000000"
            hoverTextColor="#ffffff"
          />
        </div>
        <div ref={projectsRef}>
          {/* Projects */}
          <div className="flex gap-4 lg:gap-8 ms-4 lg:ms-[40%] mt-6">
            {projects.map((project: Project) => (
              <a
                key={project.id}
                href={project.link}
                className="relative rounded-2xl w-full min-w-[340px] lg:min-w-xl h-72 lg:h-96 block overflow-hidden group"
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Project Name */}
                <span className="absolute top-4 right-4 bg-black text-white text-sm lg:text-lg uppercase leading-[1.4] font-heading px-5 py-1 rounded-full">
                  {project.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Work
