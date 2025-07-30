"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Quote } from 'lucide-react'

const testimonialsData = [
  {
    name: 'Sarah Martinez',
    role: 'CEO, TechStart',
    content: 'Tarik a transformé notre approche du leadership. Grâce à son accompagnement, notre équipe a gagné 40% en productivité.',
    rating: 5,
  },
  {
    name: 'Ahmed Ben Ali',
    role: 'Directeur Général, FinanceCorpus',
    content: 'Son expertise en transformation digitale nous a permis de moderniser nos processus et d\'améliorer notre compétitivité.',
    rating: 5,
  },
  {
    name: 'Marie Dubois',
    role: 'RH Director, InnovateNow',
    content: 'Un véritable catalyseur de changement. Tarik sait motiver les équipes et créer une culture de performance.',
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white" aria-labelledby="testimonials-title">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-green-100 text-green-800 px-4 py-2 text-sm font-semibold rounded-full">
            Témoignages
          </Badge>
          <h2 id="testimonials-title" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ce que disent mes clients
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-slate-50 border-0 rounded-2xl p-6"
            >
              <div className="flex items-center mb-4" role="img" aria-label={`${testimonial.rating} étoiles sur 5`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" aria-hidden="true" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-slate-300 mb-4" aria-hidden="true" />
              <blockquote className="text-slate-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              <div>
                <div className="font-semibold text-slate-900">{testimonial.name}</div>
                <div className="text-sm text-slate-600">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 