"use client"

import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Award, Rocket, Calendar, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'
import { useMultipleCounters } from '@/hooks/useCounterAnimation'

const heroData = {
  badge: {
    text: 'Top 50 Creators Worldwide Arabic',
    icon: Award,
  },
  title: 'Transformons votre vision en réalité',
  subtitle: 'Expert en transformation digitale et leadership stratégique',
  description: 'Expert en transformation digitale et leadership stratégique, j\'accompagne les entreprises vers l\'excellence opérationnelle et la croissance durable.',
  ctaButtons: {
    primary: {
      text: 'Découvrir mon approche',
      icon: Rocket,
      href: '#apropos',
    },
    secondary: {
      text: 'Planifier un échange',
      icon: Calendar,
      href: '#contact',
    },
  },
  statistics: [
    { value: 1000000, label: 'Vues générées' },
    { value: 25000, label: 'Professionnels inspirés' },
    { value: 500, label: 'Projets réalisés' },
  ],
  trustIndicators: ['FINTECH', 'STARTUP', 'CORPORATE'],
}

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  
  const { counters } = useMultipleCounters(
    {
      views: heroData.statistics[0].value,
      visitors: heroData.statistics[1].value,
      projects: heroData.statistics[2].value,
    },
    { duration: 2500, delay: 1000 }
  )

  const handleNavigation = (href: string) => {
    const sectionId = href.replace('#', '')
    onNavigate(sectionId)
  }

  return (
    <section 
      id="accueil" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden pt-20" 
      ref={heroRef}
      aria-labelledby="hero-title"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/20">
            <heroData.badge.icon className="w-5 h-5 text-amber-500" aria-hidden="true" />
            <span className="text-sm font-semibold text-slate-700">{heroData.badge.text}</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h1 
              id="hero-title"
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-slate-900 leading-none"
            >
              <span className="block">Transformons</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                votre vision
              </span>
              <span className="block">en réalité</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-slate-600 font-light max-w-3xl mx-auto leading-relaxed px-4">
              {heroData.description}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto py-8 px-4">
            {heroData.statistics.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 group-hover:text-blue-600 transition-colors duration-300 leading-none">
                  {counters[Object.keys(counters)[index]]?.toLocaleString() || '0'}+
                </div>
                <div className="text-xs md:text-sm lg:text-base text-slate-600 font-medium mt-2 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <Button
              onClick={() => handleNavigation(heroData.ctaButtons.primary.href)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl hover:shadow-xl sm:hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 w-full sm:w-auto"
              aria-label={heroData.ctaButtons.primary.text}
            >
              <heroData.ctaButtons.primary.icon className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              {heroData.ctaButtons.primary.text}
            </Button>
            <Button
              variant="outline"
              onClick={() => handleNavigation(heroData.ctaButtons.secondary.href)}
              className="border-2 sm:border-3 border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl sm:rounded-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm w-full sm:w-auto"
              aria-label={heroData.ctaButtons.secondary.text}
            >
              <heroData.ctaButtons.secondary.icon className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              {heroData.ctaButtons.secondary.text}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 sm:pt-12">
            <p className="text-sm sm:text-base text-slate-500 mb-4 sm:mb-6 font-medium">Ils me font confiance</p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 opacity-80 px-4">
              {heroData.trustIndicators.map((indicator, index) => (
                <div key={index} className="text-lg sm:text-xl lg:text-2xl font-black text-slate-400 hover:text-slate-600 transition-colors duration-300">
                  {indicator}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
} 