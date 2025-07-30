"use client"

import Link from 'next/link'
import { ExternalLink, Heart } from 'lucide-react'

const navigationItems = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

interface FooterProps {
  onNavigate: (sectionId: string) => void
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const handleNavigation = (href: string) => {
    const sectionId = href.replace('#', '')
    onNavigate(sectionId)
  }

  return (
    <footer className="bg-slate-900 text-white py-16" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-lg" aria-label="Logo Tarik">T</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Tarik BEN LAKHDAR</h3>
                <p className="text-slate-400 text-sm">CEO & Strategic Leader</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Expert en transformation digitale et leadership stratégique. Ensemble, créons l'avenir de votre
              entreprise.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label={`Aller à la section ${item.label}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-slate-400">
              <li>Transformation Digitale</li>
              <li>Leadership Coaching</li>
              <li>Innovation Financière</li>
              <li>Stratégie de Croissance</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} Tarik BEN LAKHDAR. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
              Mentions légales
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 