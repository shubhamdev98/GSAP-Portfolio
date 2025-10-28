// Global type definitions for the portfolio project

export interface Project {
  id: number
  name: string
  description?: string
  image: string
  link: string
  technologies?: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface Service {
  id: number
  title: string
  description: string
  icon?: string
}

export interface WorkExperience {
  id: number
  company: string
  position: string
  duration: string
  description: string
  technologies: string[]
}

export interface Skill {
  name: string
  level: number // 1-100
  category: 'frontend' | 'backend' | 'tools' | 'design'
}

export interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  content: string
  avatar?: string
  rating?: number
}

export interface Education {
  id: number
  institution: string
  degree: string
  duration: string
  details?: string
}
