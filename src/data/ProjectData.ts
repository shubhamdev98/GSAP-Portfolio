import { Project } from '@/types'

const projects: Project[] = [
  {
    id: 1,
    name: 'Landing Page',
    description: 'A modern landing page with clean design and smooth animations',
    image: 'https://img.freepik.com/premium-vector/landing-page-template_440410-494.jpg',
    link: '/project-one',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    featured: true,
  },
  {
    id: 2,
    name: 'Ecommerce Website',
    description: 'Full-featured e-commerce platform with shopping cart and payment integration',
    image:
      'https://img.freepik.com/premium-psd/flat-design-e-commerce-landing-page-template_23-2151219755.jpg',
    link: '/project-two',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    featured: true,
  },
  {
    id: 3,
    name: 'Mobile App UI',
    description: 'Travel booking app with intuitive user interface and smooth user experience',
    image:
      'https://img.freepik.com/free-vector/travel-booking-app-with-airplane-reservation_23-2148626981.jpg',
    link: '/project-three',
    technologies: ['React Native', 'TypeScript', 'Figma'],
    featured: false,
  },
  {
    id: 4,
    name: 'Brand Identity',
    description: 'Complete brand identity design including logo, color palette, and typography',
    image:
      'https://img.freepik.com/premium-vector/clean-professional-corporate-brand-identity-mockup-stationery-set_616632-4755.jpg',
    link: '/project-four',
    technologies: ['Adobe Illustrator', 'Photoshop', 'Figma'],
    featured: false,
  },
]

export default projects
