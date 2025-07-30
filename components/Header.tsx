"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useScrollPosition } from '@/hooks/useScrollAnimation'
import { cn } from '@/lib/utils'

const navigationItems = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

interface HeaderProps {
  onNavigate: (sectionId: string) => void
}

export function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isScrolled } = useScrollPosition()

  const handleNavigation = (href: string) => {
    const sectionId = href.replace('#', '')
    onNavigate(sectionId)
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-white/20'
          : 'bg-transparent'
      )}
      role="banner"
      aria-label="Navigation principale"
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 sm:space-x-4 group cursor-pointer" role="button" tabIndex={0}>
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg lg:shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                <span className="text-white font-black text-lg sm:text-xl lg:text-2xl" aria-label="Logo Tarik">T</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-black text-slate-900">Tarik BEN LAKHDAR</h1>
              <p className="text-xs sm:text-sm text-slate-600 font-semibold">CEO & Strategic Leader</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12" role="navigation" aria-label="Navigation principale">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.href)}
                className="relative text-slate-700 hover:text-slate-900 transition-all duration-300 font-semibold text-base xl:text-lg group"
                aria-label={`Aller à la section ${item.label}`}
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <Button
              onClick={() => handleNavigation('#contact')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 xl:px-8 py-3 xl:py-4 rounded-xl xl:rounded-2xl font-bold text-sm xl:text-lg shadow-lg xl:shadow-2xl hover:shadow-xl xl:hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              aria-label="Prendre contact"
            >
              Discutons
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-white/20 shadow-2xl"
            role="navigation"
            aria-label="Menu mobile"
          >
            <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
              <nav className="flex flex-col space-y-4 sm:space-y-6">
                {navigationItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavigation(item.href)}
                    className="text-left text-slate-700 hover:text-slate-900 transition-all duration-300 font-semibold text-lg sm:text-xl py-2 sm:py-3"
                    aria-label={`Aller à la section ${item.label}`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 sm:pt-6">
                  <Button
                    onClick={() => handleNavigation('#contact')}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl shadow-lg sm:shadow-2xl"
                    aria-label="Prendre contact"
                  >
                    Discutons
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 