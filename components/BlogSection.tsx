"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Eye, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

const blogData = [
  {
    id: '1',
    title: 'L\'avenir de la finance digitale',
    description: 'Comment les nouvelles technologies transforment le secteur financier et créent de nouvelles opportunités de croissance.',
    image: '/images/finance-digital.jpg',
    date: '15 Jan 2024',
    category: 'Finance',
    readTime: '5 min',
    featured: true,
    slug: 'avenir-finance-digitale',
    gradient: 'from-green-500 to-blue-600',
    icon: '💰',
  },
  {
    id: '2',
    title: 'Leadership à l\'ère du digital',
    description: 'Les compétences essentielles pour diriger une équipe dans un environnement technologique en constante évolution.',
    image: '/images/leadership-business.jpg',
    date: '10 Jan 2024',
    category: 'Leadership',
    readTime: '7 min',
    featured: false,
    slug: 'leadership-ere-digitale',
    gradient: 'from-purple-500 to-pink-600',
    icon: '👥',
  },
  {
    id: '3',
    title: 'Motivation et performance',
    description: 'Stratégies éprouvées pour maintenir l\'engagement et maximiser la performance des équipes modernes.',
    image: '/images/motivation-concept.jpg',
    date: '5 Jan 2024',
    category: 'Motivation',
    readTime: '4 min',
    featured: false,
    slug: 'motivation-performance',
    gradient: 'from-orange-500 to-red-600',
    icon: '🚀',
  },
  {
    id: '4',
    title: 'Innovation et transformation',
    description: 'Comment créer une culture d\'innovation et transformer votre entreprise pour l\'avenir.',
    image: '/images/innovation-transform.jpg',
    date: '3 Jan 2024',
    category: 'Innovation',
    readTime: '6 min',
    featured: false,
    slug: 'innovation-transformation',
    gradient: 'from-cyan-500 to-teal-600',
    icon: '💡',
  },
  {
    id: '5',
    title: 'Stratégie de croissance',
    description: 'Méthodes éprouvées pour développer votre entreprise et conquérir de nouveaux marchés.',
    image: '/images/growth-strategy.jpg',
    date: '1 Jan 2024',
    category: 'Stratégie',
    readTime: '8 min',
    featured: false,
    slug: 'strategie-croissance',
    gradient: 'from-yellow-500 to-orange-600',
    icon: '📈',
  },
  {
    id: '6',
    title: 'Digital Marketing avancé',
    description: 'Techniques modernes de marketing digital pour maximiser votre présence en ligne.',
    image: '/images/digital-marketing.jpg',
    date: '28 Dec 2023',
    category: 'Marketing',
    readTime: '9 min',
    featured: false,
    slug: 'digital-marketing-avance',
    gradient: 'from-pink-500 to-rose-600',
    icon: '🎯',
  },
  {
    id: '7',
    title: 'Gestion du changement',
    description: 'Guide complet pour accompagner votre équipe dans les transformations organisationnelles.',
    image: '/images/change-management.jpg',
    date: '25 Dec 2023',
    category: 'Management',
    readTime: '7 min',
    featured: false,
    slug: 'gestion-changement',
    gradient: 'from-indigo-500 to-purple-600',
    icon: '🔄',
  },
  {
    id: '8',
    title: 'Productivité et efficacité',
    description: 'Outils et méthodes pour optimiser votre productivité et celle de votre équipe.',
    image: '/images/productivity-tools.jpg',
    date: '22 Dec 2023',
    category: 'Productivité',
    readTime: '5 min',
    featured: false,
    slug: 'productivite-efficacite',
    gradient: 'from-emerald-500 to-green-600',
    icon: '⚡',
  },
  {
    id: '9',
    title: 'Culture d\'entreprise',
    description: 'Comment créer et maintenir une culture d\'entreprise forte et engageante.',
    image: '/images/company-culture.jpg',
    date: '20 Dec 2023',
    category: 'Culture',
    readTime: '6 min',
    featured: false,
    slug: 'culture-entreprise',
    gradient: 'from-violet-500 to-purple-600',
    icon: '🏢',
  },
]

export function BlogSection() {
  const [showAll, setShowAll] = useState(false)
  
  const displayedArticles = showAll ? blogData : blogData.slice(0, 3)

  return (
    <section id="blog" className="py-16 bg-slate-50" aria-labelledby="blog-title">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-indigo-100 text-indigo-800 px-3 py-1 text-sm font-semibold rounded-full">
            Insights & Réflexions
          </Badge>
          <h2 id="blog-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Les dernières tendances et stratégies
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Découvrez mes analyses et conseils pour naviguer dans l'économie digitale moderne
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedArticles.map((article, index) => (
            <Card
              key={article.id}
              className={`group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                article.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <div className={cn(
                  "w-full h-40 bg-gradient-to-br flex items-center justify-center relative",
                  article.gradient
                )}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10 text-white text-5xl opacity-90">
                    {article.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="absolute top-3 left-3 z-20">
                  <Badge className="bg-white/95 text-slate-700 font-medium text-xs">{article.category}</Badge>
                </div>
                <div className="absolute top-3 right-3 z-20 bg-white/95 rounded-full px-2 py-1 text-xs text-slate-700 font-medium">
                  {article.readTime}
                </div>
              </div>

              <div className="p-4">
                <div className="text-xs text-slate-500 mb-2">{article.date}</div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-600 mb-3 leading-relaxed text-sm">{article.description}</p>
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold text-sm">
                  Lire l'article
                  <ArrowRight className="ml-2 w-3 h-3" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white px-6 py-3 font-semibold rounded-xl bg-transparent"
          >
            {showAll ? (
              <>
                <ChevronUp className="mr-2 w-4 h-4" />
                Voir moins d'articles
              </>
            ) : (
              <>
                <Eye className="mr-2 w-4 h-4" />
                Voir tous les articles ({blogData.length})
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  )
} 