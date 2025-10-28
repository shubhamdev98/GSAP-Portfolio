import React from 'react'

const Services: React.FC = () => {
  return (
    <>
      {/* Title Wrapper */}
      <div className="bg-black text-white pt-12 lg:pt-20">
        <div className="main-container pb-8 lg:pb-12">
          <h3>Services in Detail</h3>
        </div>
      </div>

      {/* Services List */}
      <div className="relative">
        {/* 01 - Backend Development */}
        <div className="bg-black text-white pt-16 lg:pt-20 pb-[40rem] sticky top-2">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
            {/* Left side */}
            <div className="flex gap-6 lg:gap-8">
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">
                01
              </span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                Backend <br /> Development
              </h2>
            </div>

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                Building scalable and secure REST APIs using Node.js, Express.js, and Nest.js.
                Experienced in microservices architecture, database design, and real-time
                communication with technologies like RabbitMQ, Redis, and Socket.IO — ensuring
                efficient and high-performing backend systems.
              </p>
            </div>
          </div>
        </div>

        {/* 02 - Frontend Development */}
        <div className="bg-gray-700 text-white pt-16 lg:pt-20 pb-[23rem] sticky top-1/3">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
            {/* Left side */}
            <div className="flex gap-6 lg:gap-8">
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">
                02
              </span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                Frontend <br /> Development
              </h2>
            </div>

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                Creating responsive, user-centric interfaces with React.js, Next.js, and modern UI
                libraries like Shadcn UI. Focused on clean layouts, smooth animations, and seamless
                user experiences — transforming ideas into functional and visually appealing
                products.
              </p>
            </div>
          </div>
        </div>

        {/* 03 - Database & DevOps */}
        <div className="bg-purple-800 text-white py-16 lg:py-20 sticky top-2/3">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
            {/* Left side */}
            <div className="flex gap-6 lg:gap-8">
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">
                03
              </span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                Database <br /> & DevOps
              </h2>
            </div>

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                Proficient in both SQL and NoSQL databases including MySQL, MongoDB, and
                PostgreSQL. Skilled in using Docker, CI/CD, and Grafana for performance monitoring
                and deployment automation — ensuring reliable, scalable, and maintainable systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
