import React from 'react'
import projects from '../data/ProjectData'
import CTA from '../components/CTA'
import { Project } from '@/types'

const Projects: React.FC = () => {
  return (
    <>
      <div className="bg-white text-black">
        <div className="main-container py-28">
          <h2 className="text-6xl lg:text-[8vw] font-heading font-bold leading-[1] tracking-tight text-center">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8 lg:mt-16">
            {projects.map((project: Project) => (
              <a key={project.id} href={project.link} className="overflow-hidden flex flex-col">
                {/* Project Image */}
                <div className="group overflow-hidden h-full rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Project Name */}
                <span className="uppercase leading-[1.4] lg:text-2xl font-heading mt-4">
                  {project.name}
                </span>

                {/* Project Description */}
                {project.description && (
                  <p className="text-gray-600 mt-2 text-sm lg:text-base">{project.description}</p>
                )}

                {/* Technologies */}
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
      <CTA />
    </>
  )
}

export default Projects
