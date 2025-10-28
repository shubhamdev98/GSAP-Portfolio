import React from 'react'

const Education: React.FC = () => {
  const education = [
    {
      id: 1,
      institution: 'State University',
      degree: 'B.Sc. in Computer Science',
      duration: '2015 — 2019',
      details: 'Focus on web development, human-computer interaction and performance optimization.',
    },
  ]

  return (
    <section className="min-h-screen bg-pink-200 text-black py-12 lg:py-24">
      <div className="main-container">
        <div className="max-w-3xl">
          <h3 className="mb-3">Education</h3>
          <p className="text-lg lg:text-xl mb-6">
            Formal education that shaped my approach to software and design.
          </p>

          <div className="grid gap-4">
            {education.map((edu) => (
              <div key={edu.id} className="p-5 rounded-lg bg-gray-50 dark:bg-gray-900">
                <div className="flex items-center justify-between mb-1">
                  <div>
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <div className="text-sm text-gray-600">{edu.institution}</div>
                  </div>
                  <div className="text-sm text-gray-500">{edu.duration}</div>
                </div>
                <p className="text-sm text-gray-700">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
