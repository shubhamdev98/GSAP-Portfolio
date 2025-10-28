import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react' // for arrow icon

const Experience: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null)

  const toggleDropdown = (id: number) => {
    setActiveId(activeId === id ? null : id)
  }

  const experiences = [
    {
      id: 1,
      company: 'Whitelotus Corporation Pvt. Ltd., Ahmedabad, Gujarat',
      position: 'Node.js Developer',
      duration: 'Sep 2023 — Present',
      description: [
        'Designed and implemented role-based admin systems, dashboards, and mobile features to enhance collaboration, user experience, and operational efficiency.',
        'Integrated Twilio and the Grafana stack (Grafana, Prometheus, Loki) to improve real-time communication, monitoring, and system scalability.',
        'Automated environment setups to streamline deployment and reduce operational overhead.',
      ],
      technologies: [
        'Node.js',
        'React.js',
        'Twilio',
        'Grafana',
        'Prometheus',
        'Loki',
        'MySQL',
        'MongoDB',
      ],
    },
    {
      id: 2,
      company: 'Nxgn Sports Interactive, Ahmedabad, Gujarat',
      position: 'Node.js Intern',
      duration: 'Jan 2023 — Jun 2023',
      description: [
        'Integrated third-party sports APIs to fetch real-time player data and live match scores.',
        'Implemented secure user authentication and session management.',
        'Developed a campaign tracking system with email monitoring capabilities to improve user engagement and reporting.',
      ],
      technologies: ['Node.js', 'Express.js', 'REST APIs', 'MySQL'],
    },
  ]

  return (
    <section className="min-h-screen bg-gray-100 text-black py-12 lg:py-32 overflow-x-hidden">
      <div className="main-container max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h3 className="mb-4 font-bold text-3xl md:text-4xl lg:text-5xl">Professional Journey</h3>
          <p className="text-lg lg:text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
            A timeline of my professional growth — showcasing responsibilities, achievements, and
            the tools that shaped my journey as a developer.
          </p>
        </div>

        {/* Experience Dropdowns */}
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`relative rounded-2xl border-2 border-gray-900 bg-white transition-all duration-300 overflow-hidden ${
                activeId === exp.id ? 'ring-purple-500' : ''
              }`}
            >
              {/* Header */}
              <button
                onClick={() => toggleDropdown(exp.id)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <div>
                  <h4 className="font-semibold text-xl text-gray-900">{exp.position}</h4>
                  <p className="text-gray-700 text-sm sm:text-base mt-1">{exp.company}</p>
                  <span className="text-gray-500 text-sm">{exp.duration}</span>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${
                    activeId === exp.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Dropdown Content */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  activeId === exp.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden px-6 pb-4">
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 text-sm">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 border-t border-gray-200 pt-4">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium bg-purple-50 border border-purple-200 text-purple-800 px-3 py-1.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
