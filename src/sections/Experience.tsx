import React from 'react'

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      company: 'Acme Co.',
      position: 'Node.js Developer (Junior to Mid-level)',
      duration: '2022 — Present',
      description:
        'Building performant, accessible, and delightful user interfaces using React, TypeScript, and GSAP for advanced interactions.',
      technologies: ['React', 'TypeScript', 'GSAP', 'Tailwind CSS'],
    },
    {
      id: 2,
      company: 'Pixel Studio',
      position: 'UI/UX Developer',
      duration: '2019 — 2022',
      description:
        'Worked closely with designers to ship pixel-perfect interfaces and interactive animations for product and marketing sites.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Figma', 'GSAP'],
    },
  ]

  return (
    <section className="min-h-screen bg-orange-200 text-black py-24 lg:py-40">
      <div className="main-container">
        <div className="max-w-4xl">
          {/* Section heading */}
          <h3 className="mb-3 font-semibold text-2xl md:text-3xl">Experience</h3>
          <p className="text-lg lg:text-xl mb-10 text-gray-800">
            A concise timeline of my professional journey — roles, companies, and the value I
            contributed.
          </p>

          {/* Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp) => (
              <div key={exp.id} className="border border-gray-900 rounded-2xl p-6 bg-transparent">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-lg">{exp.position}</h4>
                    <div className="text-sm text-gray-600">{exp.company}</div>
                  </div>
                  <div className="text-sm text-gray-500">{exp.duration}</div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed mb-4">{exp.description}</p>

                {/* Technologies section */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 border border-gray-400 text-gray-800 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
