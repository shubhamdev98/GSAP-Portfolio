import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Experience from '../sections/Experience'
import Education from '../sections/Education'
import Services from '../sections/Services'
import Work from '../sections/Work'
import Marquee from '../sections/Marquee'
import CTA from '../components/CTA'
import ContactForm from '../components/ContactForm'

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Services />
      <Work />
      <Marquee />
      <ContactForm />
      <CTA />
    </div>
  )
}

export default Home
