"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Briefcase, Users, BarChart3, Target, Rocket, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

const servicesData = [
  {
    icon: Briefcase,
    title: 'Transformation Digitale',
    description: 'Accompagnement stratégique dans la digitalisation des processus et l\'optimisation des performances.',
    features: ['Audit digital', 'Stratégie tech', 'Change management'],
    color: 'blue',
  },
  {
    icon: Users,
    title: 'Leadership & Management',
    description: 'Développement des compétences managériales et création d\'équipes haute performance.',
    features: ['Team building', 'Coaching exécutif', 'Formation leadership'],
    color: 'green',
  },
  {
    icon: BarChart3,
    title: 'Innovation Financière',
    description: 'Expertise en fintech, services bancaires digitaux et solutions de paiement innovantes.',
    features: ['Fintech strategy', 'Digital banking', 'Payment solutions'],
    color: 'purple',
  },
  {
    icon: Target,
    title: 'Stratégie & Croissance',
    description: 'Élaboration de stratégies de croissance durable et d\'expansion sur de nouveaux marchés.',
    features: ['Business plan', 'Market expansion', 'ROI optimization'],
    color: 'amber',
  },
  {
    icon: Rocket,
    title: 'Motivation & Performance',
    description: 'Programmes de motivation et d\'engagement pour maximiser la performance des équipes.',
    features: ['Team motivation', 'Performance coaching', 'Culture change'],
    color: 'red',
  },
  {
    icon: Globe,
    title: 'Influence Digitale',
    description: 'Stratégies de personal branding et de création de contenu pour leaders et entreprises.',
    features: ['Content strategy', 'Personal branding', 'Social influence'],
    color: 'indigo',
  },
]

export function ServicesSection() {
  return (
    <section id="expertise" className="py-16 bg-slate-50" aria-labelledby="services-title">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-purple-100 text-purple-800 px-3 py-1 text-sm font-semibold rounded-full">
            Mes domaines d'expertise
          </Badge>
          <h2 id="services-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Des solutions sur mesure pour votre croissance
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Une approche holistique combinant leadership, innovation et performance pour transformer votre entreprise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <Card
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div 
                className={cn(
                  'w-12 h-12 rounded-xl flex items-center justify-center mb-4',
                  {
                    'bg-blue-100': service.color === 'blue',
                    'bg-green-100': service.color === 'green',
                    'bg-purple-100': service.color === 'purple',
                    'bg-amber-100': service.color === 'amber',
                    'bg-red-100': service.color === 'red',
                    'bg-indigo-100': service.color === 'indigo',
                  }
                )}
              >
                <service.icon 
                  className={cn(
                    'w-6 h-6',
                    {
                      'text-blue-600': service.color === 'blue',
                      'text-green-600': service.color === 'green',
                      'text-purple-600': service.color === 'purple',
                      'text-amber-600': service.color === 'amber',
                      'text-red-600': service.color === 'red',
                      'text-indigo-600': service.color === 'indigo',
                    }
                  )} 
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 