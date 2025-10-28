import React, { useState } from 'react'
import GradientButton from './GradientButton'
import { ContactFormData } from '@/types'

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

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

  return (
    <div className="relative bg-white text-black min-h-screen flex flex-col justify-center items-center py-20 lg:py-28">
      {/* Heading */}
      <h4 className="max-w-4xl text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-center font-bold mb-8 font-heading">
        Get in touch for collaborations, projects, or freelance opportunities
      </h4>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col gap-4 p-8 bg-white">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
          required
        />

        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
          required
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          className="w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 transition resize-none"
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
  )
}

export default ContactForm
