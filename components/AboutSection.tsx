"use client"

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'

const aboutData = {
  badge: 'Mon parcours',
  title: 'Une expertise forgée par l\'expérience et la passion',
  description: 'Responsable d\'agence avec plus de 10 ans d\'expérience dans la transformation digitale et le leadership stratégique. Ma mission : accompagner les dirigeants et leurs équipes vers l\'excellence opérationnelle.',
  highlights: [
    {
      icon: CheckCircle,
      title: 'Leadership Transformationnel',
      description: 'Développement d\'équipes performantes et mise en place de stratégies de croissance durable.',
      color: 'green',
    },
    {
      icon: CheckCircle,
      title: 'Innovation Financière',
      description: 'Expertise en fintech et transformation digitale des services financiers.',
      color: 'blue',
    },
    {
      icon: CheckCircle,
      title: 'Influence & Motivation',
      description: 'Créateur de contenu reconnu avec plus de 1M de vues, spécialisé en motivation professionnelle.',
      color: 'purple',
    },
  ],
  certifications: [
    { name: 'MBA Finance' },
    { name: 'Certified Leader' },
    { name: 'Digital Expert' },
    { name: 'Top Creator' },
  ],
  image: {
    src: '/images/tarik-portrait.png',
    alt: 'Tarik BEN LAKHDAR - CEO et Expert en Transformation Digitale',
  },
  achievement: {
    title: 'Taux de satisfaction',
    value: '98%',
    description: 'Satisfaction client',
    icon: TrendingUp,
  },
}

export function AboutSection() {
  return (
    <section id="apropos" className="py-16 bg-white" aria-labelledby="about-title">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 px-3 py-1 text-sm font-semibold rounded-full">
                {aboutData.badge}
              </Badge>
              <h2 id="about-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                {aboutData.title}
              </h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                {aboutData.description}
              </p>
            </div>

            <div className="space-y-4">
              {aboutData.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div 
                    className={cn(
                      'w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5',
                      {
                        'bg-green-100': highlight.color === 'green',
                        'bg-blue-100': highlight.color === 'blue',
                        'bg-purple-100': highlight.color === 'purple',
                      }
                    )}
                  >
                    <highlight.icon 
                      className={cn(
                        'w-3 h-3',
                        {
                          'text-green-600': highlight.color === 'green',
                          'text-blue-600': highlight.color === 'blue',
                          'text-purple-600': highlight.color === 'purple',
                        }
                      )} 
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1 text-sm md:text-base">{highlight.title}</h3>
                    <p className="text-slate-600 text-sm md:text-base">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2 pt-2">
              {aboutData.certifications.map((cert, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-slate-100 text-slate-700 px-2 py-1 text-xs font-medium"
                >
                  {cert.name}
                </Badge>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src={aboutData.image.src}
                alt={aboutData.image.alt}
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
              />
              {/* Achievement Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <aboutData.achievement.icon className="w-5 h-5 text-green-600" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900">{aboutData.achievement.value}</div>
                    <div className="text-xs text-slate-600">{aboutData.achievement.description}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 