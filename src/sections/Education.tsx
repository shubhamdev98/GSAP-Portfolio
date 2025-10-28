import React from 'react'

const Education: React.FC = () => {
  const education = [
    {
      id: 1,
      institution: 'LJ University, Ahmedabad',
      degree: "Master’s of Computer Application (MCA)",
      duration: 'Graduated: 2023',
      cgpa: 'CGPA: 6.2',
      details:
        'Focused on advanced topics in software engineering, database systems, and modern web technologies. Developed strong analytical and programming skills through academic projects and research work.',
      subjects: ['Software Engineering', 'Database Systems', 'Web Development', 'Cloud Computing', 'Data Structures'],
    },
    {
      id: 2,
      institution: 'Gujarat University, Ahmedabad',
      degree: 'Bachelor of Commerce (B.Com)',
      duration: 'Graduated: 2020',
      cgpa: 'CGPA: 6.0',
      details:
        'Built a solid foundation in business management, accounting principles, and economics, providing valuable insights into the intersection of technology and commerce.',
      subjects: ['Business Management', 'Accounting', 'Economics', 'Statistics'],
    },
  ]

  return (
    <section className="min-h-screen bg-gray-50 text-black py-12 lg:py-32 overflow-x-hidden">
      <div className="main-container">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16">
            <h3 className="mb-4 font-bold text-3xl md:text-4xl lg:text-5xl">
              Educational Background
            </h3>
            <p className="text-lg lg:text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
              A snapshot of my academic journey — highlighting the institutions and coursework that
              shaped my technical and analytical foundation.
            </p>
          </div>

          {/* Education Cards */}
          <div
            className={`${
              education.length > 1
                ? 'flex overflow-x-auto space-x-4 pb-4 snap-x snap-mandatory scroll-smooth lg:grid lg:grid-cols-2 lg:space-x-0 lg:gap-6 hide-scrollbar'
                : 'grid grid-cols-1'
            }`}
          >
            {education.map((edu) => (
              <div
                key={edu.id}
                className="group relative flex-shrink-0 w-[85%] sm:w-[60%] md:w-auto snap-center border-2 border-gray-900 rounded-3xl p-6 sm:p-8 overflow-hidden"
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
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-gray-700">
                          <span className="border px-2 py-1 rounded-full">{edu.duration}</span>
                          <span className="border px-2 py-1 rounded-full">{edu.cgpa}</span>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <p className="text-base text-gray-700 leading-relaxed">{edu.details}</p>
                  </div>

                  {/* Subjects */}
                  <div className="mt-auto pt-4 border-t border-gray-300">
                    <div className="flex flex-wrap gap-2">
                      {edu.subjects.map((subj) => (
                        <span
                          key={subj}
                          className="text-xs font-medium bg-white border border-gray-400 text-gray-800 px-3 py-1.5 rounded-full"
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

      {/* Custom Styles */}
      <style jsx>{`
        /* Hide scrollbar globally for horizontal scroll */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  )
}

export default Education
