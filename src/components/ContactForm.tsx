import React, { useState, useEffect, useRef } from 'react'
import GradientButton from './GradientButton'
import { gsap } from 'gsap'
import { ContactFormData } from '@/types'

interface Shape {
  type: 'circle' | 'triangle'
  size: number
  color: string
}

const shapes: Shape[] = [
  { type: 'circle', size: 10, color: '#FFC800FF' },
  { type: 'circle', size: 20, color: '#FFC800FF' },
  { type: 'circle', size: 30, color: '#FFC800FF' },
  { type: 'circle', size: 40, color: '#FFC800FF' },
  { type: 'circle', size: 50, color: '#FFC800FF' },
  { type: 'circle', size: 60, color: '#FFC800FF' },
  { type: 'circle', size: 70, color: '#FFC800FF' },
  { type: 'circle', size: 80, color: '#FFC800FF' },
  { type: 'circle', size: 90, color: '#FFC800FF' },
  { type: 'circle', size: 100, color: '#FFC800FF' },
]

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const shapesRef = useRef<(HTMLDivElement | null)[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Message sent!')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  useEffect(() => {
    // Animate shapes randomly floating
    shapesRef.current.forEach((shape) => {
      if (shape) {
        gsap.to(shape, {
          y: '+=50',
          x: '+=50',
          rotation: 360,
          duration: 1 + Math.random() * 10,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
    })
  }, [])

  return (
    <div className="relative bg-purple-400 text-black overflow-hidden min-h-screen">
      {/* Background shapes */}
      {shapes.map((shape, index) => {
        const style: React.CSSProperties = {
          width: shape.size,
          height: shape.size,
          backgroundColor: shape.color,
          position: 'absolute',
          top: `${Math.random() * 80}%`,
          left: `${Math.random() * 90}%`,
          opacity: 0.2,
          transformOrigin: 'center center',
          borderRadius: shape.type === 'circle' ? '50%' : '0%',
          clipPath: shape.type === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
        }
        return (
          <div
            key={index}
            style={style}
            ref={(el) => {
              shapesRef.current[index] = el
            }}
          />
        )
      })}

      {/* Form container */}
      <div className="relative main-container py-20 lg:py-28 flex flex-col justify-center items-center z-10">
        <h4 className="max-w-4xl text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-center font-bold mb-8 font-heading">
          Get in touch for collaborations, projects, or freelance opportunities
        </h4>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl flex flex-col gap-4 p-8 rounded-xl relative z-10"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 border-2 border-black rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-3 border-2 border-black rounded-lg"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full px-4 py-3 border-2 border-black rounded-lg"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 border-2 border-black rounded-lg"
            required
          />

          <div className="flex justify-center mt-4">
            <GradientButton
              text="Click to Submit"
              link="/projects"
              backgroundColor="transparent"
              textColor="#000000"
              borderColor="#000000"
              hoverFlairColor="#000000"
              hoverTextColor="#ffffff"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
