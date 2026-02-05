'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaInstagram, FaYoutube, FaTiktok, FaLinkedin } from 'react-icons/fa'

export default function FooterSection() {
  const socialLinks = [
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaYoutube, href: '#', label: 'YouTube' },
    { icon: FaTiktok, href: '#', label: 'TikTok' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="relative bg-black border-t border-gray-900" id="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          {/* Left Side - Brand Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-gray-800 p-10 relative group hover:border-neon-green transition-all duration-500"
          >
            {/* Logo */}
            <div className="mb-8">
              <div className="relative inline-block">
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
                  RESONANCE
                </h3>
                <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-neon-green" />
              </div>
            </div>

            {/* Tagline */}
            <p className="text-sm md:text-base text-gray-400 mb-6 tracking-wider">
              Selection and Concentration
            </p>

            {/* RSNC */}
            <div className="text-2xl font-light text-gray-600">RSNC</div>

            {/* Hover Effect */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-neon-green scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </motion.div>

          {/* Right Side - Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-gray-800 p-10 hover:border-neon-green transition-all duration-500"
          >
            <h4 className="text-2xl font-bold mb-8">CONTACT</h4>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div>
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <a
                  href="mailto:contact@resonance.com"
                  className="text-lg hover:text-neon-green transition-colors"
                >
                  contact@resonance.com
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Website</p>
                <a
                  href="https://resonance.com"
                  className="text-lg hover:text-neon-green transition-colors"
                >
                  resonance.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-gray-500 mb-4">Follow Us</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, color: '#7CFF00' }}
                    className="text-2xl text-gray-600 hover:text-neon-green transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <button className="btn-primary text-center">
            Start a Project
          </button>
          <button className="btn-secondary text-center">
            View Case Studies
          </button>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-sm text-gray-600"
        >
          <p>© 2026 Resonance Company. All rights reserved.</p>
          <p className="mt-2">
            Influencer & Performance Marketing Agency
          </p>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent" />
    </footer>
  )
}
