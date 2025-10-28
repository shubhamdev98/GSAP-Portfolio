import React from 'react'

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      company: 'Acme Co.',
      position: 'Node.js Developer (Junior to Mid-level)',
      duration: '2022 — Present',
      description:
        'Building performant, accessible, and delightful user interfaces using React, TypeScript, and GSAP for advanced interactions. Led the development of multiple client projects and mentored junior developers.',
      technologies: [
        'React',
        'TypeScript',
        'GSAP',
        'Tailwind CSS',
        'Node.js',
        'Express',
        'MongoDB',
      ],
    },
    {
      id: 2,
      company: 'Pixel Studio',
      position: 'UI/UX Developer',
      duration: '2019 — 2022',
      description:
        'Worked closely with designers to ship pixel-perfect interfaces and interactive animations for product and marketing sites. Collaborated with cross-functional teams to deliver exceptional user experiences across web and mobile platforms.',
      technologies: [
        'JavaScript',
        'HTML5',
        'CSS3',
        'Figma',
        'GSAP',
        'React Native',
        'Adobe Creative Suite',
      ],
    },
  ]

  return (
    <section className="min-h-screen bg-orange-200 text-black py-12 lg:py-32 overflow-x-hidden">
      <div className="main-container">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16">
            <h3 className="mb-4 font-bold text-3xl md:text-4xl lg:text-5xl">
              Professional Journey
            </h3>
            <p className="text-lg lg:text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
              A timeline of my career progression — showcasing roles, responsibilities, and the
              value I've delivered across different organizations.
            </p>
          </div>

          {/* Experience cards with better spacing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="group relative h-full sm:min-h-[280px] min-h-[200px] border-2 border-gray-900 rounded-3xl p-6 sm:p-8 bg-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-gray-700 overflow-hidden"
              >
                {/* Background accent */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-100 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                {/* Card Content */}
                <div className="flex flex-col h-full min-h-0">
                  {/* Header with better spacing */}
                  <div className="mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div className="flex-1">
                        <h4 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2 leading-tight">
                          {exp.position}
                        </h4>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                            {exp.company}
                          </span>
                          <span className="text-gray-600">•</span>
                          <span className="text-sm font-medium text-gray-700 bg-orange-100 px-2 py-1 rounded-full">
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description with scroll if needed */}
                    <div className="max-h-[120px] overflow-y-auto overflow-x-hidden pr-2 custom-scrollbar">
                      <p className="text-base text-gray-700 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>

                  {/* Technologies section with better handling */}
                  <div className="mt-auto pt-4 border-t border-gray-300">
                    <div className="flex flex-wrap gap-2 max-h-[80px] overflow-y-auto overflow-x-hidden pr-2 custom-scrollbar">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium bg-white border border-gray-400 text-gray-800 px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200"
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

          {/* Additional call-to-action */}
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style>{`
        .custom-scrollbar {
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `}</style>
    </section>
  )
}

export default Experience
