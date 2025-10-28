import React from 'react'

const Education: React.FC = () => {
  const education = [
    {
      id: 1,
      institution: 'Parul University, Vadodara',
      degree: 'Bachelor of Computer Science (BCA)',
      duration: '2019 — 2022',
      details:
        'Focused on software engineering, web development, database management, and user interface design. Built multiple academic projects demonstrating practical applications of modern web technologies.',
      subjects: ['JavaScript', 'Node.js', 'React', 'Database Management', 'Software Engineering'],
    },
    {
      id: 2,
      institution: 'Gujarat Secondary and Higher Secondary Education Board',
      degree: 'Higher Secondary Education (HSC - Science)',
      duration: '2017 — 2019',
      details:
        'Studied core science subjects with a focus on logical reasoning and mathematical foundations essential for computer science.',
      subjects: ['Physics', 'Mathematics', 'Chemistry', 'Computer Basics'],
    },
  ]

  return (
    <section className="min-h-screen bg-pink-200 text-black py-12 lg:py-32 overflow-x-hidden">
      <div className="main-container">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16">
            <h3 className="mb-4 font-bold text-3xl md:text-4xl lg:text-5xl">
              Educational Background
            </h3>
            <p className="text-lg lg:text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
              A snapshot of my academic journey — highlighting the institutions and coursework that
              built my foundation in technology.
            </p>
          </div>

          {/* Education Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="group relative h-full sm:min-h-[260px] min-h-[180px] border-2 border-gray-900 rounded-3xl p-6 sm:p-8 bg-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-gray-700 overflow-hidden"
              >
                {/* Background hover accent */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-100 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                <div className="flex flex-col h-full min-h-0">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div className="flex-1">
                        <h4 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2 leading-tight">
                          {edu.degree}
                        </h4>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                            {edu.institution}
                          </span>
                          <span className="text-gray-600">•</span>
                          <span className="text-sm font-medium text-gray-700 bg-pink-100 px-2 py-1 rounded-full">
                            {edu.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="max-h-[120px] overflow-y-auto overflow-x-hidden pr-2 custom-scrollbar">
                      <p className="text-base text-gray-700 leading-relaxed">{edu.details}</p>
                    </div>
                  </div>

                  {/* Subjects */}
                  <div className="mt-auto pt-4 border-t border-gray-300">
                    <div className="flex flex-wrap gap-2 max-h-[80px] overflow-y-auto overflow-x-hidden pr-2 custom-scrollbar">
                      {edu.subjects.map((subj) => (
                        <span
                          key={subj}
                          className="text-xs font-medium bg-white border border-gray-400 text-gray-800 px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200"
                        >
                          {subj}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Scrollbar */}
      <style jsx>{`
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

export default Education
