import React from 'react'
import CTA from '../components/CTA'
import { Project } from '@/types'

// ✅ Import all images properly
import pizzaImg from '../assets/project/pizza-delivery-app.png'
import reviewImg from '../assets/project/review-app.png'
import fantasyImg from '../assets/project/fentecy-sports.png'
import perfumeImg from '../assets/project/purfume-app.png'
import rideImg from '../assets/project/ride-sharing-app.png'
import eventImg from '../assets/project/event-app.png'
import formulaImg from '../assets/project/formula-one.png'

// === Projects Data (Based on Resume) ===
const projects: Project[] = [
  {
    id: 1,
    name: 'Online Pizza Delivery System',
    description:
      'A responsive online pizza ordering web app featuring order tracking, payment gateway, and admin dashboard for order management. Integrated Grafana and Loki for real-time monitoring and performance insights.',
    technologies: ['Node.js', 'Express', 'MySQL', 'MongoDB', 'React', 'Grafana', 'Loki'],
    image: pizzaImg,
    link: '#',
  },
  {
    id: 2,
    name: 'Review Application',
    description:
      'A web application that allows users to submit, view, and manage reviews and ratings for products, services, or businesses. Features include user authentication, search, filtering, and a real-time optimized admin dashboard integrated with Grafana and Loki for monitoring and performance insights.',
    technologies: ['Node.js', 'Express', 'MySQL', 'Vue.js', 'Grafana', 'Loki'],
    image: reviewImg,
    link: '#',
  },
  {
    id: 3,
    name: 'Fantasy Sports Management Platform',
    description:
      'A fantasy sports web app where users create virtual teams, join live contests, and earn points based on real-time player performance using integrated sports APIs.',
    technologies: ['Node.js', 'Express', 'MySQL', 'Sports API'],
    image: fantasyImg,
    link: '#',
  },
  {
    id: 4,
    name: 'Luxury Perfume E-Commerce Platform',
    description:
      'Developed a full-featured e-commerce platform for luxury perfumes with product filtering, cart management, secure payment gateway integration, and an admin panel for inventory and order management.',
    technologies: ['MERN Stack', 'MySQL', 'Stripe', 'Node.js', 'React'],
    image: perfumeImg,
    link: '#',
  },
  {
    id: 5,
    name: 'Ride-Sharing / On-Demand Service Web App',
    description:
      'Built a real-time ride-booking web app similar to Uber, with live location tracking using Google Maps API and Socket.IO. Implemented driver-user matching and JWT authentication.',
    technologies: ['Node.js', 'React', 'MongoDB', 'Socket.IO', 'Google Maps API'],
    image: rideImg,
    link: '#',
  },
  {
    id: 6,
    name: 'Online Event Ticketing Platform',
    description:
      'Created a dynamic event ticketing system that allows users to book, cancel, and view event tickets with QR-based validation and seat reservation functionality.',
    technologies: ['Node.js', 'Express', 'React.js', 'MongoDB'],
    image: eventImg,
    link: '#',
  },
  {
    id: 7,
    name: 'Real-Time Formula One Betting Platform',
    description:
      'Developed a Formula One betting platform based on microservices architecture using SQL, MongoDB, Redis, and RabbitMQ. Features include user authentication, third-party API integration, and a live leaderboard system.',
    technologies: [
      'Node.js',
      'React.js',
      'Microservices',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'RabbitMQ',
    ],
    image: formulaImg,
    link: '#',
  },
]

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
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="overflow-hidden flex flex-col"
              >
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
