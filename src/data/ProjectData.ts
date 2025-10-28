import { Project } from '@/types'
import formulaImg from '../assets/project/formula-one.png'
import pizzaImg from '../assets/project/pizza-delivery-app.png'
import reviewImg from '../assets/project/review-app.png'
import fantasyImg from '../assets/project/fentecy-sports.png'
import perfumeImg from '../assets/project/purfume-app.png'
import rideImg from '../assets/project/ride-sharing-app.png'
import eventImg from '../assets/project/event-app.png'

const projects: Project[] = [
  {
    id: 1,
    name: 'Review Application',
    description:
      'A web application that allows users to submit, view, and manage reviews and ratings for products, services, or businesses. Features include user authentication, search, filtering, and an optimized admin dashboard integrated with Grafana and Loki for monitoring and performance insights.',
    image: reviewImg,
    link: '/projects',
    technologies: ['Node.js', 'Express', 'MySQL', 'Vue.js', 'Grafana', 'Loki'],
    featured: true,
  },
  {
    id: 2,
    name: 'Fantasy Sports Management Platform',
    description:
      'A fantasy sports application where users create virtual teams, participate in live contests, and earn points based on real-time player performance using integrated sports APIs.',
    image: fantasyImg,
    link: '/projects',
    technologies: ['Node.js', 'Express', 'MySQL', 'Sports API'],
    featured: true,
  },
  {
    id: 3,
    name: 'Luxury Perfume E-Commerce Platform',
    description:
      'Developed a full-featured online perfume shopping platform with product filtering, cart management, and secure payment gateway integration. Implemented an admin panel for inventory and order management using Node.js and MySQL.',
    image: perfumeImg,
    link: '/projects',
    technologies: ['MERN Stack', 'MySQL', 'Stripe', 'Node.js', 'React'],
    featured: true,
  },
]

export default projects
