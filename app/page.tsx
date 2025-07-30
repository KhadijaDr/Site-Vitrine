"use client"

import { useCallback } from 'react'
import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { ServicesSection } from '@/components/ServicesSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { BlogSection } from '@/components/BlogSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export default function TarikLanding() {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Calculer la position avec un offset pour le header
      const headerHeight = 80 // Hauteur approximative du header
      const elementPosition = element.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Header onNavigate={scrollToSection} />
      <HeroSection onNavigate={scrollToSection} />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <Footer onNavigate={scrollToSection} />
    </div>
  )
}
